"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

export type ContactField = "name" | "email" | "message";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_LIMIT = 2000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;

/* Best-effort throttle. Serverless instances each keep their own map, so this
   is layer one; the honeypot and length limits are the other layers. */
const recentSubmissions = new Map<string, number[]>();

const isRateLimited = (key: string) => {
  const now = Date.now();
  const recent = (recentSubmissions.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    recentSubmissions.set(key, recent);
    return true;
  }

  recent.push(now);
  recentSubmissions.set(key, recent);

  if (recentSubmissions.size > 500) {
    for (const [entryKey, timestamps] of recentSubmissions) {
      if (!timestamps.some((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS)) {
        recentSubmissions.delete(entryKey);
      }
    }
  }

  return false;
};

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("company") ?? "").trim();

  /* Bots fill every field they find. Pretend it worked and drop it. */
  if (honeypot) {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const fieldErrors: Partial<Record<ContactField, string>> = {};

  if (name.length < 2 || name.length > 100) {
    fieldErrors.name = "Please enter your name (2-100 characters).";
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (message.length < 10) {
    fieldErrors.message = "Please write at least 10 characters.";
  } else if (message.length > MESSAGE_LIMIT) {
    fieldErrors.message = `Please keep your message under ${MESSAGE_LIMIT} characters.`;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const requestHeaders = await headers();
  const forwardedFor = requestHeaders.get("x-forwarded-for");
  const clientIp =
    forwardedFor?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(clientIp)) {
    return {
      status: "error",
      message: "Too many messages in a short time. Please try again in a minute.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set.");
    return {
      status: "error",
      message:
        "The message service is not configured yet. Please email me directly instead.",
    };
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "minhajul.mohit@gmail.com";
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Contact form: Resend rejected the message.", error);
      return {
        status: "error",
        message:
          "Something went wrong while sending your message. Please try again or email me directly.",
      };
    }
  } catch (error) {
    console.error("Contact form: unexpected send failure.", error);
    return {
      status: "error",
      message:
        "Something went wrong while sending your message. Please try again or email me directly.",
    };
  }

  return {
    status: "success",
    message: "Thanks for reaching out! I'll reply to your email soon.",
  };
}

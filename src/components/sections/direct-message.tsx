"use client";

import {
  useActionState,
  useState,
  type ChangeEvent,
} from "react";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import {
  sendContactMessage,
  type ContactFormState,
} from "@/app/actions/send-message";

const initialState: ContactFormState = { status: "idle", message: "" };

const emptyValues = { name: "", email: "", message: "" };

const inputClass =
  "contact-input w-full rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-heading placeholder:text-muted transition-colors hover:border-accent/30 focus:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-base";

const labelClass =
  "mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted";

const DirectMessage = () => {
  const [values, setValues] = useState(emptyValues);
  const [state, formAction, pending] = useActionState(
    async (previousState: ContactFormState, formData: FormData) => {
      const result = await sendContactMessage(previousState, formData);

      /* Clear the fields only when the message actually went out. */
      if (result.status === "success") {
        setValues(emptyValues);
      }

      return result;
    },
    initialState,
  );

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
          <FaPaperPlane aria-hidden="true" className="size-4" />
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-heading">Direct Message</h3>
          <p className="mt-1 text-sm leading-6 text-muted">
            Send a message straight from here. It lands in my inbox, and I reply
            to your email.
          </p>
        </div>
      </div>

      <form action={formAction} className="mt-5 space-y-4">
        {/* Honeypot: hidden from people, tempting for bots. */}
        <div aria-hidden="true" className="hidden">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
              placeholder="Your name"
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(state.fieldErrors?.name)}
              aria-describedby={
                state.fieldErrors?.name ? "contact-name-error" : undefined
              }
              className={inputClass}
            />
            {state.fieldErrors?.name && (
              <p
                id="contact-name-error"
                className="mt-2 text-xs text-red-500"
              >
                {state.fieldErrors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              placeholder="you@gmail.com"
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(state.fieldErrors?.email)}
              aria-describedby={
                state.fieldErrors?.email ? "contact-email-error" : undefined
              }
              className={inputClass}
            />
            {state.fieldErrors?.email && (
              <p
                id="contact-email-error"
                className="mt-2 text-xs text-red-500"
              >
                {state.fieldErrors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            maxLength={2000}
            rows={5}
            placeholder="Tell me about your project or idea..."
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(state.fieldErrors?.message)}
            aria-describedby={
              state.fieldErrors?.message ? "contact-message-error" : undefined
            }
            className={`${inputClass} min-h-32 resize-y`}
          />
          {state.fieldErrors?.message && (
            <p id="contact-message-error" className="mt-2 text-xs text-red-500">
              {state.fieldErrors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-accent btn-gradient-cyber btn-gradient-dracula btn-gradient-light px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hi focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <FaPaperPlane aria-hidden="true" className="size-3.5" />
          {pending ? "Sending..." : "Send Message"}
        </button>

        <p
          role="status"
          aria-live="polite"
          className={`min-h-5 text-sm ${
            state.status === "success" ? "text-accent" : "text-red-500"
          }`}
        >
          {state.status === "idle" ? "" : state.message}
        </p>
      </form>

      <p className="mt-auto border-t border-line pt-4 text-xs leading-6 text-muted">
        Prefer chat?{" "}
        <a
          href="https://wa.me/8801906104529"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-accent-2 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2"
        >
          <FaWhatsapp aria-hidden="true" className="size-3.5" />
          Message me on WhatsApp
        </a>
        . Your email is only used to reply.
      </p>
    </div>
  );
};

export default DirectMessage;

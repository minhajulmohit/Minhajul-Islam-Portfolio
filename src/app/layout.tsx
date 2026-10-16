import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingParticles from "@/components/floatingparticles";
import DevPet from "@/components/DevPet";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Minhajul Islam Mohit | Full Stack Web Developer",
    template: "%s | Minhajul Islam Mohit",
  },
  description:
    "Portfolio of Minhajul Islam Mohit, a Full Stack Web Developer building modern, responsive web applications with React, Next.js, and TypeScript.",
  icons: {
    icon: "/asset/cropped_circle_image.png",
    apple: "/asset/cropped_circle_image.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 flex flex-col">
        <FloatingParticles />
        <DevPet />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

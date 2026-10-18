import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import FloatingParticles from "@/components/floatingparticles";
import DevPet from "@/components/DevPet";
import ThemeProvider from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Minhajul Islam Mohit | Full Stack Web Developer",
    template: "%s | Minhajul Islam Mohit",
  },
  description:
    "Portfolio of Minhajul Islam Mohit, a Full Stack Web Developer building modern, responsive web applications with React, Next.js, and TypeScript.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark-neon"
      suppressHydrationWarning
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink flex flex-col">
        <ThemeProvider>
          <FloatingParticles />
          <DevPet />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

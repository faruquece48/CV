import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faruque Abdullah — Researcher & Educator",
  description: "The academic website of Faruque Abdullah: profile, curriculum vitae, publications and contact information.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

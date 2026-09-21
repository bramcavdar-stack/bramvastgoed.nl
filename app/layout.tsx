import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bram Vastgoed — Ruimte om thuis te komen",
  description: "Premium vastgoed in Rotterdam en omgeving.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
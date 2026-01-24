import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glamour Style | Exclusive Women's Hair Artistry",
  description: "Experience excellence in luxury hair styling. Secure online booking, professional color, premium afro hair care, and braids. Buy now, pay later with Klarna or Afterpay.",
  keywords: "luxury hair salon, women's hair artistry, professional color, premium braids, online hair booking, flexible payments hairstylist",
  authors: [{ name: "Glamour Style Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

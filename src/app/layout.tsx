import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

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
      <body className={`${inter.variable} ${outfit.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

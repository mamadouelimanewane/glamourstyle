import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Style Glamour | Art Capillaire Féminin Exclusif",
  description: "Découvrez l'excellence de la coiffure de luxe. Réservation en ligne sécurisée, coloration professionnelle, soins afro premium et tresses. Payez plus tard avec Klarna ou Afterpay.",
  keywords: "salon de coiffure luxe, art capillaire féminin, coloration professionnelle, tresses premium, réservation coiffeur en ligne, paiement flexible coiffeur",
  authors: [{ name: "Équipe Style Glamour" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

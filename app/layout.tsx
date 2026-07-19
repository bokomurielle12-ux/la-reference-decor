import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LA RÉFÉRENCE COIFFURE ET DÉCOR",
  description: "Décoration intérieure, extérieure et événementielle au Bénin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}


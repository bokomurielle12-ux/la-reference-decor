import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LA RÉFÉRENCE COIFFURE & DÉCOR",
  description:
    "Décoration intérieure, extérieure, événementielle et location d'objets de décoration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}

      </body>

    </html>
  );
}
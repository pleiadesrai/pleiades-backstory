import type { Metadata } from "next";
import { Exo_2, Inter } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  weight: ['700', '800'],
  subsets: ['latin'],
  variable: '--font-heading',
});

const inter = Inter({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: "Pleiades's Backstory",
  description: "The adventurous origin story of the Pleiades team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo2.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}

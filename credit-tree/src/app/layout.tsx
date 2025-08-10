import type { Metadata } from "next";
import { Pacifico, Pavanam, Paytone_One } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

const pavanam = Pavanam({
  weight: "400",
  variable: "--font-pavanam",
  subsets: ["latin"],
});

const paytone = Paytone_One({
  weight: "400",
  variable: "--font-paytone",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CreditTree",
  description: "Grow your credit score",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

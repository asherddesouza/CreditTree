import type { Metadata } from "next";
import { Pacifico, Pavanam, Paytone_One } from "next/font/google";
import "./globals.css";

export const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
});

export const pavanam = Pavanam({
  weight: "400",
  variable: "--font-pavanam",
});

export const paytone = Paytone_One({
  weight: "400",
  variable: "--font-paytone",
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

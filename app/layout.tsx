import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biancaffe Bangladesh Menu",
  description: "Experience an Authentic and Flavourful Italian Food Fiesta with our exclusive menu! Biancaffé is Inspired by centuries-old traditional Italian recipes.",
  openGraph: {
    title: "Biancaffe Bangladesh Menu",
    description: "Experience an Authentic and Flavourful Italian Food Fiesta with our exclusive menu! Biancaffé is Inspired by centuries-old traditional Italian recipes.",
    url: "https://menu.biancaffe-bd.com",
    siteName: "Biancaffe Bangladesh Menu",
    images: [
      {
        url: "public/images/og-mirsaige.png",
        width: 1200,
        height: 420,
      },
    ],
    locale: "en-US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={`${inter.className} min-h-screen`} style={{backgroundColor: "#0f1d2a"}}>
      <NavBar />
        {children}
        </body>
    </html>
  );
}

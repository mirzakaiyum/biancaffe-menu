import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biancaffe Menu",
  description: "Menu App for Biancaffe",
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

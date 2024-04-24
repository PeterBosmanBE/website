import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <title>Portfolio - Peter Bosman</title>
      <meta name="description" content="Portfolio 'n stuff"/>
      <meta property="og:title" content="Peter Bosman"/>
      <meta property="og:description" content="Portfolio 'n stuff"/>
      <meta property="og:url" content="https://peterbosman.be"/>
      <meta name="twitter:title" content="Peter Bosman"/>
      <meta name="twitter:description" content="Portfolio 'n stuff"/>
      <meta name="twitter:url" content="https://peterbosman.be"/>
      <meta name="twitter:card" content="summary"/>
    </head>
    <body className={inter.className}>{children}</body>
    </html>
  );
}

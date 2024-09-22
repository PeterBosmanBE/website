import { Inter } from "next/font/google";
import "./globals.css";

import MainLayout from "@/app/components/MainLayout";
import {Suspense} from "react";
import {white} from "next/dist/lib/picocolors";
import Loading from "@/app/loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <title>Peter Bosman</title>
      <meta name="description" content="Portfolio 'n stuff"/>
      <meta property="og:title" content="Peter Bosman"/>
      <meta property="og:description" content="Portfolio 'n stuff"/>
      <meta property="og:url" content="https://peterbosman.be"/>
      <meta name="twitter:title" content="Peter Bosman"/>
      <meta name="twitter:description" content="Portfolio 'n stuff"/>
      <meta name="twitter:url" content="https://peterbosman.be"/>
      <meta name="twitter:card" content="summary"/>
    </head>
    <body className={inter.className}>
    <div className="flex flex-col h-screen py-3 w-full">
      <Suspense fallback={<Loading/>}>
        <MainLayout>
          {children}
        </MainLayout>
      </Suspense>
    </div>
    </body>
    </html>
  );
}

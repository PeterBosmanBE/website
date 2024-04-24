import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

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
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow items-center justify-center">{children}</div>
      <Footer />
    </div>
    </body>
    </html>
  );
}

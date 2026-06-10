import { Inter } from "next/font/google";
import "@/src/styles/globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: "Peter Bosman",
  description: "Portfolio 'n stuff",
  openGraph: {
    title: "Peter Bosman",
    description: "Portfolio 'n stuff",
    siteName: "Peter Bosman",
    url: process.env.NEXT_PUBLIC_BASE_URL!,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Bosman",
    description: "Portfolio 'n stuff",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-grow items-center justify-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

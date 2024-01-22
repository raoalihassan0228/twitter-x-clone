// layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home / X",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Other meta tags can be added here */}
        <link rel="icon" href="https://abs.twimg.com/favicons/twitter.3.ico" />
        {/* You can also add other icon sizes if needed */}
        {/* ... other favicon links ... */}
        {/* Add other head elements as needed */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

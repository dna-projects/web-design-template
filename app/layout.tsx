import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DNA Labs Web Designs",
  description: "Professional web design services by DNA Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

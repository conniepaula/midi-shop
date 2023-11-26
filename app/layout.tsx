import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "./globals.css";
import Header from "./components/Header";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MIDI Controller Shop",
  description:
    "Elevate your music making experience with our range of premium MIDI controllers, designed to meet the needs of music producers and enthusiasts. Discover our innovative features, precision engineering, and seamless integration for an unparalleled creative journey. Shop now and take your music to the next level.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-start justify-center h-screen bg-slate-700">
        <Header />
        {children}
      </body>
    </html>
  );
}

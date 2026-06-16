import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Projeto Tático // Comunidade FPS Competitivo",
  description:
    "Treine. Coordene. Domine. Comunidade tática de jogos FPS competitivos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${shareTechMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-black text-pt-green selection:bg-pt-green selection:text-black">
        <div aria-hidden className="crt-overlay" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

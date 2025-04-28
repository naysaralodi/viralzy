import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viralzy",
  description: "Automatize suas ideias. Amplifique sua presença.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <Header />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}

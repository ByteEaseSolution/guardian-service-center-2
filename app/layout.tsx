import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guardian Service Center — Premium Large-Format Digital Printing in Ahmedabad",
  description:
    "Since 2001, Guardian Service Center has delivered premium large-format digital printing in Ahmedabad — vinyl, wallpaper, stickers, canvas, signage, and banners on 3M, Avery, LG Hausys, and Technova materials with HP Latex technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="bg-white text-brand-black font-sans">
        <Header />
        <main className="min-h-[90vh]">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

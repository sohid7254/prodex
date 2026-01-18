import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Prodex | Premium E-commerce Experience",
    description: "Shop the best products with ease and style.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${outfit.variable} antialiased font-sans flex flex-col min-h-screen`}>
                <Navbar />
                <main className="flex-grow pt-16">{children}</main>
                <Footer />
            </body>
        </html>
    );
}

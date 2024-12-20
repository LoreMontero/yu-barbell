import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import yuBarbellLogo from "./public/yuBarbellLogo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yu Barbell",
  description: "Convert Your Lifts",
  icons: [
    {
      url: `${yuBarbellLogo}`,
      sizes: "32x32",
      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <Navbar />
        <main className="flex flex-col justify-center text-text">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter, Iceberg } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const iceberg = Iceberg({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 p-5 z-50 bg-transparent flex justify-between w-full mb-8">
          <h1 className={`text-3xl  ${iceberg.className}`}>
            <span className="bg-primary rounded-full p-1">YU</span> BARBELL
          </h1>
          <Navbar />
        </header>
        <main className="flex flex-col justify-center bg-background text-text">
          {children}
        </main>
      </body>
    </html>
  );
}

"use client";

import { Iceberg } from "next/font/google";
import { useState, useEffect } from "react";

// const inter = Inter({ subsets: ["latin"] });
const iceberg = Iceberg({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <header
      className={`fixed top-0 p-5 z-50 flex justify-between w-full mb-8 transition-all duration-300 ${
        isScrolled ? "bg-accent" : "bg-transparent"
      }`}
    >
      <h1
        className={`text-2xl sm:text-3xl text-stroke-black ${iceberg.className}`}
      >
        <span className="bg-primary rounded-full p-1">YU</span> BARBELL
      </h1>
      <nav className="flex h-full"></nav>
    </header>
  );
};

export default Navbar;

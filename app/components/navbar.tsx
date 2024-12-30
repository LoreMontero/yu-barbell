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
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Set background color change
      setIsScrolled(currentScrollPos > 0);

      // Handle navbar visibility
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-0 p-5 z-50 flex justify-between w-full mb-8 transition-all duration-300 ${
        isScrolled ? "bg-background" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
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

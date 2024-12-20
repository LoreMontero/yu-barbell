import { Iceberg } from "next/font/google";

const iceberg = Iceberg({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-accent text-text rounded-3xl p-5 mt-auto mx-5">
      <h1
        className={`text-2xl sm:text-3xl text-stroke-black ${iceberg.className} mb-5`}
      >
        <span className="bg-primary rounded-full p-1">YU</span> BARBELL
      </h1>
      <p className="text-xs sm:text-sm text-text-muted">
        Copyright © 2024 Yu Barbell. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

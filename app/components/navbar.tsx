import { Iceberg } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const iceberg = Iceberg({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <header className="fixed top-0 p-5 z-50 bg-transparent flex justify-between w-full mb-8">
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

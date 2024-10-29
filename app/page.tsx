import { Iceberg } from "next/font/google";
import LiftConverter from "./ui/LiftConverter";

const iceberg = Iceberg({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <section className="bg-yubarbellBG bg-cover bg-no-repeat min-h-[150vh] w-screen flex flex-col items-center justify-evenly">
      <h1 className={`text-5xl ${iceberg.className} text-center`}>
        Convert <br />
        <span className="text-red-600">Your</span> Lifts
      </h1>
      <LiftConverter />
    </section>
  );
}

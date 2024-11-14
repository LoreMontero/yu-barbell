import { Iceberg } from "next/font/google";
import LiftConverter from "./components/LiftConverter";

const iceberg = Iceberg({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <section className="bg-yubarbell bg-cover bg-no-repeat min-h-[150vh] w-screen flex flex-col items-center">
      <h1 className={`text-5xl ${iceberg.className} text-center mt-24`}>
        Convert <br />
        <span className="text-primary">Your</span> Lifts
      </h1>
      <LiftConverter />
    </section>
  );
}

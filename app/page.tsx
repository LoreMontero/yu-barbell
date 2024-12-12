import { Iceberg } from "next/font/google";
import LiftConverter from "./components/LiftConverter";

const iceberg = Iceberg({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <section className="bg-gradient-to-t from-background from-0% via-bgGradient via-42% to-background to-100% min-h-[100vh] w-screen flex flex-col items-center">
      <h1
        className={`text-7xl text-stroke-black ${iceberg.className} text-center mt-24 leading-[6rem] `}
      >
        CONVERT <br />
        <span className="text-primary">YOUR</span>
        <span> LIFTS</span>
      </h1>
      <LiftConverter />
    </section>
  );
}

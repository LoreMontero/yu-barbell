import { ArrowUpDown } from "lucide-react";
import Image from "next/image";
import Vector from "../public/Vector.svg";

const LiftConverter = () => {
  return (
    <div className="flex flex-col bg-accent rounded-3xl p-3 space-y-4 mt-8">
      <form className="flex flex-col">
        <div className="flex justify-between items-center bg-background p-4 rounded-2xl mb-2">
          <div className="flex flex-col flex-grow">
            <p className="text-xs">LBS</p>
            <input
              type="number"
              // value={}
              placeholder="0"
              // onChange={}
              className="bg-background text-4xl outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </div>
          <button className="flex flex-grow justify-center items-center bg-black rounded-2xl py-2 px-2 text-xs transition-transform ease-in-out duration-300 hover:scale-105">
            Front Squat
            <Image src={Vector} alt="Vector" className="ml-2" />
          </button>
        </div>

        <button className="flex justify-center items-center bg-background p-2 w-fit mx-auto rounded-full my-2 transition-transform ease-in-out duration-300 hover:scale-105">
          <ArrowUpDown className="w-5 h-5 " />
        </button>

        <div className="flex justify-between items-center bg-background p-4 rounded-2xl mb-2">
          <div className="flex flex-col flex-grow">
            <p className="text-xs">LBS</p>
            <input
              type="number"
              placeholder="0"
              // value={}
              // onChange={}
              className="bg-background text-4xl outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </div>
          <button className="flex flex-grow justify-center items-center bg-black rounded-2xl py-2 px-2 text-xs transition-transform ease-in-out duration-300 hover:scale-105">
            Competition Squat
            <Image src={Vector} alt="Vector" className="ml-2" />
          </button>
        </div>
        <button className="w-full bg-secondary hover:bg-primary py-6 rounded-2xl transition-transform ease-in-out duration-300 hover:scale-105">
          Convert
        </button>
      </form>
    </div>
  );
};

export default LiftConverter;

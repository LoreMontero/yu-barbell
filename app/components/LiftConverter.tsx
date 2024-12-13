"use client";

import { ArrowUpDown } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";
// import Image from "next/image";
// import Vector from "../public/Vector.svg";

export interface Lift {
  name: string;
  conversion: number;
}

const lifts: Lift[] = [
  {
    name: "Competition Squat",
    conversion: 1,
  },
  {
    name: "Deadlift",
    conversion: 1,
  },
  {
    name: "Bench Press",
    conversion: 1,
  },
  {
    name: "Paused Squat",
    conversion: 1,
  },
  {
    name: "Paused Deadlift",
    conversion: 1,
  },
  {
    name: "Larson Press",
    conversion: 1,
  },
  {
    name: "Goblet Squat",
    conversion: 1,
  },
  {
    name: "Jefferson Deadlift",
    conversion: 1,
  },
  {
    name: "Duffalo Press",
    conversion: 1,
  },
];

const LiftConverter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col bg-accent rounded-3xl p-3 space-y-4 mt-8">
      <div className="flex">
        <button
          onClick={openModal}
          className="flex flex-grow justify-center items-center bg-background rounded-2xl py-4 px-2 text-xs transition-transform ease-in-out duration-300 hover:scale-105"
        >
          Select a lift
        </button>

        <button className="flex justify-center items-center bg-primary p-4 w-fit rounded-full transition-transform ease-in-out duration-300 hover:scale-105 border-black border">
          <ArrowUpDown className="w-5 h-5 rotate-90 text-black" />
        </button>
        <button className="flex flex-grow justify-center items-center bg-background rounded-2xl py-4 px-2 text-xs transition-transform ease-in-out duration-300 hover:scale-105 ">
          Select a lift
        </button>
      </div>
      <Modal open={isModalOpen} closeModal={closeModal} options={lifts} />
      <form className="flex flex-col">
        <div className="flex justify-between items-center bg-background p-4 rounded-2xl mb-2">
          <div className="flex flex-col flex-grow">
            <p className="text-xs">LBS</p>
            <input
              type="number"
              // value={}
              placeholder="0"
              // onChange={}
              className="bg-background text-4xl text-text placeholder-text outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LiftConverter;

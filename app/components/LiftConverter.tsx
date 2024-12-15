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
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4">
          <button
            onClick={openModal}
            className="flex justify-center items-center bg-background rounded-2xl py-4 px-6 text-xs transition-transform ease-in-out duration-300 hover:scale-105"
          >
            Select a lift
          </button>

          <form className="flex justify-between items-center bg-background p-4 rounded-2xl flex-grow">
            <div className="flex flex-row flex-grow items-center justify-between">
              <div className="flex items-center gap-4">
                <p className="text-xs w-8">From</p>
                <input
                  type="number"
                  placeholder="0"
                  className="bg-background text-4xl text-text placeholder-placeholder outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
              </div>
              <p className="text-xs">LBS</p>
            </div>
          </form>
        </div>

        <button className="flex justify-center items-center bg-primary p-4 w-fit rounded-full transition-transform ease-in-out duration-300 hover:scale-105 border-black border mx-auto">
          <ArrowUpDown className="w-5 h-5 text-black" />
        </button>

        <div className="flex space-x-4">
          <button
            onClick={openModal}
            className="flex justify-center items-center bg-background rounded-2xl py-4 px-6 text-xs transition-transform ease-in-out duration-300 hover:scale-105"
          >
            Select a lift
          </button>
          <div className="flex justify-between items-center bg-background p-4 rounded-2xl flex-grow">
            <div className="flex flex-row flex-grow items-center justify-between">
              <div className="flex items-center gap-4">
                <p className="text-xs w-8">To</p>
                <div className="text-4xl text-placeholder">0</div>
              </div>
              <p className="text-xs">LBS</p>
            </div>
          </div>
        </div>
      </div>
      <Modal open={isModalOpen} closeModal={closeModal} options={lifts} />
    </div>
  );
};

export default LiftConverter;

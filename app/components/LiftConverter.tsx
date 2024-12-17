"use client";

import { ArrowUpDown } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";
import { mainLifts, Variations } from "../lib/data";

const LiftConverter = () => {
  const [selectedMainLift, setSelectedMainLift] = useState("");
  const [selectedVariationLift, setSelectedVariationLift] = useState("");
  const [isMainModalOpen, setIsMainModalOpen] = useState(false);
  const [isVariationModalOpen, setIsVariationModalOpen] = useState(false);
  const [value, setValue] = useState(0);
  const openMainModal = () => setIsMainModalOpen(true);
  const closeMainModal = () => setIsMainModalOpen(false);
  const openVariationModal = () => setIsVariationModalOpen(true);
  const closeVariationModal = () => setIsVariationModalOpen(false);

  return (
    <div className="flex flex-col bg-accent rounded-3xl p-3 space-y-4 mt-8">
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4">
          <button
            onClick={openMainModal}
            className="flex justify-center items-center bg-background rounded-2xl py-4 px-6 text-xs transition-transform ease-in-out duration-300 hover:scale-105"
          >
            {selectedMainLift?.name ? selectedMainLift.name : "Select a lift"}{" "}
            {/* TODO: Fix type errors */}
          </button>

          <form className="flex justify-between items-center bg-background p-4 rounded-2xl flex-grow">
            <div className="flex flex-row flex-grow items-center justify-between">
              <div className="flex items-center gap-4">
                <p className="text-xs w-8">From</p>
                <input
                  type="number"
                  placeholder="0"
                  className="bg-background text-4xl text-text placeholder-placeholder outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  onChange={(e) => setValue(Number(e.target.value))}
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
            onClick={openVariationModal}
            className="flex justify-center items-center bg-background rounded-2xl py-4 px-6 text-xs transition-transform ease-in-out duration-300 hover:scale-105"
          >
            {selectedVariationLift?.name
              ? selectedVariationLift.name
              : "Select a lift"}
          </button>
          <div className="flex justify-between items-center bg-background p-4 rounded-2xl flex-grow">
            <div className="flex flex-row flex-grow items-center justify-between">
              <div className="flex items-center gap-4">
                <p className="text-xs w-8">To</p>
                <div className="text-4xl text-placeholder">
                  {selectedVariationLift!
                    ? value * selectedVariationLift.converstion
                    : 0}
                </div>
              </div>
              <p className="text-xs">LBS</p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={isMainModalOpen}
        closeModal={closeMainModal}
        options={mainLifts}
        setSelectedLift={setSelectedMainLift}
      />
      <Modal
        open={isVariationModalOpen}
        closeModal={closeVariationModal}
        options={Variations}
        setSelectedLift={setSelectedVariationLift}
      />
    </div>
  );
};

export default LiftConverter;

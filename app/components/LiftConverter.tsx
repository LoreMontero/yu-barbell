"use client";

import { ArrowUpDown } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";
import { mainLifts, variations } from "../lib/data";

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

  const filteredVariations = variations.filter(
    (lift) => lift.variation === selectedMainLift.variation,
  );

  return (
    <div className="flex flex-col bg-accent rounded-3xl p-3 space-y-4 mt-8 mx-4 sm:mx-auto sm:max-w-2xl">
      <div className="flex flex-col space-y-4">
        <div className="grid grid-cols-[1fr,auto] gap-4">
          <form className="flex justify-between items-center bg-background p-4 rounded-2xl w-full">
            <div className="flex flex-row flex-grow items-center justify-between">
              <div className="flex items-center gap-4">
                <p className="text-xs w-7">From</p>
                <input
                  type="number"
                  placeholder="0"
                  className="bg-background w-24 sm:w-32 text-4xl text-text placeholder-placeholder outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  onChange={(e) => setValue(Number(e.target.value))}
                />
              </div>
              <p className="text-xs">LBS</p>
            </div>
          </form>
          <button
            onClick={openMainModal}
            className="flex justify-center items-center bg-background rounded-2xl py-4 px-6 text-xs transition-transform ease-in-out duration-300 hover:scale-105 text-wrap whitespace-nowrap w-28 sm:w-32"
          >
            {selectedMainLift?.name ? selectedMainLift.name : "Select a lift"}
            {/* TODO: Fix type errors */}
          </button>
        </div>

        <button className="flex justify-center items-center bg-primary p-4 w-fit rounded-full transition-transform ease-in-out duration-300 hover:scale-105 border-black border mx-auto">
          <ArrowUpDown className="w-5 h-5 text-black" />
        </button>

        <div className="grid grid-cols-[1fr,auto] gap-4">
          <div className="flex justify-between items-center bg-background p-4 rounded-2xl w-full">
            <div className="flex flex-row flex-grow items-center justify-between">
              <div className="flex items-center gap-4">
                <p className="text-xs w-7">To</p>
                <div className="text-4xl text-placeholder">
                  {selectedVariationLift!
                    ? value * selectedVariationLift.converstion
                    : 0}
                </div>
              </div>
              <p className="text-xs">LBS</p>
            </div>
          </div>
          <button
            onClick={openVariationModal}
            className="flex justify-center items-center bg-background rounded-2xl py-4 px-6 text-xs transition-transform ease-in-out duration-300 hover:scale-105 text-wrap whitespace-nowrap w-28 sm:w-32"
          >
            {selectedVariationLift?.name
              ? selectedVariationLift.name
              : "Select a lift"}
          </button>
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
        options={filteredVariations}
        setSelectedLift={setSelectedVariationLift}
      />
    </div>
  );
};

export default LiftConverter;

"use client";
import { Lift } from "../lib/interfaces";
import ReactDOM from "react-dom";
import { XIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

interface ModalProps {
  options: Lift[];
  open: boolean;
  closeModal: () => void;
  setSelectedLift: (lift: Lift | null) => void;
}

const Modal = ({ options, open, closeModal, setSelectedLift }: ModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleLiftSelect = (option: Lift) => () => {
    setSelectedLift(option);
    closeModal();
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      onClick={closeModal}
      className="fixed inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-10 "
    >
      <dialog
        className="relative flex flex-col items-center justify-center bg-background rounded-3xl w-full max-w-md h-auto p-4 text-text"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center w-full mb-4">
          <h2 className="text-xl font-bold">Select a lift</h2>
          <button
            onClick={closeModal}
            className="flex items-center justify-center p-1 hover:bg-backgroundAccent rounded-xl transition-transform ease-in-out duration-300 hover:scale-105"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="relative w-full">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-placeholder w-5 h-5" />
          <input
            type="text"
            className="w-full h-full bg-backgroundAccent rounded-lg pl-10 pr-4 py-2 text-text placeholder:text-placeholder outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            placeholder="Search lifts"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <h3 className="flex justify-start w-full text-lg font-bold text-placeholder my-4">
          Lifts
        </h3>
        {filteredOptions.length === 0 ? (
          <p className="text-center text-text">No lifts found</p>
        ) : (
          filteredOptions.map((option: Lift) => (
            <button
              onClick={handleLiftSelect(option)}
              key={option.name}
              className="flex items-center justify-start w-full h-full bg-background hover:bg-primary rounded-lg px-4 py-2 text-text"
            >
              {option.name}
            </button>
          ))
        )}
      </dialog>
    </div>,
    document.body,
  );
};

export default Modal;

"use client";
import { Lift } from "../lib/interfaces";
import ReactDOM from "react-dom";
import { XIcon } from "lucide-react";
import { useState } from "react";

interface ModalProps {
  options: Lift[];
  open: boolean;
  closeModal: () => void;
  setSelectedLift: (lift: Lift) => void;
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
            className="flex items-center justify-center p-1 hover:bg-primary rounded-xl"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <input
          type="text"
          className="w-full h-full bg-background rounded-lg px-4 py-2 text-text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
              className="flex items-center justify-start w-full h-full bg-background hover:bg-placeholder rounded-lg px-4 py-2 text-text"
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

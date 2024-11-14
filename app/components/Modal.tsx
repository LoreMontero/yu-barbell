import { Lift } from "./LiftConverter";
import ReactDOM from "react-dom";

interface ModalProps {
  options: Lift[];
  open: boolean;
  closeModal: () => void;
}

const Modal = ({ options, open, closeModal }: ModalProps) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div
      onClick={closeModal}
      className="fixed inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-10 "
    >
      <dialog
        className="relative flex flex-col items-center justify-center bg-background rounded-lg w-full max-w-md p-3 text-text"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Select a lift</h2>
        {options.map((option: Lift) => (
          <button
            onClick={closeModal}
            key={option.name}
            className="flex-col items-center justify-center w-full h-full bg-background hover:bg-accent rounded-lg p-2 text-text"
          >
            {option.name}
          </button>
        ))}
      </dialog>
    </div>,
    document.body,
  );
};

export default Modal;

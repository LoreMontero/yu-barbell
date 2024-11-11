import { useState } from "react";

interface ModalProps {
  options: string[];
  onSelect: (option: string) => void;
}

const Modal = ({ options, onSelect }: ModalProps) => {
  return <dialog className="bg-background">{}</dialog>;
};

export default Modal;

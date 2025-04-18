import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (data = null) => {
    setIsOpen(true);
    setModalData(data);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
  };

  return { isOpen, openModal, closeModal, modalData };
};

export default useModal;

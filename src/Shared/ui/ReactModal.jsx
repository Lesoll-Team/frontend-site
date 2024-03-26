import Modal from "react-modal";
import { useState } from "react";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
};
const ReactModal = ({ children, setIsModalOpen, openBtn }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div role="button" onClick={() => setIsModalOpen(true)}>
        {openBtn}
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        ariaHideApp={false}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    </>
  );
};

export default ReactModal;

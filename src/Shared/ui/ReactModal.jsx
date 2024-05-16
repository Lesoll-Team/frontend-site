import Modal from "react-modal";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaXmark } from "react-icons/fa6";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "6px",
    zIndex: "10000",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-transparent background
    zIndex: 10000, // ensure the modal is on top of everything
  },
};
const ReactModal = ({
  children,
  setModalIsOpen,
  modalIsOpen,
  closeBtn = true,
}) => {
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const language = useSelector((state) => state.GlobalState.languageIs);

  useEffect(() => {
    // Prevent scrolling when the SideMenu component is mounted
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      // Enable scrolling when the SideMenu component is unmounted
      document.body.style.overflow = "auto";
    };
  }, [modalIsOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      ariaHideApp={false}
      onRequestClose={() => {
        setModalIsOpen(false);
      }}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div dir={language ? "rtl" : "ltr"} className="relative">
        {closeBtn && (
          <button
            onClick={closeModal}
            className={`absolute -top-1 z-10 ${language ? "left-2 md:left-0" : "right-2 md:right-0"} `}
          >
            <FaXmark />
          </button>
        )}
        {children}
      </div>
    </Modal>
  );
};

export default ReactModal;

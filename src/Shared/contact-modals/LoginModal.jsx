import ReactModal from "../ui/ReactModal";
import { useSelector } from "react-redux";
import { FaXmark } from "react-icons/fa6";
import LoginModalForm from "./LoginModalForm";

const LoginModal = ({ isOpen, setIsOpen }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <>
      <ReactModal
        modalIsOpen={isOpen}
        setModalIsOpen={setIsOpen}
        closeBtn={false}
      >
        <div className="w-screen h-[95vh] px-3 sm:h-fit py-2 relative overflow-auto  sm:w-[80vw] md:w-[500px] space-y-4">
          <div className="flex justify-between items-center px-1">
            <h1>{language ? "تسجيل الدخول" : "Sign In"}</h1>
            <button onClick={() => setIsOpen(false)}>
              <FaXmark />
            </button>
          </div>{" "}
          <LoginModalForm setIsOpen={setIsOpen} />
        </div>
      </ReactModal>
    </>
  );
};

export default LoginModal;

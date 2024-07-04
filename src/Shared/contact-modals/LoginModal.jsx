import ReactModal from "../ui/ReactModal";
import { FaXmark } from "react-icons/fa6";
import LoginModalForm from "./LoginModalForm";
import { getLangBoolean } from "@/utils/getLangBoolean";

const LoginModal = ({ isOpen, setIsOpen }) => {
  const language = getLangBoolean();
  return (
    <>
      <ReactModal
        modalIsOpen={isOpen}
        setModalIsOpen={setIsOpen}
        closeBtn={false}
      >
        <div className="w-screen h-[95dvh] px-3 sm:h-fit py-2 pt-5 md:pt-2 relative overflow-auto  sm:w-[80vw] md:w-[500px] space-y-4">
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

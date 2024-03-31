import SignUp from "./SignUp";
import ReactModal from "../ui/ReactModal";
import { useSelector } from "react-redux";
import { FaXmark } from "react-icons/fa6";

const RegisterModal = ({ isOpen, setIsOpen }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <>
      <ReactModal
        modalIsOpen={isOpen}
        setModalIsOpen={setIsOpen}
        closeBtn={false}
      >
        <div className="w-screen h-[95dvh] px-3 sm:h-fit py-2 mt-5 md:pt-2 relative overflow-auto  sm:w-[80vw] md:w-[500px] space-y-4">
          <div className="flex justify-between items-center px-1">
            <h1>{language ? "إنشاء حساب" : "Sign up"}</h1>
            <button onClick={() => setIsOpen(false)}>
              <FaXmark />
            </button>
          </div>{" "}
          <SignUp />
        </div>
      </ReactModal>
    </>
  );
};

export default RegisterModal;

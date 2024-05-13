import ReactModal from "../ui/ReactModal";
import { useSelector } from "react-redux";
import { FaXmark } from "react-icons/fa6";
// import LoginModalForm from "./LoginModalForm";
import AddPhoneModalForm from "./AddPhoneModalForm";

const AddPhoneModal = ({ isOpen, setIsOpen }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <>
      <ReactModal
        modalIsOpen={isOpen}
        setModalIsOpen={setIsOpen}
        closeBtn={false}
      >
        <div className="w-screen  px-3 sm:h-fit py-2 relative overflow-auto  sm:w-[80vw] md:w-[500px] space-y-4">
          <div className="flex justify-between items-center px-1">
            <h1>{language ? " أضف رقم  هاتفك" : "Add your phone number"}</h1>
            <button onClick={() => setIsOpen(false)}>
              <FaXmark />
            </button>
          </div>{" "}
          <p>
            {language
              ? "لا يمكن التواصل مع المعلن فى حال عدم تسجيل رقم هاتفك"
              : "You cannot contact the advertiser if you do not register your phone number"}
          </p>
          <AddPhoneModalForm setIsOpen={setIsOpen} />
        </div>
      </ReactModal>
    </>
  );
};

export default AddPhoneModal;

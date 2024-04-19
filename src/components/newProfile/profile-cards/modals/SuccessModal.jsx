import ReactModal from "@/Shared/ui/ReactModal";
// import Link from "next/link";
import { useSelector } from "react-redux";

const ConfirmRepost = ({ open, setIsOpen }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <ReactModal setModalIsOpen={setIsOpen} modalIsOpen={open}>
      <div className="px-2 md:px-5 py-5 md:w-[600px] w-[85vw] sm:w-[80vw] flex flex-col gap-6 md:gap-8 justify-center items-center">
        <h3 className="text-center">
          {language ? " إعادة نشر الإعلان" : "Repost the ad"}
        </h3>
        <p className="text-center font-noto">
          {language
            ? "هل أنت متأكد من رغبتك في إعادة نشر الإعلان الخاص بك؟"
            : "Are you sure you want to Repost your ad?"}
        </p>
        <div className="flex gap-3 md:gap-8 justify-center items-center w-[100%] md:w-[70%]">
          <button
            className="border border-lightGreen py-3 text-center w-full rounded-md bg-lightGreen text-white"
            // onClick={() => {
            //   setIsOpen(false);
            // }}
          >
            {language ? "إعادة نشر " : "Repost"}
          </button>
          <button
            className="border border-lightGreen py-3 text-center w-full rounded-md"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {language ? "رجوع" : "back"}
          </button>
        </div>
      </div>
    </ReactModal>
  );
};
export default ConfirmRepost;

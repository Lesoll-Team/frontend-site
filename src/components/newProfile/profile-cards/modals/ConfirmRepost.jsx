import ReactModal from "@/Shared/ui/ReactModal";
// import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { repostProperty } from "../../apis/profileApis";
import { Ring } from "@uiball/loaders";
import { useUser } from "@/Shared/UserContext";

const ConfirmRepost = ({ open, setIsOpen, propId, getProperties }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const { setUserData } = useUser();

  const repostProp = async () => {
    await repostProperty({ propId, setFormStatus, setServerError });
  };
  useEffect(() => {
    if (formStatus === "success") {
      getProperties();
      setUserData();
    }
  }, [formStatus]);
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
        <div className="flex gap-3 md:gap-8 justify-center w-[100%] md:w-[70%]">
          <button
            onClick={repostProp}
            className="border flex items-center justify-center border-lightGreen py-3 text-center w-full rounded-md bg-lightGreen text-white"
            // onClick={() => {
            //   setIsOpen(false);
            // }} {}
          >
            {formStatus === "loading" ? (
              <Ring size={20} color="#fff" />
            ) : language ? (
              "إعادة نشر "
            ) : (
              "Repost"
            )}
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

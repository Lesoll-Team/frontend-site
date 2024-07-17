import ReactModal from "@/Shared/ui/ReactModal";
import { useSelector } from "react-redux";
import { pinPropertyHome } from "../../apis/profileApis";
import { Ring } from "@uiball/loaders";
import { useEffect, useState } from "react";
import { useUser } from "@/Shared/UserContext";

const ConfirmPinHome = ({ open, setIsOpen, propId, getProperties }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [formStatus, setFormStatus] = useState("idle");
  const { setUserData } = useUser();
  const pinPropHome = async () => {
    await pinPropertyHome({ propId, setFormStatus });
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
          {language
            ? " تثبيت الإعلان فى الصفحة الرئيسية"
            : "pin the ad home page"}
        </h3>
        <p className="text-center font-noto">
          {language
            ? "هل أنت متأكد من رغبتك في تثبيت الإعلان الخاص بك فى الصفحة الرئيسية؟"
            : "Are you sure you want to pin your ad in the home page?"}
        </p>
        <div className="flex gap-3 md:gap-8 justify-center  w-[100%] md:w-[70%]">
          <button
            onClick={pinPropHome}
            disabled={formStatus === "loading"}
            className="border flex items-center justify-center border-lightGreen py-3 text-center w-full rounded-md bg-lightGreen text-white"
            // onClick={() => {
            //   setIsOpen(false);
            // }}
          >
            {formStatus === "loading" ? (
              <Ring size={20} color="#fff" />
            ) : language ? (
              " تثبيت "
            ) : (
              "Pin"
            )}
          </button>
          <button
            disabled={formStatus === "loading"}
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
export default ConfirmPinHome;

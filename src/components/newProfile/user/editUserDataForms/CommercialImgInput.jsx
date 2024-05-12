import { useMemo, useRef } from "react";
import { FiPaperclip } from "react-icons/fi";
import { useSelector } from "react-redux";
import { cn } from "@/utils/cn";
import { FaCircleXmark } from "react-icons/fa6";

const CommercialImgInput = ({ watch, setValue }) => {
  const commercialImgRef = useRef(null);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const handleCommercialImgInputClick = () => {
    if (!watch("theCommercialRegistrationImg"))
      commercialImgRef.current.click();
  };
  const handleDeleteCommrcialImg = () => {
    setValue("theCommercialRegistrationImg", null);
  };
  const fileName = useMemo(() => {
    if (watch("theCommercialRegistrationImg")) {
      const file = watch("theCommercialRegistrationImg");
      if (file.name) {
        if (file.name.length > 20) {
          const shortenFileName = file.name.slice(0, 20) + "....";
          return shortenFileName;
        } else {
          return file.name;
        }
      }
      return file.name.slice(0, 20) + file.name.length > 20 && "...";
    } else {
      return "";
    }
  }, [watch("theCommercialRegistrationImg")]);
  return (
    <UserInputContainer
      title={language ? " صورة السجل التجاري" : " صورة السجل التجاري"}
    >
      <button
        type="button"
        onClick={handleCommercialImgInputClick}
        className={`h-[40px] px-3 flex items-center gap-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen `}
      >
        {!watch("theCommercialRegistrationImg") ? (
          <>
            {" "}
            <FiPaperclip className="-rotate-45" />
            <p>{language ? "إضافة ملف" : "Add File"}</p>
          </>
        ) : (
          <div className="p-1 text-xs px-3 bg-gray-300 flex items-center gap-2">
            <p>{fileName}</p>

            <button type="button" onClick={handleDeleteCommrcialImg}>
              <FaCircleXmark />
            </button>
          </div>
        )}
      </button>
      <input
        ref={commercialImgRef}
        hidden
        autoComplete="off"
        type="file"
        onChange={(e) => {
          setValue("theCommercialRegistrationImg", e.target.files[0]);
        }}
        // {...restCommercial}
      />
    </UserInputContainer>
  );
};
export default CommercialImgInput;

const UserInputContainer = ({ title, children, className }) => (
  <div className={cn("flex flex-col gap-y-2", className)}>
    <label className={"text-base md:text-xl text-outLine"}>{title}</label>
    {children}
  </div>
);

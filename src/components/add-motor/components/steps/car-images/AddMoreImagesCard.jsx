import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const AddMoreImagesCard = ({ onClick }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div
      onClick={onClick}
      className="w-full flex items-center gap-3 justify-center flex-col max-w-[400px] p-3 min-w-[120px] min-h-[120px] rounded-md bg-white overflow-hidden drop-shadow-md"
    >
      <Image
        src={"/upload-image.svg"}
        alt="upload image"
        width={70}
        height={70}
      />

      <button
        type="button"
        className=" rounded-md bg-lightGreen py-1 text-white w-full "
      >
        {language ? "رفع المزيد" : "Add more"}
      </button>
    </div>
  );
};

export default AddMoreImagesCard;

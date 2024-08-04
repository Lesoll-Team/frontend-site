import Image from "next/image";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";

const ImageCard = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="w-full min-w-[140px] h-[140px] rounded-md bg-white overflow-hidden drop-shadow-md">
      <div className="h-[75%] w-full flex items-center justify-center bg-lightGreen relative">
        <Image
          src="/no-img-placeholder.png"
          width={100}
          height={100}
          className="object-cover absolute w-full h-full brightness-75"
        />
        <button className="z-10 w-8 h-8 rounded-full border-2 border-white"></button>
      </div>
      <button
        type="button"
        className="h-[25%] w-full  flex justify-center items-center gap-2"
      >
        <MdDelete className="text-darkGray" />
        {language ? "حذف" : "Delete"}
      </button>
    </div>
  );
};

export default ImageCard;

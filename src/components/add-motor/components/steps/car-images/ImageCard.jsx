import ReactModal from "@/Shared/ui/ReactModal";
import Image from "next/image";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";

const ImageCard = ({ src, onDelete, main }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`w-full max-w-[400px] min-w-[140px] h-[140px] ${main ? "h-[180px]" : "h-[140px]"} rounded-md bg-white overflow-hidden drop-shadow-md`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="h-[75%] w-full flex items-center justify-center bg-lightGreen relative"
      >
        <Image
          src={src || "/no-img-placeholder.png"}
          width={100}
          alt="image card"
          height={100}
          className="object-cover  w-full h-full "
        />
        {/* <button className="z-10 w-8 h-8 rounded-full border-2 border-white"></button> */}
      </button>
      <button
        onClick={onDelete}
        type="button"
        className="h-[25%] border-t w-full  flex justify-center items-center gap-2"
      >
        <MdDelete className="text-darkGray" />
        {language ? "حذف" : "Delete"}
      </button>
      <ReactModal modalIsOpen={isOpen} setModalIsOpen={setIsOpen}>
        <div className="max-w-[500px] py-5">
          <Image
            src={src || "/no-img-placeholder.png"}
            width={1000}
            alt="image card"
            height={1000}
            className="object-cover  w-full h-full "
          />
        </div>
      </ReactModal>
    </div>
  );
};

export default ImageCard;

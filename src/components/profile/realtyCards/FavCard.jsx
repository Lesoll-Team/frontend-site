import Image from "next/image";
import testImg from "../../../../public/testimg.webp";
import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import {
  AiFillDelete,
  AiFillHeart,
  AiOutlineEdit,
  AiOutlineHeart,
} from "react-icons/ai";
import Link from "next/link";
import { useMemo, memo } from "react";
import { AddToFavorites } from "@/utils/propertyAPI";

const FavCard = ({ propDetails, onRemove }) => {
  const addToFAv = async () => {
    try {
      await AddToFavorites(propDetails?._id);
      // After successfully adding to favorites, trigger the removal callback
      onRemove(propDetails._id);
    } catch (error) {
      console.error("Error add to fav:", error);
    }
  };
  return (
    <div className="w-[300px]   min-h-[410px] rounded-[30px] overflow-hidden relative bg-white text-lightGreen pb-3 drop-shadow-xl">
      {/* number of views */}
      <div className="flex items-center justify-end absolute w-full top-10">
        {/* <div className=" bg-white text-lightOrange font-medium top-9 text-sm w-20 text-center px-2 py-1   rounded-l-full">
          {type === "active"
            ? "active"
            : type === "inactive"
            ? "inactive"
            : type === "pending"
            ? "pending"
            : type === "draft"
            ? "draft"
            : ""}
        </div> */}
        <div className=" bg-white  drop-shadow-lg p-7 mx-2  text-2xl rounded-lg text-center px-2 py-1 cursor-pointer  ">
          {/* <AiOutlineHeart /> */}
          <AiOutlineHeart className="text-red-500" />
          <AiFillHeart className="text-red-500" onClick={addToFAv} />
        </div>
      </div>
      {/* card img */}
      <img
        alt="Realty"
        src={propDetails?.thumbnail}
        loading="lazy"
        className="w-full h-[220px] overflow-hidden   object-cover"
      />
      {/* card body  */}
      <div className=" ">
        <div className="  bg-lightGreen text-white  h-10 px-6 flex justify-between mb-1 items-center  z-[100]">
          <p className=" font-bold ">{propDetails?.price} EGP</p>
          <p className="  ">{propDetails?.offer}</p>
        </div>
        <div className="-mt-10 text-lightOrange rounded-b-[40px] h-20 pt-12 px-6 flex justify-between mb-1 font-bold">
          <p>{propDetails?.title}</p>
        </div>
        <div className="-mt-10 text-lightGreen h-20 pt-12 px-7 flex  justify-start gap-5 mb-5">
          <div className="flex items-center justify-start gap-1">
            {" "}
            <BiSolidBed className="text-xl " />{" "}
            <p className="text-[12px] font-semibold text-darkGray">
              {propDetails?.rooms} Rooms
            </p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <FaBath className="text-xl " />{" "}
            <p className="text-[12px] font-semibold text-darkGray">
              {propDetails?.bathRooms} Bath
            </p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <TbRulerMeasure className="text-l " />{" "}
            <p className="text-[12px] font-semibold text-darkGray">
              {propDetails?.area} m2
            </p>
          </div>
        </div>
        {/* location */}
        {/* <div className="px-7 mb-1 ">
      <p className="text-sm  text-lightGreen">Cairo - Naser City</p>
    </div> */}
        <div className="px-7 mb-1 flex justify-between items-center ">
          <p className="text-sm  text-darkGray">{propDetails?.address?.name}</p>
          <div className="flex gap-3 items-center">
            <Link href={"/profile"}>
              <AiFillDelete className="text-xl  md:text-2xl text-red-600" />
            </Link>
            <Link href={"/profile"}>
              <AiOutlineEdit className="text-xl md:text-2xl text-lightGreen" />
            </Link>
          </div>
        </div>
        {/* {type === "draft" ? (
          <div className="flex flex-col items-center space-y-2 mt-5">
            <button className="w-[90%] mx-auto text-center text-lightGreen py-1 text-md rounded-xl font-semibold border-lightGreen border-2 md:hover:bg-lightGreen md:hover:text-white duration-300">
              Resume
            </button>
          </div>
        ) : type !== "pending" ? (
          <div className="flex flex-col items-center space-y-2 mt-5">
            <button className="w-[90%] mx-auto text-center text-lightGreen py-1 text-md rounded-xl font-semibold border-lightGreen border-2 md:hover:bg-lightGreen md:hover:text-white duration-300">
              Repost
            </button>
            <button className="w-[90%] mx-auto text-center text-lightGreen py-1 text-md rounded-xl font-semibold border-lightGreen border-2 md:hover:bg-lightGreen md:hover:text-white duration-300">
              Change Status
            </button>
          </div>
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
};
export default memo(FavCard);

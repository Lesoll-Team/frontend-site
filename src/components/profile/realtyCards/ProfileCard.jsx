// import Image from "next/image";
import { Image } from "@nextui-org/react";

import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import Link from "next/link";
import { deleteProperty } from "@/utils/propertyAPI";
import { useSelector } from "react-redux";
import ConfirmModal from "@/Shared/models/ConfirmModal";
const ProfileCard = ({ propertyDetails, type, onRemove }) => {
  // console.log(propertyDetails);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const deleteProp = async () => {
    try {
      await deleteProperty(propertyDetails._id);
      // After successfully adding to favorites, trigger the removal callback
      onRemove(propertyDetails._id);
    } catch (error) {
      console.error("Error del prop:", error);
    }
  };
  return (
    <div className="md:max-w-[310px] lg:w-[350px] w-[295px] h-[430px]  rounded-[30px] overflow-hidden relative bg-white text-lightGreen pb-3 drop-shadow-xl">
      {/* number of views */}
      <div
        className={`flex items-center z-[1000] absolute w-full top-10 right-0 ${
          language ? "justify-start" : "justify-end"
        }`}
      >
        <p className=" bg-white font-semibold text-lightOrange top-9 text-sm w-20 text-center px-2 py-1   rounded-l-full">
          {type === "active"
            ? language
              ? "نشط"
              : "active"
            : type === "inactive"
            ? "inactive"
            : type === "pending"
            ? language
              ? "تحت المراجعة"
              : "pending"
            : type === "draft"
            ? "draft"
            : ""}
        </p>
      </div>
      {/* card img */}
      <Image
        alt="Realty"
        src={propertyDetails.thumbnail}
        loading="lazy"
        className="w-full rounded-none h-[220px] overflow-hidden   object-cover"
      />
      {/* card body  */}
      <div className="relative space-y-3">
        <div className="  bg-lightGreen text-white  h-10 px-6 flex justify-between mb-1 items-center relative z-[100]">
          <p className=" font-bold ">
            {propertyDetails.price.toLocaleString()} {language ? "جنية" : "EGP"}
          </p>
          <p className="font-semibold">
            {propertyDetails.offer === "For Sale"
              ? language
                ? "للبيع"
                : "For Sale"
              : language
              ? "للإيجار"
              : "For Rent"}
          </p>
        </div>
        <div className=" text-lightOrange   px-5 flex justify-between  font-bold">
          <p>
            {propertyDetails?.title.substring(0, 30)}
            {propertyDetails?.title.length > 30 && "..."}
          </p>
        </div>
        <div className=" text-lightGreen   px-5 flex  justify-start gap-5">
          <div className="flex items-center justify-start gap-1">
            {" "}
            <BiSolidBed className="text-xl " />{" "}
            <p className="text-[12px] font-semibold text-darkGray">
              {propertyDetails.rooms} {language ? "غرف" : "Rooms"}
            </p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <FaBath className="text-xl " />{" "}
            <p className="text-[12px] font-semibold text-darkGray">
              {propertyDetails.bathRooms} {language ? "حمام" : "Bathroom"}
            </p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <TbRulerMeasure className="text-l " />{" "}
            <p className="text-[12px] font-semibold text-darkGray">
              {propertyDetails.area}{" "}
              {language ? (
                <span>
                  م<sup>2</sup>
                </span>
              ) : (
                <span>
                  m<sup>2</sup>
                </span>
              )}
            </p>
          </div>
        </div>
        {/* location */}
        {/* <div className="px-7 mb-1 ">
      <p className="text-sm  text-lightGreen">Cairo - Naser City</p>
    </div> */}
        <div className="px-5 mb-1 flex flex-col  justify-start items-start gap-3 ">
          <p className="text-sm  text-darkGray">
            {propertyDetails?.address?.name.substring(0, 40)}{" "}
            {propertyDetails?.address?.name.length > 40 && "..."}
          </p>
          <div className="flex gap-3 items-center">
            <ConfirmModal
              actinFunction={deleteProp}
              title={language ? "تأكيد إزالة العقار" : "Confirm Delete Propert"}
            >
              {" "}
              <AiFillDelete className="text-xl  md:text-2xl text-red-600 cursor-pointer" />
            </ConfirmModal>

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
export default ProfileCard;

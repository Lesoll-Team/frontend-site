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
    <div className="w-[310px] h-[420px] rounded-[25px] overflow-hidden relative bg-white text-lightGreen pb-3 drop-shadow-xl animate-appearance-in">
      {/* number of views */}
      <div
        className={`flex items-center z-[100] absolute w-full top-10 right-0 ${
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

      {type === "active" ? (
        <Link
          title={propertyDetails?.title}
          href={`/property-details/${propertyDetails.slug}`}
        >
          <Image
            isZoomed="true"
            alt="Realty"
            radius="none"
            src={propertyDetails.thumbnail}
            loading="lazy"
            className="w-[310px] rounded-none h-[220px] overflow-hidden   object-cover"
          />
        </Link>
      ) : (
        <Image
          isZoomed="true"
          alt="Realty"
          radius="none"
          src={propertyDetails.thumbnail}
          loading="lazy"
          className="w-[310px] h-[225px] rounded-none overflow-hidden object-cover"
        />
      )}
      {/* card body  */}
      <div className="relative space-y-3">
        <div className="  bg-lightGreen text-white  h-10 px-6 flex justify-between mb-1 items-center relative z-[100]">
          {propertyDetails?.offer !== "For Investment" && (
            <p className="font-medium">
              <span>
                {language
                  ? parseInt(propertyDetails?.price).toLocaleString("ar-Eg")
                  : parseInt(propertyDetails?.price).toLocaleString()}{" "}
              </span>
              {language ? "جنية" : "EGP"}
            </p>
          )}
          <p className="font-semibold">
            {propertyDetails?.offer === "For Sale"
              ? language
                ? "للبيع"
                : "For Sale"
              : propertyDetails?.offer === "For Rent"
              ? language
                ? "للإيجار"
                : "For Rent"
              : language
              ? "للإستثمار"
              : "For Investment"}
          </p>
        </div>
        <div className=" text-lightOrange   px-5 flex justify-between  font-bold">
          {type === "active" ? (
            <Link
              title={propertyDetails?.title}
              href={`/property-details/${propertyDetails.slug}`}
            >
              <p>
                {propertyDetails?.title.substring(0, 30)}
                {propertyDetails?.title.length > 30 && "..."}
              </p>
            </Link>
          ) : (
            <p>
              {propertyDetails?.title.substring(0, 30)}
              {propertyDetails?.title.length > 30 && "..."}
            </p>
          )}
        </div>
        <div className=" text-lightGreen   px-5 flex  justify-between gap-5">
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
            {propertyDetails?.address?.name.substring(0, 30)}{" "}
            {propertyDetails?.address?.name.length > 30 && "..."}
          </p>
          <div className="flex gap-3 items-center">
            <ConfirmModal
              actinFunction={deleteProp}
              title={language ? "تأكيد إزالة العقار" : "Confirm Delete Propert"}
            >
              {" "}
              <AiFillDelete className="text-xl  md:text-2xl text-red-600 cursor-pointer" />
            </ConfirmModal>

            <Link
              title={language ? "تعديل العقار" : "Edit Property"}
              href={`/editproperty/${propertyDetails.slug}`}
            >
              <AiOutlineEdit className="text-xl md:text-2xl text-lightGreen" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
//  <div className="px-5 mb-1 flex flex-col  justify-start items-start gap-3 ">
//    <p className="text-sm  text-darkGray">
//      {propertyDetails?.address?.name.substring(0, 30)}{" "}
//      {propertyDetails?.address?.name.length > 30 && "..."}
//    </p>
//    <div className="flex gap-3 items-center">
//      <ConfirmModal
//        actinFunction={deleteProp}
//        title={language ? "تأكيد إزالة العقار" : "Confirm Delete Propert"}
//      >
//        {" "}
//        <AiFillDelete className="text-xl  md:text-2xl text-red-600 cursor-pointer" />
//      </ConfirmModal>

//      <Link
//        title={language ? "تعديل العقار" : "Edit Property"}
//        href={`/editproperty/${propertyDetails.slug}`}
//      >
//        <AiOutlineEdit className="text-xl md:text-2xl text-lightGreen" />
//      </Link>
//    </div>
//  </div>;

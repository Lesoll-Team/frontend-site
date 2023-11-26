import ConfirmModal from "@/Shared/models/ConfirmModal";
import { deleteProperty } from "@/utils/propertyAPI";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbRulerMeasure } from "react-icons/tb";
import { useSelector } from "react-redux";

const UserCard = ({ propertyDetails, type, onRemove }) => {
  const userInfo = useSelector((state) => state.GlobalState.userData);
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
    <div className="w-[330px] overflow-hidden max-h-[520px]  bg-white drop-shadow-md rounded-xl relative">
      <div
        className={`flex items-center z-[100] absolute w-full top-10 right-0 ${
          language ? "justify-start" : "justify-end"
        }`}
      >
        <p className=" bg-white font-semibold  top-9 text-sm w-24  text-center px-2 py-2  rounded-l-full">
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
      <div className="">
        {type === "active" ? (
          <Link
            title={`${propertyDetails?.title}`}
            key={propertyDetails?._id}
            href={`/property-details/${propertyDetails?.slug}`}
            className="w-full"
          >
            <Image
              alt="Card background"
              radius="none"
              className="object-cover w-[330px]  h-[265px]"
              src={
                propertyDetails?.thumbnail || propertyDetails?.album[0]?.image
              }
            />
          </Link>
        ) : (
          <Image
            alt="Card background"
            radius="none"
            className="object-cover w-[330px]  h-[265px]"
            src={propertyDetails?.thumbnail || propertyDetails?.album[0]?.image}
          />
        )}
      </div>
      <div className="space-y-3 p-5">
        <div className="flex flex-row items-center  justify-between">
          {propertyDetails?.offer !== "For Investment" && (
            <p className=" font-bold text-darkGreen text-lg">
              <span>
                {language
                  ? parseInt(propertyDetails?.price).toLocaleString("ar-Eg")
                  : parseInt(propertyDetails?.price).toLocaleString()}{" "}
              </span>
              {language ? "جنية" : "EGP"}
            </p>
          )}
          <p className="text-md    uppercase font-semibold">
            {" "}
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
        {type === "active" ? (
          <Link
            title={`${propertyDetails?.title}`}
            key={propertyDetails?._id}
            href={`/property-details/${propertyDetails?.slug}`}
            className="w-full"
          >
            <h4 className="font-semibold text-large line-clamp-1 ">
              {propertyDetails?.title}
            </h4>
          </Link>
        ) : (
          <h4 className="font-semibold text-large line-clamp-1 ">
            {propertyDetails?.title}
          </h4>
        )}
        <p className="flex items-center gap-1 line-clamp-1">
          <FaLocationDot className="text-lightOrange font-bold" />{" "}
          <span className="line-clamp-1">
            {`${propertyDetails?.address?.governrate}${
              propertyDetails?.address?.region && " ,"
            }${
              propertyDetails?.address?.region &&
              propertyDetails?.address?.region
            }`}
          </span>
        </p>

        <div className="w-full h-[2px] bg-slate-100 rounded-full"></div>
        <div className=" text-darkGray w-full  flex  justify-between ">
          <div className="flex items-center justify-start gap-1">
            {" "}
            <BiSolidBed className="text-xl " />{" "}
            <p className=" font-semibold text-darkGray">
              {language
                ? propertyDetails?.rooms.toLocaleString("ar-Eg")
                : propertyDetails?.rooms.toLocaleString()}{" "}
              {language ? "غرف" : "Rooms"}
            </p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <FaBath className="text-xl " />{" "}
            <p className=" font-semibold text-darkGray">
              {language
                ? propertyDetails?.bathRooms.toLocaleString("ar-Eg")
                : propertyDetails?.bathRooms.toLocaleString()}{" "}
              {language ? "حمام" : "Bath"}
            </p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <TbRulerMeasure className="text-l " />{" "}
            <p className=" font-semibold text-darkGray">
              {language
                ? propertyDetails?.area.toLocaleString("ar-Eg")
                : propertyDetails?.area.toLocaleString()}{" "}
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
      </div>

      <div className="flex items-center  gap-1 w-full p-2 ">
        <div className="w-1/2">
          <ConfirmModal
            actinFunction={deleteProp}
            title={language ? "تأكيد إزالة العقار" : "Confirm Delete Propert"}
          >
            {" "}
            <button className="w-full rounded-lg text-center flex items-center justify-center text-red-500 gap-1 border-red-500 border-2 py-1 md:hover:bg-red-500 md:hover:text-white duration-150">
              <AiFillDelete className="text-xl  md:text-2xl  cursor-pointer" />
              {language ? "إزاله " : "Delete"}
            </button>
          </ConfirmModal>
        </div>

        <Link
          className="w-1/2 rounded-lg text-center flex items-center justify-center text-lightGreen gap-1 border-lightGreen border-2 py-1 md:hover:bg-lightGreen md:hover:text-white duration-150"
          title={language ? "تعديل العقار" : "Edit Property"}
          href={`/editproperty/${propertyDetails.slug}`}
        >
          <AiOutlineEdit className="text-xl md:text-2xl " />{" "}
          {language ? "تعديل" : "Edit"}
        </Link>
      </div>
    </div>
  );
};
export default UserCard;

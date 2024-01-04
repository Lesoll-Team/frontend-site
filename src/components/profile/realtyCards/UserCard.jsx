import DeleteModal from "@/Shared/models/DeleteModal";
import { deleteProperty, propertyIsSold } from "@/utils/propertyAPI";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { HiRefresh } from "react-icons/hi";

import {
  //  AiFillDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

const UserCard = ({ propertyDetails, type, onSold, omDelete }) => {
  const dispatch = useDispatch();

  const language = useSelector((state) => state.GlobalState.languageIs);
  const [selectedReason, setSelectedReason] = useState("");
  const [reason, setReason] = useState("");
  const [otherMessage, setOtherMessage] = useState("");
  const [error, setError] = useState(false);

  const onReasonSelect = (selected, messege) => {
    setError(false);
    setSelectedReason(selected);
    setReason(messege);
  };
  const deleteProp = async () => {
    try {
      await deleteProperty(propertyDetails._id, reason);
      dispatch(omDelete);
    } catch (error) {
      console.error("Error del prop:", error);
    }
  };

  const propertyOnSold = async () => {
    try {
      await propertyIsSold({ propertyId: propertyDetails?._id });
      dispatch(onSold);
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
            : propertyDetails?.isSold == true
            ? language
              ? "تم البيع"
              : "Out of sale"
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

        <div className="w-full h-[2px]  rounded-full"></div>
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

      <div className="flex justify-center  gap-1 w-full py-2 ">
        <Link
          className="px-2 rounded-lg text-center flex items-center justify-center text-lightGreen  border-lightGreen border-2 py-1 md:hover:bg-lightGreen md:hover:text-white duration-150"
          title={language ? "تعديل العقار" : "Edit Property"}
          href={`/editproperty/${propertyDetails.slug}`}
        >
          <AiOutlineEdit className="text-xl md:text-2xl " />{" "}
          {/* {language ? "تعديل" : "Edit"} */}
        </Link>
        {type === "pending"?null:(
        <button
          onClick={propertyOnSold}
          className=" w-[150px] rounded-lg text-center flex items-center justify-center text-white font-bold text-xl  md:hover:bg-white bg-green-700 border-green-700 border-2 py-1  md:hover:text-green-700 duration-150"
        >
          {propertyDetails?.isSold == true ? (
            <div className="flex items-center gap-2">
              <HiRefresh />

              {language ? "إعادة البيع" : "Resale"}
            </div>
          ) : language ? (
            "هل تم البيع ؟ "
          ) : (
            "sold out ?"
          )}
        </button>
        )}

        <div className="">
          <DeleteModal
            selectedReason={selectedReason}
            OpenButton={
              <button className="px-2 rounded-lg text-center flex items-center justify-center text-red-600 gap-1 border-red-600 border-2 py-1 md:hover:bg-red-600 md:hover:text-white duration-150">
                {/* <AiFillDelete className="text-xl  md:text-2xl  cursor-pointer" /> */}
                <MdDeleteForever className="text-2xl" />
              </button>
            }
            reason={reason}
            error={error}
            setError={setError}
            deleteProp={deleteProp}
          >
            <div className="flex flex-col items-start gap-3 mb-3">
              <h3 className="text-2xl fomt-semiBold">
                {language
                  ? " ما سبب رغبتك في حذف هذا العقار؟"
                  : "What is the reason you want to delete this property?"}
              </h3>
              <button
                onClick={() =>
                  onReasonSelect("lesoll", "تم البيع / التأجير من خلال ليسول")
                }
                type="button"
                className="flex gap-2 items-center text-lg font-normal"
              >
                {selectedReason === "lesoll" ? (
                  <IoIosRadioButtonOn className="text-lightGreen" />
                ) : (
                  <IoMdRadioButtonOff className="text-lightGreen" />
                )}

                {language ? "تم البيع / التأجير من خلال ليسول" : ""}
              </button>
              <button
                onClick={() =>
                  onReasonSelect(
                    "non-lesoll",
                    "تم البيع / التأجير من خلال وسيط اخر"
                  )
                }
                type="button"
                className="flex gap-2 items-center text-lg font-normal"
              >
                {selectedReason === "non-lesoll" ? (
                  <IoIosRadioButtonOn className="text-lightGreen" />
                ) : (
                  <IoMdRadioButtonOff className="text-lightGreen" />
                )}
                {language ? "تم البيع / التأجير من خلال وسيط اخر" : ""}
              </button>
              <button
                onClick={() => {
                  onReasonSelect("other", otherMessage);
                }}
                type="button"
                className="flex gap-2 items-center text-lg font-normal"
              >
                {selectedReason === "other" ? (
                  <IoIosRadioButtonOn className="text-lightGreen" />
                ) : (
                  <IoMdRadioButtonOff className="text-lightGreen" />
                )}
                {language ? "اخرى" : ""}
              </button>
              {selectedReason === "other" && (
                <textarea
                  value={otherMessage}
                  onChange={(e) => {
                    setReason(e.target.value);
                    setOtherMessage(e.target.value);
                  }}
                  className={`resize-none w-full p-2 border-[2px] md:border-[3px] rounded-md focus:ring-0 focus:border-lightGreen focus:outline-none animate-appearance-in ${
                    selectedReason !== "other" && "animate-appearance-out"
                  }`}
                  placeholder={language ? "سبب أخر" : "Other reason"}
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              )}
            </div>
          </DeleteModal>
        </div>
      </div>
    </div>
  );
};
export default UserCard;

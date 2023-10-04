import React, { memo, useEffect, useState } from "react";
import { User, Button } from "@nextui-org/react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";
import { ar } from "../../language/ar/common";
import { en } from "../../language/en/common";
import { useRouter } from "next/router";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { MdLocalOffer, MdMapsHomeWork } from "react-icons/md";
import { BiSolidBed } from "react-icons/bi";
import { TbRulerMeasure } from "react-icons/tb";
import { FaBath } from "react-icons/fa";
import { CallBtn, WhatsAppBtn } from "@/utils/propertyAPI";

function ConfirmAppointment({ userAppointment }) {
  const router = useRouter();
  const message = `
   مساء الخير مهتم أعرف تفاصيل أكتر عن عقارك اللى تم نشره على موقع ليسول
   ${process.env.NEXT_PUBLIC_API_LOCAL_DOMAIN + router.asPath} `;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${
    "+20" + userAppointment.user.code
  }${
    userAppointment?.connectPhoneNumber || userAppointment?.user?.phone
  }&text=${encodeURIComponent(message)}`;
  // console.log(userAppointment);

  const language = useSelector((state) => state.GlobalState.languageIs);
  // console.log(userAppointment);
  function formatDate(dateString) {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    if (language) {
      return new Date(dateString).toLocaleString("ar-Eg", options);
    } else {
      return new Date(dateString).toLocaleString("en-US", options);
    }
  }
  const formattedDate = formatDate(userAppointment?.createdAt);
  // console.log(userAppointment);
  const whatsBtnClick = () => {
    WhatsAppBtn(userAppointment._id);
  };
  const CallBtnClick = () => {
    CallBtn(userAppointment._id);
  };
  return (
    <div className="  p-5 bg-white drop-shadow-xl border rounded-xl md:sticky md:top-24 space-y-4 ">
      <h2 className=" text-lightGreen text-lg md:text-4xl font-bold text-center">
        {language ? "ملخص" : "Overview"}
      </h2>

      {/*user info module*/}

      {/*user info*/}

      <div className=" flex  flex-col 2xl:flex-row 2xl:flex-wrap items-center justify-between gap-2 ">
        {/**flex items-center text-center bg-blue-500 overflow-hidden */}
        <div className="flex items-center">
          <User
            // className=" "
            avatarProps={{
              size: "lg",
              src: userAppointment?.user.avatarUrl,
            }}
          />
          <div className="flex flex-col">
            <p className="font-bold">{userAppointment?.user.fullname}</p>
            <p className="text-default-700">{userAppointment?.user.email}</p>
          </div>
        </div>
        <div className="flex ">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button
              onClick={() => {
                whatsBtnClick();
              }}
              radius="sm"
              type="submit"
              className="mx-2 bg-lightGreen text-white hover:bg-gray-100 hover:text-lightGreen border-2 border-lightGreen focus:outline-none focus:ring-0 "
            >
              {language ? ar.property.sendWtsApp : en.property.sendWtsApp}
            </Button>
          </a>

          <a
            href={`tel:${userAppointment.user.code}${
              userAppointment?.connectPhoneNumber ||
              userAppointment?.user?.phone
            }`}
          >
            <Button
              onClick={() => {
                CallBtnClick();
              }}
              radius="sm"
              variant="bordered"
              className="border-2 border-lightGreen text-lightGreen hover:text-white hover:bg-lightGreen focus:outline-none focus:ring-0 "
            >
              {language ? ar.property.sendCall : en.property.sendCall}
            </Button>
          </a>
        </div>
      </div>
      <div className="bg-white rounded-lg p-6 md:px-10 space-y-4">
        <div className="flex justify-between items-center">
          <p className="font-bold  rounded-lg py-1 px-3 flex items-center gap-1">
            <MdLocalOffer className="text-darkGreen" />
            {language ? "العرض" : "Offer"} {""}{" "}
          </p>
          <p className="font-semibold">
            {" "}
            {userAppointment.offer === "For Sale"
              ? language
                ? "للبيع"
                : userAppointment.offer
              : language
              ? "للإيجار"
              : userAppointment.offer}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="font-bold   rounded-lg py-1 px-3 flex items-center  gap-1">
            <MdMapsHomeWork className="text-darkGreen text-lg" />
            {language ? "نوع الوحدة" : "Unit Type"}{" "}
          </p>
          <p className="font-semibold">
            {language
              ? userAppointment?.unitType?.title?.ar
              : userAppointment?.unitType?.title?.en}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="font-bold   rounded-lg py-1 px-3 flex items-center  gap-1">
            <TbRulerMeasure className="text-darkGreen text-lg" />
            {language ? "المساحة" : "Area"}
          </p>
          <p className="font-semibold">
            {userAppointment?.area.toLocaleString("ar-Eg")}
            {""}
            {userAppointment?.landType === "carat" ? (
              language ? (
                "قيراط"
              ) : (
                "carat"
              )
            ) : userAppointment?.landType === "acre" ? (
              language ? (
                "فدان"
              ) : (
                "acre"
              )
            ) : language ? (
              <span>
                م<sup>{(2).toLocaleString("ar-Eg")}</sup>
              </span>
            ) : (
              <span>
                m<sup>2</sup>
              </span>
            )}
          </p>
        </div>
        {userAppointment?.propType !== "Land" && (
          <>
            <hr />

            <div className="flex justify-between">
              <p className="font-bold   rounded-lg py-1 px-3 flex items-center  gap-1">
                <BiSolidBed className="text-darkGreen text-lg " />{" "}
                {language ? " الغرف" : "Rooms"}
              </p>
              <p className="font-semibold">
                {userAppointment?.rooms.toLocaleString("ar-Eg")}
              </p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="font-bold   rounded-lg py-1 px-3 flex items-center  gap-1">
                <FaBath className="text-darkGreen text-lg " />
                {language ? "الحمامات" : "Bathrooms"}
              </p>
              <p className="font-semibold">
                {userAppointment?.bathRooms.toLocaleString("ar-Eg")}
              </p>
            </div>
          </>
        )}
      </div>
      <div className="flex justify-end">
        <p className="text-xs font-semibold">
          <span className=" text-sm tracking-widest"> {formattedDate}</span>
        </p>
      </div>
    </div>
  );
}
export default memo(ConfirmAppointment);

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

function ConfirmAppointment({ userAppointment }) {
  const router = useRouter();
  const message = `
   مساء الخير مهتم أعرف تفاصيل أكتر عن عقارك اللى تم نشره على موقع ليسول
   ${process.env.NEXT_PUBLIC_API_LOCAL_DOMAIN + router.asPath} `;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${
    userAppointment?.connectPhoneNumber
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
  return (
    <div className="  p-5 bg-white drop-shadow-xl border rounded-xl md:sticky md:top-24 space-y-4 ">
      <h2 className=" text-lightGreen text-lg md:text-4xl font-bold text-center">
        {language ? "معلومات العقار" : "About Property"}
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
              radius="sm"
              type="submit"
              className="mx-2 bg-lightGreen text-white hover:bg-gray-100 hover:text-lightGreen border-2 border-lightGreen focus:outline-none focus:ring-0 "
            >
              {language ? ar.property.sendWtsApp : en.property.sendWtsApp}
            </Button>
          </a>

          <a href={`tel:${userAppointment?.connectPhoneNumber}`}>
            <Button
              radius="sm"
              variant="bordered"
              className="border-2 border-lightGreen text-lightGreen hover:text-white hover:bg-lightGreen focus:outline-none focus:ring-0 "
            >
              {language ? ar.property.sendCall : en.property.sendCall}
            </Button>
          </a>
        </div>
      </div>
      <div className="bg-white rounded-lg p-6 md:px-12 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold  rounded-lg py-1 px-3 flex items-center gap-1">
            {language ? "العرض" : "Offer"} {""}{" "}
            <MdLocalOffer className="text-darkGreen" />
          </h3>
          <p className="">
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
          <h3 className="font-bold   rounded-lg py-1 px-3 flex items-center  gap-1">
            {language ? "نوع الوحدة" : "Unit Type"}{" "}
            <MdMapsHomeWork className="text-darkGreen text-lg" />
          </h3>
          <p>
            {language
              ? userAppointment?.unitType?.title?.ar
              : userAppointment?.unitType?.title?.en}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <h3 className="font-bold   rounded-lg py-1 px-3">
            {language ? "المساحة" : "Area"}
          </h3>
          <p>
            {userAppointment?.area.toLocaleString("ar-Eg")}
            {""}
            {language ? (
              <span>
                م<sup>{(2).toLocaleString("ar-Eg")}</sup>
              </span>
            ) : (
              ""
            )}
          </p>
        </div>
        <hr />

        <div className="flex justify-between">
          <h3 className="font-bold  rounded-lg py-1 px-3">
            {language ? " الغرف" : "Rooms"}
          </h3>
          <p>{userAppointment?.rooms.toLocaleString("ar-Eg")}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <h3 className="font-bold  rounded-lg py-1 px-3">
            {language ? "الحمامات" : "Bathrooms"}
          </h3>
          <p>{userAppointment?.bathRooms.toLocaleString("ar-Eg")}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <p>
          <span className=" text-sm tracking-widest"> {formattedDate}</span>
        </p>
      </div>
    </div>
  );
}
export default memo(ConfirmAppointment);

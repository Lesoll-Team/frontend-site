import useContactLinks from "@/Hooks/useContactLinks";
// import { WhatsAppBtn } from "@/utils/propertyAPI";
import { Avatar, Image } from "@nextui-org/react";
import { BiSolidBed } from "react-icons/bi";
// import { BsWhatsapp } from "react-icons/bs";
import { FaBath } from "react-icons/fa";
import { RiMoreFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import ActionsMenu from "./ActionsMenu";

const NeedsAdminCard = ({ need, type }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${
    need.userId[0]?.code + need?.userId[0]?.phone
  }`;
  const { WhatappLinkBtn, CallLinkBtn } = useContactLinks({
    phoneNumber: need.userId[0]?.code + need?.userId[0]?.phone,
  });
  return (
    <div className=" bg-white rounded-lg flex md:flex-row flex-col relative  items-start p-5">
      <div className="space-y-4 w-full md:w-7/12">
        <h3 className="w-full text-2xl  font-bold">
          {language ? need.unitType[0].title.ar : need.unitType[0].title.en}
          {"  "}
          {need?.offer === "For Sale"
            ? language
              ? "للبيع"
              : "For Sale"
            : need?.offer === "For Rent"
              ? language
                ? "للإيجار"
                : "For Rent"
              : language
                ? "للإستثمار"
                : "For Investment"}{" "}
          {need?.governrate[0]?.name} {need?.region[0]?.city_name_ar}
        </h3>

        <div className="flex gap-3 md:gap-12 pb-2 border-b-2 flex-wrap">
          <div className="flex gap-2 items-center">
            <p className="text-lightGreen text-lg">
              {language ? "من :" : "from :"}
            </p>
            <p className="font-semibold text-lg">{need.price.from}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-lightGreen text-lg">
              {language ? " الى:" : "to :"}
            </p>
            <p className="font-semibold text-lg">{need.price.to}</p>
          </div>
        </div>
        <div className="flex border-b-2 pb-2 md:flex-row flex-col md:items-center  gap-2">
          <p className="text-sm text-lightGray font-bold">
            {language ? "المساحة :" : "area :"}
          </p>
          <div className="flex gap-5 flex-wrap">
            <p className="font-semibold text-lightGray text-lg">
              {need.area.from}{" "}
              {language ? (
                <span>
                  م<sup>2</sup>
                </span>
              ) : (
                ""
              )}
            </p>
            <p className="font-semibold text-lg">{language ? "الى" : "To"}</p>

            <p className="font-semibold text-lightGray text-lg">
              {need.area.to}{" "}
              {language ? (
                <span>
                  م<sup>2</sup>
                </span>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <p className="flex items-center">
            {language ? " عدد الغرف :" : "Rooms number :"}{" "}
            <BiSolidBed className=" text-lightGreen text-sm" /> {need?.rooms}
          </p>
          <p className="flex items-center gap-1">
            {language ? "عدد الحمامات :" : "Bathrooms number :"}
            <FaBath className=" text-lightGreen text-sm" /> {need?.rooms}
          </p>
        </div>
        <p className="break-all">{need.description}</p>

        <div className="flex justify-between items-center gap-2 w-full flex-wrap">
          <div className="flex items-center gap-2">
            <Avatar src="" className="w-[30px] h-[30px]" />
            <p className="font-semibold">
              <span className="text-base">{need.userId[0]?.fullname}</span>
            </p>
          </div>
          <div className="flex md:hidden gap-3 items-center justify-end">
            <CallLinkBtn>
              <Image
                className="w-[30px]"
                width={50}
                src="/icons/call-icon.svg"
              />
            </CallLinkBtn>

            <a href={whatsappUrl} target="_blank">
              <WhatappLinkBtn>
                <Image
                  className="w-[30px]"
                  width={50}
                  src="/icons/whatsapp-icon.svg"
                />
              </WhatappLinkBtn>
            </a>
          </div>
        </div>
      </div>
      <div className="w-5/12 hidden  gap-5 md:flex justify-end ">
        <a
          href={`tel:${need.userId[0]?.code + need.userId[0]?.phone}`}
          target="_blank"
        >
          <Image className="w-[50px]" width={50} src="/icons/call-icon.svg" />
        </a>
        <a href={whatsappUrl} target="_blank">
          <Image
            className="w-[50px]"
            width={50}
            src="/icons/whatsapp-icon.svg"
          />
        </a>
      </div>
      <div
        className={`absolute   md:bottom-3   p-0 ${language ? "left-3" : "right-3"}`}
      >
        <ActionsMenu needData={need} type={type} />
      </div>
    </div>
  );
};
export default NeedsAdminCard;

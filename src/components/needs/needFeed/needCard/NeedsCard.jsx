import useContactLinks from "@/Hooks/useContactLinks";
import { localizedNumber } from "@/utils/localizedNumber";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import ReactTimeAgo from "react-time-ago";

const NeedsCard = ({ need }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const date = useMemo(() => new Date(need.createdAt), [need]);
  const title = useMemo(
    () => (language ? need?.title?.ar : need?.title?.en),
    [need]
  );
  const { WhatappLinkBtn, CallLinkBtn } = useContactLinks({
    phoneNumber: need.userId[0]?.code + need?.userId[0]?.phone,
    message: "",
    type: "need",
    id: need?._id,
  });

  return (
    <div className="bg-white rounded-lg flex md:flex-row flex-col relative p-5">
      <div className="space-y-4 w-full md:w-7/12">
        <h3 className="text-black font-bold">{title}</h3>
        <div className="flex gap-2 items-center pb-2 flex-wrap">
          <p className="font-bold">{language ? "السعر :" : "Price :"}</p>
          <p>
            {localizedNumber(need.price.from)} -{" "}
            {localizedNumber(need.price.to)} {language ? "جنية" : "Egp"}
          </p>
        </div>
        <hr className="h-1 md:w-[80%]" />
        <div className="flex gap-2 items-center pb-2">
          <p className="font-bold">{language ? "المساحة :" : "Area :"}</p>
          <p>
            {localizedNumber(need.area.from)} - {localizedNumber(need.area.to)}{" "}
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
        <hr className="h-1 md:w-[80%]" />
        <div className="flex items-center gap-5">
          <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2">
              <p className="font-bold">
                {language ? " عدد الغرف :" : "Rooms number :"}
              </p>
              <p>{need?.rooms}</p>
            </div>
            {need?.bathrooms && (
              <div className="flex items-center gap-2">
                <p className="font-bold">
                  {language ? " عدد الحمامات :" : "Bathrooms number :"}
                </p>
                <p>{need?.bathrooms}</p>
              </div>
            )}
          </div>
        </div>
        <p>{need.description}</p>
        <div className="flex justify-between items-center gap-2 w-full">
          <div className="flex items-center gap-2">
            <Image
              src="/user-avatar-placeholder.png"
              height={30}
              width={30}
              alt={need?.userId[0].username}
              className="w-[30px] h-[30px] rounded-full"
            />
            <Link
              href={`/view-profile/${need?.userId[0].username}`}
              className="font-semibold"
            >
              <span className="text-base">{need?.userId[0]?.fullname}</span>
            </Link>
          </div>
          <div className="flex md:hidden gap-3 items-center justify-end">
            <CallLinkBtn>
              <div className="flex h-8 w-8 rounded-full items-center justify-center bg-lightNeutral">
                <IoCallSharp className="text-[#5F98D1] text-lg" />
              </div>
            </CallLinkBtn>
            <WhatappLinkBtn>
              <div className="flex h-8 w-8 rounded-full items-center justify-center bg-[#39AE41]">
                <FaWhatsapp className="text-lg text-white" />
              </div>
            </WhatappLinkBtn>
          </div>
        </div>
      </div>
      <div className="w-5/12 hidden gap-6 md:flex justify-between h-full flex-col items-end">
        <div className="flex items-center gap-6">
          <CallLinkBtn>
            <div className="flex h-12 w-12 rounded-full items-center justify-center bg-lightNeutral">
              <IoCallSharp className="text-[#5F98D1] text-2xl" />
            </div>
          </CallLinkBtn>
          <WhatappLinkBtn>
            <div className="flex h-12 w-12 rounded-full items-center justify-center bg-[#39AE41]">
              <FaWhatsapp className="text-2xl text-white" />
            </div>
          </WhatappLinkBtn>
        </div>
      </div>
      <p
        className={`absolute md:block hidden bottom-6 ${language ? "left-5" : "right-5"}`}
      >
        <ReactTimeAgo
          date={date}
          locale={language ? "ar" : "en-Us"}
          timeStyle="twitter"
        />
      </p>
    </div>
  );
};

export default NeedsCard;

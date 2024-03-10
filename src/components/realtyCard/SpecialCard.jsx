import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import useContactLinks from "@/Hooks/useContactLinks";

const SpecialCard = ({ cardDetails }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const phone = useMemo(() => {
    if (cardDetails.connectPhoneNumber) {
      return cardDetails.connectPhoneNumber;
    } else {
      return cardDetails?.user?.code + cardDetails?.user?.phone;
    }
  }, [cardDetails]);
  const message = language
    ? `مهتم بمعرفة المزيد عن هذا العقار
        https://lesoll.com/property-details/${cardDetails?.slug}
      `
    : `
      Interested in knowing more about this property
       https://lesoll.com/property-details/${cardDetails?.slug}
      `;
  const { WhatappLinkBtn, CallLinkBtn } = useContactLinks({
    phoneNumber: phone,
    message: message,
  });
  return (
    <div
      className=" 
      md:min-w-[400px] 
      md:max-w-[400px] 
      md:h-[460px] 
      h-[420px] 
     flex flex-col  overflow-hidden justify-between bg-white drop-shadow-md  relative
     min-w-[300px] 
     max-w-[300px] 
     "
    >
      {/* start icon favorite */}
      {/* start Image */}
      <Link
        title={`${cardDetails?.title}`}
        key={cardDetails?._id}
        href={`/projects/${cardDetails?.slug}`}
        className="
         h-[296px] w-full pt-[20px] pl-[20px] pr-[20px]  flex"
      >
        <Image
          alt="Card background"
          radius="none"
          className=" flex object-cover "
          priority
          width={400}
          height={174}
          src={cardDetails?.thumbnail}
          // src="/delete/Rectangle.png"
        />
      </Link>
      <div className="w-full mt-[2px]  h-[83px]  flex flex-col justify-around">
        <Link
          href={`/projects/${cardDetails?.slug}`}
          className="line-clamp-1 w-full text-center  text-[20px] font-bold text-lightGreen "
        >
          <h3 className=" text-[20px] font-bold  ">{cardDetails?.title}</h3>
        </Link>
        <h3 className="line-clamp-1 w-full text-center  text-[16px] font-bold text-[#656565] ">
          {language ? " يبدأ من " : " Started From "}
          {cardDetails?.price.toLocaleString()}
          {" EGY "}
        </h3>
      </div>
      <div className=" flex bottom-0 w-full h-[51px] ">
        <WhatappLinkBtn className="w-6/12 bg-[#39AE41] text-white text-[20px] flex items-center justify-center gap-x-[16px]" />

        <CallLinkBtn
          className={
            "w-6/12 bg-[#F2F8F9] flex items-center justify-center gap-x-[16px] text-[#5F98D1] text-[20px]"
          }
        />
      </div>
    </div>
  );
};
export default SpecialCard;

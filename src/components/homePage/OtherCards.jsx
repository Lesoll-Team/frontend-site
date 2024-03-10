import Image from "next/image";
import Link from "next/link";
import React, { Fragment, memo } from "react";
import { useSelector } from "react-redux";

const OtherCards = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <Fragment>
      <Link
        href="/add-property"
        className="flex lg:h-[205px] h-[120px] p-5  gap-x-3 cursor-pointer justify-around items-center md:w-[49%] w-full bg-gradient-to-b border border-gray-100 from-[#e2f5ff] to-[#8ed9ff00] rounded-lg shadow"
      >
        <label className="min-w-[70%] max-w-[71%]   cursor-pointer">
          <h5 className="text-[#0F3963] text-[14px] md:text-[25px] font-bold">
            {language ? "اضف عقارك" : "Add Property"}
          </h5>
          <p className="font-semibold text-gray2 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
            {language
              ? "يمكنك الان عرض عقارك للبيع او الإيجار على ليسول بخطوات بسيطة"
              : "You can now list your property for sale or rent on Lysol in simple steps"}
          </p>
        </label>
        <Image
          src={"home/icon-add-property.svg"}
          alt={`icon add property`}
          width={100}
          height={100}
          radius="none"
          className=" md:w-[100px] lg:w-[130px] w-[50px]"
        />
      </Link>

      <Link
        href="/add-need"
        className="flex p-5 lg:h-[205px] h-[120px]  cursor-pointer justify-around items-center md:w-[49%] w-full  bg-gradient-to-b border border-gray-100 from-[#e2f5ff] to-[#8ed9ff00] rounded-lg shadow"
      >
        <label className="min-w-[70%] cursor-pointer">
          <h5 className="text-[#0F3963] text-[14px] md:text-[25px] font-bold">
            {language ? "حدد طلبك" : "Select your order"}
          </h5>
          <p className="font-semibold text-gray2 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
            {language
              ? "اضافة مواصفات عقارك لنساعدك في إيجاده"
              : "Add your property specifications to help you find it"}
          </p>
        </label>
        <Image
          src={"home/select-your-property.svg"}
          alt={`icon add property`}
          width={100}
          height={100}
          radius="none"
          className=" md:w-[100px] lg:w-[130px] w-[50px]"
        />
      </Link>
    </Fragment>
  );
};
//background: linear-gradient(180deg, rgba(154, 204, 229, 0.16) 0%, rgba(110, 207, 255, 0.03) 100%);

export default memo(OtherCards);

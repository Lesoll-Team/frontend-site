import Image from "next/image";
import React, { Fragment } from "react";

const OtherCards = () => {
  return (
    <Fragment>
      <div className="flex lg:h-[205px] h-[120px] p-5  gap-x-3 cursor-pointer justify-around items-center md:w-[49%] w-full bg-gradient-to-b border border-gray-100 from-[#e2f5ff] to-[#8ed9ff00] rounded-lg shadow">
        <label className="min-w-[70%] max-w-[71%]   cursor-pointer">
          <h5 className="text-[#0F3963] font-bold">اضف عقارك</h5>
          <p className="font-bold text-gray2 ">
            يمكنك الان عرض عقارك للبيع او الإيجار على ليسول بخطوات بسيطة
          </p>
        </label>
        <Image
          src={"home/icon-add-property.svg"}
          alt={`icon add property`}
          width="100"
          height="100"
          radius="none"
          className="min-w-[30px]"
        />
      </div>

      <div className="flex p-5 lg:h-[205px] h-[120px]  cursor-pointer justify-around items-center md:w-[49%] w-full  bg-gradient-to-b border border-gray-100 from-[#e2f5ff] to-[#8ed9ff00] rounded-lg shadow">
        <label className="min-w-[70%] cursor-pointer">
          <h5 className="text-[#0F3963] font-bold">حدد طلبك</h5>
          <p className="font-bold text-gray2 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
            يمكنك إضافة مواصفات عقارك لنساعدك في إيجاد انسب عقار{" "}
          </p>
        </label>
        <Image
          src={"home/select-your-property.svg"}
          alt={`icon add property`}
          width="100"
          height="100"
          radius="none"
          className="min-w-[30px]"
        />
      </div>
    </Fragment>
  );
};
//background: linear-gradient(180deg, rgba(154, 204, 229, 0.16) 0%, rgba(110, 207, 255, 0.03) 100%);

export default OtherCards;
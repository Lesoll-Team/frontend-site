import Image from "next/image";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import SocialMedia from "./SocialMedia";
import Links from "./Links";
import CopyRight from "./CopyRight";
const Footer = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <footer className="bg-[#F0F0F0]" dir={`${language && "rtl"}`}>
      <div className="md:container  md:mx-auto mx-[1.9vw] flex flex-col md:space-y-[32px] space-y-[24px] md:py-[60px] py-[33px]">
        <div className="flex md:mx-auto mx-[8vw]  md:flex-row flex-col items-center gap-y-[16px] justify-center">
          <Image
            alt="Logo footer"
            width={200}
            height={100}
            className="  w-[121px] h-[40px]"
            priority={false}
            src={"/icons/logoNavbar.png"}
          />
          <div className=" ml-[16px]  hidden md:block bg-gray2 w-[1px] h-[26px] " />
          <div className=" w-full max-w-[200px] ">
            <SocialMedia />
          </div>
        </div>
        <div className="">
          <Links />
        </div>
        <div className="flex justify-center">
          <CopyRight />
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
/* <div className="space-y-5 flex flex-col ">
  <UsefulLinks />
</div>
<div className="space-y-5 flex flex-col">
  <Help />
</div>
<div className="space-y-5 flex flex-col">
  <Contact />
</div>
<div className="sm:hidden block  space-y-5 ">
  <SocialMedia />
</div> */

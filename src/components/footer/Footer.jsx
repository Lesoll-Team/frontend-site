import Image from "next/image";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import SocialMedia from "./SocialMedia";
// import UsefulLinks from "./UsefulLinks";
// import Help from "./Help";
// import Contact from "./Contact";
import Links from "./Links";
import CopyRight from "./CopyRight";
const Footer = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <footer className="bg-[#F0F0F0]" dir={`${language && "rtl"}`}>
      <div className="container  mx-auto flex flex-col space-y-[32px] py-[60px]">
        <div className="flex items-center  justify-center">
          <Image
            alt="Logo footer"
            width={200}
            height={100}
            className="  w-[121px] h-[40px]"
            priority
            src={"/icons/logoNavbar.png"}
          />
          <div className=" ml-[16px]   bg-gray2 w-[1px] h-[26px] "/>
          <div className="">
            <SocialMedia />
          </div>
        </div>
        <div>
          <Links/>
        </div>
        <div className="flex justify-center">
          <CopyRight/>
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
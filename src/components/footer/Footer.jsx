import Image from "next/image";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import SocialMedia from "./SocialMedia";
import UsefulLinks from "./UsefulLinks";
import Help from "./Help";
import Contact from "./Contact";
const Footer = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <footer dir={`${language && "rtl"}`}>
      <div className="container mx-auto md:grid  drop-shadow-2xl lg:grid-cols-5 grid-cols-3 gap-10 py-10 space-y-4">
        <div className="col-span-3 flex justify-between lg:justify-normal lg:flex-col lg:col-span-2 space-y-3 relative">
          <Image
            alt="Logo footer"
            width={200}
            height={100}
            className={` -mt-5 lg:w-[300px]  w-[200px] ${
              language ? "-mr-6 md:-mr-5 lg:-mr-9" : "-ml-6 md:-ml-5 lg:-ml-9"
            }`}
            priority
            src={"/icons/logoNavbar.png"}
          />
          <div className="sm:block hidden">
            <SocialMedia />
          </div>
        </div>
        <div className="space-y-5 flex flex-col ">
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
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);

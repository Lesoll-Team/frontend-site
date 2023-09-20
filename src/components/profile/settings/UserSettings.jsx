import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Link from "next/link";
//icons imports
import { BsKey, BsTelephone } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { GrCircleInformation } from "react-icons/gr";
import { useSelector } from "react-redux";
// componets imports
const PersonalInfo = dynamic(() => import("./PersonalInfo"));
const EditPassword = dynamic(() => import("./EditPassword"));
// import PersonalInfo from "./PersonalInfo";
// import EditPassword from "./EditPassword";

const UserSettings = () => {
  const [content, setContent] = useState("info");
  const language = useSelector((state) => state.GlobalState.languageIs);
  // switchcontent
  const switchInfo = () => {
    setContent("info");
  };
  const switchPassword = () => {
    setContent("password");
  };
  const switchPhone = () => {
    setContent("phonenumber");
  };

  return (
    <>
      <div className="">
        {/* user info */}
        <div className="w-full    overflow-hidden  rounded-b-lg">
          <div className="container mx-auto  py-10 relative pb-20 md:pb-0">
            <div className="flex justify-between items-center">
              <h2 className="  text-3xl font-bold">
                {language ? "اعدادات الحساب" : "Account Settings"}
              </h2>
              <Link
                href={"/profile"}
                className=" relative top-1 text-sm w-36 sm:w-32 text-center md:text-md px-2 sm:px-3 py-[5px] text-lightGreen border-2 border-lightGreen rounded-md flex justify-center items-center gap-1"
              >
                <AiOutlineUser className=" " />
                {language ? "الصفحة الشخصية" : "View Profile"}
              </Link>
            </div>
            <p className="mt-5 text-lg text-gray-500 font-semibold">
              {language
                ? "قم بتغير اعدادات حسابك هنا"
                : "Set Your Account Settings Down Blow"}
            </p>
            <div className="flex justify-start  md:gap-7 overflow-x-auto overflow-y-hidden items-center mt-20 md:static absolute bottom-0 left-0 mx-auto w-[100%]  border-b-[1px] border-gray-400 ">
              <div
                onClick={switchInfo}
                className={`text-center cursor-pointer font-semibold   pb-1 flex items-center gap-1 text-lg px-2 ${
                  content === "info" &&
                  "border-b-2 text-lightGreen  border-lightGreen  relative -bottom-[1px]"
                }`}
              >
                <p className="whitespace-nowrap ">
                  {language ? "المعلومات العامة" : "General Info"}
                </p>
              </div>
              <div
                onClick={switchPassword}
                className={`text-center cursor-pointer font-semibold pb-1 flex items-center gap-1 text-lg px-2 ${
                  content === "password" &&
                  "border-b-2 text-lightGreen  border-lightGreen  relative -bottom-[1px]"
                }`}
              >
                {/* <BsKey /> */}
                <p className="flex items-center gap-1 ">
                  {language ? "كلمة السر" : "Password"}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* user related data  */}
        <div className="container relative  py-10 mx-auto min-h-[80dvh]  md:gap-5">
          {/* option list */}

          {content === "info" ? (
            <PersonalInfo />
          ) : content === "password" ? (
            <EditPassword />
          ) : (
            "error"
          )}
        </div>
      </div>
    </>
  );
};

export default UserSettings;

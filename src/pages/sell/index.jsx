import AddProperty from "@/components/addproperty/AddProperty";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import { AiFillCheckCircle } from "react-icons/ai";
import Link from "next/link";
import { BiSolidLogIn, BiSolidLogInCircle } from "react-icons/bi";
const index = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userInfo = useSelector((state) => state.GlobalState.userData);
  // console.log(Boolean("userInfo"));
  return (
    // <div className="  bg-gradient-to-r from-lightGreen to-lightOrange">
    <div className=" ">
      <Head>
        <title>
          {language
            ? "اضف عقارك مع ليسول | موقع مخصص لبيع وايجار العقارات في مصر"
            : "Add property with Lesoll dedicated to selling and renting real estate"}
        </title>
        <meta
          name="description"
          content="اضف عقارك مع ليسول، فحن متخصصون في بيع وايجار جميع أنواع العقارات، شقق للبيع، شقق للايجار، اراضي للبيع والايجار، محلات للبيع والايجار، شقق دوبلكس"
        />
      </Head>
      {/* // <div className=""> */}
      {userInfo ? (
        <AddProperty />
      ) : (
        <div className=" mx-auto min-h-[97dvh]  flex justify-center items-center w-full">
          <div className="flex flex-col justify-center  items-center  space-y-10 p-5 md:mx-32 ">
            <div className="space-y-3 flex flex-col justify-center items-center">
              <BiSolidLogInCircle className="text-darkGreen text-8xl  animate-appearance-in" />
              <h3 className="text-2xl font-semibold text-black text-center">
                {language
                  ? "قم بتسجيل الدخول قبل اضافة العقار"
                  : "Please sign in to add your property"}
              </h3>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <Link
                title={language ? "سجل الدخول" : "Sign In"}
                className="text-xl bg-lightOrange px-5 border-[3px] items-center flex justify-center border-lightOrange text-white font-medium py-1 rounded-full w-[180px] text-center hover:text-lightOrange hover:bg-white"
                href={"/signin"}
              >
                {language ? "سجل الدخول" : "Sign In"}
              </Link>
              <Link
                title={language ? "سجل الان" : "Sign Up"}
                className="text-xl border-2 items-center flex justify-center hover:text-white hover:bg-lightOrange border-lightOrange px-5 text-lightOrange  font-medium py-1 rounded-full w-[180px] text-center"
                href={"/signup"}
              >
                {language ? "سجل الان" : "Sign Up"}
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* <AddProperty />
      ad */}
    </div>
  );
};

export default index;

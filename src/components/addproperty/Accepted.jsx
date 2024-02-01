import Link from "next/link";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const Accepted = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div className="flex flex-col justify-center h-full items-center w-full space-y-8 border rounded-2xl shadow-xl ">
      <div className="space-y-3 flex flex-col justify-center items-center">
        <AiFillCheckCircle className="text-green-500 text-8xl  animate-appearance-in" />
        <h3 className="text-2xl font-semibold text-darkGreen text-center">
          {language 
            ? " تمت إضافة العقار بنجاح"
            : "Property has been add successfully"}
        </h3>
        <p className="text-xl font-semibold text-darkGray text-center">
          {language
            ? "سيتم مراجعة العقار من فريق ليسول وسيتم الرد فى اقرب وقت "
            : "The property will be reviewed by the Lesoll team and a response will be given as soon as possible"}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Link
          className="text-xl bg-lightGreen px-5 border-[3px] items-center flex justify-center border-lightGreen text-white font-medium py-1 rounded-lg w-[180px] text-center"
          href={"/"}
          title={language ? "الرئيسية" : "Home"}
        >
          {language ? "الرئيسية" : "Home"}
        </Link>
        <Link
          className="text-xl border-2 items-center flex justify-center hover:text-white hover:bg-lightGreen border-lightGreen px-5 text-lightGreen  font-medium py-1 rounded-lg w-[180px] text-center"
          href={"/profile"}
          title={language ? "الصفحة الشخصية" : "Profile"}
        >
          {language ? "الصفحة الشخصية" : "Profile"}{" "}
        </Link>
      </div>
    </div>
  );
};

export default Accepted;

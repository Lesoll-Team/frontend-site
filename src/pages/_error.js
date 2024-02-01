import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Error = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div className="w-full h-[92dvh] grid place-content-center">
      <img
        src="/error-pic.svg"
        className="w-[95%] sm:w-[80%] md:w-[60%] mx-auto"
      />
      <h3 className="text-center font-bold text-lightOrange">
        {language ? "حدث خطأ" : "An error occurred"}
      </h3>

      <Link
        title={language ? "العودة الى الصفحة الرئيسية" : "Back to home page"}
        href={"/"}
        className="text-center font-semibold text-lightGreen underline mt-5 "
      >
        {" "}
        {language ? "العودة الى الصفحة الرئيسية" : "Back to home page"}{" "}
      </Link>
    </div>
  );
};

export default Error;

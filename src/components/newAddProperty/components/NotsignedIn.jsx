import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const NotsignedIn = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="w-full h-[90dvh] flex items-center justify-center container mx-auto">
      <div className="max-w-[450px] p-5 py-8 bg-white rounded-lg border w-full drop-shadow flex flex-col justify-center items-center gap-5 md:gap-8">
        <h3 className="text-base md:text-2xl font-semibold">
          {language
            ? "يجب عليك تسجيل الدخول اولا"
            : "You have to log in first "}
        </h3>
        <Link
          href={"/signin"}
          className="w-full rounded-full text-center py-3 bg-lightGreen text-white"
        >
          {language ? "سجل الدخول" : "Log In"}
        </Link>
      </div>
    </div>
  );
};

export default NotsignedIn;

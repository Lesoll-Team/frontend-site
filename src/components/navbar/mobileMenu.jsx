// import { Fragment } from "react";
import Link from "next/link";
import {
  MdSell,
  MdOutlineRealEstateAgent,
  MdAddHome,
  MdHomeFilled,
} from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";
import { ImQuestion } from "react-icons/im";
// import { RiCustomerService2Fill } from "react-icons/ri";
// import { ar } from "../../language/ar/common";
// import { en } from "../../language/en/common";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

export default function MobileMenu({ onInputClick }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const handleInputClick = () => {
    onInputClick(true);
  };
  return (
    <div className=" flex flex-col items-center ">
      <Link
        title={language ? "الصفحة الرئيسية" : "Home"}
        className=" flex py-4 rounded-full w-10/12 my-2 shadow-md  justify-center duration-300 text-lightGreen hover:bg-gray-200 hover:text-darkGreen  active:scale-95"
        href="/"
        onClick={handleInputClick}
      >
        <b className="flex items-center">
          <MdHomeFilled />
          {language ? "الصفحة الرئيسية" : "Home"}
        </b>
      </Link>

      <Link
        title={language ? "للإيجار" : "Rent"}
        className=" flex py-4 rounded-full w-10/12 my-2 shadow-md  justify-center duration-300 text-lightGreen hover:bg-gray-200 hover:text-darkGreen  active:scale-95"
        href="/rent/1"
        onClick={handleInputClick}
      >
        <b className="flex items-center">
          <MdSell />
          {language ? "للإيجار" : "Rent"}
        </b>
      </Link>

      <Link
        title={language ? "للبيع" : "Buy"}
        className=" flex py-4 rounded-full w-10/12 my-2 shadow-md  justify-center duration-300 text-lightGreen hover:bg-gray-200 hover:text-darkGreen  active:scale-95"
        href="/buy/1"
        onClick={handleInputClick}
      >
        <b className="flex items-center">
          <MdOutlineRealEstateAgent />
          {language ? "للبيع" : "Buy"}
        </b>
      </Link>

      <Link
        title={language ? "إضافة عقار" : "Sell"}
        className=" flex py-4 rounded-full w-10/12 my-2 shadow-md  justify-center duration-300 text-lightGreen hover:bg-gray-200 hover:text-darkGreen  active:scale-95"
        href="/sell"
        onClick={handleInputClick}
      >
        <b className="flex items-center">
          <MdAddHome />
          {language ? "إضافة عقار" : "Sell"}
        </b>
      </Link>

      <Link
        title={language ? "من نحن" : "About Us"}
        className=" flex py-4 rounded-full w-10/12 my-2 shadow-md  justify-center duration-300 text-lightGreen hover:bg-gray-200 hover:text-darkGreen  active:scale-95"
        href="/about"
        onClick={handleInputClick}
      >
        <b className="flex items-center">
          <ImQuestion />

          {language ? "من نحن" : "About Us"}
        </b>
      </Link>

      <Link
        title={language ? "التواصل" : "Contact"}
        className=" flex py-4 rounded-full w-10/12 my-2 shadow-md  justify-center duration-300 text-lightGreen hover:bg-gray-200 hover:text-darkGreen  active:scale-95"
        href="/contact"
        onClick={handleInputClick}
      >
        <b className="flex items-center">
          <TiUserAdd />

          {language ? "التواصل" : "Contact"}
        </b>
      </Link>
    </div>
  );
}

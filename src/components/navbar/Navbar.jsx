import dynamic from "next/dynamic";

import Link from "next/link";
import Image from "next/image";
import React, { memo, useState } from "react";

import { useSelector } from "react-redux";
import SideMenu from "./SideMenu";
import ChangeLang from "./ChangeLang";
import Notifications from "./Notifications";
import ProfileDropDown from "./ProfileDropDown";
const SearchModelButton = dynamic(() => import("./SearchModelButton"));
const SearchModel = dynamic(() => import("./SearchModel"));
function Navbar() {
  const languageIs = useSelector((state) => state.GlobalState.languageIs);
  const userData = useSelector((state) => state.userProfile.userData);
  const [isOpen, setOpen] = useState(false);

  const isCompany = userData?.typeOfUser === "company";
  return (
    <nav
      dir={languageIs ? "rtl" : "ltr"}
      className="w-full z-[700] sticky top-0 bg-white flex flex-col items-center justify-center drop-shadow-md"
    >
      {!userData && (
        <>
          <div className="py-2 container mx-auto flex justify-end gap-2 items-center text-lightGreen text-xs md:text-sm ">
            <Link href={"/signin"} title="signin">
              {languageIs ? "تسجيل الدخول" : "Sign in"}
            </Link>
            |
            <Link href={"/signup"} title="signin">
              {languageIs ? "التسجيل" : "Sign up"}
            </Link>
          </div>
          <div className="w-full h-[1px] bg-outLine" />
        </>
      )}

      <div className="container mx-auto">
        {/* Jump to Main Content Button */}
        <button href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </button>
      </div>

      <div
        className={`container mx-auto  relative flex justify-between h-16 ${
          userData ? "lg:h-[80px]" : "lg:h-[85px]"
        } `}
      >
        <div className="flex items-center gap-24">
          <Link href="/">
            <Image
              priority
              src={"/logo.svg"}
              width={114}
              height={46}
              alt="lesoll logo"
              className="h-[28px] w-[70px] lg:h-[36px] lg:w-[90px]"
            />
          </Link>

          <ul className="font-inter hidden text-base gap-5 2xl:text-xl text-baseGray lg:flex items-center">
            <li>
              <Link href="/">{languageIs ? "الرئيسية" : "Home"}</Link>
            </li>
            {/* <li>
              <Link href="/Packages">
                {languageIs ? "الباقات" : "Packages"}
              </Link>
            </li> */}
            <li>
              <Link href="/add-property">
                {languageIs ? "إضافة عقار" : "Add Property"}
              </Link>
            </li>
            <li>
              <Link
                href={isCompany ? "/needs" : "/add-need"}
                className="relative text-base 2xl:text-xl"
              >
                <span
                  className={`text-xs absolute text-white rounded-xl -top-5 bg-green-500 px-2 py-1 ${
                    languageIs ? "-left-8" : " -right-8"
                  }`}
                >
                  {languageIs ? "جديد" : "New"}
                </span>
                {isCompany
                  ? languageIs
                    ? "الطلبات"
                    : " Needs"
                  : languageIs
                    ? "إضافة طلب"
                    : "Add Need"}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-5  md:gap-4">
          <div className="flex items-center gap-3 md:gap-4 md:flex-row flex-row-reverse">
            <div className="flex items-center  gap-3">
              <SearchModelButton isOpen={isOpen} setOpen={setOpen} />
              {userData && <Notifications />}
            </div>
            {userData && <ProfileDropDown />}
            <ChangeLang bigScreen={true} />
          </div>

          <SideMenu />
        </div>

        <div
          className={` absolute w-11/12 ${
            userData ? "top-[65px] lg:top-[81px]" : "lg:top-[85px] top-[64px]"
          }  justify-center flex items-center`}
        >
          {isOpen && <SearchModel isOpen={isOpen} setOpen={setOpen} />}
        </div>
      </div>
    </nav>
  );
}
export default memo(Navbar);

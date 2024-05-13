import dynamic from "next/dynamic";

import { useUser } from "@/Shared/UserContext";
import Link from "next/link";
import Image from "next/image";
import React, { memo, useState } from "react";

import { useSelector } from "react-redux";
import SideMenu from "./SideMenu";
import ChangeLang from "./ChangeLang";
import Notifications from "./Notifications";
import ProfileDropDown from "./ProfileDropDown";
import NeedsLink from "./NeedsLink";
const SearchModelButton = dynamic(() => import("./SearchModelButton"));
const SearchModel = dynamic(() => import("./SearchModel"));
function Navbar() {
  const languageIs = useSelector((state) => state.GlobalState.languageIs);
  const { data } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      dir={languageIs ? "rtl" : "ltr"}
      className="w-full z-[700] sticky top-0 bg-white flex flex-col items-center justify-center drop-shadow-md font-noto"
    >
      <div
        className={`container mx-auto  relative flex justify-between h-16 ${
          data ? "lg:h-[80px]" : "lg:h-[85px]"
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
              <Link href="/" className="font-noto">
                {languageIs ? "الرئيسية" : "Home"}
              </Link>
            </li>
            <li>
              <Link href="/packages" className="font-noto">
                {languageIs ? "الباقات" : "Packages"}
              </Link>
            </li>
            <li>
              <Link href="/add-property" className="font-noto">
                {languageIs ? "إضافة عقار" : "Add Property"}
              </Link>
            </li>

            <li>
              <NeedsLink />
            </li>
            <li>
              <Link className="relative font-noto" href="/projects">
                <span
                  className={`text-xs absolute text-white rounded-xl -top-4 bg-green-500 px-2 py-1 ${
                    languageIs ? "-left-8" : " -right-8"
                  }`}
                >
                  {languageIs ? "جديد" : "New"}
                </span>
                <span>
                  {" "}
                  {languageIs ? "المشروعات الجديدة" : "New Projects"}
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-5  md:gap-4">
          <div className={`flex items-center gap-3 md:gap-4`}>
            {!data && (
              <div className="py-2   flex  gap-x-2 items-center text-lightGreen text-xs md:text-sm ">
                <Link href={"/signin"} title="signin">
                  {languageIs ? "تسجيل الدخول" : "Sign in"}
                </Link>
                |
                <Link href={"/signup"} title="signin">
                  {languageIs ? "التسجيل" : "Sign up"}
                </Link>
              </div>
            )}
            <div className="flex items-center  gap-3">
              <SearchModelButton isOpen={isOpen} setOpen={setIsOpen} />
              {data && <Notifications />}
            </div>

            {data && <ProfileDropDown />}
            <ChangeLang bigScreen={true} />
          </div>

          <SideMenu />
        </div>

        <div
          className={` absolute w-11/12 ${
            data ? "top-[65px] lg:top-[81px]" : "lg:top-[85px] top-[64px]"
          }  justify-center flex items-center`}
        >
          {isOpen && <SearchModel isOpen={isOpen} setOpen={setIsOpen} />}
        </div>
      </div>
    </nav>
  );
}
export default memo(Navbar);

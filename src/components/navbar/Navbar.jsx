import Link from "next/link";
import Image from "next/image";
import SearchModel from "./SearchModel";
import { useSelector } from "react-redux";
import SideMenu from "./SideMenu";
import ChangeLang from "./ChangeLang";
import Notifications from "./Notifications";
export default function Navbar() {
  const languageIs = useSelector((state) => state.GlobalState.languageIs);
  const userData = useSelector((state) => state.userProfile.userData);
  const isCompany = userData?.typeOfUser === "company";
  return (
    <nav
      dir={languageIs ? "rtl" : "ltr"}
      className="w-full z-[1000] sticky top-0 bg-white flex flex-col items-center justify-center drop-shadow-md"
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
        className={`container mx-auto flex justify-between h-16 ${
          userData ? "lg:h-[90px]" : "lg:h-[85px]"
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
              className="h-[28px] w-[70px] lg:h-[46px] lg:w-[114px]"
            />
          </Link>

          <ul className="font-inter hidden text-xl gap-5 text-baseGray lg:flex">
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
                href={isCompany ? "/needs" : "add-need"}
                className="relative"
              >
                <span
                  className={`text-sm absolute text-white rounded-xl -top-5 bg-green-500 px-2 py-1 ${
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
        <div className="flex items-center gap-3  md:gap-4">
          <div className="flex items-center gap-3 md:gap-4 md:flex-row flex-row-reverse">
            <div className="flex items-center  gap-4">
              <SearchModel />
              {userData && <Notifications />}
            </div>
            <ChangeLang bigScreen={true} />
            {userData && (
              <Link className=" " href={"/profile"}>
                <Image
                  src={userData?.avatarUrl || "/user-avatar-placeholder.png"}
                  width={50}
                  height={50}
                  className="rounded-full object-cover h-7 w-7 sm:w-[30px] sm:h-[30px] lg:h-[50px] lg:w-[50px]"
                  alt="Profile image"
                />
              </Link>
            )}
          </div>

          <SideMenu />
        </div>
      </div>
    </nav>
  );
}

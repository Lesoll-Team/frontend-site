import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { IoMdCard, IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { LuFileText } from "react-icons/lu";
import { MdOutlineAddHomeWork, MdOutlineHeadsetMic } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ChangeLang from "./ChangeLang";
import { logoutUserToken } from "@/redux-store/features/authSlice";
import { clearUserData } from "@/redux-store/features/auth/userProfileSlice";
import { useRouter } from "next/router";
import { useWindowWidth } from "@/Hooks/useWindowWidth";

const SideMenu = () => {
  const { windowWidth } = useWindowWidth();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userData = useSelector((state) => state.userProfile.userData);
  const dispatch = useDispatch();
  const router = useRouter();
  const isCompany = userData?.typeOfUser === "company";
  const [showSideMenu, setShowSideMenu] = useState(false);
  const openSideMenu = () => {
    setShowSideMenu(true);
  };
  const closeSideMenu = () => {
    setShowSideMenu(false);
  };
  const handleLogout = () => {
    dispatch(logoutUserToken());
    dispatch(clearUserData());
    localStorage.removeItem("userToken");
    localStorage.removeItem("userIsLogin");
    router.push("/signin");
  };
  useEffect(() => {
    // Prevent scrolling when the SideMenu component is mounted
    if (showSideMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      // Enable scrolling when the SideMenu component is unmounted
      document.body.style.overflow = "auto";
    };
  }, [showSideMenu]);
  useEffect(() => {
    if (windowWidth > 1024) {
      setShowSideMenu(false);
    }
  }, [windowWidth]);
  return (
    <>
      <button onClick={openSideMenu} className="lg:hidden">
        <IoMdMenu className="text-2xl" />
      </button>
      {showSideMenu && (
        <div className="absolute w-screen h-screen top-0 left-0  lg:hidden bg-white px-8 pt-4 space-y-8 overflow-auto  pb-5">
          <div className="w-full flex justify-center items-center relative ">
            <Image
              src={"/logo.svg"}
              width={114}
              height={46}
              alt="lesoll logo"
              className="h-[28px] w-[70px] "
            />
            <button onClick={closeSideMenu} className="absolute left-0">
              <IoClose className="text-xl" />
            </button>
          </div>
          {userData && (
            <div className="mx-auto flex justify-center items-center gap-3 flex-col">
              <Link href={"/profile"} onClick={closeSideMenu}>
                <Image
                  src={userData?.avatarUrl || "/user-avatar-placeholder.png"}
                  width={84}
                  height={84}
                  className="rounded-full object-cover"
                  alt="Profile image"
                />
              </Link>
              <Link
                href={"/profile"}
                onClick={closeSideMenu}
                className="max-w-[95%] text-center"
              >
                <p className="text-base text-darkGray font-bold  ">
                  {userData?.fullname}
                </p>
              </Link>
              <div className="p-2 rounded-md bg-lightNeutral text-lightGreen font-bold flex items-center gap-2 text-xs">
                <p>
                  {language ? "الطلبات" : "Needs"}{" "}
                  <span className="text-baseGray">2</span>
                </p>
                <p>
                  {language ? "عدد العقارات" : "Properties"}{" "}
                  <span className="text-baseGray">2</span>
                </p>
              </div>
            </div>
          )}
          <div className="flex flex-col justify-start gap-7 text-base text-darkGray">
            <Link
              onClick={closeSideMenu}
              href={"/"}
              className="flex items-center gap-4"
            ></Link>
            <Link
              onClick={closeSideMenu}
              href={"/"}
              className="flex items-center gap-4"
            >
              <GoHome className="text-baseGray text-lg" />
              <span>{language ? "الرئيسية" : "Home"}</span>
            </Link>
            <Link
              onClick={closeSideMenu}
              href={"/"}
              className="flex items-center gap-4"
            >
              <IoMdCard className="text-baseGray text-lg" />
              <span>{language ? "الباقات" : "Packages"}</span>
            </Link>
            <Link
              onClick={closeSideMenu}
              href={"/add-property"}
              className="flex items-center gap-4"
            >
              <MdOutlineAddHomeWork className="text-baseGray text-lg" />

              <span>{language ? "إضافة عقار" : "Add Property"}</span>
            </Link>
            <Link
              onClick={closeSideMenu}
              href={isCompany ? "/needs" : "add-need"}
              className="flex items-center gap-4"
            >
              <AiOutlineEdit className="text-baseGray text-lg" />

              <span>
                {" "}
                {isCompany
                  ? language
                    ? "الطلبات"
                    : " Needs"
                  : language
                  ? "إضافة طلب"
                  : "Add Need"}
              </span>
            </Link>
            <Link
              onClick={closeSideMenu}
              href={"/blog"}
              className="flex items-center gap-4"
            >
              <LuFileText className="text-baseGray text-lg" />

              <span>{language ? "المقالات" : "Blogs"}</span>
            </Link>
            <Link
              onClick={closeSideMenu}
              href={"/contact-us"}
              className="flex items-center gap-4"
            >
              <MdOutlineHeadsetMic className="text-baseGray text-lg" />

              <span>{language ? "تواصل معنا" : "Contact Us"}</span>
            </Link>
          </div>
          <hr className="w-10/12" />
          <div className="grid gap-5">
            <ChangeLang />
            {userData && (
              <button onClick={handleLogout} className="text-red-600 w-fit">
                {language ? "تسجيل الخروج" : "Log out"}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default SideMenu;

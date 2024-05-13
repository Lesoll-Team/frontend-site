import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { LuFileText } from "react-icons/lu";
import {
  MdOutlineAddHomeWork,
  MdOutlineHeadsetMic,
  MdOutlinePayment,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ChangeLang from "./ChangeLang";
import { clearUserData } from "@/redux-store/features/auth/userProfileSlice";
import { useRouter } from "next/router";
import { useWindowWidth } from "@/Hooks/useWindowWidth";
import { useUser } from "@/Shared/UserContext";
// import io from "socket.io-client";

const SideMenu = () => {
  const { windowWidth } = useWindowWidth();
  const [showNeedMenu, setShowNeedMenu] = useState(false);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { data, logOutUserData } = useUser();

  const dispatch = useDispatch();
  const router = useRouter();
  const isCompany = data?.typeOfUser === "company";
  const [showSideMenu, setShowSideMenu] = useState(false);
  const openSideMenu = () => {
    setShowSideMenu(true);
  };
  const closeSideMenu = () => {
    setShowSideMenu(false);
  };
  const toggleNeedMenu = () => {
    setShowNeedMenu((prev) => !prev);
  };
  const handleLogout = () => {
    dispatch(clearUserData());
    logOutUserData();
    Cookies.remove("userToken");
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
  // useEffect(() => {
  //   const socket = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`, {
  //     transports: ["websocket"],
  //     withCredentials: true,
  //   });
  //   if (userData?._id) {
  //     socket.emit("online", { userId: userData._id });
  //   }
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [userData?._id]);
  return (
    <>
      <button onClick={openSideMenu} className="lg:hidden">
        <IoMdMenu className="text-2xl" />
      </button>
      {showSideMenu && (
        <div
          className={`absolute w-screen sm:w-full h-screen top-0 left-0   lg:hidden  bg-white px-8 pt-4 space-y-8 overflow-auto  pb-20 ${language ? "sm:right-20" : "sm:left-12"}`}
        >
          <div className="w-full flex justify-center items-center relative ">
            <Link href={"/"} onClick={closeSideMenu}>
              <Image
                src={"/logo.svg"}
                width={114}
                height={46}
                alt="lesoll logo"
                className="h-[28px] w-[70px] "
              />
            </Link>
            <button
              onClick={closeSideMenu}
              className={`absolute  left-0 ${language ? "sm:right-0" : "sm:left-0"}`}
            >
              <IoClose className="text-xl" />
            </button>
          </div>
          {data && (
            <div className="mx-auto flex justify-center items-center gap-3 flex-col">
              <Link href={"/profile"} onClick={closeSideMenu}>
                <Image
                  src={data?.avatarUrl || "/user-avatar-placeholder.png"}
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
                  {data?.fullname}
                </p>
              </Link>
            </div>
          )}
          <div className="flex flex-col justify-start gap-7 text-base text-darkGray">
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
              href="/prices"
              className="flex items-center gap-4"
            >
              <MdOutlinePayment className="text-baseGray text-lg" />

              {language ? "الباقات" : "Packages"}
            </Link>
            <Link
              onClick={closeSideMenu}
              href={"/projects"}
              className="flex items-center gap-4"
            >
              <Image width={18} height={18} src={"/icons/projects-icon.svg"} />
              <span>{language ? "المشاريع الجديدة" : "New Projects"}</span>
            </Link>

            <Link
              onClick={closeSideMenu}
              href={"/add-property"}
              className="flex items-center gap-4"
            >
              <MdOutlineAddHomeWork className="text-baseGray text-lg" />

              <span>{language ? "إضافة عقار" : "Add Property"}</span>
            </Link>
            <div className="space-y-2">
              <button
                onClick={toggleNeedMenu}
                href={isCompany ? "/needs" : "/add-need"}
                className="flex items-center gap-4 w-full"
              >
                <div className="flex items-center justify-between gap-4 ">
                  <AiOutlineEdit className="text-baseGray text-lg" />

                  <span> {language ? "الطلبات" : " Needs"}</span>
                </div>
                <IoIosArrowDown
                  className={`mt-1 duration-100 ${showNeedMenu && "rotate-180 duration-100"}`}
                />
              </button>
              {showNeedMenu && (
                <div className="mx-6 space-y-2">
                  <Link
                    onClick={closeSideMenu}
                    href={"/add-need"}
                    className="flex items-center gap-4"
                  >
                    <span>{language ? "إضافة طلب" : "Add Need"}</span>
                  </Link>
                  <Link
                    onClick={closeSideMenu}
                    href={"/needs"}
                    className="flex items-center gap-4"
                  >
                    <span>{language ? " رؤية جميع الطلبات" : " Needs"}</span>
                  </Link>
                </div>
              )}
            </div>
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
            {data && (
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

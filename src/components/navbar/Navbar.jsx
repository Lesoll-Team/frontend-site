import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import logoNavbar from "../../../public/icons/logoNavbar.png";
import { useState, useEffect, useRef } from "react";
import { MdNotificationsNone, MdClear } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchModel from "./SearchModel";
const NotificationMenu = dynamic(() => import("./notificationMenu"));

import { useDispatch, useSelector } from "react-redux";
import { setLang } from "@/redux-store/features/globalState";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import SideMenu from "./SideMenu";
import ChangeLang from "./ChangeLang";
export default function Navbar() {
  const router = useRouter();

  const dispatch = useDispatch();
  const [countNotifications, setCountNotifications] = useState(0);

  const calcCount = (dataFromChild) => {
    setCountNotifications(dataFromChild);
  };
  const languageIs = useSelector((state) => state.GlobalState.languageIs);

  const [open, setOpen] = useState(true);

  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const userData = useSelector((state) => state.userProfile.userData);

  const mobileMenuRef = useRef(null);
  const notificationsMenuRef = useRef(null);

  const handleInputClick = (value) => {
    setOpenUserMenu(setOpen(value));
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setOpen(true);
      }
      if (
        notificationsMenuRef.current &&
        !notificationsMenuRef.current.contains(event.target)
      ) {
        setNotifications(false);
      }
    }
    function handleRouteChangeStart() {
      setNotifications(false);
      setOpen(true);
    }

    document.addEventListener("mousedown", handleClickOutside);
    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [mobileMenuRef, notificationsMenuRef, router]);

  return (
    // <nav className="w-full  z-[1000]  sticky  top-0 drop-shadow-md ">
    //   <section
    //     className="flex  relative bg-white  h-[80px] items-center "
    //     dir={`${languageIs ? "rtl" : ""}`}
    //   >
    //     {/*Logo */}
    //     <ul className=" flex w-3/12  md:justify-center ">
    //       <li className="sm:w-[150px] w-[100px] flex  justify-center">
    //         <Link className="" href={"/"}>
    //           <Image
    //             src={logoNavbar}
    //             width={"auto"}
    //             height={"auto"}
    //             alt="logo navbar"
    //             loading="eager"
    //             priority
    //           />
    //         </Link>
    //       </li>
    //     </ul>

    //     {/*nav link web page */}
    //     <ul className={` lg:flex  w-5/12 space-x-2 hidden`}>
    //       <LinksNavbar />
    //     </ul>
    //     <ul
    //       className={`lg:w-4/12 w-8/12  flex justify-end lg:justify-center  mr-4  space-x-2 items-center`}
    //     >
    //       {/*button search*/}
    //       <SearchModel />

    //       {/*button language*/}
    //       <li className={`  lg:flex hidden`}>
    //         {languageIs ? (
    //           <button
    //             onClick={() => dispatch(setLang(false))}
    //             className="
    //           flex py-1 px-1   w-24   text-md rounded-full duration-300 text-darkGreen bg-white hover:bg-gray-100 hover:text-darkGreen justify-center  active:scale-95 items-center "
    //           >
    //             English
    //           </button>
    //         ) : (
    //           <button
    //             onClick={() => dispatch(setLang(true))}
    //             className="
    //           flex py-1 px-1   w-24   text-md rounded-full duration-300 text-darkGreen bg-white hover:bg-gray-100 hover:text-darkGreen justify-center  active:scale-95 items-center "
    //           >
    //             عربى
    //           </button>
    //         )}
    //       </li>

    //       {/*button Notifications */}
    //       <li className={` ${userData ? " " : "hidden"} relative`}>
    //         <Badge content={countNotifications} shape="circle" color="danger">
    //           <Button
    //             onClick={() => setNotifications(!notifications)}
    //             radius="full"
    //             isIconOnly
    //             color="primary"
    //             aria-label="more than 99 notifications"
    //             variant="light"
    //           >
    //             <MdNotificationsNone className="text-lightGreen" size={30} />
    //           </Button>
    //         </Badge>
    //       </li>

    //       {/*button SignUp*/}
    //       <li className={`  ${userData ? "hidden" : ``} `}>
    //         <button className="">
    //           <Link
    //             title={userData ? "" : languageIs ? "تسجيل الدخول" : "Sign In"}
    //             className="  py-1 px-1 sm:px-5 text-sm sm:text-md font-semibold  border-lightOrange border-[2px] sm:text-md bg-white
    //             rounded-3xl duration-300 text-lightOrangeHover hover:bg-lightOrangeHover hover:text-white active:scale-95"
    //             href="/signin"
    //           >
    //             {userData ? "" : languageIs ? "تسجيل الدخول" : "Sign In"}
    //           </Link>
    //         </button>
    //       </li>

    //       {/*user section*/}
    //       <UserDropdown classNamed={`  ${userData ? "" : "hidden"} relative`} />
    //     </ul>

    //     {/*button mobile links*/}
    //     <ul className="flex  w-1-12  mx-2 justify-center  lg:hidden">
    //       <button
    //         className="flex justify-center "
    //         onClick={() => setOpen(!open)}
    //       >
    //         {open ? (
    //           <GiHamburgerMenu className=" text-darkGreen text-3xl		" />
    //         ) : (
    //           <MdClear className=" text-darkGreen 	 text-4xl" />
    //         )}
    //       </button>
    //     </ul>
    //   </section>

    //   {/*links in menu mobile button*/}
    //   <section
    //     id="menu-mobile"
    //     dir={`${languageIs ? "rtl" : "ltr"}`}
    //     className="  flex justify-end  relative"
    //   >
    //     <div
    //       className={`  w-full h-screen  bg-white lg:hidden ${
    //         open
    //           ? "hidden"
    //           : `${notifications ? `${setNotifications(false)}` : ``}`
    //       } `}
    //       ref={mobileMenuRef}
    //     >
    //       <div className="items-center overflow-hidden ">
    //         <MobileMenu onInputClick={handleInputClick} />
    //         <div className={` flex  justify-center`}>
    //           {languageIs ? (
    //             <button
    //               onClick={() => dispatch(setLang(false))}
    //               className=" flex py-4 rounded-full w-10/12 my-2 shadow-md  justify-center duration-300 text-lightGreen hover:bg-gray-200 hover:text-darkGreen  active:scale-95"
    //             >
    //               English
    //             </button>
    //           ) : (
    //             <button
    //               onClick={() => dispatch(setLang(true))}
    //               className=" flex py-4 rounded-full w-10/12 my-2 shadow-md  justify-center duration-300 text-lightGreen hover:bg-gray-200 hover:text-darkGreen  active:scale-95"
    //             >
    //               عربى
    //             </button>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //     {/*dropdown notifications */}
    //     <ul
    //       id="notifications-data"
    //       className={`bg-gray-200 ${
    //         notifications ? "" : "hidden"
    //       }   h-screen  overflow-auto lg:absolute rounded-md p-2 lg:w-3/12 w-full `}
    //     >
    //       <NotificationMenu
    //         sendCount={calcCount}
    //         setCountNotifications={setCountNotifications}
    //         setNotificationsOpen={setNotifications}
    //         notificationsMenuRef={notificationsMenuRef}
    //       />
    //     </ul>
    //   </section>
    // </nav>
    <nav
      dir={languageIs ? "rtl" : "ltr"}
      className="w-full h-14 lg:h-[95px]  z-[1000]  sticky  top-0 bg-white flex items-center justify-center drop-shadow-md"
    >
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center gap-24">
          <Image
            src={"/logo.svg"}
            width={114}
            height={46}
            alt="lesoll logo"
            className="h-[28px] w-[70px] lg:h-[46px] lg:w-[114px]"
          />

          <div className="font-inter hidden text-xl gap-5 text-baseGray lg:flex">
            <Link href="/">{languageIs ? "الرئيسية" : "Home"}</Link>
            <Link href="/Packages">{languageIs ? "الباقات" : "Packages"}</Link>
            <Link href="/add-property">
              {languageIs ? "إضافة عقار" : "Add Property"}
            </Link>
            <Link href="/add-need" className="relative">
              <span
                className={`text-sm absolute text-white rounded-xl -top-4 bg-green-500 px-2 py-1 ${
                  languageIs ? "-left-7" : " -right-7"
                }`}
              >
                {languageIs ? "جديد" : "New"}
              </span>
              {languageIs ? "إضافة طلب" : "Add Need"}
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex items-center gap-4">
            <AiOutlineSearch className="text-lightGreen text-2xl hidden md:block" />
            {userData && (
              <IoIosNotificationsOutline className="text-darkGray text-3xl" />
            )}
          </div>
          <ChangeLang bigScreen={true} />
          {userData && (
            <Link className="hidden md:block" href={"/profile"}>
              <Image
                src={userData?.avatarUrl || "/user-avatar-placeholder.png"}
                width={50}
                height={50}
                className="rounded-full object-cover h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]"
                alt="Profile image"
              />
            </Link>
          )}

          <SideMenu />
        </div>
      </div>
    </nav>
  );
}

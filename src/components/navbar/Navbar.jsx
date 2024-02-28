import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import logoNavbar from "../../../public/icons/logoNavbar.png";
import { useState, useEffect, useRef } from "react";
import ReactCountryFlag from "react-country-flag";
import { MdNotificationsNone, MdClear } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLanguage } from "react-icons/io5";
// import { FaSearch } from "react-icons/fa";
// import SearchModel from "./SearchModel";
const NotificationMenu = dynamic(() => import("./notificationMenu"));
// const UserDropdown = dynamic(() => import("./userDropdown"));

import LinksNavbar from "./linksNavbar";
import MobileMenu from "./mobileMenu";

import { useDispatch, useSelector } from "react-redux";
import { handleLanguage } from "@/redux-store/features/globalState";
import { Badge, Button } from "@nextui-org/react";
import { useRouter } from "next/router";
// import { useFilterContextState } from "@/Shared/layout";
// import SidebarFilter from "../category/sidebarFilter";
import UserDropdown from "./userDropdown";
export default function Navbar() {
  const router = useRouter();
  // let { openFilter, setOpenFilter } = useFilterContextState();

  const dispatch = useDispatch();
  const [countNotifications, setCountNotifications] = useState(0);

  const calcCount = (dataFromChild) => {
    setCountNotifications(dataFromChild);
  };
  const languageIs = useSelector((state) => state.GlobalState.languageIs);
  const [open, setOpen] = useState(true);
  // const [openUserMenu, setOpenUserMenu] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const isLoading = useSelector((state) => state.Auth.isLoding);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(isLoading);
  });
  const mobileMenuRef = useRef(null);
  const notificationsMenuRef = useRef(null);

  // const handleInputClick = (value) => {
  //   setOpenUserMenu(setOpen(value));
  // };
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setOpen(true);
        // setOpenFilter(false);
      }
      if (
        notificationsMenuRef.current &&
        !notificationsMenuRef.current.contains(event.target)
      ) {
        setNotifications(false);
        // setOpenFilter(false);
      }
    }

    function handleRouteChangeStart() {
      setNotifications(false);
      setOpen(true);
      // setOpenFilter(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [mobileMenuRef, notificationsMenuRef, router]);
  return (
    <nav className="w-full  z-[700]  sticky  top-0 drop-shadow-md ">
      {/**
       *
       *
       *
       *
       *
       *
       *
       *
       *
       *
       *
       */}

      {/* {openFilter && (
        <SidebarFilter
          notificationsMenuRef={notificationsMenuRef}
          languageIs={languageIs}
          setOpenFilter={setOpenFilter}
        />
      )} */}

      {/**
       *
       *
       *
       *
       *
       *
       *
       *
       *
       *
       */}
      <section
        className="flex  relative bg-white  h-[80px] items-center "
        dir={`${languageIs && "rtl"}`}
      >
        {/* <button onClick={() => setOpenFilter(!openFilter)}>sss</button> */}
        {/*Logo */}
        <ul className=" flex w-3/12  md:justify-center ">
          <li className="sm:w-[150px] w-[100px] flex  justify-center">
            <Link className="" href={"/"}>
              <Image
                src={logoNavbar}
                width={"auto"}
                height={"auto"}
                alt="logo navbar"
                loading="eager"
                priority
              />
            </Link>
          </li>
        </ul>

        {/*nav link web page */}
        <ul className={` lg:flex  w-5/12 space-x-2 hidden`}>
          <LinksNavbar />
        </ul>
        <ul
          className={`lg:w-4/12 w-8/12  flex justify-end lg:justify-center  mr-4  space-x-2 items-center`}
        >
          {/*button search*/}
          {/* <SearchModel /> */}

          {/*button language*/}
          <li className={`  lg:flex hidden`}>
            <button
              onClick={() => dispatch(handleLanguage())}
              className="
              flex py-1 px-1   w-24   text-md rounded-full 
                            duration-300 text-darkGreen bg-white hover:bg-gray-100 hover:text-darkGreen justify-center  active:scale-95 items-center "
            >
              <ul className="mx-1">
                {languageIs ? (
                  <ReactCountryFlag
                    countryCode="US"
                    svg
                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                    cdnSuffix="svg"
                    title="US"
                    alt="US-lan"
                  />
                ) : (
                  <ReactCountryFlag
                    countryCode="EG"
                    svg
                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                    cdnSuffix="svg"
                    title="US"
                    alt="EG-lan"
                  />
                )}
              </ul>
              <ul className="mx-1">{languageIs ? `English` : `عربى`}</ul>
            </button>
          </li>

          {/*button Notifications */}
          <li className={` ${!isAuth && "hidden"} relative`}>
            <Badge content={countNotifications} shape="circle" color="danger">
              <Button
                onClick={() => setNotifications(!notifications)}
                radius="full"
                isIconOnly
                color="primary"
                aria-label="more than 99 notifications"
                variant="light"
              >
                <MdNotificationsNone className="text-lightGreen" size={30} />
              </Button>
            </Badge>
          </li>

          {/*button SignUp*/}
          <li className={`  ${isAuth && "hidden"} `}>
            <button className="">
              <Link
                title={isAuth ?? languageIs ? "تسجيل الدخول" : "Sign In"}
                className="  py-1 px-1 sm:px-5 text-sm sm:text-md font-semibold  border-lightOrange border-[2px] sm:text-md bg-white 
                rounded-3xl duration-300 text-lightOrangeHover hover:bg-lightOrangeHover hover:text-white active:scale-95"
                href="/signin"
              >
                {isAuth ?? languageIs ? "تسجيل الدخول" : "Sign In"}
              </Link>
            </button>
          </li>

          {/*user section*/}
          <UserDropdown classNamed={`  ${isAuth ?? "hidden"} relative`} />
        </ul>

        {/*button mobile links*/}
        <ul className="flex  w-1-12  mx-2 justify-center  lg:hidden">
          <button
            className="flex justify-center "
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <GiHamburgerMenu className=" text-darkGreen text-3xl		" />
            ) : (
              <MdClear className=" text-darkGreen 	 text-4xl" />
            )}
          </button>
        </ul>
      </section>

      {/*links in menu mobile button*/}
      <section
        id="menu-mobile"
        dir={`${languageIs ? "rtl" : "ltr"}`}
        className="  flex justify-end  relative"
      >
        <div
          className={`w-full h-screen  bg-white lg:hidden 
          ${open ? "hidden" : notifications && setNotifications(false)} `}
          ref={mobileMenuRef}
        >
          <div className="items-center overflow-hidden ">
            <MobileMenu />
            <div className={` flex  justify-center`}>
              <button
                onClick={() => dispatch(handleLanguage())}
                className=" flex py-4 rounded-full w-10/12 my-2 shadow-md  justify-center duration-300 text-lightGreen hover:bg-gray-200 hover:text-darkGreen  active:scale-95"
              >
                <div className="flex items-center">
                  <IoLanguage />
                  <div className="mx-2">
                    {languageIs ? "English" : "  عربى "}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/*dropdown notifications */}
        <ul
          id="notifications-data"
          className={`bg-gray-200 ${
            notifications ? "" : "hidden"
          }   h-screen  overflow-auto lg:absolute rounded-md p-2 lg:w-3/12 w-full `}
        >
          <NotificationMenu
            sendCount={calcCount}
            setCountNotifications={setCountNotifications}
            setNotificationsOpen={setNotifications}
            notificationsMenuRef={notificationsMenuRef}
          />
        </ul>
      </section>
    </nav>
  );
}

import Link from "next/link";
import Image from "next/image";
import logoNavbar from "../../../public/icons/logoNavbar.png";
import { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { MdNotificationsNone, MdClear } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLanguage } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
// import arLanguage from "../../../public/locales/ar/common.js";
// import enLanguage from "../../../public/locales/en/common.js";
import LinksNavbar from "./linksNavbar";
import MobileMenu from "./mobileMenu";
import NotificationMenu from "./notificationMenu";
// import UserMenu from "./userMenu";
import UserDropdown from "./userDropdown";
import { useDispatch, useSelector } from "react-redux";
import { handleLanguage } from "@/redux-store/features/globalState";
import { Badge, Button } from "@nextui-org/react";
import ar from "../../language/ar/common";
import en from "../../language/en/common";
export default function Navbar() {
  const dispatch = useDispatch();
  const [countNotifications, setCountNotifications] = useState(0);

  const calcCount = (dataFromChild) => {
    setCountNotifications(dataFromChild);
  };
  const languageIs = useSelector((state) => state.GlobalState.languageIs);

  // const [arbLanguage] = useState(ar);
  // const [engLanguage] = useState(en);

  const [open, setOpen] = useState(true);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const userInfo = useSelector((state) => state.GlobalState.userData);
  const isLoading = useSelector((state) => state.Auth.isLoding);

  const [userDataInfo, setUserDataInfo] = useState({});
  const [isAuth, setAuth] = useState(false);

  function toggleSearch() {
    setSearchVisible(!searchVisible);
  }

  const handleInputClick = (value) => {
    setOpenUserMenu(setOpen(value));
  };

  useEffect(() => {
    setAuth(isLoading);
    setUserDataInfo(userInfo);
    // console.log(userDataInfo);
  });
  return (
    <nav className="w-full  z-[1000]  sticky  top-0 drop-shadow-md">
      <section
        className="flex  relative bg-white  h-[80px] items-center "
        dir={`${languageIs ? "rtl" : ""}`}
      >
        {/*Logo */}
        <ul className=" flex w-3/12  md:justify-center ">
          <li className="sm:w-[150px] w-[100px] flex  justify-center">
            <Link
              className=""
              href={"/"}
              onClick={() => setOpenUserMenu(setOpen(true))}
            >
              <Image
                src={logoNavbar}
                width={"auto"}
                height={"auto"}
                alt="Logo"
                loading="eager"
                priority
              />
            </Link>
          </li>
        </ul>

        {/*nav link web page */}
        <ul className={` md:flex  w-5/12 space-x-2 hidden`}>
          {/**${
            searchVisible ? "hidden" : "md:flex"
          }  */}
          <LinksNavbar />
        </ul>
        <ul
          className={`md:w-4/12 w-8/12  flex justify-end md:justify-center  mr-4  space-x-2 items-center`}
        >
          {/**${
            searchVisible ? "w-8/12 " : "md:w-4/12 w-8/12"
          } */}
          <Link href="/search">
            <ul className={`py-2 mr-1`}>
              {/** ${searchVisible ? "w-full " : ""} */}
              <li className={` flex items-center  `}>
                <Button isIconOnly className="bg-inherit" aria-label="Search">
                  <FaSearch
                    onClick={toggleSearch}
                    className="   text-1xl  text-lightOrange   "
                  />
                </Button>
              </li>
            </ul>
          </Link>

          {/*button language*/}
          <li className={`  md:flex hidden`}>
            {/**${searchVisible ? "hidden" : " md:flex hidden"} */}
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
                  />
                ) : (
                  <ReactCountryFlag
                    countryCode="EG"
                    svg
                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                    cdnSuffix="svg"
                    title="US"
                  />
                )}
              </ul>
              <ul className="mx-1">{languageIs ? `English` : `عربى`}</ul>
            </button>
          </li>

          {/*button Notifications */}
          <li className={` ${isAuth ? " " : "hidden"} relative`}>
            {/**` ${searchVisible ? "hidden" : " "}` */}
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
          <li className={`  ${isAuth ? "hidden" : ``} `}>
            {/*${searchVisible ? "hidden" : " "} */}
            <button className="">
              <Link
                className="  py-1 px-5 text-md   border-lightOrange border-[2px] sm:text-md bg-white 
                rounded-3xl duration-300 text-lightOrangeHover hover:bg-lightOrangeHover hover:text-white active:scale-95"
                href="/signin"
              >
                {isAuth ? "" : "Sign In"}
              </Link>
            </button>
          </li>

          {/*user section*/}
          <UserDropdown classNamed={`  ${isAuth ? "" : "hidden"} relative`} />
        </ul>

        {/*button mobile links*/}
        <ul className="flex  w-1-12   justify-center  md:hidden">
          <li className="">
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
          </li>
        </ul>
      </section>

      {/*links in menu mobile button*/}
      <section
        dir={`${languageIs ? "rtl" : "ltr"}`}
        className="  flex justify-end  relative"
      >
        <ul
          className={`  w-full h-screen  bg-white lg:hidden ${
            open
              ? "hidden"
              : `${
                  openUserMenu || notifications
                    ? `${setOpenUserMenu(false)} ${setNotifications(false)} `
                    : ``
                }`
          } `}
        >
          <ul className="items-center overflow-hidden ">
            <MobileMenu onInputClick={handleInputClick} />

            <li className={` flex  justify-center`}>
              {/**${isAuth ? "" : "hidden"} */}
              <button
                onClick={() => dispatch(handleLanguage())}
                className=" flex py-4 rounded-full w-10/12 my-2 shadow-md  justify-center duration-300 text-lightGreen hover:bg-gray-200 hover:text-darkGreen  active:scale-95"
              >
                <b className="flex items-center">
                  <IoLanguage />
                  <ul className="mx-2">
                    {" "}
                    {languageIs ? "  عربى  " : "English"}
                  </ul>
                </b>
              </button>
            </li>
          </ul>
        </ul>

        <ul
          // dir="ltr"
          className={`bg-gray-200 ${
            notifications ? "" : "hidden"
          }   h-[500px] overflow-auto md:absolute rounded-md p-2 md:w-3/12 w-full `}
        >
          <NotificationMenu sendCount={calcCount}/>
        </ul>
      </section>
    </nav>
  );
}

import Link from "next/link";
import Image from "next/image";
import logoNavbar from "../../../public/icons/logoNavbar.png";
import {  useState ,useEffect} from "react";
import ReactCountryFlag from "react-country-flag"
import { MdNotificationsNone, MdClear } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLanguage } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import arLanguage from "../../../public/locales/ar/common.js";
import enLanguage from "../../../public/locales/en/common.js";
import LinksNavbar from "./linksNavbar";
import MobileMenu from "./mobileMenu";
import NotificationMenu from "./notificationMenu";
import UserMenu from "./userMenu";
import { useDispatch, useSelector } from "react-redux";
import { handleLanguage } from "@/redux-store/features/globalState";


export default function Navbar() {
  const dispatch=useDispatch();

  const languageIs=useSelector((state)=> state.GlobalState.languageIs)




  const [arbLanguage] = useState(arLanguage);
  const [engLanguage] = useState(enLanguage);

  const [open, setOpen] = useState(true);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false)

  const userInfo=useSelector((state)=> state.GlobalState.userData)
  // const isLoading=useSelector((state)=> state.GlobalState.isLogin)
  const isLoading = useSelector((state) => state.Auth.isLoding);


  const [userDataInfo, setUserDataInfo] = useState({})
  const [isAuth, setAuth] = useState(false);
 

  function toggleSearch() {
    setSearchVisible(!searchVisible);
  }

  const handleInputClick = (value) => {
    setOpenUserMenu(setOpen(value));
  };


  useEffect(()=>{

      setAuth(isLoading);
    setUserDataInfo(userInfo)
  })
// },[userInfo])


  return (
    <nav className="w-full  z-[1000]  sticky  top-0 drop-shadow-md">
      
      <section className="flex  relative bg-white  h-[80px] items-center ">
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
        <ul
          className={` ${
            searchVisible ? "hidden" : "md:flex"
          }   w-5/12 space-x-2 hidden`}
        >
          <LinksNavbar />
        </ul>

        {/* SignUp & language & Notifications & user menu & user image */}
        <ul
          className={` ${
            searchVisible ? "w-8/12 " : "md:w-4/12 w-8/12"
          } flex justify-end md:justify-center  mr-4  space-x-2 items-center`}
        >
          <ul className={`py-2 ${searchVisible ? "w-full " : ""} mr-1`}>
            <li className={` flex items-center  `}>
              <FaSearch
                onClick={toggleSearch}
                className="   text-1xl  text-lightOrange "
              />
              <input
                placeholder={
                  languageIs
                    ? arbLanguage.input.search
                    : engLanguage.input.search
                }
                className={` text-darkGreen placeholder-lightOrangeHover py-2 text-md mx-2 px-2 rounded-full 
                           focus:outline-none focus:ring-1 focus:ring-lightOrange
                           ring-lightOrange ring-1
                       ${searchVisible ? "w-full" : "hidden"}`}
                type="text"
              />
              <MdClear
                onClick={toggleSearch}
                className={`rounded-full   text-2xl
                 text-lightOrange ${searchVisible ? "" : "hidden"} `}
              />
            </li>
          </ul>

          {/*button language*/}
          <li className={`  ${searchVisible ? "hidden" : " md:flex hidden"}  `}>
            <button
              onClick={() => dispatch(handleLanguage())}
              className="
              flex py-1 px-1   w-24   text-md rounded-full 
                            duration-300 text-darkGreen bg-white hover:bg-gray-100 hover:text-darkGreen justify-center  active:scale-95 items-center "
            >
              <ul className="mx-1">
                {languageIs ? (
                  <ReactCountryFlag
                    countryCode="EG"
                    svg
                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                    cdnSuffix="svg"
                    title="US"
                  />
                ) : (
                  <ReactCountryFlag
                    countryCode="US"
                    svg
                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                    cdnSuffix="svg"
                    title="US"
                  />
                )}
              </ul>
              <ul className="mx-1">{languageIs ? `عربى` : `English`}</ul>
            </button>
          </li>

        {/*button Notifications */}
          <li className={` ${isAuth ?  ` ${searchVisible? 'hidden':' '}`:"hidden" } relative`}>
            <button onClick={() => setNotifications(!notifications)}>
              <MdNotificationsNone
                className={` rounded-full 
               text-lightGreen bg-white text-4xl  hover:bg-lightGreenHover hover:text-white  active:scale-95`}
              />
            </button>
          </li>

          {/*button SignUp*/}
          <li className={`  ${isAuth ? "hidden" :`${searchVisible? 'hidden':' '}` } `}>
            <button className="" >
              {/*onClick={() => setAuth(!isAuth)}*/}
              <Link
                className="  py-1 px-5 text-md   border-lightOrange border-[2px] sm:text-md bg-white 
                rounded-3xl duration-300 text-lightOrangeHover hover:bg-lightOrangeHover hover:text-white active:scale-95"
                href="/signin"
              >
                {isAuth ? '' : "Sign In"}
              </Link>
            </button>
          </li>

          {/*user section*/}
          <li className={`  ${isAuth ?  `${searchVisible? 'hidden':''}`: "hidden"} relative`}>
            <button onClick={() => setOpenUserMenu(!openUserMenu)}>
              <img
                className="rounded-full border-2 border-green-800 object-cover sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] "
                // src="userimg.webp"//"userimg.webp"
                src={userDataInfo?.avatarUrl}//"userimg.webp"
                alt="User Avatar"
              />
            </button>

            <ul
              className={`bg-white drop-shadow-md ${
                openUserMenu ? "" : "hidden"
              } rounded-md py-3 px-2 -left-32 w-70 absolute`}
            >
              <UserMenu />
            </ul>
          </li>
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
      <section className="  flex justify-end  relative">
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

            <li className={` flex  justify-center`}>{/**${isAuth ? "" : "hidden"} */}
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
          className={`bg-gray-200 ${
            notifications ? "" : "hidden"
          }   h-screen overflow-auto md:absolute rounded-md p-2 md:w-3/12 w-full `}
        >
          {/*md:justify-end  md:w-96 w-auto absolute*/}

          <NotificationMenu />
        </ul>
      </section>
    </nav>
  );
}

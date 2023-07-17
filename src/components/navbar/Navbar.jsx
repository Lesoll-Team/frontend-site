import Link from "next/link";
import Image from "next/image";
import logoNavbar from "../../../public/icons/logoNavbar.png";
import { useState } from "react";

import { MdNotificationsNone, MdClear } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLanguage,IoSearchCircleOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";



import LinksNavbar from "./linksNavbar";
import MobileMenu from "./mobileMenu";
import NotificationMenu from "./notificationMenu";
import UserMenu from "./userMenu";

export default function Navbar() {


  const [open, setOpen] = useState(true);
  const [isAuth, setAuth] = useState(true);
  const [language, setLanguage] = useState(true);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [notifications, setNotifications] = useState(false);

  const [searchVisible, setSearchVisible] = useState(false)


  function toggleSearch() {
    setSearchVisible(!searchVisible)
  }

  const handleInputClick = (value) => {
    setOpenUserMenu(setOpen(value));
  };

  return (
    <nav className="w-full  z-50  sticky  top-0">
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
              />
            </Link>
          </li>
        </ul>

        {/*nav link web page */}
        <ul className={` ${searchVisible? 'hidden':'md:flex'}   w-5/12 space-x-2 hidden`}>
          <LinksNavbar />
        </ul>

          

        {/* SignUp & language & Notifications & user menu & user image */}
        <ul className={` ${searchVisible? 'w-8/12 ':'md:w-4/12 w-8/12'} flex justify-end md:justify-center  mr-4  space-x-2 items-center`}>



        <ul className={`py-2 ${searchVisible? 'w-full ':''} mr-1`}>
          <li className={` flex items-center  `}>
            <FaSearch onClick={toggleSearch} className="   text-2xl  text-lightOrange "/>
            <input  placeholder="Search" 
            className={` text-darkGreen placeholder-lightOrangeHover py-2 text-md mx-2 px-2 rounded-full 
                           focus:outline-none focus:ring-1 focus:ring-lightOrange
                           ring-lightOrange ring-1
                       ${searchVisible? 'w-full':'hidden'}`} 
            type="text" />
               <MdClear onClick={toggleSearch} className={`rounded-full   text-4xl
                 text-lightOrange ${searchVisible? '':'hidden'} `}/>
          </li>


          {/* <li className={` flex rounded-full hover:bg-white bg-lightOrange  `}>
            <IoSearchCircleOutline onClick={toggleSearch} className="rounded-full hover:bg-white bg-lightOrange  text-white  text-4xl  hover:text-lightOrange "/>
            <input  placeholder="Search" 
            className={` text-darkGreen placeholder-lightOrangeHover  px-2 rounded-full 
                           focus:outline-none focus:ring-1 focus:ring-lightOrange
                           ring-lightOrange ring-1
                       ${searchVisible? 'w-full':'hidden'}`} 
            type="text" />
               <MdClear  className={`rounded-full hover:bg-white bg-lightOrange  text-white  text-4xl
                 hover:text-lightOrange ${searchVisible? '':'hidden'} `}/>
          </li> */}
            {/* <li className={` flex rounded-full hover:bg-white bg-lightOrange  `}>
            <IoSearchCircleOutline onClick={toggleSearch} className="rounded-full hover:bg-white bg-lightOrange  text-white  text-4xl  hover:text-lightOrange "/>
            <input  placeholder="Search" 
            className={` text-darkGreen placeholder-lightOrangeHover  px-2 rounded-full 
                           focus:outline-none focus:ring-1 focus:ring-lightOrange
                           ring-lightOrange ring-1
                       ${searchVisible? 'w-full':'hidden'}`} 
            type="text" />
               <MdClear  className={`rounded-full hover:bg-white bg-lightOrange  text-white  text-4xl
                 hover:text-lightOrange ${searchVisible? '':'hidden'} `}/>
          </li> */}

          </ul>

        {/*button language*/}
          <li className={`  ${searchVisible? 'hidden':' md:flex hidden'}  `}>
            <button
              onClick={() => setLanguage(!language)}
              className=" flex p-1  px-3 border-b-[3px] hover:border-b-transparent md:text-1xl text-lg rounded-md 
                            duration-300 text-white bg-lightGreen hover:bg-white hover:text-lightGreen   active:scale-95 items-center "
            >
              <IoLanguage />
              {language ? "عربى" : "English"}
            </button>
          </li>

        {/*button Notifications */}
          <li className={` ${isAuth ? "hidden" : ` ${searchVisible? 'hidden':' '}`} relative`}>
            <button onClick={() => setNotifications(!notifications)}>
            {/* <span class="absolute flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span> */}
              <MdNotificationsNone
                className={` rounded-full 
               text-lightGreen bg-white text-4xl  hover:bg-lightGreenHover hover:text-white  active:scale-95`}
              />
            </button>
          </li>

          {/*button SignUp*/}
          <li className={`${isAuth ? "" : "hidden"} `}>
            <button className="" onClick={() => setAuth(!isAuth)}>
              <Link
                className=" px-3 py-1 text-lg xl:px-4  border-lightOrange border-[2px] sm:text-2xl text-[8px] bg-white 
                rounded-3xl duration-300 text-lightOrangeHover hover:bg-lightOrangeHover hover:text-white active:scale-95"
                href="/signin"
              >
                {isAuth ? "Sign In" : "Log out"}
              </Link>
            </button>
          </li>

          {/*user section*/}
          <li className={`  ${isAuth ? "hidden" : `${searchVisible? 'hidden':''}`} relative`}>
            <button onClick={() => setOpenUserMenu(!openUserMenu)}>
              <img
                className="rounded-full border-2 border-green-800  sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] "
                src="icons/userimg.webp"
              />
            </button>

            <ul
              className={`bg-white drop-shadow-md ${
                openUserMenu ? "" : "hidden"
              } rounded-md p-2 -left-32 w-40 absolute`}
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
      <section className="  flex justify-end relative">
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
          <ul className="items-center">
            <MobileMenu onInputClick={handleInputClick} />

            <li className={`${isAuth ? "" : "hidden"}`}>
              <button
                onClick={() => setLanguage(!language)}
                className=" w-full flex p-2 px-2 text-3xl justify-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
              >
                {language ? "  عربى  " : "English"}
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


      <div className="  flex -mt-1 relative">
        <img src="icons/rightNavBar.svg " className="w-10 absolute " alt="s" />
        <img
          src="icons/leftNavBar.svg "
          className="w-10 absolute right-0  "
          alt="s"
        />
      </div>
    </nav>
  );
}

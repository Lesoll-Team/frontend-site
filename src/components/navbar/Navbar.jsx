import Link from "next/link";
import Image from "next/image";
import logoNavbar from "../../../public/icons/logoNavbar.png";
import { useState } from "react";

import {
  MdNotificationsNone,
  MdOutlineRealEstateAgent,
  MdSearch,
  MdAddHome,
  MdClear,
  MdAccountCircle,
  MdOutlineSettings,
  MdOutlineFavorite,
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import {   HiOutlineArrowRightOnRectangle} from "react-icons/hi2";
import {  IoCheckmarkDoneSharp ,IoRadioButtonOnOutline,IoLanguage } from "react-icons/io5";


export default function Navbar() {
  const [open, setOpen] = useState(true);
  const [isAuth, setAuth] = useState(false);
  const [language, setLanguage] = useState(true);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [read, setRead] = useState(false);


  return (
    <nav className="w-full  z-50  sticky  top-0">
      <section className="flex sm:justify-around  bg-white drop-shadow-lg h-[90px] items-center">

        {/*Logo */}
        <ul className=" flex  justify-center ">
          <li className="sm:w-[150px] w-[100px] flex  justify-center">
            <Link className="" href={"/"}
             onClick={()=>setOpenUserMenu(setOpen(true))}>
              <Image src={logoNavbar} width={'auto'} height={'auto'}  alt="Logo" />
            </Link>
          </li>
        </ul>

        {/*nav link web page */}
        <ul className="md:flex   w-5/12 justify-center space-x-8 hidden">

          <li>
            <Link
              className=" flex p-1  px-5 border-b-[3px] hover:border-b-transparent md:text-3xl text-3xl rounded-3xl 
              duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95 items-center "
              href={"/rent"}>
              <MdSearch />
              <p>Rent</p>
            </Link>
          </li>

          <li>
            <Link
              className=" flex p-1  px-5 border-b-[3px] hover:border-b-transparent md:text-3xl text-3xl rounded-3xl 
              duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95 items-center  "
              href={"/buy"}>
              <MdOutlineRealEstateAgent />
              <p>Buy</p>
            </Link>
          </li>

          <li>
            <Link
              className="flex p-1  px-5 border-b-[3px] hover:border-b-transparent md:text-3xl text-3xl rounded-3xl  
               duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95 items-center "
              href={"/sell"}>
              <MdAddHome />
              <p>sell</p>
            </Link>
          </li>

        </ul>

           {/*button SignUp & user menu & user image*/}
        <ul className="flex md:grow-0 justify-end grow mr-6  space-x-4 items-center">  
        <li className={` ${isAuth ? "hidden" : "" } relative`}>

            <button  onClick={()=>setNotifications(!notifications)}>
              <MdNotificationsNone className={` rounded-full 
               text-darkGray bg-white sm:text-5xl text-4xl  hover:bg-darkGray hover:text-white  active:scale-95`}/> 
            </button>




          </li>

           {/*button SignUp*/}
          <li className={`${isAuth ? "" : "hidden"} `}>
            <button
              className=""
              onClick={() => setAuth(!isAuth)}>
              <Link
                className=" px-3 py-1 text-lg xl:px-4  border-lightOrange border-[2px] sm:text-2xl text-[8px] bg-white 
                rounded-3xl duration-300 text-lightOrangeHover hover:bg-lightOrangeHover hover:text-white active:scale-95"
                href="/signin">
                {isAuth ? "Sign In" : "Log out"}
              </Link>
            </button>
          </li>

          {/*user section*/}
          <li className={`  ${isAuth ? "hidden" : ""} relative`}>
            <button onClick={() => setOpenUserMenu(!openUserMenu)}>
              <img className="rounded-full border-2 border-green-800  sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] " src="icons/userimg.webp" />
            </button>

                        <ul className={`bg-gray-100 ${openUserMenu ? "" : "hidden"} rounded-md p-2 -left-32 w-40 absolute`}>
                      
                        <li >
                          <Link
                            className=" w-full flex justify-center items-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                            href={"/"}>
                            <MdAccountCircle/>
                            {language ? "Profile" : "الصفحة الشخصية"}
                          </Link>
                        </li>
                        <li className="flex justify-center">
                          <Link
                            className=" w-full flex justify-center items-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                            href={"/"}>
                            <MdOutlineFavorite/>
                            {language ? "Favorite" : " المفضلة"}
                          </Link>
                        </li>

                        <li className="flex justify-center">
                          <Link
                            className="  w-full flex items-center justify-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                            href={"/"}>
                            <MdOutlineSettings/>
                            {language ? "setting" : " الإعدادات"}
                          </Link>
                        </li>

                       
                        <li className="flex justify-center">
                          <Link
                          onClick={()=>setAuth(!isAuth)}
                            className=" w-full flex justify-center items-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                            href={"/signup"}>
                                 <HiOutlineArrowRightOnRectangle/>
                              {isAuth?``:`${language ? `  Log out` : "خروج"}`}
                            
                            
                          </Link>
                        </li>

                        <li className="flex justify-center">
                          <button
                            onClick={() => setLanguage(!language)}
                            className=" w-full flex items-center justify-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                            >
                              <IoLanguage/>
                            {language ? "عربى" : "English"}{" "}
                          </button>
                        </li>

                        </ul>

          </li>

          {/*user menu*/}
       

        </ul>

        {/*nav link web mobile */}
        <ul className="flex mr-6  w-1/12  justify-center  md:hidden">
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
<div className="  flex justify-end relative">
        <section
          className={`  w-full h-screen  bg-white lg:hidden ${
            open
              ? "hidden"
              : `${openUserMenu || notifications? `${setOpenUserMenu(false)} ${setNotifications(false)} ` : ``}`
              } `}
        >
          <ul className="items-center">
            <li>
              <Link
                className=" flex p-2 px-2 text-3xl justify-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                href={"/rent"}
                onClick={()=>setOpenUserMenu(setOpen(true))}
              >
                Rent
              </Link>
            </li>
            <li>
              <Link
                className="flex p-2 px-2 text-3xl justify-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                href={"/buy"}
                onClick={()=>setOpenUserMenu(setOpen(true))}
              >
                Buy
              </Link>
            </li>
            <li>
              <Link
                className=" flex p-2 px-2 text-3xl justify-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                href={"/sell"}
                onClick={()=>setOpenUserMenu(setOpen(true))}
              >
                Sell
              </Link>
            </li>
            <li>
              <Link
                className=" flex p-2 px-2 text-3xl justify-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                href={"/need"}
                onClick={()=>setOpenUserMenu(setOpen(true))}
              >
                Need
              </Link>
            </li>
            <li>
              <Link
                className=" flex p-2 px-2 text-3xl justify-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                href={"/about"}
                onClick={()=>setOpenUserMenu(setOpen(true))}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="flex p-2 px-2 text-3xl justify-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                href={"/contact"}
                onClick={()=>setOpenUserMenu(setOpen(true))}
              >
                Contact
              </Link>
            </li>
            <li className={`${isAuth?"":"hidden"}`}>
              <button
                onClick={() => setLanguage(!language)}
                className=" w-full flex p-2 px-2 text-3xl justify-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
              >
                {language ? "  عربى  " : "English"}
              </button>
            </li>
          </ul>
        </section>
        <section className={`bg-gray-200 ${notifications ? "" : "hidden"}  md:max-h-96 h-screen overflow-auto md:absolute rounded-md p-2 md:w-5/12 w-full `}>{/*md:justify-end  md:w-96 w-auto absolute*/}
            <Link href="/">
                      <ul onClick={()=>setRead(!read)} className="  flex-col p-5 rounded-3xl my-3 drop-shadow-xl bg-white w-full ">
                          <li className="text-lightGreen text-2xl "><h2 className="truncate">شقة مفروشة فى الهرم </h2></li>

                          <ul className="flex ">
                              <li className="w-9/12 text-lightGreen text-xl">الجيزة</li>
                              <li className="flex w-3/12 justify-end"> {read ? ( <IoCheckmarkDoneSharp className="text-lightGreen"/> ) : (<IoRadioButtonOnOutline className="text-darkOrange"/>)} </li>
                          </ul>
            
                          <li className="text-md text-gray-500"><h5 className="truncate ">  شارع محمد الدور الاول شقة رقم 3 منطقة الجيزة شارع الهرم شارع ابن بطوط </h5></li>

                      </ul>
                      </Link>

                      <Link href="/">
                      <ul  className="  flex-col p-5 rounded-3xl my-3 drop-shadow-xl bg-white w-full ">
                          <li className="text-lightGreen text-2xl "><h2 className="truncate">شقة مفروشة فى الهرم </h2></li>

                          <ul className="flex ">
                              <li className="w-9/12 text-lightGreen text-xl">الجيزة</li>
                              <li className="flex w-3/12 justify-end"> <IoRadioButtonOnOutline className="text-darkOrange"/> </li>
                          </ul>
            
                          <li className="text-md text-gray-500"><h5 className="truncate ">  شارع محمد الدور الاول شقة رقم 3 منطقة الجيزة شارع الهرم شارع ابن بطوط </h5></li>

                      </ul>
                      </Link>
                      <Link href="/">
                      <ul  className="  flex-col p-5 rounded-3xl my-3 drop-shadow-xl bg-white w-full ">
                          <li className="text-lightGreen text-2xl "><h2 className="truncate">شقة مفروشة فى الهرم </h2></li>

                          <ul className="flex ">
                              <li className="w-9/12 text-lightGreen text-xl">الجيزة</li>
                              <li className="flex w-3/12 justify-end">  <IoCheckmarkDoneSharp className="text-lightGreen"/>  </li>
                          </ul>
            
                          <li className="text-md text-gray-500"><h5 className="truncate ">  شارع محمد الدور الاول شقة رقم 3 منطقة الجيزة شارع الهرم شارع ابن بطوط </h5></li>

                      </ul>
                      </Link>
                     
                   

                      </section>
                      </div>
    </nav>
  );
}

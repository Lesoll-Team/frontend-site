import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/router";
import logoNavbar from "../../../public/icons/logoNavbar.png";
// import logoNavbarSmall from '../../../public/icons/logoNavbarSM.png'
import { useState } from "react";

import {
  MdNotificationsNone,
  MdOutlineRealEstateAgent,
  MdSearch,
  MdAddHome,
  MdClear
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [open, setOpen] = useState(true);
  const [isAuth, setAuth] = useState(false);
  const [language, setLanguage] = useState(true);
  const [openUserMenu, setOpenUserMenu] = useState(false);


  return (
    <nav className="w-full   z-50 sticky top-0">
      <section className="flex sm:justify-around  bg-white drop-shadow-lg h-[90px] items-center">

        {/*Logo */}
        <ul className=" flex  justify-center ">
          <li className="sm:w-[150px] w-[100px] flex  justify-center">
            <Link className="" href={"/"}
             onClick={()=>setOpenUserMenu(setOpen(true))}>
              <Image src={logoNavbar} width={150} height={150} />
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
        <ul className="flex md:grow-0 justify-end grow bg-red-200 space-x-4 items-center">  
        <li className={` ${isAuth ? "hidden" : "" }`}>
            <button  onClick={()=>setOpenUserMenu(setOpen(true))}>
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
          <li className={`  ${isAuth ? "hidden" : ""} bg-red-300  relative`}>
            <button onClick={() => setOpenUserMenu(!openUserMenu)}>
              <img className="rounded-full sm:w-[50px] w-[40px] " src="https://fakeimg.pl/50/ff0000/" />
            </button>

                        <ul className={`bg-gray-100 ${openUserMenu ? "" : "hidden"} rounded-md p-2 -left-24 w-36 absolute`}>
                      
                        <li>
                          <Link
                            className="   duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                            href={"/"}>
                            
                            {language ? "Profile" : "الصفحة الشخصية"}
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={() => setLanguage(!language)}
                            className="   duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                            >
                            {language ? "عربى" : "English"}{" "}
                          </button>
                        </li>

                        <li>
                          <Link
                            className="   duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                            href={"/signup"}>
                            
                            {language ? "SignUp" : "أشتراك"}{" "}
                          </Link>
                        </li>
                        </ul>

          </li>

          {/*user menu*/}
       

        </ul>

        {/*nav link web mobile */}
        <ul className="flex mr-6  w-1/12 bg-black justify-center  md:hidden">
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
          className={`  w-full h-screen  bg-white lg:hidden ${
            open
              ? "hidden"
              : `${openUserMenu ? `${setOpenUserMenu(false)}` : ``}`
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
              > {/* */}
                {language ? "  عربى  " : "English"}
              </button>
            </li>
          </ul>
        </section>
    </nav>
  );
}
















// ماكنو فى السكشن التانى
//<div className="grid "> {/* justify-items-stretch*/}
//<section className={`bg-gray-300 ${openUserMenu? '': 'hidden'} `}> {/* */}
//<ul >
//<li >
//<button onClick={() => setLanguage(!language)} className=" flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center  duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
//    > {/* */}
//  {language?'عربى':'English'} </button>
//</li>
//<li >
//<Link className=" flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center  duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
//     href={'/signup'}> {/* */}
//   {language?'SignUp':'أشتراك'}  </Link>
//</li>
//</ul>
//</section>
//</div>

// function NavigationLink({ href, text, router }) {
//   const isActive = router.asPath === (href === "/home" ? "/" : href);
//   return (
//     <Link className="inline-block px-3 py-2  rounded-3xl  duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95  focus:bg-lightGreen "
//      href={href === "/home" ? "/" : href} passHref>
//      {text}
//     </Link>
//   );
// }

// function NavigationLinkMobile({ href, text, router }) {
//   const isActive = router.asPath === (href === "/home" ? "/" : href);
//   return (
//     <Link className="inline-block p-6 bg-gray-300 w-full   duration-300 text-black hover:bg-gray-100 hover:text-black active:scale-95 "
//      href={href === "/home" ? "/" : href} passHref>
//      {text}
//     </Link>
//   );
// }
/**
 *  flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center
 flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center
 flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center
 flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center
 flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center
 flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center
 flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center
 */
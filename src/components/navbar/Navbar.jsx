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
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [open, setOpen] = useState(true);
  const [isAuth, setAuth] = useState(true);
  const [language, setLanguage] = useState(true);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  return (
    <nav className="w-full   z-50 sticky top-0">{/**m-0 flex-row */}
      <section className="flex bg-white drop-shadow-lg h-[90px] items-center">
        {/**lg:justify-between justify-between items-center m-0*/}
        {/*lg:justify-center justify-center*/}





        {/*Logo */}
        <ul className=" flex  justify-center ">
          <li className="sm:w-[150px] w-[100px] flex  justify-center">
            <Link className="" href={"/"}>
              <Image src={logoNavbar} width={150} height={150} />
            </Link>
          </li>
        </ul>




        {/*nav link web page */}
        {/*w-5/12 h-auto  xl:space-x-8 lg:space-x-4 */}
        <ul className="lg:flex   w-5/12 justify-center  hidden">

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
        {/*nav link */}
        {/* <ul className={`flex w-2/12 justify-center bg-blue-100 
            ${isAuth ? "hidden" : "" }`}> */}
        {/* </ul> */}



























           {/*button SignUp & user menu & user image*/}

        <ul className="flex  grow justify-end items-center mr-6">            {/*p-1 justify-center*/}
        
        <li className={` ${isAuth ? "hidden" : "" }`}>{/*flex w-2/12 justify-center */}
            <button>
              <MdNotificationsNone className={` rounded-full 
               text-darkGray bg-white sm:text-5xl text-3xl  hover:bg-darkGray hover:text-white  active:scale-95`}/> 
               {/*sm:text-5xl text-2xl  border-b-[3px] */}
            </button>
          </li>

           {/*button SignUp*/}
          <li className={`${isAuth ? "" : "hidden"} `}>
            <button
              className=""
              onClick={() => setAuth(!isAuth)}>{/**flex justify-center */}
              <Link
                className=" p-1 font-medium xl:px-4  border-lightOrange border-[2px] sm:text-2xl text-[8px] bg-white 
                rounded-3xl duration-300 text-lightOrangeHover hover:bg-lightOrangeHover hover:text-white active:scale-95"
                href="/signin">
                {isAuth ? "Sign In" : "Log out"}
              </Link>
            </button>
          </li>

          {/*user section*/}
          <li className={`  ${isAuth ? "hidden" : ""} `}>
            <button onClick={() => setOpenUserMenu(!openUserMenu)}>
              <img className="rounded-full sm:w-[50px] w-[28px] " src="https://fakeimg.pl/50/ff0000/" />
            </button>
          </li>

          {/*user menu*/}
          <div className={`bg-gray-300 ${openUserMenu ? "" : "hidden"} `}>

            <li>
              <button
                onClick={() => setLanguage(!language)}
                className=" flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center  duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                >{/* */}
                {language ? "عربى" : "English"}{" "}
              </button>
            </li>

            <li>
              <Link
                className=" flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center  duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                href={"/signup"}>
                {/* */}
                {language ? "SignUp" : "أشتراك"}{" "}
              </Link>
            </li>
          </div>

        </ul>































        {/*nav link web mobile */}
        <ul className="flex mr-6  w-1/12 justify-center  lg:hidden">
          <li className="">
            <button
              className="flex justify-center "
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <GiHamburgerMenu className=" text-darkGreen sm:text-3xl	 text-xl	" />
              ) : (
                <h1>X</h1>
              )}
            </button>
          </li>
        </ul>
      </section>

      <div className="grid justify-items-stretch">
        <section
          className={`w-full h-screen  justify-self-end bg-white lg:hidden ${
            open
              ? "hidden"
              : `${openUserMenu ? `${setOpenUserMenu(false)}` : ``}`
          } `}
        >
          <ul className="items-center">
            <li>
              <Link
                className=" flex p-2 px-2 text-3xl  duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                href={"/rent"}
              >
                Rent
              </Link>
            </li>
            <li>
              <Link
                className="flex p-2 px-2 text-3xl  duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                href={"/buy"}
              >
                Buy
              </Link>
            </li>
            <li>
              <Link
                className=" flex p-2 px-2 text-3xl duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                href={"/sell"}
              >
                Sell
              </Link>
            </li>
            <li>
              <Link
                className=" flex p-2 px-2 text-3xl duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                href={"/need"}
              >
                Need
              </Link>
            </li>
            <li>
              <Link
                className=" flex p-2 px-2 text-3xl duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                href={"/about"}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="flex p-2 px-2 text-3xl  duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                href={"/contact"}
              >
                Contact
              </Link>
            </li>
            <li className={`${isAuth?"":"hidden"}`}>
              <button
                onClick={() => setLanguage(!language)}
                className=" w-full flex p-2 px-2 text-3xl duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
              > {/* */}
                {language ? "  عربى  " : "English"}
              </button>
            </li>
          </ul>
        </section>
      </div>

      {/**---code --- hidden */}
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
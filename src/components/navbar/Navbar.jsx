import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import logoNavbar from "../../../public/icons/logoNavbar.png";
import { useState } from "react";
// import navbarImg from '../../../public/header.png'
// import aboutNavbar from '../../../public/icons/about.svg'
// import buyNavbar from '../../../public/icons/buy.svg'
// import rentNavbar from '../../../public/icons/rent.svg'
// import homeNavbar from '../../../public/icons/home.svg'
// import contactNavbar from '../../../public/icons/contact.svg'
// import needNavbar from '../../../public/icons/need.svg'
// import sellNavbar from '../../../public/icons/sell.svg'
import notificationsNavbar from "../../../public/icons/notifications.svg";

const navigationRoutes = ["home", "rent", "buy", "about", "contact"];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  return (
    <nav className=" fixed top-0 h-24 left-0 right-0 z-50 md:h-20 flex items-center">
      <div className=" mx-auto z-10  items-center  flex xl:space-x-32  ">
        {/* logo */}
        <div className="w-20 k lg:w-36">
          <Image src={logoNavbar} alt="logo" />
        </div>

        {/* links */}
        <div
          className={`lg:inline-block xl:space-x-2 relative ${
            navbar ? "block " : "hidden"
          }`}
        >
          {navbar ? (
            <div className="w-72 ml-20  mt-5 absolute ">
              {navigationRoutes.map((singleRoute) => {
                //lg<
                return (
                  <div>
                    <NavigationLinkMobile
                      key={singleRoute}
                      href={`/${singleRoute}`}
                      text={singleRoute}
                      router={router}
                    />
                  </div>
                );
              })}
              <div className="inline-block px-7 py-2 bg-gray-300 w-full   duration-300 text-lightOrangeHover hover:bg-lightOrangeHover hover:text-white active:scale-95">
                <button className="">
                  <Link href="/signin">
                    <b> Sign In</b>
                  </Link>
                </button>
              </div>
            </div>
          ) : (
            navigationRoutes.map((singleRoute) => {
              // lg>
              return (
                <NavigationLink
                  key={singleRoute}
                  href={`/${singleRoute}`}
                  text={singleRoute}
                  router={router}
                  // icone={}
                />
              );
            })
          )}
        </div>
        <div className="inline-block xl:space-x-2">
          {/*container mx-auto py-0 items-center */}
          <Link
            href="/"
            className="inline-block px-3 py-2 bg-white rounded-3xl hover:bg-darkGray hover:text-white  active:scale-95 "
          >
            <Image src={notificationsNavbar} alt="" className="inline-block" />
          </Link>
          <Link
            href="/"
            className="inline-block px-3 py-2 bg-white rounded-3xl  hover:bg-darkGray hover:text-white  active:scale-95"
          >
            {/* <Image src={needNavbar} alt="" className="inline-block "/> */}
            Need
          </Link>
          <Link
            href="/"
            className="inline-block px-3 py-2 bg-white rounded-3xl  hover:bg-darkGray hover:text-white  active:scale-95"
          >
            {/* <Image src={sellNavbar} alt="" className="inline-block" />  */}
            Sell
          </Link>
        </div>
        {/* buttons */}
        <div className="inline-block px-7 py-2 bg-white rounded-3xl duration-300 text-lightOrangeHover hover:bg-lightOrangeHover hover:text-white active:scale-95">
          <button className="">
            <Link href="/signin">
              <b> Sign In</b>
            </Link>
          </button>
        </div>

        <div className="lg:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-lightGreenHover"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-darkGreen"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-darkGreen"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center  z-0"
        style={{ backgroundImage: "url('/header.png')" }}
      ></div>
    </nav>
  );
}

function NavigationLink({ href, text, router }) {
  const isActive = router.asPath === (href === "/home" ? "/" : href);
  return (
    <Link
      className="inline-block px-3 py-2  rounded-3xl  duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95  focus:bg-lightGreen "
      href={href === "/home" ? "/" : href}
      passHref
    >
      {text}
    </Link>
  );
}

function NavigationLinkMobile({ href, text, router }) {
  const isActive = router.asPath === (href === "/home" ? "/" : href);
  return (
    <Link
      className="inline-block p-6 bg-gray-300 w-full   duration-300 text-black hover:bg-gray-100 hover:text-black active:scale-95 "
      href={href === "/home" ? "/" : href}
      passHref
    >
      {text}
    </Link>
  );
}

/* <Link href="/" className="inline-block px-3 py-2  rounded-3xl  duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95">
            <Image src={homeNavbar} alt="" className="inline-block   "/> Home
          </Link>
          <Link href="/rent" className="inline-block px-3 py-2  rounded-3xl  duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95">
            <Image src={rentNavbar} alt="" className="inline-block"/> Rent
          </Link>
          <Link href="/buy" className="inline-block px-3 py-2  rounded-3xl  duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95">
            <Image src={buyNavbar} alt="" className="inline-block"/> Buy
          </Link>
          <Link href="/about" className="inline-block px-3 py-2  rounded-3xl  duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95">
            <Image src={aboutNavbar} alt="" className="inline-block"/> About us
          </Link>
          <Link href="/" className="inline-block px-3 py-2  rounded-3xl  duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95">
            <Image src={contactNavbar} alt="" className="inline-block"/> Contact
          </Link> */

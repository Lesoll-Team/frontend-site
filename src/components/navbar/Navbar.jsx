import Link from "next/link";
import React from "react";
import Image from "next/image";
// import navbarImg from '../../../public/bg-navbar.png'
import navbarImg from '../../../public/headerNavbar.svg'
import logoNavbar from '../../../public/icons/logoNavbar.svg'
import aboutNavbar from '../../../public/icons/about.svg'
import buyNavbar from '../../../public/icons/buy.svg'
import rentNavbar from '../../../public/icons/rent.svg'
import homeNavbar from '../../../public/icons/home.svg'
import contactNavbar from '../../../public/icons/contact.svg'
import needNavbar from '../../../public/icons/need.svg'
import sellNavbar from '../../../public/icons/sell.svg'
import notificationsNavbar from '../../../public/icons/notifications.svg'
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="bg-gray-200">
      <div className="container mx-auto py-3 items-center  flex justify-between">
        {/* logo */}
        <div className="w-1/5 h-auto">
        <Image src={logoNavbar} className="h-14" />
        </div>
        {/* links */}
        <div className="inline-block  space-x-8">
          <Link href="/" className="inline-block">
            <Image src={homeNavbar} className="inline-block"/> Home
          </Link>
          <Link href="/" className="inline-block">
            <Image src={rentNavbar} alt="" className="inline-block"/> Rent
          </Link>
          <Link href="/" className="inline-block">
            <Image src={buyNavbar} alt="" className="inline-block"/> Buy
          </Link>
          <Link href="/" className="inline-block">
            <Image src={aboutNavbar} alt="" className="inline-block"/> About us
          </Link>
          <Link href="/" className="inline-block">
            <Image src={contactNavbar} alt="" className="inline-block"/> Contact
          </Link>
          <Link href="/" className="inline-block">
            <Image src={notificationsNavbar} alt="" className="inline-block"/> 
          </Link>
          <Link href="/" className="inline-block">
            <Image src={needNavbar} alt="" className="inline-block"/> 
          </Link>
          <Link href="/" className="inline-block">
            <Image src={sellNavbar} alt="" className="inline-block" /> Sell
          </Link>
          <Link href="/" className="inline-block">
           SignIn
          </Link>
        </div>
        {/* buttons */}
        <div className="">
          <button></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "../../../public//icons/logoNavbar.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto md:grid  lg:grid-cols-5 grid-cols-3 gap-10 py-10 space-y-4">
        {/* Discription */}
        <div className="col-span-3 lg:col-span-2 space-y-3 relative">
          {/* logo */}
          <Image
            alt="Logo"
            width={"auto"}
            height={"auto"}
            // className=" "
            className="-ml-6 md:-ml-5 lg:-ml-9 -mt-5 lg:w-[300px]  w-[200px]"
            src={logo}
          />
          <p className="md:w-3/4">
            Lesoll is an Egyptian RealEstate marketplace. lesoll offers
            customers a digital experiance for buying sending and renting
            properties with end to end service
          </p>
          {/* social links */}
          <div className="flex md:gap-3 gap-1 absolute top-2 sm:top-0 right-0 lg:static">
            <div className=" flex justify-center items-center">
              <a
                target="_blank"
                href="https://www.facebook.com/LesollRealestate"
                className="text-white"
              >
                <AiFillFacebook className="text-darkGreen text-3xl md:text-5xl" />
              </a>
            </div>
            <div className="  flex justify-center items-center">
              <a
                target="_blank"
                href="https://www.instagram.com/lesollrealestate/"
                className="text-white"
              >
                <AiFillInstagram className="text-darkGreen text-3xl md:text-5xl" />

                {/* <BsFacebook className="text-darkGreen text-3xl md:text-5xl" /> */}
              </a>
            </div>
            <div className="  flex justify-center items-center">
              <a target="_blank" href="#" className="text-white">
                <AiOutlineWhatsApp className="text-darkGreen text-3xl md:text-5xl" />
              </a>
            </div>
            <div className="  flex justify-center items-center">
              <a
                target="_blank"
                href="https://twitter.com/LesollRealstate"
                className="text-white"
              >
                <AiFillTwitterCircle className="text-darkGreen text-3xl md:text-5xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-5 flex flex-col">
          <h3 className="text-1xl font-bold">Useful Links</h3>

          <Link href="/about" className=" hover:font-normal hover:text-black">
            About
          </Link>

          <Link href="/blogs">Blogs</Link>

          <Link href="/contact">Contact</Link>
        </div>
        <div className="space-y-5 flex flex-col">
          <h3 className="text-1xl font-bold">Help?</h3>

          <Link href="/faq">FAQ</Link>

          <Link href="/termsofservice">Terms & Conditions</Link>

          <Link href="/privacypolicy">Privacy Policy</Link>
        </div>
        <div className="space-y-5 flex flex-col">
          <h3 className="text-1xl font-bold">Contact</h3>

          {/* <Link href="/about">Address Cairo, Heliopolis</Link> */}
          <address className="not-italic	">
            <a href="https://maps.app.goo.gl/3atQvrpBzq9Awpss6" target="_blank">
              Address Cairo, Heliopolis
            </a>
          </address>
          <a href="mailto:info@lesoll.com">Email:info@lesoll.com</a>
        </div>
      </div>
      {/* policy & copy Rights */}
      <div className="bg-darkGreen py-3  w-full text-white">
        <div className="container mx-auto sm:flex-row flex-col-reverse flex justify-between items-center ">
          <p>
            © {new Date().getFullYear()},{` `}
            <a href="https://lesoll.com">Lesoll.com</a>
          </p>
          <div className="space-x-2">
            <Link href="/termsofservice">Terms & conditions</Link>
            <span>|</span>
            <Link href="/privacypolicy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

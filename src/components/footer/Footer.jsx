import Image from "next/image";
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto md:grid lg:grid-cols-5 grid-cols-3 gap-10 py-10 space-y-4">
        {/* Discription */}
        <div className="col-span-3 lg:col-span-2 space-y-3 relative">
          {/* logo */}
          <Image
            width={100}
            height={100}
            // className=" "
            className="object-fit -mt-5 lg:w-[250px]  w-[150px]"
            src="/logo-x.png"
          />
          <p className="w-3/4">
            Lesoll is an Egyptian RealEstate marketplace. lesoll offers
            customers a digital experiance for buying sending and renting
            properties with end to end service
          </p>
          {/* social links */}
          <div className="flex md:gap-3 gap-1 absolute top-0 right-0 lg:static">
            <div className=" rounded-full bg-darkGray flex justify-center items-center">
              <a
                target="_blank"
                href="https://www.facebook.com/LesollRealestate"
                className="text-white"
              >
                <Image
                  className="w-[25px] md:w-[40px]  object-fit"
                  src={"/icons/facebook.svg"}
                  width={40}
                  height={40}
                ></Image>
              </a>
            </div>
            <div className=" rounded-full bg-darkGray flex justify-center items-center">
              <a
                target="_blank"
                href="https://www.instagram.com/lesollrealestate/"
                className="text-white"
              >
                <Image
                  src={"/icons/instgaram.svg"}
                  width={40}
                  height={40}
                  className="w-[25px] md:w-[40px]  object-fit"
                ></Image>
              </a>
            </div>
            <div className=" rounded-full bg-darkGray flex justify-center items-center">
              <a target="_blank" href="#" className="text-white">
                <Image
                  className="w-[25px] md:w-[40px] object-fit"
                  src={"/icons/telegram.svg"}
                  width={40}
                  height={40}
                ></Image>
              </a>
            </div>
            <div className=" rounded-full bg-darkGray flex justify-center items-center">
              <a
                target="_blank"
                href="https://twitter.com/LesollRealstate"
                className="text-white"
              >
                <Image
                  className="w-[25px] md:w-[40px]  object-fit"
                  src={"/icons/twitter.svg"}
                  width={40}
                  height={40}
                ></Image>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-5 flex flex-col">
          <h3 className="text-1xl font-bold">Useful Links</h3>

          <Link href="/about" className=" hover:font-normal hover:text-black">
            About
          </Link>

          <Link href="/about">Blogs</Link>

          <Link href="/about">Contact</Link>
        </div>
        <div className="space-y-5 flex flex-col">
          <h3 className="text-1xl font-bold">Help?</h3>

          <Link href="/about">FAQ</Link>

          <Link href="/about">Terms & Conditions</Link>

          <Link href="/about">Privacy Policy</Link>
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
            <Link href="/">Terms & conditions</Link>
            <span>|</span>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

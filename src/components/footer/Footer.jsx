import Image from "next/image";
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto lg:grid grid-cols-5 gap-10 py-10">
        <div className="col-span-2">
          <Image
            width={250}
            height={250}
            className="object-fit -mt-5"
            src="/logo-x.png"
          />

          <p className="w-3/4">
            Lesoll is an Egyptian RealEstate marketplace. lesoll offers
            customers a digital experiance for buying sending and renting
            properties with end to end service
          </p>
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
      <div className="bg-darkGreen py-3  w-full text-white">
        <div className="container mx-auto flex justify-between ">
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

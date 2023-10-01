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
import { useSelector } from "react-redux";
const Footer = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <footer className="z-10" dir={`${language ? "rtl" : ""}`}>
      <div className="container mx-auto md:grid  drop-shadow-2xl lg:grid-cols-5 grid-cols-3 gap-10 py-10 space-y-4">
        {/* Discription */}
        <div className="col-span-3 lg:col-span-2 space-y-3 relative">
          {/* logo */}
          <Image
            alt="Logo"
            width={"auto"}
            height={"auto"}
            // className=" "
            className={` -mt-5 lg:w-[300px]  w-[200px] ${
              language ? "-mr-6 md:-mr-5 lg:-mr-9" : "-ml-6 md:-ml-5 lg:-ml-9"
            }`}
            priority
            src={logo}
          />
          <p className="md:w-[78%]">
            {language
              ? "يسول هو موقع عقارات مصري متكامل يقدم خدمة التجربة الرقمية سواء لشراء أو بيع أو تأجير العقارات مع خدمة شاملة تقدم تفاصيل عن العقار من خلال خريطة تفاعلية"
              : " Lesoll is an Egyptian RealEstate marketplace. lesoll offers customers a digital experiance for buying sending and renting properties with end to end service"}
          </p>
          {/* social links */}
          <div
            className={`flex md:gap-3 gap-1 absolute top-2 sm:top-0  lg:static ${
              language ? "left-0" : "right-0"
            }`}
          >
            <div className=" flex justify-center items-center">
              <Link
                target="_blank"
                href="https://www.facebook.com/LesollRealestate"
                className="text-white"
              >
                <AiFillFacebook className="text-darkGreen text-3xl md:text-5xl" />
              </Link>
            </div>
            <div className="  flex justify-center items-center">
              <Link
                target="_blank"
                href="https://www.instagram.com/lesollrealestate/"
                className="text-white"
              >
                <AiFillInstagram className="text-darkGreen text-3xl md:text-5xl" />

                {/* <BsFacebook className="text-darkGreen text-3xl md:text-5xl" /> */}
              </Link>
            </div>
            <div className="  flex justify-center items-center">
              <Link
                target="_blank"
                href="https://wa.me/+201032362898"
                className="text-white"
              >
                <AiOutlineWhatsApp className="text-darkGreen text-3xl md:text-5xl" />
              </Link>
            </div>
            <div className="  flex justify-center items-center">
              <Link
                target="_blank"
                href="https://twitter.com/LesollRealstate"
                className="text-white"
              >
                <AiFillTwitterCircle className="text-darkGreen text-3xl md:text-5xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-5 flex flex-col">
          <h3 className="text-1xl font-bold">
            {language ? "روابط مساعدة" : "Useful Links"}
          </h3>

          <Link href="/about" className=" font-semibold text-darkGray">
            {language ? "عنا" : "About"}
          </Link>

          <Link href="/blogs" className="font-semibold text-darkGray">
            {language ? "المقالات" : "Blogs"}
          </Link>

          <Link href="/contact" className="font-semibold text-darkGray">
            {language ? "تواصل معنا" : "Contact"}
          </Link>
        </div>
        <div className="space-y-5 flex flex-col">
          <h3 className="text-1xl font-bold">
            {language ? "مساعدة؟" : "Help?"}
          </h3>

          <Link className=" font-semibold text-darkGray" href="/faq">
            {language ? "الأسئلة الشائعة" : "FAQ"}
          </Link>

          <Link className=" font-semibold text-darkGray" href="/termsofservice">
            {language ? "الشروط والأحكام" : "Terms & Conditions"}
          </Link>

          <Link className=" font-semibold text-darkGray" href="/privacypolicy">
            {language ? "سياسة الخصوصية" : "Privacy Policy"}
          </Link>
        </div>
        <div className="space-y-5 flex flex-col">
          <h3 className="text-1xl font-bold">
            {language ? "التواصل" : "Contact"}
          </h3>

          {/* <Link href="/about">Address Cairo, Heliopolis</Link> */}
          <address className="not-italic	">
            <Link
              href="https://maps.app.goo.gl/3atQvrpBzq9Awpss6"
              target="_blank"
            >
              Address Cairo, Heliopolis
            </Link>
          </address>
          <Link href="mailto:info@lesoll.com">Email:info@lesoll.com</Link>
        </div>
      </div>
      {/* policy & copy Rights */}
      <div className="bg-darkGreen py-3  w-full text-white">
        <div className="container mx-auto sm:flex-row flex-col-reverse flex justify-between items-center ">
          <p dir="ltr">
            © {new Date().getFullYear()},{` `}
            <Link href="https://lesoll.com">Lesoll.com</Link>
          </p>
          <div className="">
            <Link href="/termsofservice">
              {language ? "الشروط والاحكام" : "Terms & conditions"}
            </Link>
            <span className="px-2">|</span>
            <Link href="/privacypolicy">
              {language ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

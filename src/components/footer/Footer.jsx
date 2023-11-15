import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "../../../public/icons/logoNavbar.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsFacebook, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { useSelector } from "react-redux";
import { ImLocation2 } from "react-icons/im";
const Footer = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <footer className="" dir={`${language ? "rtl" : ""}`}>
      <div className="container mx-auto md:grid  drop-shadow-2xl lg:grid-cols-5 grid-cols-3 gap-10 py-10 space-y-4">
        {/* Discription */}
        <div className="col-span-3 lg:col-span-2 space-y-3 relative">
          {/* logo */}
          <Image
            alt="Logo footer"
            width={"auto"}
            height={"auto"}
            // className=" "
            className={` -mt-5 lg:w-[300px]  w-[200px] ${
              language ? "-mr-6 md:-mr-5 lg:-mr-9" : "-ml-6 md:-ml-5 lg:-ml-9"
            }`}
            priority
            src={logo}
          />
          <p className="md:w-[78%] text-darkGray">
            {language
              ? "ليسول هو موقع عقارات مصري متكامل يقدم خدمة التجربة الرقمية سواء لشراء أو بيع أو تأجير العقارات مع خدمة شاملة تقدم تفاصيل عن العقار من خلال خريطة تفاعلية"
              : " Lesoll is an Egyptian RealEstate marketplace. lesoll offers customers a digital experiance for buying sending and renting properties with end to end service"}
          </p>
          {/* social links */}
          <div
            className={`flex md:gap-3 gap-1 absolute top-2 sm:top-0  lg:static ${
              language ? "left-0" : "right-0"
            }`}
          >
            <div className=" flex justify-center items-center text-3xl md:text-4xl">
              <Link
                target="_blank"
                href="https://www.facebook.com/LesollRealestate"
                className="text-white"
                title="Facebook"
              >
                <AiFillFacebook className="text-darkGreen text-3xl md:text-4xl" />
              </Link>
            </div>
            <div className="  flex justify-center items-center">
              <Link
                target="_blank"
                href="https://www.instagram.com/lesollrealestate/"
                className="text-white"
                title="Instagram"
              >
                <AiFillInstagram className="text-darkGreen text-3xl md:text-4xl" />

                {/* <BsFacebook className="text-darkGreen text-3xl md:text-4xl" /> */}
              </Link>
            </div>
            <div className="  flex justify-center items-center">
              <Link
                target="_blank"
                href="https://wa.me/+201032362898"
                className="text-white"
                title="WhatsApp"
              >
                <AiOutlineWhatsApp className="text-darkGreen text-3xl md:text-4xl" />
              </Link>
            </div>
            <div className="  flex justify-center items-center">
              <Link
                target="_blank"
                href="https://twitter.com/LesollRealstate"
                className="text-white"
                title="Twitter"
              >
                {/* <AiFillTwitterCircle className="text-darkGreen text-3xl md:text-4xl" /> */}
                <BsTwitterX className="text-darkGreen text-2xl md:text-3xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-5 flex flex-col">
          <p className="text-xl font-bold">
            {language ? "روابط مساعدة" : "Useful Links"}
          </p>

          <Link
            title={language ? "من نحن" : "About Us"}
            href="/about-us"
            className="  text-darkGray"
          >
            {language ? "من نحن" : "About Us"}
          </Link>

          <Link
            title={language ? "المقالات" : "Blogs"}
            href="/blog"
            className=" text-darkGray"
          >
            {language ? "المقالات" : "Blogs"}
          </Link>

          <Link
            title={language ? "تواصل معنا" : "Contact"}
            href="/contact-us"
            className=" text-darkGray"
          >
            {language ? "تواصل معنا" : "Contact"}
          </Link>
        </div>
        <div className="space-y-5 flex flex-col">
          <p className="text-xl font-bold">{language ? "مساعدة؟" : "Help?"}</p>

          <Link
            title={language ? "الأسئلة الشائعة" : "FAQ"}
            className="  text-darkGray"
            href="/faq"
          >
            {language ? "الأسئلة الشائعة" : "FAQ"}
          </Link>

          <Link
            title={language ? "الشروط والأحكام" : "Terms & Conditions"}
            className="  text-darkGray"
            href="/termsofservice"
          >
            {language ? "الشروط والأحكام" : "Terms & Conditions"}
          </Link>

          <Link
            title={language ? "سياسة الخصوصية" : "Privacy Policy"}
            className="  text-darkGray"
            href="/privacypolicy"
          >
            {language ? "سياسة الخصوصية" : "Privacy Policy"}
          </Link>
        </div>
        <div className="space-y-5 flex flex-col">
          <p className="text-xl font-bold">
            {language ? "التواصل" : "Contact"}
          </p>

          {/* <Link href="/about">Address Cairo, Heliopolis</Link> */}
          <address className="not-italic	">
            <Link
              title="Cairo, Nasr City"
              className="flex gap-1 items-center "
              href="https://maps.app.goo.gl/P71VgHcHPUaiVo2FA"
              target="_blank"
            >
              <ImLocation2 className="text-lightGreen text-lg" /> Cairo, Naser
              City
            </Link>
          </address>
          <Link
            title="info@lesoll.com"
            href="mailto:info@lesoll.com"
            className="flex gap-1 items-center"
          >
            {" "}
            <AiOutlineMail className="text-lightGreen text-lg" />
            info@lesoll.com
          </Link>
        </div>
      </div>
      {/* policy & copy Rights */}
      <div className="bg-darkGreen py-3  w-full text-white">
        <div className="container mx-auto sm:flex-row flex-col-reverse flex justify-between items-center ">
          <p dir="ltr">
            © {new Date().getFullYear()},{` `}
            <Link title="lesoll.com" href="https://lesoll.com">
              Lesoll.com
            </Link>
          </p>
          <div className="">
            <Link
              href="/termsofservice"
              title={language ? "الشروط والاحكام" : "Terms & conditions"}
            >
              {language ? "الشروط والاحكام" : "Terms & conditions"}
            </Link>
            <span className="px-2">|</span>
            <Link
              href="/privacypolicy"
              title={language ? "سياسة الخصوصية" : "Privacy Policy"}
            >
              {language ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

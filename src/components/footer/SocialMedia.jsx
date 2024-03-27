import React, { memo } from "react";
import {
  AiFillInstagram,
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const SocialMedia = () => {
  const stylesIcons = "text-[#656565]  text-[23px] ";
  const stylesIconsX = "text-[#656565] text-[18px] ";
  const contactSocialMedia = [
    {
      icon: <FaFacebookF className={stylesIcons} />,
      link: "https://www.facebook.com/LesollRealestate",
      title: "Facebook",
      id: 1,
    },
    {
      icon: <RiWhatsappFill className={stylesIcons} />,
      link: "https://wa.me/+201032362898",
      title: "WhatsApp",
      id: 3,
    },
    {
      icon: <AiFillInstagram className={stylesIcons} />,
      link: "https://www.instagram.com/lesollrealestate",
      title: "Instagram",
      id: 2,
    },
    {
      icon: <FaLinkedinIn className={stylesIcons} />,
      link: "https://www.linkedin.com/company/lesollrealestate/mycompany/",
      title: "linkedin",
      id: 4,
    },
    {
      icon: <BsTwitterX className={stylesIconsX} />,
      link: "https://twitter.com/LesollRealstate",
      title: "twitter",
      id: 5,
    },
  ];

  return (
    <div className=" flex justify-between md:gap-3 gap-1">
      {contactSocialMedia.map((social) => (
        <a
          target="_blank"
          href={social.link}
          key={social.id}
          className=" flex justify-center items-center text-3xl md:text-4xl text-white "
          title={social.title}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default memo(SocialMedia);

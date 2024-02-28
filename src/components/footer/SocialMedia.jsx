import React, { memo } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

const SocialMedia = () => {
  const stylesIcons = "text-darkGreen text-3xl md:text-4xl";
  const stylesIconsX = "text-darkGreen text-2xl md:text-3xl";
  const contactSocialMedia = [
    {
      icon: <AiFillFacebook className={stylesIcons} />,
      link: "https://www.facebook.com/LesollRealestate",
      title: "Facebook",
      id: 1,
    },
    {
      icon: <AiFillInstagram className={stylesIcons} />,
      link: "https://www.instagram.com/lesollrealestate",
      title: "Instagram",
      id: 2,
    },
    {
      icon: <AiOutlineWhatsApp className={stylesIcons} />,
      link: "https://wa.me/+201032362898",
      title: "WhatsApp",
      id: 3,
    },
    {
      icon: <BsTwitterX className={stylesIconsX} />,
      link: "https://wa.me/+201032362898",
      title: "WhatsApp",
      id: 4,
    },
  ];

  return (
    <div className=" flex md:gap-3 gap-1">
      {contactSocialMedia.map((social) => (
        // <div>
        <a
          target="_blank"
          href={social.link}
          key={social.id}
          className=" flex justify-center items-center text-3xl md:text-4xl text-white "
          title={social.title}
        >
          {social.icon}
        </a>
        // </div>
      ))}
    </div>
  );
};

export default memo(SocialMedia);

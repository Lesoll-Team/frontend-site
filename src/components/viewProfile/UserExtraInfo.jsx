import React from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const UserExtraInfo = ({ user }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const socialMedia = !!(
    user.getUser?.instagramLink ||
    user.getUser?.faceLink ||
    user.getUser?.tiktokLink ||
    user.getUser?.xLink ||
    user.getUser?.linkedInLink
  );
  const contactSocialMedia = [
    {
      icon: <FaFacebookF className="bg-blue-500 text-white sm:p-2 p-1" />,
      link: user.getUser?.faceLink,
      title: "Facebook",
      id: 1,
    },
    {
      icon: (
        <FaInstagram className=" sm:p-2 p-1 bg-gradient-to-tr from-amber-500 from-20%  via-pink-600 via-60% to-blue-800 to-1% text-white  " />
      ),
      link: user.getUser?.instagramLink,
      title: "Instagram",
      id: 2,
    },

    {
      icon: <BsTwitterX className="sm:p-2 p-1 bg-black text-white " />,
      link: user.getUser?.xLink,
      title: "twitter",
      id: 5,
    },
    {
      icon: <FaLinkedinIn className="sm:p-2 p-1 bg-[#007AB9] text-white  " />,
      link: user.getUser?.linkedInLink,
      title: "linkedin",
      id: 4,
    },
    {
      icon: <FaTiktok className="sm:p-2 p-1 bg-black text-white  " />,
      title: "Tiktok",
      link: user.getUser?.tiktokLink,
      id: 6,
    },
  ].filter((social) => social.link);
  return (
    <div className="space-y-6  md:space-y-8">
      {user.getUser.Bio && (
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="flex">
              <h3 className="text-base md:text-2xl font-bold text-darkGray">
                {language ? "عن" : "About"}
              </h3>
            </div>
          </div>
          <p className="text-sm md:text-xl text-baseGray">{user.getUser.Bio}</p>
        </div>
      )}
      {console.log(user.getUser?.workingHours)}
      {user.getUser?.workingHours && (
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="flex">
              <h4 className="text-base md:text-2xl font-bold text-darkGray">
                {language ? "مواعيد العمل" : "Working Hours"}
              </h4>
            </div>
          </div>

          <p className="text-sm md:text-xl text-baseGray">
            {user.getUser?.workingHours}
          </p>
        </div>
      )}

      {user.getUser?.companyAddress && (
        <div className="space-y-3">
          <div className="flex items-center">
            <h4 className="text-base md:text-2xl font-bold text-darkGray">
              {language ? "عنوان الشركة" : "Company Address"}
            </h4>
          </div>
          <p className="text-sm md:text-xl text-baseGray">
            {user.getUser?.companyAddress}
          </p>
        </div>
      )}
      {socialMedia && (
        <div className="space-y-4">
          <h4 className="text-base md:text-2xl font-bold text-darkGray">
            {language ? "مواقع التواصل" : "Social media"}
          </h4>
          <div className=" flex sm:gap-5 gap-3 items-center">
            {contactSocialMedia.map((social) => (
              <a
                target="_blank"
                href={social.link}
                key={social.id}
                title={social.title}
                className="flex justify-center items-center text-[1.7rem] sm:text-[2.5rem] rounded-full text-white overflow-hidden"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserExtraInfo;

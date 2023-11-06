import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
//icons imports
import { BsCheck2Circle } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { CgSandClock } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
// componets imports
const ActiveAds = dynamic(() => import("./ActiveAds"));
const PendingAds = dynamic(() => import("./PendingAds"));
const FavoriteAds = dynamic(() => import("./FavoriteAds"));
// import ActiveAds from "./ActiveAds";

// import PendingAds from "./PendingAds";
// import DraftAds from "./DraftAds";
// import InActiveAds from "./InActiveAds";
// import FavoriteAds from "./FavoriteAds";
import { Avatar } from "@nextui-org/react";
import InActiveAds from "./InActiveAds";
import Subscriptions from "./Subscriptions";
// import { fetchUserData } from "@/redux-store/features/globalState";
const Profile = () => {
  const userInfo = useSelector((state) => state.GlobalState.userData);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [userDataInfo, setUserDataInfo] = useState({});
  const [content, setContent] = useState("active");

  const switchTap = (tap) => {
    setContent(tap);
  };
  useEffect(() => {
    setUserDataInfo(userInfo);
  }, [userInfo]);

  const renderTap = () => {
    switch (content) {
      case "active":
        return <ActiveAds />;
        break;
      case "pending":
        return <PendingAds />;
        break;
      case "favorites":
        return <FavoriteAds />;
        break;
      case "Subscriptions":
        return <Subscriptions />;
        break;
      default:
        <ActiveAds />;
    }
  };
  function formatDate(dateString) {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    if (language) {
      return new Date(dateString).toLocaleString("ar-Eg", options);
    } else {
      return new Date(dateString).toLocaleString("en-US", options);
    }
  }
  const formattedDate = formatDate(userInfo?.createdAt);

  return (
    <>
      {/* user info */}

      <div className=" mt-8 relative pb-10">
        <section className="sm:container sm:mx-auto mx-2 ">
          <div className=" flex justify-center items-start relative rounded-lg drop-shadow-lg bg-white border py-10 p-5">
            <div className="flex justify-center items-center flex-col gap-3">
              <Avatar
                src={userDataInfo?.avatarUrl}
                className="w-24 h-24 text-large"
              />

              <div className="flex flex-col">
                <div>
                  <p className="font-bold text-xl md:text-2xl text-center">
                    {" "}
                    {userDataInfo?.fullname}
                  </p>

                  <p className="font-light md:text-lg text-center">
                    {" "}
                    @{userDataInfo?.username}
                  </p>
                  <div className="text-center">
                    {/* <p>انضممت منذ {formattedDate.toLocaleString("ar-Eg")} </p> */}
                  </div>
                </div>
              </div>
            </div>
            <Link
              title={language ? "الإعدادات" : "Edit Profile"}
              href={"/profile/settings"}
              className="absolute top-4 right-4"
            >
              <FiSettings className="font-semibold text-xl" />
            </Link>
          </div>
        </section>

        <div className="flex  justify-start sm:justify-center gap-3 md:gap-7 overflow-x-auto overflow-y-hidden items-center mt-10 mx-auto w-[100%]  px-2 ">
          <div
            onClick={() => {
              switchTap("active");
            }}
            className={`text-center cursor-pointer  pb-1 flex items-center gap-1 text-lg px-3 hover:text-lightGreen hover:duration-300 bg-gray-200 rounded-full p-1 ${
              content === "active" &&
              " text-lightGreen  border-lightGreen  relative "
            }`}
          >
            <BsCheck2Circle />
            <p className=" ">{language ? "النشطة" : "Active"}</p>
          </div>
          <div
            onClick={() => {
              switchTap("pending");
            }}
            className={`text-center cursor-pointer bg-  pb-1 flex items-center gap-1 text-lg px-3 hover:text-lightGreen hover:duration-300 bg-gray-200 rounded-full p-1 ${
              content === "pending" &&
              " text-lightGreen  border-lightGreen  relative "
            }`}
          >
            <CgSandClock />
            <p className="whitespace-nowrap ">
              {language ? "تحت المراجعة" : "Pending"}
            </p>
          </div>
          <div
            onClick={() => {
              switchTap("favorites");
            }}
            className={`text-center cursor-pointer bg-  pb-1 flex items-center gap-1 text-lg px-3 hover:text-lightGreen hover:duration-300 bg-gray-200 rounded-full p-1 ${
              content === "favorites" &&
              " text-lightGreen  border-lightGreen  relative "
            }`}
          >
            <AiOutlineHeart />
            <p className=" ">{language ? "المفضلة" : "Favorites"}</p>
          </div>
          <div
            onClick={() => {
              switchTap("Subscriptions");
            }}
            className={`text-center cursor-pointer  pb-1 flex items-center gap-1 text-lg px-3 hover:text-lightGreen hover:duration-300 bg-gray-200 rounded-full p-1 ${
              content === "Subscriptions" &&
              " text-lightGreen  border-lightGreen  relative "
            }`}
          >
            <p className=" ">{language ? "الإشتراكات" : "Subscriptions"}</p>
          </div>
        </div>
      </div>

      {/* user related data  */}
      <div className="container relative   mx-auto min-h-[100dvh]  md:gap-5">
        {renderTap()}
      </div>
    </>
  );
};

export default Profile;

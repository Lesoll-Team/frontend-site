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
import { Avatar } from "@nextui-org/react";
import { LiaHandshakeSolid } from "react-icons/lia";
import InActiveAds from "./InActiveAds";
import SoldOut from "./SoldOut";
const Profile = () => {
  const userInfo = useSelector((state) => state.userProfile.userData);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [userDataInfo, setUserDataInfo] = useState({});
  const [content, setContent] = useState("active");
  // switchcontent
  const switchActive = () => {
    setContent("active");
  };
  const switchPending = () => {
    setContent("pending");
  };

  const switchFav = () => {
    setContent("favorites");
  };

  const switchSoldOut = () => {
    setContent("sold");
  };
  useEffect(() => {
    setUserDataInfo(userInfo);
  }, [userInfo]);

  return (
    <>
      <div className="">
        {/* user info */}
        <div className="w-full   bg-white ">
          <div className="container mx-auto  py-10 relative pb-20">
            <div className="flex justify-between items-start">
              <div className="flex sm:items-center flex-col sm:flex-row gap-3">
                <Avatar
                  src={userDataInfo?.avatarUrl}
                  className="w-24 h-24 text-large"
                />

                <div className="flex flex-col">
                  <div>
                    <p className="font-bold text-xl md:text-2xl">
                      {" "}
                      {userDataInfo?.fullname}
                    </p>
                    {/* {userDataInfo?.fullname} */}
                    <p className="font-light md:text-lg">
                      {" "}
                      @{userDataInfo?.username}
                    </p>
                    {/* @{userDataInfo?.username} */}
                  </div>
                </div>
              </div>
              <Link
                title={language ? "الإعدادات" : "Edit Profile"}
                href={"/profile/settings"}
                className=" mt-3 right-4 top-[83px] font-semibold text-sm w-36 sm:w-32 text-center md:text-md px-2 sm:px-3 py-[5px] text-lightGreen border-2 border-lightGreen rounded-md flex justify-center items-center gap-1"
              >
                <FiSettings className="font-semibold " />
                {language ? "الإعدادات" : "Edit Profile"}
              </Link>
            </div>

            <div className="flex custom-scroll-bar justify-start  md:gap-7 overflow-x-auto overflow-y-hidden items-center mt-10 left-0  bottom-0 absolute mx-auto w-[100%]  border-b-[1px] border-gray-400 ">
              <div
                onClick={switchActive}
                className={`text-center cursor-pointer  pb-1 flex items-center gap-1 text-lg px-2 hover:text-lightGreen hover:duration-300 ${
                  content === "active" &&
                  "border-b-2 text-lightGreen  border-lightGreen  relative -bottom-[1px]"
                }`}
              >
                <BsCheck2Circle />
                <p className=" ">{language ? "النشطة" : "Active"}</p>
              </div>
              <div
                onClick={switchPending}
                className={`text-center cursor-pointer  pb-1 flex items-center gap-1 text-lg px-2 hover:text-lightGreen hover:duration-300 ${
                  content === "pending" &&
                  "border-b-2 text-lightGreen  border-lightGreen  relative -bottom-[1px]"
                }`}
              >
                <CgSandClock />
                <p className=" "> {language ? "تحت المراجعة" : "Pending"} </p>
              </div>
              <div
                onClick={switchFav}
                className={`text-center cursor-pointer  pb-1 flex items-center gap-1 text-lg px-2 hover:text-lightGreen hover:duration-300 ${
                  content === "favorites" &&
                  "border-b-2 text-lightGreen  border-lightGreen  relative -bottom-[1px]"
                }`}
              >
                <AiOutlineHeart />
                <p className=" ">{language ? "المفضلة" : "Favorites"}</p>
              </div>

              <div
                onClick={switchSoldOut}
                className={`text-center cursor-pointer  pb-1 flex items-center gap-1 text-lg px-2 hover:text-lightGreen hover:duration-300 ${
                  content === "sold" &&
                  "border-b-2 text-lightGreen  border-lightGreen  relative -bottom-[1px]"
                }`}
              >
                <LiaHandshakeSolid />
                <p className=" ">{language ? "تم البيع" : "Sold Out"}</p>
              </div>
            </div>
          </div>
        </div>
        {/* user related data  */}
        <div className="container relative  py-10 mx-auto min-h-[100dvh]  md:gap-5">
          {/* option list */}

          {content === "active" ? (
            <ActiveAds />
          ) : content === "sold" ? (
            <SoldOut />
          ) : content === "pending" ? (
            <PendingAds />
          ) : content === "draft" ? (
            <DraftAds />
          ) : content === "inactive" ? (
            <InActiveAds />
          ) : content === "favorites" ? (
            <FavoriteAds />
          ) : (
            "Settings"
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;

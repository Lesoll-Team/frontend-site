import Image from "next/image";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { FiPaperclip, FiSettings } from "react-icons/fi";
import { RiRadioButtonLine } from "react-icons/ri";
import { CgSandClock } from "react-icons/cg";
import { RiDraftLine } from "react-icons/ri";
import { MdDoNotDisturbOn } from "react-icons/md";
// import {FiPaperclip} from "react-icons/Fi"
import { AiOutlineHeart } from "react-icons/ai";
import userImg from "../../../public/userimg.webp";
import ActiveAds from "./ActiveAds";
import Link from "next/link";
import PendingAds from "./PendingAds";
import DraftAds from "./DraftAds";
import InActiveAds from "./InActiveAds";
import FavoriteAds from "./FavoriteAds";
const Profile = () => {
  const [content, setContent] = useState("inactive");

  // switchcontent
  const switchActive = () => {
    setContent("active");
  };
  const switchPending = () => {
    setContent("pending");
  };
  const switchDraft = () => {
    setContent("draft");
  };
  const switchInActive = () => {
    setContent("inactive");
  };
  const switchFav = () => {
    setContent("favorites");
  };
  return (
    <>
      <div className="">
        {/* user info */}
        <div className="w-full  drop-shadow-xl bg-white ">
          <div className="container mx-auto 0 py-10 relative pb-20">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <Image
                  src={userImg}
                  width={"auto"}
                  height={"auto"}
                  className="w-[100px] h-[100px] rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-lg">Abdelrahman Mostafa</p>
                  <p className="font-light">@abdo2255</p>
                </div>
              </div>
              {/* <Link
                href={"/"}
                className="px-3 py-1 bg-lightOrange text-white rounded-full flex items-center gap-1 "
              >
                <FiSettings />
                settings
              </Link> */}
              <FiSettings className="text-2xl absolute right-4 top-[65px]" />
            </div>
            <div className="flex justify-between  items-center mt-5 gap-2 max-w-[400px]">
              <div className="text-center  items-center flex gap-1 text-gray-500">
                <p className="text-sm">100</p>
                <p className=" ">Active</p>
              </div>
              <div className="text-center  flex gap-1 items-center text-gray-500">
                <p className="text-sm">5</p>
                <p className=" ">Pending</p>
              </div>
              <div className="text-center  flex gap-1 items-center text-gray-500">
                <p className="text-sm">2</p>
                <p className=" ">Draft</p>
              </div>
              <div className="text-center  flex gap-1 items-center text-gray-500">
                <p className="text-sm">0</p>
                <p className=" ">InActive</p>
              </div>
            </div>
            <div className="flex custom-scroll-bar justify-between overflow-x-auto overflow-y-hidden items-center mt-10 left-0  bottom-0 absolute mx-auto w-[100%]  border-b-[1px] border-gray-400 ">
              <div
                onClick={switchActive}
                className={`text-center cursor-pointer  pb-1 flex items-center gap-1 text-lg px-2 ${
                  content === "active" &&
                  "border-b-2 text-lightGreen  border-lightGreen  relative -bottom-[1px]"
                }`}
              >
                <BsCheck2Circle />
                <p className=" ">Active</p>
              </div>
              <div
                onClick={switchPending}
                className={`text-center cursor-pointer  pb-1 flex items-center gap-1 text-lg px-2 ${
                  content === "pending" &&
                  "border-b-2 text-lightGreen  border-lightGreen  relative -bottom-[1px]"
                }`}
              >
                <CgSandClock />
                <p className=" ">Pending</p>
              </div>
              <div
                onClick={switchDraft}
                className={`text-center cursor-pointer  pb-1 flex items-center gap-1 text-lg px-2 ${
                  content === "draft" &&
                  "border-b-2 text-lightGreen  border-lightGreen  relative -bottom-[1px]"
                }`}
              >
                <RiDraftLine />
                <p className=" ">Draft</p>
              </div>
              <div
                onClick={switchInActive}
                className={`text-center cursor-pointer  pb-1 flex items-center gap-1 text-lg px-2 ${
                  content === "inactive" &&
                  "border-b-2 text-lightGreen  border-lightGreen  relative -bottom-[1px]"
                }`}
              >
                <MdDoNotDisturbOn />
                <p className=" ">InActive</p>
              </div>
              <div
                onClick={switchFav}
                className={`text-center cursor-pointer  pb-1 flex items-center gap-1 text-lg px-2 ${
                  content === "favorites" &&
                  "border-b-2 text-lightGreen  border-lightGreen  relative -bottom-[1px]"
                }`}
              >
                <AiOutlineHeart />
                <p className=" ">Favorites</p>
              </div>
            </div>
          </div>
        </div>
        {/* user related data  */}
        <div className="container relative  py-10 mx-auto min-h-[100dvh]  md:gap-5">
          {/* option list */}

          {content === "active" ? (
            <ActiveAds />
          ) : content === "pending" ? (
            <PendingAds />
          ) : content === "draft" ? (
            <DraftAds />
          ) : content === "inactive" ? (
            <InActiveAds />
          ) : content === "favorites" ? (
            <FavoriteAds />
          ) : (
            "error"
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;

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
// import { fetchUserData } from "@/redux-store/features/globalState";
const Profile = () => {
  const userInfo = useSelector((state) => state.GlobalState.userData);
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
  // const switchDraft = () => {
  //   setContent("draft");
  // };
  // const switchInActive = () => {
  //   setContent("inactive");
  // };
  const switchFav = () => {
    setContent("favorites");
  };
  useEffect(() => {
    setUserDataInfo(userInfo);
  }, [userInfo]);

  // const dispatch = useDispatch();
  // const userData = useSelector((state) => state.globalState.userData);

  // useEffect(() => {
  //   // Call fetchUserData async thunk when the component mounts
  //   dispatch(fetchUserData());
  // }, [dispatch]);
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
                  {/* <div className="flex justify-start  items-center  gap-5 max-w-[400px] mt-2 flex-wrap">
                    <div className="text-center  items-center  gap-1 text-gray-500 text-lg">
                      <p className="text-lg ">
                        {language ? "النشطة" : "Active"}
                      </p>
                      <p className="text-lg">
                        {userDataInfo?.numProducts}
                   
                      </p>
                    </div>
                    <div className="text-center   gap-1 items-center text-gray-500">
                      <p className="text-lg ">
                    
                        {language ? "المفضلة" : "Favorites"}
                      </p>
                      <p className="text-lg">{userInfo?.favorites.length}</p>
                      
                    </div>
                  </div> */}
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
            "Settings"
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;

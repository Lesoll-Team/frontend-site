import Image from "next/image";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { RiRadioButtonLine } from "react-icons/ri";
import { CgSandClock } from "react-icons/cg";
import { GiArchiveRegister } from "react-icons/gi";
import userImg from "../../../public/userimg.webp";
const Profile = () => {
  return (
    <>
      <div className="">
        {/* user info */}
        <div className="w-full  drop-shadow-xl bg-lightGreen text-white">
          <div className="container mx-auto 0 py-10">
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
                  <p className="font-semibold">@abdo2255</p>
                </div>
              </div>
              <FiSettings className="text-lg relative top-2 md:text-2xl cursor-pointer" />
            </div>
            <div className="flex justify-between items-center mt-5 max-w-[400px] ">
              <div className="text-center cursor-pointer border-b-2 border-lightOrange pb-1">
                <p className="font-semibold">100</p>
                <p className="font-semibold ">Active</p>
              </div>
              <div className="text-center cursor-pointer">
                <p className="font-semibold">5</p>
                <p className="font-semibold ">Pending</p>
              </div>
              <div className="text-center cursor-pointer">
                <p className="font-semibold">2</p>
                <p className="font-semibold ">Draft</p>
              </div>
              <div className="text-center cursor-pointer">
                <p className="font-semibold">0</p>
                <p className="font-semibold ">InActive</p>
              </div>
            </div>
          </div>
        </div>
        {/* user related data  */}
        <div className="container relative  py-10 mx-auto min-h-[100dvh]  md:gap-5">
          {/* option list */}

          <div className="flex-2 w-3/4">hi</div>
        </div>
      </div>
    </>
  );
};

export default Profile;

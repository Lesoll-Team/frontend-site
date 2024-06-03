import Image from "next/image";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineCall, MdOutlineEdit } from "react-icons/md";

import { useUser } from "@/Shared/UserContext";
import EditProfilePic from "./editUserDataForms/EditProfilePic";
import { useState } from "react";

const ProfileHeader = ({ hideHeader }) => {
  const [editPicOpen, setEdiPicOpen] = useState(false);
  const { data } = useUser();

  if (data)
    return (
      <div>
        <header
          className={` w-full flex flex-col lg:flex-row justify-center mb-10 items-center md:mb-20   gap-[14px] lg:gap-[24px] ${
            hideHeader && "md:flex hidden"
          } `}
        >
          <div className=" w-[84px] h-[84px] lg:w-[100px] lg:h-[100px] relative">
            <Image
              src={data?.avatarUrl || "/user-avatar-placeholder.png"}
              width={100}
              height={100}
              alt="user avatar"
              className="rounded-full object-cover"
            />

            <button
              onClick={() => setEdiPicOpen(true)}
              className="absolute bg-gray-300 cursor-pointer border p-2 rounded-full text-xl h-8 w-8 md:w-10 md:h-10  flex items-center justify-center border-black bottom-0"
            >
              <MdOutlineEdit />
            </button>
            {editPicOpen && (
              <EditProfilePic isOpen={editPicOpen} setIsOpen={setEdiPicOpen} />
            )}
          </div>
          <div className="flex w-full flex-col items-center lg:items-end lg:flex-row justify-center md:justify-between flex-wrap">
            <div className="lg:space-y-[24px]">
              <h2 className=" text-baseGray font-bold">
                {data?.fullname}{" "}
                {/* <span className="text-xl text-baseGray font-normal">(فرد)</span> */}
              </h2>
              <div className="hidden lg:flex  items-center gap-14">
                <div className=" flex items-center gap-2">
                  <MdOutlineCall className="text-2xl text-lightGreen" />
                  <h3 className=" text-baseGray font-normal">
                    {data?.code + data?.phone}
                  </h3>
                </div>
                <div className=" flex items-center gap-2">
                  <HiOutlineMailOpen className="text-2xl text-lightGreen" />
                  <h3 className=" text-baseGray break-words break-all font-normal xl:max-w-fit">
                    {data?.email}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  else
    return (
      <header
        className={` w-full flex flex-col lg:flex-row justify-center items-center  md:mb-20   gap-[14px] lg:gap-[24px] ${
          hideHeader && "md:flex hidden"
        } `}
      >
        <div className="rounded-full object-cover w-[84px] h-[84px] lg:w-[100px] bg-gray-300 animate-pulse lg:h-[100px]" />
        <div className="flex w-full flex-col items-center lg:items-end lg:flex-row justify-center md:justify-between flex-wrap">
          <div className="lg:space-y-[24px]">
            <div className="bg-gray-300 w-32 h-3 rounded animate-pulse" />

            <div className="hidden lg:flex  items-center gap-14">
              <div className=" flex items-center gap-2 w-44 rounded h-[10px] bg-gray-300 animate-pulse" />

              <div className=" flex items-center gap-2 w-44 rounded h-[10px] bg-gray-300 animate-pulse" />
            </div>
          </div>
          <div className="p-[8px] lg:px-3 lg:py-5 mt-2 bg-gray-300 animate-pulse  w-[155px] h-[25px] lg:w-[220px] lg:h-[60px] rounded flex gap-2 lg:gap-4 items-center justify-center flex-wrap "></div>
        </div>
      </header>
    );
};
export default ProfileHeader;

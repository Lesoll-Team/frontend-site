import Image from "next/image";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineCall, MdOutlineEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import ProfilePicForm from "./editUserDataForms/ProfilePicForm";

const ProfileHeader = ({ hideHeader }) => {
  const userData = useSelector((state) => state.userProfile.userData);
  const language = useSelector((state) => state.GlobalState.languageIs);
  console.log(userData);
  if (userData)
    return (
      <div>
        <header
          className={` w-full flex flex-col lg:flex-row justify-center mb-10 items-center md:mb-20   gap-[14px] lg:gap-[24px] ${
            hideHeader && "md:flex hidden"
          } `}
        >
          <div className=" w-[84px] h-[84px] lg:w-[100px] lg:h-[100px] relative">
            <Image
              src={userData?.avatarUrl || "/user-avatar-placeholder.png"}
              width={100}
              height={100}
              alt="user avatar"
              className="rounded-full object-cover"
            />
            <ProfilePicForm
              openBtn={
                <div className="absolute bg-gray-300 cursor-pointer border p-2 rounded-full text-xl h-8 w-8 md:w-10 md:h-10  flex items-center justify-center border-black bottom-0">
                  <MdOutlineEdit />
                </div>
              }
            />
          </div>
          <div className="flex w-full flex-col items-center lg:items-end lg:flex-row justify-center md:justify-between flex-wrap">
            <div className="lg:space-y-[24px]">
              <h3 className="lg:text-2xl text-lg text-baseGray font-bold">
                {userData?.fullname}
              </h3>
              <div className="hidden lg:flex  items-center gap-14">
                <div className=" flex items-center gap-2">
                  <MdOutlineCall className="text-2xl text-lightGreen" />
                  <p className="text-xl text-baseGray">
                    {userData?.code + userData?.phone}
                  </p>
                </div>
                <div className=" flex items-center gap-2">
                  <HiOutlineMailOpen className="text-2xl text-lightGreen" />
                  <p className="text-base xl:text-xl text-baseGray break-words break-allxl:max-w-fit">
                    {userData?.email}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-[8px] lg:px-3 lg:py-5 mt-2 bg-lightNeutral h-fit rounded flex gap-2 lg:gap-4 items-center justify-center flex-wrap ">
              <p className="text-sm xl:text-base font-bold text-lightGreen">
                {language ? "الطلبات" : "Needs"}{" "}
                <span className="text-outLine">{5}</span>
              </p>
              <p className="text-sm   xl:text-base font-bold text-lightGreen">
                {language ? "عدد العقارات" : "Properties"}{" "}
                <span className="text-outLine">{5}</span>
              </p>
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
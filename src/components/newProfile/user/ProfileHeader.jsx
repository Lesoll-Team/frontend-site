import Image from "next/image";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineCall, MdOutlineEdit } from "react-icons/md";
import ProfilePicForm from "./editUserDataForms/ProfilePicForm";
import { useUser } from "@/Shared/UserContext";
import ProfileHeaderSkeleton from "./ProfileHeaderSkeleton";

const ProfileHeader = ({ hideHeader }) => {
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
              priority
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
  else return <ProfileHeaderSkeleton hideHeader={hideHeader} />;
};
export default ProfileHeader;

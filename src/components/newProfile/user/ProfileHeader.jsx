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
              placeholder="blur"
              loading="lazy"
              quality={80}
              blurDataURL="data:image/webp;base64,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"
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

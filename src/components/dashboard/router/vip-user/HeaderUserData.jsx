import Image from "next/image";
import { FaHouzz } from "react-icons/fa6";
import { TbRefresh } from "react-icons/tb";
import { RxDrawingPinFilled } from "react-icons/rx";
import Link from "next/link";
import { memo } from "react";

const HeaderUserData = ({ userData }) => {
  const premium = userData?.countRepostProperty + userData?.countPinProperty;
  const normal = userData?.countProperty - premium;
  return (
    <div className="w-full grid lg:grid-cols-2 grid-cols-1 space-y-4 p-2 items-center">
      <div className="flex items-center  justify-center md:justify-normal w-full ">
        <Link href={`/view-profile/${userData?.username}`}>
          <Image
            alt="user avatar"
            width={100}
            height={100}
            src={userData?.avatarUrl || "/user-avatar-placeholder.png"}
            className="rounded-full object-cover w-[8vw] h-[8vw] min-h-[60px] max-h-[130px] min-w-[60px] max-w-[130px]"
          />
        </Link>
        <div className=" mx-2">
          <h1 className="text-2xl font-bold">
            <Link href={`/view-profile/${userData?.username}`}>
              {userData?.fullname}
            </Link>
          </h1>
          <p className="text-gray-500">{userData?.email}</p>
          <p className="text-gray-500">{userData?.phone}</p>
        </div>
      </div>
      <div className=" flex w-full gap-3">
        <ul className="w-full px-[1vw]  p-0.5 flex flex-col ">
          <p>Normal</p>
          <div className="w-full px-[1vw]  p-0.5 justify-between items-center flex  bg-gray-100 py-2">
            <FaHouzz className="md:text-4xl text-xl" />
            <li className="font-bold md:text-4xl text-xl">{normal}</li>
          </div>
        </ul>
        <ul className="w-full px-[1vw]  p-0.5 flex flex-col ">
          <p>Pin</p>
          <div className="w-full px-[1vw]  p-0.5 justify-between items-center flex  bg-gray-100 py-2">
            <RxDrawingPinFilled className="text-red-500 md:text-4xl text-xl -rotate-90" />
            <li className="font-bold md:text-4xl text-xl">
              {userData?.countPinProperty}
            </li>
          </div>
        </ul>
        <ul className="w-full px-[1vw]  p-0.5 flex flex-col ">
          <p>Repost</p>
          <div className="w-full px-[1vw]  p-0.5 justify-between items-center flex  bg-gray-100 py-2">
            <TbRefresh className="text-green-500 md:text-4xl text-xl" />
            <li className="font-bold md:text-4xl text-xl">
              {userData?.countRepostProperty}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default memo(HeaderUserData);

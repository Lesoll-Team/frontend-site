// import Image from "next/image";
// import testImg from "../../../public/testimg.webp";
import { AddToFavorites } from "@/utils/propertyAPI";

import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState, memo } from "react";
const RealtyCardRent = ({ propertyDetails }) => {
  const userInfo = useSelector((state) => state.GlobalState.userData);
  const language = useSelector((state) => state.GlobalState.languageIs);

  const [loved, setLoved] = useState(false);
  const addToFAv = async () => {
    try {
      await AddToFavorites(propertyDetails?._id);

      // Handle success (e.g., show a success message)
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error("Error add to fav :", error);
    }
  };

  useEffect(() => {
    if (userInfo?.favorites.includes(propertyDetails?._id)) {
      setLoved(true);
    }
  }, [userInfo?.favorites]);
  // console.log("Rent :", propertyDetails);
  // console.log(propertyDetails);
  return (
    <div className="md:max-w-[310px] lg:w-[350px] w-[295px] h-[430px] rounded-[30px] overflow-hidden relative bg-white text-lightGreen pb-3 drop-shadow-xl">
      {/* number of views */}
      <div className="flex items-center justify-between absolute  top-10">
        {/* <div className=" bg-white  top-9 text-sm w-20 text-center px-2 py-1  rounded-r-full">
          <span>views</span> <span>{propertyDetails?.users.views.length}</span>
        </div> */}
        {userInfo && (
          <div className=" bg-white  drop-shadow-lg p-7 mx-2  text-2xl rounded-lg text-center px-2 py-1 cursor-pointer  ">
            {userInfo ? (
              loved ? (
                <AiFillHeart
                  className="text-red-500"
                  onClick={() => {
                    addToFAv();
                    setLoved(!loved);
                  }}
                />
              ) : (
                <AiOutlineHeart
                  className="text-red-500"
                  onClick={() => {
                    addToFAv();
                    setLoved(!loved);
                  }}
                />
              )
            ) : (
              ""
            )}
            {/* <AiFillHeart className="text-red-500"  /> */}
          </div>
        )}
      </div>

      {/* card img */}
      <div>
        <Link
          key={propertyDetails?._id}
          href={`/propertyDetails/${propertyDetails?._id}`}
        >
          <img
            alt="Realty"
            src={propertyDetails?.thumbnail || propertyDetails?.album[0]?.image}
            loading="lazy"
            className="w-full h-[220px] overflow-hidden   object-cover"
          />
        </Link>
      </div>
      {/* card body  */}
      <div className="relative space-y-5">
        <div className="  bg-lightGreen text-white  h-10 px-6 flex justify-between mb-1 items-center relative z-[100] rounded-b-">
          <p className="font-bold">
            <span>{propertyDetails?.price.toLocaleString()}</span>{" "}
            {language ? "جنية" : "EGP"}
          </p>
          <p className="font-semibold">
            {propertyDetails?.offer === "For Sale"
              ? language
                ? "للبيع"
                : "For Sale"
              : language
              ? "للإيجار"
              : "For Rent"}
          </p>
        </div>
        <Link
          key={propertyDetails?._id}
          href={`/propertyDetails/${propertyDetails?._id}`}
        >
          <div className=" text-lightOrange mt-3  px-5 flex justify-between  font-bold">
            <p>
              {propertyDetails?.title.substring(0, 30)}
              {propertyDetails?.title.length > 30 && "..."}
            </p>
          </div>
        </Link>
        <div className=" text-lightGreen   px-5 flex  justify-start gap-5">
          <div className="flex items-center justify-start gap-1">
            {" "}
            <BiSolidBed className="text-xl " />{" "}
            <p className="text-[12px] font-semibold text-darkGray">
              {propertyDetails?.rooms} {language ? "غرف" : "Rooms"}
            </p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <FaBath className="text-xl " />{" "}
            <p className="text-[12px] font-semibold text-darkGray">
              {propertyDetails?.bathRooms} {language ? "حمام" : "Bathroom"}
            </p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <TbRulerMeasure className="text-l " />{" "}
            <p className="text-[12px] font-semibold text-darkGray">
              {propertyDetails?.area}{" "}
              {language ? (
                <span>
                  م<sup>2</sup>
                </span>
              ) : (
                <span>
                  m<sup>2</sup>
                </span>
              )}
            </p>
          </div>
        </div>
        {/* location */}
        <div className="px-5 mb-1 flex flex-col  justify-start items-start gap-3 ">
          <p className="text-sm  text-darkGray">
            {/* {propertyDetails?.address.name} */}
            {propertyDetails?.address?.name.substring(0, 50) || "not Found"} ...
            {/* {propertyDetails?.address?.region.substring(0, 50) || "not Found"}{" "}
            {propertyDetails?.address?.governrate.substring(0, 50) ||
              "not Found"}{" "} */}
            ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(RealtyCardRent);
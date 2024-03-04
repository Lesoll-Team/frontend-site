import { fetchUserData } from "@/redux-store/features/globalState";
import { AddToFavorites } from "@/utils/propertyAPI";
// import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { PiBathtub } from "react-icons/pi";
import { LiaBedSolid, LiaVectorSquareSolid } from "react-icons/lia";
import Image from "next/image";

const RealtyCard = ({ propertyDetails }) => {
  const userInfo = useSelector((state) => state.GlobalState.userData);
  // const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();

  const [loved, setLoved] = useState(false);
  const addToFAv = async () => {
    try {
      await AddToFavorites(propertyDetails?._id);
      dispatch(fetchUserData());
    } catch (error) {
      console.error("Error add to fav :", error);
    }
  };

  useEffect(() => {
    if (userInfo?.favorites.includes(propertyDetails?._id)) {
      setLoved(true);
    }
  }, [userInfo?.favorites]);
  return (
    <div //md:w-[380px] 2xl:w-[400px]  w-full
      className=" md:max-w-[400px]
      md:h-[355px] h-[145px] 
     flex   md:block overflow-hidden rounded-md bg-white drop-shadow-md  relative"
    >
      {/* start icon favorite */}
      <div className="flex absolute md:mt-[16px] m-[10px] md:mr-[20px]">
        {userInfo && (
          <div
            className=" bg-white  drop-shadow-md flex justify-center w-[25px] h-[25px] md:w-[40px] md:h-[40px] items-center 
            md:text-2xl text-md rounded-full  text-center  cursor-pointer  "
          >
            {userInfo &&
              (loved ? (
                <AiFillHeart
                  className="text-red-500 animate-appearance-in"
                  onClick={() => {
                    addToFAv();
                    setLoved(!loved);
                  }}
                />
              ) : (
                <AiOutlineHeart
                  className="text-black animate-appearance-in"
                  onClick={() => {
                    addToFAv();
                    setLoved(!loved);
                  }}
                />
              ))}
          </div>
        )}
      </div>
      {/** end icon favorite */}

      {/* start Image */}
      <Link
        title={`${propertyDetails?.title}`}
        key={propertyDetails?._id}
        href={`/property-details/${propertyDetails?.slug}`}
        className="
         md:h-[174px] h-[145px] md:min-w-[480px] md:max-w-[480px]  min-w-[135px] max-w-[135px] flex"
      >
        <Image
          alt="Card background"
          radius="none"
          className=" flex object-cover  
          "
          priority
          // className="flex  md:h-[174px] h-[135px]"
          width={400}
          height={174}
          src={propertyDetails?.thumbnail || propertyDetails?.album[0]?.image}
        />
      </Link>
      {/* end Image */}

      {/* start card data */}
      <div className=" md:p-[20px] p-3 w-full flex flex-col md:gap-y-[16px] gap-y-[6px]">
        {/* start contact and price */}
        <div className="flex flex-row items-center justify-between">
          {propertyDetails?.offer !== "For Investment" && (
            <p className=" font-bold font-inter  text-gray2 text-[12px] md:text-[20px]">
              <span>{parseInt(propertyDetails?.price)}</span>
              {" EGP "}
              <span className="text-gray2 mx-5 md:text-[17px] text-[12px] font-normal"></span>
            </p>
          )}
          <div className="flex justify-between  gap-x-3 md:gap-0 md:w-[95px] ">
            <div className="bg-[#E1F9FA] cursor-pointer active:animate-appearance-in w-[25px] h-[25px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center">
              <IoIosCall className="text-[16px] md:text-[30px] text-blue-600" />
            </div>
            <div className="bg-green-600 cursor-pointer active:animate-appearance-in w-[25px] h-[25px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center">
              <FaWhatsapp className="text-[16px]  md:text-[30px] text-white" />
            </div>
          </div>
        </div>
        {/* end contact and price */}

        {/* start title */}
        <Link
          title={`${propertyDetails?.title}`}
          key={propertyDetails?._id}
          href={`/property-details/${propertyDetails?.slug}`}
          className="md:w-full"
        >
          <h4 className="font-bold text-[#4E4E4E] md:mt-0 mt-1 text-[11px] md:text-[20px] md:line-clamp-1 line-clamp-2  ">
            {propertyDetails?.title}
          </h4>
        </Link>
        {/* end title */}

        {/* start location and details rooms ...etc*/}
        <div className="md:flex  md:items-center  md:justify-between md:space-y-[0px] space-y-[8px]">
          <p className="flex items-center  min-w-max text-gray2 md:text-[17px] text-[12px] gap-1  ">
            {propertyDetails?.address?.region
              ? propertyDetails?.address?.region
              : propertyDetails?.address?.governrate}
          </p>
          <div className="  flex items-center  min-w-max  text-darkGray ">
            {propertyDetails?.rooms > 0 && (
              <ul className="flex items-center gap-x-1  ">
                <li className="font-bold text-[11px] font-inter md:text-[17px]">
                  {propertyDetails?.rooms}
                </li>
                <LiaBedSolid className="md:text-[25px]" />
              </ul>
            )}
            {propertyDetails?.bathRooms > 0 && (
              <>
                <hr className=" border-gray-400 border-[1px] md:w-[25px] w-[15px] rotate-90" />
                <ul className="flex items-center gap-x-1  ">
                  <li className="font-bold text-[11px] font-inter md:text-[17px]">
                    {propertyDetails?.bathRooms}
                  </li>
                  <PiBathtub className="md:text-[25px]" />
                </ul>
              </>
            )}
            {propertyDetails?.area > 0 && (
              <>
                {propertyDetails?.rooms > 0 &&
                  propertyDetails?.bathRooms > 0 && (
                    <hr className=" border-gray-400 border-[1px] md:w-[25px] w-[15px] rotate-90" />
                  )}

                <ul className="flex items-center gap-x-1  ">
                  <LiaVectorSquareSolid className=" md:text-[20px]" />
                  <li className="font-bold text-[11px] font-inter md:text-[17px]">
                    {propertyDetails?.area + " m "}
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
        {/* end location and details rooms ...etc*/}
      </div>
      {/* end card data */}
    </div>
  );
};
export default RealtyCard;

/* <p className="text-md    uppercase font-semibold">
            {" "}
            {propertyDetails?.offer === "For Sale"
              ? language
                ? "للبيع"
                : "For Sale"
              : propertyDetails?.offer === "For Rent"
              ? language
                ? "للإيجار"
                : "For Rent"
              : language
              ? "للإستثمار"
              : "For Investment"}
          </p> */

/* <div className="w-full h-[2px] bg-slate-100 rounded-full"></div>
        <div className=" text-darkGray w-full  flex  justify-between ">
          <div className="flex items-center justify-start gap-1">
            {" "}
            <BiSolidBed className="text-xl " />{" "}
            <p className=" font-semibold text-darkGray">
              {language
                ? propertyDetails?.rooms.toLocaleString("ar-Eg")
                : propertyDetails?.rooms.toLocaleString()}{" "}
              {language ? "غرف" : "Rooms"}
            </p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <FaBath className="text-xl " />{" "}
            <p className=" font-semibold text-darkGray">
              {language
                ? propertyDetails?.bathRooms.toLocaleString("ar-Eg")
                : propertyDetails?.bathRooms.toLocaleString()}{" "}
              {language ? "حمام" : "Bath"}
            </p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <TbRulerMeasure className="text-l " />{" "}
            <p className=" font-semibold text-darkGray">
              {language
                ? propertyDetails?.area.toLocaleString("ar-Eg")
                : propertyDetails?.area.toLocaleString()}{" "}
              {language ? (
                <span>
                  <sup>2</sup>
                </span>
              ) : (
                <span>
                  m<sup>2</sup>
                </span>
              )}
            </p>
          </div>
        </div> */

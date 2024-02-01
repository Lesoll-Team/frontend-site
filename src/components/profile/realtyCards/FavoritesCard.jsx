import { fetchUserData } from "@/redux-store/features/globalState";
import { AddToFavorites } from "@/utils/propertyAPI";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbRulerMeasure } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

const FavoritesCard = ({ propertyDetails, onRemove }) => {
  const userInfo = useSelector((state) => state.GlobalState.userData);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();

  const [loved, setLoved] = useState(false);
  const addToFAv = async () => {
    try {
      await AddToFavorites(propertyDetails?._id);
      onRemove(propertyDetails._id);

      dispatch(fetchUserData());

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

  return (
    <div className="w-[330px] overflow-hidden  bg-white drop-shadow-md rounded-xl relative">
      <div className="flex items-center justify-between absolute  top-10">
        {/* <div className=" bg-white  top-9 text-sm w-20 text-center px-2 py-1  rounded-r-full">
          <span>views</span> <span>{propertyDetails?.users.views.length}</span>
        </div> */}
        {userInfo && (
          <div className="z-[10000] bg-white  drop-shadow-md flex items-center  mx-2  text-2xl rounded-full h-10 w-10 text-center px-2 py-1 cursor-pointer  ">
            {userInfo ? (
              loved ? (
                <AiFillHeart
                  className="text-red-500 animate-appearance-in"
                  onClick={() => {
                    addToFAv();

                    setLoved(!loved);
                  }}
                />
              ) : (
                <AiOutlineHeart
                  className="text-red-500 animate-appearance-in"
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
      <div className="">
        <Link
          title={`${propertyDetails?.title}`}
          key={propertyDetails?._id}
          href={`/property-details/${propertyDetails?.slug}`}
          className="w-full"
        >
          <Image
            alt="Card background"
            radius="none"
            className="object-cover w-[330px]  h-[265px]"
            src={propertyDetails?.thumbnail || propertyDetails?.album[0]?.image}
          />
        </Link>
      </div>
      <div className="space-y-3 p-5">
        <div className="flex flex-row items-center  justify-between">
          {propertyDetails?.offer !== "For Investment" && (
            <p className=" font-bold text-darkGreen text-lg">
              <span>
                {language
                  ? parseInt(propertyDetails?.price).toLocaleString("ar-Eg")
                  : parseInt(propertyDetails?.price).toLocaleString()}{" "}
              </span>
              {language ? "جنية" : "EGP"}
            </p>
          )}
          <p className="text-md    uppercase font-semibold">
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
          </p>
        </div>
        <Link
          title={`${propertyDetails?.title}`}
          key={propertyDetails?._id}
          href={`/property-details/${propertyDetails?.slug}`}
          className="w-full"
        >
          <h4 className="font-semibold text-large line-clamp-1 ">
            {propertyDetails?.title}
          </h4>
        </Link>
        <p className="flex items-center gap-1 line-clamp-1">
          <FaLocationDot className="text-lightOrange font-bold" />{" "}
          <span className="line-clamp-1">
            {`${propertyDetails?.address?.governrate}${
              propertyDetails?.address?.region && " ,"
            }${
              propertyDetails?.address?.region &&
              propertyDetails?.address?.region
            }`}
          </span>
        </p>

        <div className="w-full h-[2px] bg-slate-100 rounded-full"></div>
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
      </div>
    </div>
  );
};
export default FavoritesCard;

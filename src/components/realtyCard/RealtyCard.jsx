// import Image from "next/image";
// import testImg from "../../../public/testimg.webp";
import { AddToFavorites } from "@/utils/propertyAPI";
import { Image } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState, memo } from "react";
import { fetchUserData } from "@/redux-store/features/globalState";

const RealtyCardRent = ({ propertyDetails }) => {
  const userInfo = useSelector((state) => state.GlobalState.userData);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();

  const [loved, setLoved] = useState(false);
  const addToFAv = async () => {
    try {
      await AddToFavorites(propertyDetails?._id);
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
  // console.log("Rent :", propertyDetails);
  // console.log(propertyDetails);
  return (
    <div className=" w-[310px] h-[420px] rounded-[25px] overflow-hidden relative bg-white text-lightGreen pb-3 drop-shadow-xl animate-appearance-in">
      {/* number of views */}
      <div className="flex items-center justify-between absolute  top-10">
        {/* <div className=" bg-white  top-9 text-sm w-20 text-center px-2 py-1  rounded-r-full">
          <span>views</span> <span>{propertyDetails?.users.views.length}</span>
        </div> */}
        {userInfo && (
          <div className="z-[10000] bg-white  drop-shadow-lg p-7 mx-2  text-2xl rounded-lg text-center px-2 py-1 cursor-pointer  ">
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

      {/* card img */}
      <div className="z-10 w-full">
        <Link
          title={`${propertyDetails?.title}`}
          key={propertyDetails?._id}
          href={`/property-details/${propertyDetails?.slug}`}
          className="w-full"
        >
          <Image
            alt="Realty"
            radius="none"
            src={propertyDetails?.thumbnail || propertyDetails?.album[0]?.image}
            loading="lazy"
            className=" w-[310px] h-[225px] rounded-none overflow-hidden object-cover"
          />
        </Link>
      </div>
      {/* card body  */}
      <div className="relative space-y-5">
        <div className="  bg-lightGreen text-white  h-10 px-6 flex justify-between mb-1 items-center relative z-[100] rounded-b-">
          {propertyDetails?.offer !== "For Investment" && (
            <p className="font-medium">
              <span>
                {language
                  ? parseInt(propertyDetails?.price).toLocaleString("ar-Eg")
                  : parseInt(propertyDetails?.price).toLocaleString()}{" "}
              </span>
              {language ? "جنية" : "EGP"}
            </p>
          )}
          <p className="font-medium">
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
          key={propertyDetails?._id}
          href={`/property-details/${propertyDetails?.slug}`}
          title={`${propertyDetails?.title}`}
        >
          <div
            dir="rtl"
            className=" text-lightOrange mt-3  px-5 flex justify-between  hover:underline  font-medium"
          >
            <p className="line-clamp-1">{propertyDetails?.title}</p>
          </div>
        </Link>
        <div className=" text-lightGreen w-full  px-5 flex  justify-between ">
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
        {/* location */}
        <div className="px-5 mb-1 flex flex-col  justify-start items-start gap-3 ">
          <p className="text-sm  text-darkGray line-clamp-1">
            {/* {propertyDetails?.address.name} */}
            {propertyDetails?.address?.name || "not Found"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(RealtyCardRent);

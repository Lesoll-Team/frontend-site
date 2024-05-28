import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useUser } from "@/Shared/UserContext";
import { useEffect, useState } from "react";
import { AddToFavorites } from "@/utils/propertyAPI";
import { useFormatNewData } from "@/Hooks/useFormatTime";
import { useSelector } from "react-redux";
import { PiCrownSimpleFill } from "react-icons/pi";
const FavAndDate = ({ propertyDetails }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { data, setUserData } = useUser();
  const time = useFormatNewData({
    date: propertyDetails.acceptAt,
    lang: language,
  });
  const [loved, setLoved] = useState(false);
  const addToFAv = async () => {
    try {
      await AddToFavorites(propertyDetails?._id);
      setUserData();
    } catch (error) {
      console.error("Error add to fav :", error);
    }
  };

  useEffect(() => {
    if (data?.favorites.includes(propertyDetails?._id)) {
      setLoved(true);
    }
  }, [data?.favorites]);
  return (
    <div className="flex justify-between items-center top-2 absolute w-full  ">
      {/* <div className="flex absolute md:mt-[16px] m-[10px] md:mr-[20px]"> */}
      {data && (
        <div className=" mx-1  drop-shadow-md flex justify-center w-[30px] h-[30px] md:w-[40px] md:h-[40px] items-center md:text-3xl text-2xl   text-center  cursor-pointer">
          {loved ? (
            <AiFillHeart
              className="text-red-500 animate-appearance-in"
              onClick={() => {
                addToFAv();
                setLoved(!loved);
              }}
            />
          ) : (
            <AiOutlineHeart
              className="text-white   animate-appearance-in"
              onClick={() => {
                addToFAv();
                setLoved(!loved);
              }}
            />
          )}
        </div>
      )}
      {propertyDetails.makePin || propertyDetails.makeRepost ? (
        <div
          //bg-gradient-to-r from-yellow-100 via-yellow-50 to-white
          className={` bg-white  drop-shadow-sm sm:w-4/12 sm:max-w-[100px] p-1 sm:justify-around justify-center items-center rounded-sm font-inter  flex `}
        >
          <div className=" bg-[#F6AE2D] rounded-full min-w-fit p-1">
            <PiCrownSimpleFill className="text-white text-sm" />
          </div>
          <span
            //font-semibold
            className="text-[#F6AE2D]  sm:block hidden font-noto"
          >
            {language ? "مميز" : "Featured"}
          </span>
        </div>
      ) : (
        <div
          className={`bg-[#F1F1F1] px-2 rounded-sm font-inter  ${language ? "text-[12px]" : "text-[10px]"}`}
        >
          {time}
        </div>
      )}
    </div>
  );
};
export default FavAndDate;

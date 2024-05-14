import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useUser } from "@/Shared/UserContext";
import { useEffect, useState } from "react";
import { AddToFavorites } from "@/utils/propertyAPI";
import useFormatDate from "@/Hooks/useFormatDate";
const FavAndDate = ({ propertyDetails }) => {
  const { data, setUserData } = useUser();
  const time = useFormatDate(propertyDetails.acceptAt);
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
      <div className="bg-[#F1F1F1] px-5 rounded-sm">{time}</div>
    </div>
  );
};
export default FavAndDate;

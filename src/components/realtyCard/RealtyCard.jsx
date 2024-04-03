import { AddToFavorites } from "@/utils/propertyAPI";
// import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import PriceAndSocial from "./basic-body-card/PriceAndSocial";
import TitleCard from "./basic-body-card/TitleCard";
import LocationAndRooms from "./basic-body-card/LocationAndRooms";
import { getUserData } from "@/redux-store/features/auth/userProfileSlice";

const RealtyCard = ({ propertyDetails }) => {
  const userInfo = useSelector((state) => state.userProfile.userData);

  // const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();

  const [loved, setLoved] = useState(false);
  const addToFAv = async () => {
    try {
      await AddToFavorites(propertyDetails?._id);
      dispatch(getUserData());
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

      {/* start Image */}
      <Link
        title={`${propertyDetails?.title}`}
        key={propertyDetails?._id}
        href={`/property-details/${propertyDetails?.slug}`}
        className="
         md:h-[174px] h-[145px] md:min-w-[480px] md:max-w-[480px]  min-w-[135px] max-w-[135px] flex"
      >
        <Image
          alt={` image  ${propertyDetails?.title}`}
          radius="none"
          className=" flex object-cover  
          "
          priority={true}
          // loading="lazy"
          width={400}
          height={174}
          src={propertyDetails?.thumbnail || propertyDetails?.album[0]?.image}
        />
      </Link>

      {/* start card data */}
      <div className=" md:p-[20px]   p-3 w-full h-full flex flex-col md:gap-y-[16px] gap-y-[6px]">
        {/* start contact and price */}
        <PriceAndSocial propertyDetails={propertyDetails} />

        {/* start title */}
        <TitleCard propertyDetails={propertyDetails} />

        {/* start location and details rooms ...etc*/}
        <LocationAndRooms propertyDetails={propertyDetails} />
      </div>
      {/* end card data */}
    </div>
  );
};
export default RealtyCard;

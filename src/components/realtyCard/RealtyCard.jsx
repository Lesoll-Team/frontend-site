import { AddToFavorites } from "@/utils/propertyAPI";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import Image from "next/image";
import PriceAndSocial from "./basic-body-card/PriceAndSocial";
import TitleCard from "./basic-body-card/TitleCard";
import LocationAndRooms from "./basic-body-card/LocationAndRooms";
import { getUserData } from "@/redux-store/features/auth/userProfileSlice";
import { useUser } from "@/Shared/UserContext";

const RealtyCard = ({ propertyDetails }) => {
  const { data } = useUser();

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
    if (data?.favorites.includes(propertyDetails?._id)) {
      setLoved(true);
    }
  }, [data?.favorites]);
  return (
    <div className="md:max-w-[400px]  md:h-[355px] h-[145px] flex md:block overflow-hidden rounded-md bg-white drop-shadow-md  relative">
      {/* start icon favorite */}
      <div className="flex absolute md:mt-[16px] m-[10px] md:mr-[20px]">
        {data && (
          <div className=" bg-white  drop-shadow-md flex justify-center w-[25px] h-[25px] md:w-[40px] md:h-[40px] items-center md:text-2xl text-md rounded-full  text-center  cursor-pointer">
            {data &&
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
      <Link
        title={`${propertyDetails?.title}`}
        key={propertyDetails?._id}
        href={`/property-details/${propertyDetails?.slug}`}
        className=" md:h-[174px] h-[145px] md:min-w-[480px] md:max-w-[480px]  min-w-[135px] max-w-[135px] flex"
      >
        <Image
          alt={` image  ${propertyDetails?.title}`}
          radius="none"
          className="flex object-cover w-[135px] h-[145px] md:w-[400px] md:h-[174px] "
          loading="lazy"
          width={400}
          height={174}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRpwCAABXRUJQVlA4WAoAAAAgAAAAgQAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggrgAAADAIAJ0BKoIASQA/OYy6Vj6ppaSu9JtT0CcJZwaIBSMK+wc3w9wolt0xI9Ih0LbkiT5jFlmthhD+F8hxABGWhxQgTBu00Rr2dekAAP7Buijbt3iTb3XRM+9ZH9VKf8BqKtCj/mCiaQXAzSZ67W/VLmHoF+JP2oYlAqrBmBbdrd0HIPeIbXwNBsJCv1zBilNhIfBfl2b4M3EoHpYin5k3gbvrzvFbLfhkozLlghBgAA=="
          quality={70}
          src={propertyDetails?.thumbnail}
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

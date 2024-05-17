import Link from "next/link";
import Image from "next/image";
import PriceAndSocial from "./basic-body-card/PriceAndSocial";
import TitleCard from "./basic-body-card/TitleCard";
import LocationAndRooms from "./basic-body-card/LocationAndRooms";
import FavAndDate from "./basic-body-card/FavAndDate";
import { memo } from "react";

const RealtyCard = ({ propertyDetails }) => {
  return (
    <div className="overflow-hidden  w-full  sm:h-auto h-[135px] flex sm:block ">
      {/* start icon favorite */}
      <div className=" sm:w-full w-5/12 min-w-[125px]  flex  relative   h-auto sm:h-[40vh] sm:max-h-[250px] sm:min-h-[250px]">
        <FavAndDate propertyDetails={propertyDetails} />

        <Link
          title={`${propertyDetails?.title}`}
          key={propertyDetails?._id}
          href={`/property-details/${propertyDetails?.slug}`}
          className=" w-full h-full"
        >
          <Image
            alt={` image  ${propertyDetails?.title}`}
            className="flex object-cover w-full overflow-hidden h-full rounded-md"
            loading="lazy"
            width={120}
            height={100}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRpwCAABXRUJQVlA4WAoAAAAgAAAAgQAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggrgAAADAIAJ0BKoIASQA/OYy6Vj6ppaSu9JtT0CcJZwaIBSMK+wc3w9wolt0xI9Ih0LbkiT5jFlmthhD+F8hxABGWhxQgTBu00Rr2dekAAP7Buijbt3iTb3XRM+9ZH9VKf8BqKtCj/mCiaQXAzSZ67W/VLmHoF+JP2oYlAqrBmBbdrd0HIPeIbXwNBsJCv1zBilNhIfBfl2b4M3EoHpYin5k3gbvrzvFbLfhkozLlghBgAA=="
            quality={70}
            src={propertyDetails?.thumbnail}
          />
        </Link>
      </div>
      {/* start card data */}
      <div
        className=" sm:pt-[20px] sm:p-0 p-1.5 w-full flex flex-col justify-between
      gap-1
      "
      >
        {/* start title */}
        <TitleCard propertyDetails={propertyDetails} />
        {/* start location  details  ...etc*/}
        <p className="flex items-center font-inter min-w-max text-gray2 md:text-[16px] text-[12px] gap-1  ">
          {propertyDetails?.address?.region
            ? propertyDetails?.address?.region
            : propertyDetails?.address?.governrate}
        </p>
        {/* start  details rooms ...etc*/}
        <LocationAndRooms propertyDetails={propertyDetails} />
        {/* start contact and price */}
        <PriceAndSocial propertyDetails={propertyDetails} />
      </div>
      {/* end card data */}
    </div>
  );
};
// w-[135px] h-[145px] md:w-[400px] md:h-[174px]
// className=" md:h-[174px] h-[145px] md:min-w-[480px] md:max-w-[480px]  min-w-[135px] max-w-[135px] flex"

export default memo(RealtyCard);
// <div className="md:max-w-[400px]  md:h-[355px] h-[145px] flex md:block overflow-hidden rounded-md bg-white drop-shadow-md  relative">

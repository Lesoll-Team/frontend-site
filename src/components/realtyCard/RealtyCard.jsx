import Link from "next/link";
import Image from "next/image";
import PriceAndSocial from "./basic-body-card/PriceAndSocial";
import TitleCard from "./basic-body-card/TitleCard";
import LocationAndRooms from "./basic-body-card/LocationAndRooms";
import FavAndDate from "./basic-body-card/FavAndDate";

const RealtyCard = ({ propertyDetails }) => {
  return (
    // <div className="md:max-w-[400px]  md:h-[355px] h-[145px] flex md:block overflow-hidden rounded-md bg-white drop-shadow-md  relative">
    <div className="overflow-hidden w-[304px] relative ">
      {/* start icon favorite */}
      <FavAndDate propertyDetails={propertyDetails} />
      <Link
        title={`${propertyDetails?.title}`}
        key={propertyDetails?._id}
        href={`/property-details/${propertyDetails?.slug}`}
        className="  w-fit flex "
        // className=" md:h-[174px] h-[145px] md:min-w-[480px] md:max-w-[480px]  min-w-[135px] max-w-[135px] flex"
      >
        <Image
          alt={` image  ${propertyDetails?.title}`}
          className="flex object-cover  h-[287px] rounded-md"
          // w-[135px] h-[145px] md:w-[400px] md:h-[174px]
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
      <div className=" md:pt-[20px]   pt-3 w-full h-full flex flex-col md:gap-y-[16px] gap-y-[6px]">
        {/* start title */}
        <TitleCard propertyDetails={propertyDetails} />
        {/* start location and details rooms ...etc*/}
        <LocationAndRooms propertyDetails={propertyDetails} />
        {/* start contact and price */}
        <PriceAndSocial propertyDetails={propertyDetails} />
      </div>
      {/* end card data */}
    </div>
  );
};
export default RealtyCard;

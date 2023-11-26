import { Image } from "@nextui-org/react";
import Link from "next/link";
import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbRulerMeasure } from "react-icons/tb";
import { useSelector } from "react-redux";

const PropertyCard = ({ propertyDetails }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="w-[330px] overflow-hidden  bg-white drop-shadow-md rounded-xl ">
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
            src={propertyDetails?.album[0]?.image}
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

        <h4 className="font-semibold text-large line-clamp-1 ">
          {propertyDetails?.title}
        </h4>
        <p className="flex items-center gap-1">
          <FaLocationDot className="text-lightOrange font-bold" />{" "}
          {propertyDetails?.address?.governrate}
          {propertyDetails?.address?.region &&
            " ," + propertyDetails?.address?.region}
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
export default PropertyCard;

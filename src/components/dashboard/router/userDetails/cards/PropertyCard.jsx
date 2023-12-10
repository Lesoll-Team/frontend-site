import {
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbRulerMeasure } from "react-icons/tb";
import { useSelector } from "react-redux";
import { CiShare2, CiFacebook, CiCircleQuestion } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

const PropertyCard = ({ propertyDetails }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(date).toLocaleString("ar-Eg", options);
  };
  return (
    <div className="max-w-[700px] flex sm:flex-row flex-col-reverse p-3   md:p-3 gap-3 items-center bg-white drop-shadow-md  sm:min-h-[130px]  border rounded-md">
      <div dir="rtl" className="sm:w-8/12 space-y-2">
        <div className="flex justify-between">
          {propertyDetails?.offer !== "For Investment" && (
            <p className="text-lightGreen font-bold">
              <span>
                {language
                  ? parseInt(propertyDetails?.price).toLocaleString("ar-Eg")
                  : parseInt(propertyDetails?.price).toLocaleString()}{" "}
              </span>
              {language ? "جنية" : "EGP"}
            </p>
          )}
          <p className="text-lightOrange">
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
        <h3 className="text-lg md:text-xl w-full  font-semibold line-clamp-1">
          {propertyDetails?.title}
        </h3>
        {/* <p className="line-clamp-1 text-sm sm:text-md">
          شقة تمليك بين فيصل والهرم محطة التعاون شارع جعفر مساحة ١٨٨ متر دور
          خامس.. اسانسير اول تشطيب ٣ نوم و ٢ حمام و مطبخ و ريسبشن و بلكونة حصة ب
          الارض شارع راقي
        </p> */}

        <div className="flex items-center gap-10 ">
          <Popover placement="bottom" showArrow={true}>
            <PopoverTrigger>
              <button className="focus:outline-none flex items-center text-lightGreen gap-1 font-bold">
                <CiShare2 className="text-xl" /> عدد المشاركة
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2 space-y-1">
                <div className="text- flex gap-1 items-center">
                  <CiFacebook className="text-xl" /> Facebook{" "}
                  {propertyDetails?.facebookShare}
                </div>
                <div className="flex gap-1 items-center">
                  <FaWhatsapp className="text-xl" /> WhatsApp{" "}
                  {propertyDetails?.whatsappShare}
                </div>
                <div className="flex gap-1 items-center">
                  <FaXTwitter className="text-xl" /> Twitter{" "}
                  {propertyDetails?.twitterShare}
                </div>
                <div className="flex gap-1 items-center">
                  <CiCircleQuestion className="text-xl" /> Other{" "}
                  {propertyDetails?.otherShare}
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <div className="flex gap-1 items-center">
            <FaWhatsapp className="text-2xl text-green-500" />{" "}
            <p> {propertyDetails?.whatsappClick}</p>
          </div>
          <div className="flex gap-1 items-center">
            <IoCallOutline className="text-2xl text-blue-500" />{" "}
            <p> {propertyDetails?.callClick}</p>
          </div>
        </div>
        <p className="flex items-center gap-1 line-clamp-1 text-xs md:text-md">
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
        <div className="flex justify-between gap-5 text-darkGray">
          <div className="flex items-center gap-2 font-bold">
            <BiSolidBed className="text-xl " />
            <p>
              {language
                ? propertyDetails?.rooms.toLocaleString("ar-Eg")
                : propertyDetails?.rooms.toLocaleString()}{" "}
              {language ? "غرف" : "Rooms"}
            </p>
          </div>
          <div className="flex items-center gap-2 font-bold">
            <FaBath className="text-xl " />
            <p>
              {language
                ? propertyDetails?.bathRooms.toLocaleString("ar-Eg")
                : propertyDetails?.bathRooms.toLocaleString()}{" "}
              {language ? "حمام" : "Bath"}
            </p>
          </div>
          <div className="flex items-center gap-2 font-bold">
            <TbRulerMeasure className="text-xl " />

            <p>
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
        <div className="flex items-center justify-between gap-2">
          <Link
            href={`/dashboard/property-details/${propertyDetails?.slug}`}
            className="w-full text-center border p-1 rounded-md border-darkGreen hover:bg-darkGreen hover:text-white font-semibold hover:drop-shadow-md md:hover:-translate-y-[3px] duration-300"
          >
            تفاصيل العقار
          </Link>
          <Link
            href={`/property-details/${propertyDetails?.slug}`}
            className="w-full text-center border p-1 rounded-md border-darkGreen hover:bg-darkGreen hover:text-white font-semibold hover:drop-shadow-md md:hover:-translate-y-[3px] duration-300"
          >
            صفحة العقار
          </Link>
        </div>
      </div>
      <div className="sm:w-4/12 relative rounded-md overflow-hidden max-h-[250px] sm:max-h-full">
        <Image
          src={propertyDetails?.thumbnail}
          className=" w-[100%]  sm:min-h-[200px]   object-cover  "
        />
        <p className=" absolute bottom-0 z-20 p-1 text-center w-full text-white bg-darkGreen font-semibold">
          {" "}
          تم النشر فى {formatDate(propertyDetails.acceptAt)}
        </p>
        {console.log(propertyDetails)}
      </div>
    </div>
  );
};
export default PropertyCard;

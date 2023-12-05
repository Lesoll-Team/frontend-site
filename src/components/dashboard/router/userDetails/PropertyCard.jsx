import { Image } from "@nextui-org/react";
import Link from "next/link";
import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbRulerMeasure } from "react-icons/tb";
import { useSelector } from "react-redux";

const PropertyCard = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="max-w-[700px] flex sm:flex-row flex-col-reverse p-3   md:p-3 gap-3 items-center bg-white drop-shadow-md  sm:min-h-[150px]  border rounded-md">
      <div dir="rtl" className="sm:w-8/12 space-y-2">
        <div className="flex justify-between">
          <p className="text-lightGreen font-bold">1000 جنيه</p>
          <p>للبيع</p>
        </div>
        <h3 className="text-lg md:text-xl w-full  font-semibold line-clamp-1">
          شقة تمليك للبيع بين فيصل والهرم
        </h3>
        <p className="line-clamp-1 text-sm sm:text-md">
          شقة تمليك بين فيصل والهرم محطة التعاون شارع جعفر مساحة ١٨٨ متر دور
          خامس.. اسانسير اول تشطيب ٣ نوم و ٢ حمام و مطبخ و ريسبشن و بلكونة حصة ب
          الارض شارع راقي
        </p>

        <p className="flex items-center gap-1 line-clamp-1 text-xs md:text-md">
          <FaLocationDot className="text-lightOrange font-bold" />{" "}
          <span className="line-clamp-1">الدقهلية ,المنصورة</span>
        </p>
        <div className="w-full h-[2px] bg-slate-100 rounded-full"></div>
        <div className="flex justify-between gap-5 text-darkGray">
          <div className="flex items-center gap-2">
            <BiSolidBed className="text-xl " />
            <p>2</p>
            {language ? "غرف" : "Rooms"}
          </div>
          <div className="flex items-center gap-2">
            <FaBath className="text-xl " />
            <p>1</p>
            {language ? "حمام" : "Bath"}
          </div>
          <div className="flex items-center gap-2">
            <TbRulerMeasure className="text-xl " />

            <p>120</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <Link
            href={"/"}
            className="w-full text-center border p-1 rounded-md border-darkGreen hover:bg-darkGreen hover:text-white font-semibold hover:drop-shadow-md md:hover:-translate-y-[3px] duration-300"
          >
            تفاصيل العقار
          </Link>
          <Link
            href={"/"}
            className="w-full text-center border p-1 rounded-md border-darkGreen hover:bg-darkGreen hover:text-white font-semibold hover:drop-shadow-md md:hover:-translate-y-[3px] duration-300"
          >
            صفحة العقار
          </Link>
        </div>
      </div>
      <div className="sm:w-4/12 relative rounded-md overflow-hidden">
        <Image
          src={
            "https://cloud.lesoll.com/v0/public/Realty/65631e2dc424d1c0533fc3a5-65677c940d86d8a361aff8d7-50133968.webp?realtynumber=Lesoll-9166026193?country=eg?number=162510544"
          }
          className=" h-[100%] min-h-[200px]  object-cover  "
        />
        <p className=" absolute bottom-0 z-20 p-1 text-center w-full text-white bg-darkGreen">
          {" "}
          تم النشر فى 2023/12/1
        </p>
      </div>
    </div>
  );
};
export default PropertyCard;

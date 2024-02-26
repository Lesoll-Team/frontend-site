import { localizedNumber } from "@/utils/localizedNumber";
import { useMemo } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { useSelector } from "react-redux";

const NeedsCard = ({ data }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const priceFrom = localizedNumber(data?.price?.from);
  const priceTo = localizedNumber(data?.price?.to);
  const proptype = useMemo(() => {}, [data, language]);
  const unitType = useMemo(() => {}, [data, language]);
  const saleOptian = useMemo(() => {}, [data, language]);
  const roomNumbersTitle = language ? "عدد الغرف: " : "Rooms: ";
  const BathNumbersTitle = language ? "عدد الحمامات: " : "Bathrooms: ";
  const currancy = language ? "جنية" : "Egp";
  const areaUnit = language ? (
    <span>
      م<sup>2</sup>
    </span>
  ) : (
    <span>
      M<sup>2</sup>
    </span>
  );
  return (
    <div className="p-4 border bg-white drop-shadow rounded space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm md:text-xl text-darkGray font-semibold">
          مطلوب شقة للبيع الجيزة الشيخ زايد
        </h4>
        <HiDotsVertical />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <p> {language ? "السعر: " : "Price: "}</p>
          <p className="text-lightGreen font-bold">{priceFrom + currancy} </p>
        </div>
        <div className="flex items-center gap-1">
          <p> {language ? "الى: " : "To: "}</p>
          <p className="text-lightGreen font-bold">{priceTo + currancy} </p>
        </div>
      </div>
      <hr className="w-full md:w-1/2" />
      <div className="flex flex-col flex-wrap gap-4 md:gap-6 md:items-center  md:flex-row  ">
        <div className="flex items-center gap-4 md:gap-6">
          <p className="text-black">
            {roomNumbersTitle}{" "}
            <span className="text-xl text-darkGray">{data?.rooms}</span>
          </p>
          <p className="text-black">
            {BathNumbersTitle}{" "}
            <span className="text-xl text-darkGray">{data?.bathrooms}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-black">
            {language ? "المساحة: " : "Area: "}{" "}
            <span className="md:text-xl text-darkGray">
              {data?.area?.from + " "}
            </span>
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
          <p className="text-black">
            {language ? "الى" : "To"}{" "}
            <span className="md:text-xl text-darkGray">
              {data?.area?.to + " "}
              {language ? (
                <span>
                  م<sup>2</sup>
                </span>
              ) : (
                <span>
                  m<sup>2</sup>
                </span>
              )}
            </span>
          </p>
        </div>
      </div>
      {data?.description && (
        <>
          <hr className="w-full md:w-1/2" />
          <div className="space-y-3">
            <h5 className="text-base">
              {language ? "تفاصيل أخرى: " : "Other Details: "}
            </h5>
            <p className="text-gray-400">{data?.description}</p>
          </div>
        </>
      )}
    </div>
  );
};
export default NeedsCard;

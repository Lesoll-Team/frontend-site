import { BiSolidBed } from "react-icons/bi";
import { BsBank2, BsFillCheckCircleFill } from "react-icons/bs";
import { FaBath } from "react-icons/fa";
import { GiStairs, GiStoneWall } from "react-icons/gi";
import { HiMiniXMark, HiOutlineXMark } from "react-icons/hi2";
import { MdLocalOffer, MdMapsHomeWork } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { useSelector } from "react-redux";

const PropertyData = ({ propertyData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const finishingTypeLang = () => {
    switch (propertyData?.finishingType) {
      case "Not Finished":
        return language ? "بدون تشطيب" : "Not Finished";
        break;
      case "Semi Finished":
        return language ? "نصف تشطيب" : "Semi Finished";
        break;
      case "Lux":
        return language ? "لوكس" : "Lux";
        break;
      case "Super Lux":
        return language ? "سوبر لوكس" : "Super Lux";
        break;
      default:
        propertyData?.finishingType;
    }
  };

  const offerLang = () => {
    switch (propertyData.offer) {
      case "For Rent":
        return language ? "للإيجار" : "For Rent";
        break;
      case "For Sale":
        return language
          ? propertyData?.saleOption.includes("Installment")
            ? " للبيع / تقسيط"
            : "  للبيع / كاش"
          : "For Sale" + propertyData?.saleOption.includes("Installment")
          ? " / Installment"
          : " / Cash";
        break;
      case "For Investment":
        return language ? "للإستثمار" : "For Investment";
      default:
        return propertyData.offer;
    }
  };

  return (
    <section className="space-y-4">
      <h3 className="sm:text-4xl text-lg font-bold text-lightOrange">
        {" "}
        {language ? "تفاصيل العقار" : "property Details"}{" "}
      </h3>
      <div className=" w-full shadow-md border px-5 py-10 md:p-12  bg-white rounded-xl md:min-h-[200px] min-h-[auto] items-center grid md:grid-cols-4 justify-center grid-cols-2 md:justify-between gap-5">
        <div className="flex flex-col justify-center items-center border-2 bg-white drop-shadow-lg p-3 rounded-xl gap-2">
          <h4 className="font-bold text-darkGreen text-base xl:text-xl flex items-center gap-1">
            <MdLocalOffer />
            {language ? "العرض" : "Offer"}
          </h4>
          <p className="font-medium sm:text-lg text-darkGray">{offerLang()}</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 bg-white drop-shadow-lg p-3 rounded-xl gap-2">
          <h4 className="font-bold text-darkGreen text-base xl:text-xl flex items-center gap-1">
            <MdMapsHomeWork />
            {language ? "نوع الوحدة" : "Unit Type"}
          </h4>
          <p className="font-medium sm:text-lg text-darkGray">
            {language
              ? propertyData?.unitType?.title?.ar
              : propertyData?.unitType?.title?.en}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 bg-white drop-shadow-lg p-3 rounded-xl gap-2">
          <h4 className="font-bold text-darkGreen text-base xl:text-xl flex items-center gap-1">
            <TbRulerMeasure />
            {language ? "المساحة" : "Area"}
          </h4>
          <p className="font-medium sm:text-lg text-darkGray">
            {language
              ? propertyData?.area.toLocaleString("ar-Eg")
              : propertyData?.area.toLocaleString()}
            {""}
            {propertyData?.landType === "carat" ? (
              language ? (
                "قيراط"
              ) : (
                "carat"
              )
            ) : propertyData?.landType === "acre" ? (
              language ? (
                "فدان"
              ) : (
                "acre"
              )
            ) : language ? (
              <span>
                م<sup>{(2).toLocaleString("ar-Eg")}</sup>
              </span>
            ) : (
              <span>
                m<sup>2</sup>
              </span>
            )}
          </p>
        </div>
        {propertyData?.propType !== "Land" && (
          <>
            <div className="flex flex-col justify-center items-center border-2 bg-white drop-shadow-lg p-3 rounded-xl gap-2">
              <h4 className="font-bold text-darkGreen text-base xl:text-xl flex items-center gap-1">
                <BiSolidBed />
                {language ? "الغرف" : "Rooms"}
              </h4>
              <p className="font-medium sm:text-lg text-darkGray">
                {language
                  ? propertyData?.rooms.toLocaleString("ar-Eg")
                  : propertyData?.rooms.toLocaleString()}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 bg-white drop-shadow-lg p-3 rounded-xl gap-2">
              <h4 className="font-bold text-darkGreen text-base xl:text-xl flex items-center gap-1">
                <FaBath />
                {language ? "الحمامات" : "Bathrooms"}
              </h4>
              <p className="font-medium sm:text-lg text-darkGray">
                {language
                  ? propertyData?.bathRooms.toLocaleString("ar-Eg")
                  : propertyData?.bathRooms.toLocaleString()}
              </p>
            </div>
            {propertyData?.finishingType && (
              <div className="flex flex-col justify-center items-center  p-3 rounded-xl border-2 bg-white drop-shadow-lg gap-2">
                <h4 className="font-bold text-darkGreen text-base xl:text-xl flex items-center gap-1">
                  <GiStoneWall className="text-xl" />
                  {language ? "نوع التشطيب" : "Finshing"}
                </h4>
                <p className="font-medium sm:text-lg text-darkGray">
                  {finishingTypeLang()}
                </p>
              </div>
            )}
            {!propertyData?.saleOption.includes("Installment") && (
              <div className="flex flex-col justify-center items-center  p-3 rounded-xl border-2 bg-white drop-shadow-lg md:gap-3 gap-2 ">
                <h4 className="font-bold text-darkGreen text-base xl:text-xl flex items-center gap-1 text-center">
                  {/* <BsBank2 /> */}
                  {language ? "متاح تمويل عقارى" : "Real Estate Finance"}
                </h4>
                <div className="font-medium sm:text-lg text-darkGray">
                  {propertyData?.RealEstateFinance ? (
                    <BsFillCheckCircleFill className="text-green-500" />
                  ) : (
                    <div className="p-[3px] rounded-full bg-red-500">
                      <HiMiniXMark className="text-white font-bold" />
                    </div>
                  )}
                </div>
              </div>
            )}

            {propertyData.level && (
              <div className="flex flex-col justify-center items-center  p-3 rounded-xl border-2 bg-white drop-shadow-lg gap-2">
                <h4 className="font-bold text-darkGreen text-base xl:text-xl flex items-center gap-1">
                  <GiStairs />
                  {language ? " الدور" : "level"}
                </h4>
                <p className="font-medium sm:text-lg text-darkGray">
                  {language
                    ? propertyData?.level.toLocaleString("ar-Eg")
                    : propertyData?.level.toLocaleString()}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default PropertyData;

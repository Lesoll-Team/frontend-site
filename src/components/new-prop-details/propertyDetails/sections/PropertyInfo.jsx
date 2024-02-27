import { formatDate } from "@/utils/FormateData";
import { useMemo } from "react";
import { BsCash, BsHouses } from "react-icons/bs";
import {
  LiaBedSolid,
  LiaFileSignatureSolid,
  LiaVectorSquareSolid,
} from "react-icons/lia";
import { PiArmchair, PiBathtub, PiPaintBrushBroad } from "react-icons/pi";
import { TbCalendarCheck, TbStairsUp } from "react-icons/tb";
import { useSelector } from "react-redux";

const PropertyInfo = ({ propertyData }) => {

  const language = useSelector((state) => state.GlobalState.languageIs);
  const { year } = formatDate(propertyData.deliveryDate);
  const offer = useMemo(() => {
    if (propertyData.offer === "For Rent") {
      return language ? "للإيجار" : "For Rent";
    } else {
      if (propertyData?.saleOption.length > 1) {
        return language ? "تقسيط أو كاش" : "Cash or Installment";
      } else {
        if (propertyData?.saleOption[0] === "Cash") {
          return language ? "للبيع / كاش" : "For Sale / Cash";
        } else if (propertyData?.saleOption[0] === "Installment") {
          return language ? "للبيع / تقسيط" : "For Sale / Installment";
        }
      }
    }
  }, [language]);
  const area = (
    <span>
      {propertyData.area}{" "}
      {language ? (
        <span>
          م <sup>2</sup>
        </span>
      ) : (
        <span>
          m<sup>2</sup>
        </span>
      )}
    </span>
  );
  const finishingType = useMemo(() => {
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
  }, [language]);

  const isRegisterd = useMemo(() => {
    if (propertyData.isRegisterd) {
      return language ? "العقار مسجل " : "Registered";
    } else {
      return language ? " غير مسجل " : "Not Registered";
    }
  }, [language]);
  const isFurnished = useMemo(() => {
    if (propertyData.isFurnished) {
      return language ? "العقار مفروش " : "Furnished";
    } else {
      return language ? " غير مفروش " : "Not Furnished";
    }
  }, [language]);

  const isLand = propertyData.propType === "Land";
  return (
    <section className="grid grid-cols-2 gap-y-5 md:mt-10 md:gap-y-10">
      <InfoCard
        icon={<BsHouses />}
        title={language ? "نوع العقار" : "Property Type"}
        info={
          language
            ? propertyData?.unitType?.title?.ar
            : propertyData?.unitType?.title?.en
        }
      />
      {!isLand && (
        <InfoCard
          icon={<LiaBedSolid />}
          title={language ? " الغرف" : "Rooms"}
          info={Math.abs(propertyData.rooms)}
        />
      )}
      <InfoCard
        icon={<BsCash />}
        title={language ? "العرض" : "Offer"}
        info={offer}
      />
      {!isLand && (
        <InfoCard
          icon={<PiBathtub />}
          title={language ? "الحمامات" : "Bathrooms"}
          info={Math.abs(propertyData.bathRooms)}
        />
      )}
      <InfoCard
        icon={<LiaVectorSquareSolid />}
        title={language ? "المساحة" : "Area"}
        info={area}
      />
      {!isLand && (
        <>
          {" "}
          <InfoCard
            icon={<PiPaintBrushBroad />}
            title={language ? "التشطيب" : "Finishing"}
            info={finishingType}
          />
          {year && (
            <InfoCard
              icon={<TbCalendarCheck />}
              title={language ? "سنة التسليم" : "Delivery year"}
              info={year}
            />
          )}
          <InfoCard
            icon={<TbStairsUp />}
            title={language ? "الدور" : "floor"}
            info={propertyData.level}
          />
          <InfoCard
            icon={<PiArmchair />}
            title={language ? "مفروش" : "Furnished"}
            info={isFurnished}
          />
        </>
      )}
      <InfoCard
        icon={<LiaFileSignatureSolid />}
        title={language ? "مسجل" : "Registerd"}
        info={isRegisterd}
      />
    </section>
  );
};
export default PropertyInfo;

const InfoCard = ({ icon, title, info }) => {
  return (
    <div className="flex items-center gap-2 text-[12px] sm:text-base lg:text-2xl">
      <div className="text-darkGray flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 text-xl sm:text-2xl  rounded bg-lightNeutral">
        {icon}
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <p>{title} :</p>
        <p className="text-lightGreen ">{info || ""}</p>
      </div>
    </div>
  );
};

import { formatDate } from "@/utils/FormateData";
import { useMemo } from "react";
import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { GiStairs, GiStoneWall } from "react-icons/gi";
import {
  MdDateRange,
  MdLocalOffer,
  MdMapsHomeWork,
  MdOutlineAssignment,
} from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { useSelector } from "react-redux";

const PropertyInfo = ({ propertyData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { year } = formatDate(propertyData.deliveryDate);
  console.log(propertyData?.saleOption);
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
  return (
    <section className="grid grid-cols-2 gap-y-5">
      <InfoCard
        icon={<MdMapsHomeWork />}
        title={language ? "نوع العقار" : "Property Type"}
        info={
          language
            ? propertyData?.unitType?.title?.ar
            : propertyData?.unitType?.title?.en
        }
      />
      <InfoCard
        icon={<BiSolidBed />}
        title={language ? " الغرف" : "Rooms"}
        info={Math.abs(propertyData.rooms)}
      />
      <InfoCard
        icon={<MdLocalOffer />}
        title={language ? "العرض" : "Offer"}
        info={offer}
      />
      <InfoCard
        icon={<FaBath />}
        title={language ? "الحمامات" : "Bathrooms"}
        info={Math.abs(propertyData.bathRooms)}
      />
      <InfoCard
        icon={<TbRulerMeasure />}
        title={language ? "المساحة" : "Area"}
        info={area}
      />
      <InfoCard
        icon={<GiStoneWall />}
        title={language ? "التشطيب" : "Finishing"}
        info={finishingType}
      />
      {year && (
        <InfoCard
          icon={<MdDateRange />}
          title={language ? "سنة التسليم" : "Delivery year"}
          info={year}
        />
      )}
      <InfoCard
        icon={<GiStairs />}
        title={language ? "الدور" : "floor"}
        info={propertyData.level}
      />
      <InfoCard
        icon={<MdOutlineAssignment />}
        title={language ? "مسجل" : "Registerd"}
        info={isRegisterd}
      />
      <InfoCard
        icon={<MdOutlineAssignment />}
        title={language ? "مفروش" : "Furnished"}
        info={isFurnished}
      />
    </section>
  );
};
export default PropertyInfo;

const InfoCard = ({ icon, title, info }) => {
  return (
    <div className="flex items-center gap-2 text-sm sm:text-base lg:text-2xl">
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

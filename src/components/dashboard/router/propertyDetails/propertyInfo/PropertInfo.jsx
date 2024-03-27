import { MdLocalOffer, MdMapsHomeWork } from "react-icons/md";
import SectionContainer from "../SectionContainer";
import InfoCard from "./InfoCard";
import { TbRulerMeasure } from "react-icons/tb";
import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { GiStairs, GiStoneWall } from "react-icons/gi";

const PropertInfo = ({ propertyDetails }) => {
  const offerLang = () => {
    switch (propertyDetails.getProperty.offer) {
      case "For Rent":
        return "للإيجار";
        break;
      case "For Sale":
        return propertyDetails.getProperty?.saleOption.includes("Installment")
          ? " للبيع / تقسيط"
          : "  للبيع / كاش";
        break;
      case "For Investment":
        return "للإستثمار";
      default:
        return propertyDetails.getProperty.offer;
    }
  };
  const finishingTypeLang = () => {
    switch (propertyDetails.getProperty.finishingType) {
      case "Not Finished":
        return "بدون تشطيب";
        break;
      case "Semi Finished":
        return "نصف تشطيب";
        break;
      case "Lux":
        return "لوكس";
        break;
      case "Super Lux":
        return "سوبر لوكس";
        break;
      default:
        propertyDetails.getProperty.finishingType;
    }
  };
  return (
    <SectionContainer style={"grid grid-cols-2 sm:grid-cols-4 gap-2"}>
      <InfoCard
        info={`${offerLang()}`}
        title={"العرض"}
        icon={<MdLocalOffer />}
      />
      <InfoCard
        info={propertyDetails.getProperty.unitType?.title?.ar}
        title={"نوع الوحدة"}
        icon={<MdMapsHomeWork />}
      />
      <InfoCard
        info={propertyDetails.getProperty.area.toLocaleString()}
        title={"المساحة"}
        icon={<TbRulerMeasure />}
      />
      <InfoCard
        info={propertyDetails.getProperty.rooms}
        title={"الغرف"}
        icon={<BiSolidBed />}
      />
      <InfoCard
        info={propertyDetails.getProperty.bathRooms}
        title={"الحمامات"}
        icon={<FaBath />}
      />
      <InfoCard
        info={`${finishingTypeLang()}`}
        title={"نوع التشطيب"}
        icon={<GiStoneWall className="text-xl" />}
      />
      <InfoCard
        info={
          propertyDetails.getProperty.RealEstateFinance
            ? "متاح نمويل عقارى"
            : "غير متاح تمويل عقارى"
        }
        title={"تمويل عقارى"}
      />
      <InfoCard
        info={propertyDetails.getProperty.level}
        title={"الدور"}
        icon={<GiStairs />}
      />
    </SectionContainer>
  );
};
export default PropertInfo;

import { formatDate } from "@/utils/FormateData";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import { BsCash, BsHouses } from "react-icons/bs";
import { LiaBedSolid, LiaVectorSquareSolid } from "react-icons/lia";
import { PiArmchair, PiBathtub, PiPaintBrushBroad } from "react-icons/pi";
import { TbCalendarCheck, TbStairsUp } from "react-icons/tb";

const PropertyInfo = ({ propertyData }) => {
  const language = getLangBoolean();
  const { t } = useTranslation("common");
  const { year } = formatDate(propertyData.deliveryDate);
  const offer = useMemo(() => {
    if (propertyData.offer === "For Rent") {
      return t("For_Rent");
    } else if (propertyData?.saleOption.length > 1) {
      return t("Cash_Or_Installment");
    } else if (propertyData?.saleOption[0] === "Cash") {
      return t("Sale_Cash");
    } else if (propertyData?.saleOption[0] === "Installment") {
      return t("Sale_Installment");
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
        return t("Not_Finished");

      case "Semi Finished":
        return t("Semi_Finished");

      case "Lux":
        return t("Lux");

      case "Super Lux":
        return t("Super_Lux");

      default:
        return propertyData?.finishingType;
    }
  }, [language]);

  const isFurnished = useMemo(() => {
    if (propertyData.isFurnished) {
      return t("Furnished");
    } else {
      return t("Not_Furnished");
    }
  }, [language]);

  const isLand = propertyData.propType === "Land";
  return (
    <section className="grid sm:grid-cols-2 gap-y-5 gap-x-2 md:mt-10 md:gap-y-10 ">
      <InfoCard
        icon={<BsHouses />}
        title={t("Property_Type")}
        info={
          language
            ? propertyData?.unitType?.title?.ar
            : propertyData?.unitType?.title?.en
        }
      />
      {!isLand && !!propertyData?.rooms && (
        <InfoCard
          icon={<LiaBedSolid />}
          title={t("Rooms")}
          info={Math.abs(propertyData.rooms)}
        />
      )}
      <InfoCard icon={<BsCash />} title={t("offer")} info={offer} />
      {!isLand && !!propertyData?.bathRooms && (
        <InfoCard
          icon={<PiBathtub />}
          title={t("Bathrooms")}
          info={Math.abs(propertyData.bathRooms)}
        />
      )}
      <InfoCard icon={<LiaVectorSquareSolid />} title={t("Area")} info={area} />
      {!isLand && (
        <>
          {" "}
          {finishingType && (
            <InfoCard
              icon={<PiPaintBrushBroad />}
              title={t("Finishing")}
              info={finishingType}
            />
          )}
          {year && (
            <InfoCard
              icon={<TbCalendarCheck />}
              title={t("Delivery_Date")}
              info={year}
            />
          )}
          {!!propertyData.level && (
            <InfoCard
              icon={<TbStairsUp />}
              title={t("Level")}
              info={propertyData.level}
            />
          )}
          <InfoCard
            icon={<PiArmchair />}
            title={t("Furnished")}
            info={isFurnished}
          />
        </>
      )}
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
        <p className="text-sm sm:tex-lg md:text-xl">{title} :</p>
        <p className="text-lightGreen text-sm sm:tex-lg md:text-xl">
          {info || ""}
        </p>
      </div>
    </div>
  );
};

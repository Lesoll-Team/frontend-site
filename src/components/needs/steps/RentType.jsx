import { useSelector } from "react-redux";
import { Image } from "@nextui-org/react";
import SelectCard from "./SelectCard";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";

const RentType = ({ setValue, setStep, watch }) => {
  const language = getLangBoolean();
  const { t } = useTranslation("common");
  return (
    <div className="min-h-[70dvh] md:min-h-[82dvh] grid place-content-center space-y-8 md:space-y-16 fade-in-right ">
      <h1 className="text-xl   display-text text-center font-bold">
        {t("Choose_Rental_Type")}
      </h1>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center gap-5 md:gap-10">
          <SelectCard
            icon={
              <Image className="md:w-[150px]" src="/icons/rent-daily.svg" />
            }
            title={t("Daily_Rent")}
            onClick={() => {
              setStep(3);
              setValue("rentalPeriod", "Daily");
            }}
          />
          <SelectCard
            icon={<Image className="md:w-[150px]" src="/icons/rent-icon.svg" />}
            title={t("Monthly_Rent")}
            onClick={() => {
              setStep(3);
              setValue("rentalPeriod", "Monthly");
            }}
          />
        </div>
        <button
          className=" border-2 w-fit mt-8 mx-auto px-4 py-1 rounded-md text-lightGreen text-sm md:text-lg hover:bg-lightGreen hover:text-white border-lightGreen duration-150"
          onClick={() => {
            setStep(1);
          }}
        >
          {t("Pervious_Step")}
        </button>
      </div>
    </div>
  );
};
export default RentType;

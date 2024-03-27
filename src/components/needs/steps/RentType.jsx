import { useSelector } from "react-redux";
import { Image } from "@nextui-org/react";
import SelectCard from "./SelectCard";

const RentType = ({ setValue, setStep, watch }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="min-h-[70dvh] md:min-h-[82dvh] grid place-content-center space-y-8 md:space-y-16 fade-in-right ">
      <h1 className="text-xl   display-text text-center font-bold">
        اختر نوع الإيجار
      </h1>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center gap-5 md:gap-10">
          <SelectCard
            icon={
              <Image className="md:w-[150px]" src="/icons/rent-daily.svg" />
            }
            title={language ? "إيجار يومي" : "Daily rent"}
            onClick={() => {
              setStep(3);
              setValue("rentalPeriod", "Daily");
            }}
          />
          <SelectCard
            icon={<Image className="md:w-[150px]" src="/icons/rent-icon.svg" />}
            title={language ? "إيجار شهري" : "Monthly rent"}
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
          {language ? "الخطوة السابقة" : "pervious step"}
        </button>
      </div>
    </div>
  );
};
export default RentType;

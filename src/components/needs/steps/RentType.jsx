import { useDispatch, useSelector } from "react-redux";
import { Image } from "@nextui-org/react";
import SelectCard from "./SelectCard";
import { setRentalPeriod, setStep } from "@/redux-store/features/needsSlice";
const RentType = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const step = useSelector((state) => state.needs.step);
  const dispatch = useDispatch();
  const setRentDaily = () => [];
  return (
    <div className="min-h-[70dvh] md:min-h-[82dvh] grid place-content-center space-y-8 md:space-y-16 fade-in-right ">
      <h2 className="text-xl text-darkGray md:text-5xl text-center font-bold">
        اختر نوع الإيجار
      </h2>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center gap-5 md:gap-10">
          <SelectCard
            icon={
              <Image className="md:w-[150px]" src="/icons/rent-daily.svg" />
            }
            title={language ? "إيجار يومي" : "Daily rent"}
            onClick={() => {
              dispatch(setStep(3));
              dispatch(setRentalPeriod("Daily"));
            }}
          />
          <SelectCard
            icon={<Image className="md:w-[150px]" src="/icons/rent-icon.svg" />}
            title={language ? "إيجار شهري" : "Monthly rent"}
            onClick={() => {
              dispatch(setRentalPeriod("Monthly"));
              dispatch(setStep(3));
            }}
          />
        </div>
        <button
          className=" border-2 w-fit mt-8 mx-auto px-4 py-1 rounded-md text-lightGreen text-sm md:text-lg hover:bg-lightGreen hover:text-white border-lightGreen duration-150"
          onClick={() => {
            dispatch(setStep(step - 1));
          }}
        >
          {language ? "الخطوة السابقة" : "pervious step"}
        </button>
      </div>
    </div>
  );
};
export default RentType;

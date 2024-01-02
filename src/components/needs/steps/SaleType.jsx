import { useDispatch, useSelector } from "react-redux";
import { Image } from "@nextui-org/react";
import SelectCard from "./SelectCard";
import { setSaleOption, setStep } from "@/redux-store/features/needsSlice";
const SaleType = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const step = useSelector((state) => state.needs.step);
  const dispatch = useDispatch();
  const setCash = () => {
    dispatch(setSaleOption("Cash"));
    dispatch(setStep(step + 1));
  };
  const setInstallment = () => {
    dispatch(setSaleOption("Installment"));
    dispatch(setStep(step + 1));
  };
  return (
    <div className="min-h-[70dvh] md:min-h-[82dvh] grid place-content-center space-y-8 md:space-y-16 fade-in-right relative ">
      <h2 className="text-xl text-darkGray md:text-5xl text-center font-bold">
        اختر نظام الشراء
      </h2>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center gap-5 md:gap-10">
          <SelectCard
            onClick={setCash}
            icon={
              <Image
                className="w-96 md:w-[150px]"
                src="/icons/investment-icon.svg"
              />
            }
            title={language ? "كاش" : "Cash"}
          />
          <SelectCard
            onClick={setInstallment}
            icon={
              <Image
                className="w-96 md:w-[150px]"
                src="/icons/real-estate.svg"
              />
            }
            title={language ? "تقسيط" : "Installment"}
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
export default SaleType;

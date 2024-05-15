import { useSelector } from "react-redux";
import { Image } from "@nextui-org/react";
import SelectCard from "./SelectCard";

const SaleType = ({ setValue, setStep, watch }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const setCash = () => {
    setValue("saleOption", "Cash");
    setStep(3);
  };
  const setInstallment = () => {
    setValue("saleOption", "Installment");
    setStep(3);
  };
  return (
    <div className="min-h-[70dvh] md:min-h-[82dvh] grid place-content-center space-y-8 md:space-y-16 fade-in-right relative ">
      <h1 className="text-xl   display-text text-center font-bold">
        اختر نظام الشراء
      </h1>
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
            setStep(1);
          }}
        >
          {language ? "الخطوة السابقة" : "pervious step"}
        </button>
      </div>
    </div>
  );
};
export default SaleType;

import { Image } from "@nextui-org/react";
import SelectCard from "./SelectCard";
import { useDispatch, useSelector } from "react-redux";
import { setOffer, setStep } from "@/redux-store/features/needsSlice";

const OfferType = ({ setValue, setStep }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const setOfferSale = () => {
    setValue("offer", "For Sale");
    setStep(2);
  };
  const setOfferRent = () => {
    setValue("offer", "For Rent");
    setStep(2);
  };
  return (
    <div className="min-h-[70dvh] md:min-h-[82dvh] grid place-content-center space-y-8 md:space-y-16 fade-in-right ">
      <h2 className="text-xl text-darkGray md:text-5xl text-center font-bold">
        عن اي نوع من العقارات تبحث؟
      </h2>
      <div className="flex justify-center gap-5 md:gap-10">
        <SelectCard
          onClick={setOfferSale}
          icon={<Image className="md:w-[150px]" src="/icons/sale-icon.svg" />}
          title={language ? "للبيع" : "For sale"}
        />
        <SelectCard
          onClick={setOfferRent}
          icon={<Image className="md:w-[150px]" src="/icons/rent-icon.svg" />}
          title={language ? "للإيجار" : "For Rent"}
        />
      </div>
    </div>
  );
};
export default OfferType;

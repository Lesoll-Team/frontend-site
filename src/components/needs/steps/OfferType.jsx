import { Image } from "@nextui-org/react";
import SelectCard from "./SelectCard";
import { useSelector } from "react-redux";
import Head from "next/head";

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
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <h1 className="text-xl   display-text text-center font-bold">
        {language ? "بتدور على ايه؟" : "What you are looking for?"}
      </h1>
      <div className="flex justify-center gap-5 md:gap-10">
        <SelectCard
          onClick={setOfferSale}
          icon={<Image className="md:w-[150px]" src="/icons/sale-icon.svg" />}
          title={language ? "  عايز أشترى" : "Want to buy"}
        />
        <SelectCard
          onClick={setOfferRent}
          icon={<Image className="md:w-[150px]" src="/icons/rent-icon.svg" />}
          title={language ? "عايز ايجار " : "Want to rent"}
        />
      </div>
    </div>
  );
};
export default OfferType;

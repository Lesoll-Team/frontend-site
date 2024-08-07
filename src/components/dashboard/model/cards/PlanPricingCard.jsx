import { useSelector } from "react-redux";
import PopularTag from "./payment-card/PopularTag";
import PlanTitle from "./payment-card/PlanTitle";
import ButtonsActions from "./payment-card/ButtonsActions";
import BodyDataService from "./payment-card/BodyDataService";

const PlanPricingCard = ({ stylesCss, data, dash, planId }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div
      key={planId}
      className={`bg-white drop-shadow overflow-hidden flex flex-col gap-y-[16px] w-full  rounded-[6px] relative h-[550px]`}
    >
      <div dir={language ? "ltr" : "rtl"} className={`flex w-full relative`}>
        {data?.Popular && <PopularTag />}
        <PlanTitle data={data} stylesCss={stylesCss} />
      </div>
      <div className="mb-20 overflow-hidden ">
        <BodyDataService data={data} stylesCss={stylesCss} dash={dash} />
      </div>
      <ButtonsActions data={data} stylesCss={stylesCss} />
    </div>
  );
};

export default PlanPricingCard;

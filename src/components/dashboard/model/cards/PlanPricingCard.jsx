import { useSelector } from "react-redux";
import PopularTag from "./payment-card/PopularTag";
import PlanTitle from "./payment-card/PlanTitle";
import ButtonsActions from "./payment-card/ButtonsActions";
import BodyDataService from "./payment-card/BodyDataService";

const PlanPricingCard = ({ stylesCss, data }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  console.log(data);
  return (
    <div
      className={`bg-white drop-shadow overflow-hidden flex flex-col gap-y-[16px] w-full  rounded-[6px] relative ${data?.Popular ? "h-[550px]" : "h-[450px]"}`}
    >
      <div dir={language ? "ltr" : "rtl"} className={`flex w-full relative`}>
        {data?.Popular && <PopularTag />}
        <PlanTitle data={data} stylesCss={stylesCss} />
      </div>
      <div className="mb-20 overflow-hidden">
        <BodyDataService data={data} stylesCss={stylesCss} />
      </div>
      <ButtonsActions data={data} stylesCss={stylesCss} />
    </div>
  );
};

export default PlanPricingCard;
//${data?.Popular ? "md:h-[93.96870554765292vh] md:max-h-[590px] h-[73.96870554765292vh] max-h-[520px]" : "h-[73.96870554765292vh] max-h-[520px]"}

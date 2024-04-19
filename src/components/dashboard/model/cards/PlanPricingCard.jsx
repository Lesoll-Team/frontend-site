import { useSelector } from "react-redux";
import PopularTag from "./payment-card/PopularTag";
import PlanTitle from "./payment-card/PlanTitle";
import ButtonsActions from "./payment-card/ButtonsActions";
import BodyDataService from "./payment-card/BodyDataService";

const PlanPricingCard = ({ stylesCss, data }) => {
   const language = useSelector((state) => state.GlobalState.languageIs);

   return (
      <div
         className={`bg-white overflow-hidden flex flex-col gap-y-[3vh]
      w-full max-w-[390px] min-w-[390px]   md:w-[25.390625vw]
      shadow-md rounded-[6px] ${data?.Popular ? "md:h-[93.96870554765292vh] md:max-h-[590px] h-[73.96870554765292vh] max-h-[520px]" : "h-[73.96870554765292vh] max-h-[520px]"}
     ${stylesCss?.bodyCss}
     relative
     `}
      >
         <div
            dir={language ? "ltr" : "rtl"}
            className={`flex w-full relative
         `}
         >
            {data?.Popular && <PopularTag />}
            <PlanTitle data={data} stylesCss={stylesCss} />
         </div>
         <BodyDataService data={data} stylesCss={stylesCss} />
         <ButtonsActions data={data} stylesCss={stylesCss} />
      </div>
   );
};

export default PlanPricingCard;

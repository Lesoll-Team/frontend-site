import AddPropInput from "@/components/addproperty/AddPropIputs/AddPropInput";
import {
  setPriceFrom,
  setPriceTo,
  setSaleOption,
} from "@/redux-store/features/needsSlice";
import { useDispatch, useSelector } from "react-redux";

const Pricing = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const needData = useSelector((state) => state.needs.needsData);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col  w-full space-y-4">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {language ? "السعر" : "Price"}
      </h3>
      {needData.offer === "For Sale" && (
        <div className="flex items-center gap-4 animate-appearance-in">
          <button
            onClick={() => {
              dispatch(setSaleOption("Cash"));
            }}
            className={`border-[3px] w-full py-3 rounded-md font-semibold text-x duration-150  ${
              needData.saleOption === "Cash" && "bg-[#97cecf] border-darkGreen "
            }`}
          >
            كاش
          </button>
          <button
            onClick={() => {
              dispatch(setSaleOption("Installment"));
            }}
            className={`border-[3px] w-full py-3 rounded-md font-semibold text-xl duration-150 ${
              needData.saleOption === "Installment" &&
              "bg-[#97cecf] border-darkGreen "
            }`}
          >
            تقسيط
          </button>
        </div>
      )}
      <div className="flex md:flex-row flex-col items-center gap-4">
        <div className="w-full">
          <AddPropInput
            //   error={propErrors.price}
            type={"number"}
            title={language ? "من " : " from"}
            placeholder={language ? "اقل سعر" : "Min price"}
            egp={true}
            value={needData.price.from}
            setValue={(e) => {
              dispatch(setPriceFrom(e.target.value));
              // setData({ ...propertyDetils, price: e.target.value });
              // if (e.target.value) {
              //   setPropErrors((prevErrors) => ({
              //     ...prevErrors,
              //     price: false,
              //   }));
              // }
            }}
          />
        </div>
        <div className="w-full">
          <AddPropInput
            //   error={propErrors.price}
            type={"number"}
            title={language ? "الى " : " to"}
            placeholder={language ? "اعلى سعر" : "Max price"}
            egp={true}
            value={needData.price.to}
            setValue={(e) => {
              dispatch(setPriceTo(e.target.value));
              // setData({ ...propertyDetils, price: e.target.value });
              // if (e.target.value) {
              //   setPropErrors((prevErrors) => ({
              //     ...prevErrors,
              //     price: false,
              //   }));
              // }
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Pricing;

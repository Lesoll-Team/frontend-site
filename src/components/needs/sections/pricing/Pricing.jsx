import AddPropDropdown from "@/components/addproperty/AddPropIputs/AddPropDropdown";
import AddPropInput from "@/components/addproperty/AddPropIputs/AddPropInput";
import {
  setInstallmentType,
  setMaxPriceErr,
  setMinPriceErr,
  setPriceFrom,
  setPriceTo,
  setRentalPeriod,
  setRentalPeriodErr,
  setSaleOption,
} from "@/redux-store/features/needsSlice";
import { useDispatch, useSelector } from "react-redux";

const Pricing = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const needData = useSelector((state) => state.needs.needsData);
  const errors = useSelector((state) => state.needs.errors);
  const rentalPeriodOptions = {
    en: [
      { value: "Monthly", name: "Monthly" },
      { value: "Daily", name: "Daily" },
      { value: "Yearly", name: "Yearly" },
    ],
    ar: [
      { value: "Monthly", name: "شهري" },
      { value: "Daily", name: "يومي" },
      { value: "Yearly", name: "سنوي" },
    ],
  };
  const installmentTypeOptions = {
    en: [
      { value: "Yearly", name: "Yearly" },
      { value: "Monthly", name: "Monthly" },
    ],
    ar: [
      { value: "Yearly", name: "سنوى" },
      { value: "Monthly", name: "شهرى" },
      ,
    ],
  };
  const rentalPeriodValueLang = () => {
    if (needData.rentalPeriod === "Daily") {
      return language ? "يومي" : "Daily";
    } else if (needData.rentalPeriod === "Monthly") {
      return language ? "شهري" : "Monthly";
    } else if (needData.rentalPeriod === "Yearly") {
      return language ? "سنوي" : "Yearly";
    } else {
      return language ? "اختر نوع الإيجار" : "Choose Rental Type";
    }
  };
  const installmentTypeLang = () => {
    if (needData.installmentOption.type === "Monthly") {
      return language ? "شهري" : "Monthly";
    } else if (needData.installmentOption.type === "Yearly") {
      return language ? "سنوي" : "Yearly";
    }
  };
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col  w-full space-y-4">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {language ? "السعر" : "Price"}
      </h3>
      {needData.offer === "For Sale" && (
        <div className="flex items-center gap-4 fade-in">
          <button
            onClick={() => {
              dispatch(setSaleOption("Cash"));
            }}
            className={`border-[3px] w-full py-3 rounded-md font-semibold text-x duration-150  ${
              needData.saleOption === "Cash" &&
              "bg-white shadow-lg  border-darkGreen"
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
              "bg-white shadow-lg  border-darkGreen"
            }`}
          >
            تقسيط
          </button>
        </div>
      )}
      <div className="flex md:flex-row flex-col items- gap-4">
        <div className="w-full">
          <AddPropInput
            error={errors.minPrice}
            type={"number"}
            title={language ? "من " : " from"}
            placeholder={language ? "اقل سعر" : "Min price"}
            egp={true}
            value={needData.price.from}
            setValue={(e) => {
              dispatch(setPriceFrom(e.target.value));
              if (e.target.value) {
                dispatch(setMinPriceErr(false));
              }
            }}
          />
          {errors.minPrice && (
            <p className="text-red-500">{language ? "مطلوب" : "Required"}</p>
          )}
        </div>
        <div className="w-full">
          <AddPropInput
            error={errors.maxPrice}
            type={"number"}
            title={language ? "الى " : " to"}
            placeholder={language ? "اعلى سعر" : "Max price"}
            egp={true}
            value={needData.price.to}
            setValue={(e) => {
              dispatch(setPriceTo(e.target.value));
              if (e.target.value) {
                dispatch(setMaxPriceErr(false));
              }
            }}
          />
          {errors.maxPrice && (
            <p className="text-red-500">{language ? "مطلوب" : "Required"}</p>
          )}
        </div>
        {needData.offer === "For Rent" && (
          <div className="w-full fade-in">
            <AddPropDropdown
              title={language ? "نوع الإيجار" : "Rental Type"}
              value={rentalPeriodValueLang()}
              setValue={(e) => {
                dispatch(setRentalPeriod(e));
                // setData({ ...needData, rentalPeriod: e });
                // dispatch(setRentalPeriodErr(false));
              }}
              options={rentalPeriodOptions}
            />
          </div>
        )}
        {needData.offer === "For Sale" &&
          needData.saleOption === "Installment" && (
            <div className="w-full fade-in">
              <AddPropDropdown
                title={language ? "نوع التقسيط" : "Installment Type"}
                value={installmentTypeLang()}
                setValue={(e) => {
                  dispatch(setInstallmentType(e));
                  // setData({ ...needData, rentalPeriod: e });
                  // dispatch(setRentalPeriodErr(false));
                }}
                options={installmentTypeOptions}
              />
            </div>
          )}
      </div>
    </div>
  );
};
export default Pricing;

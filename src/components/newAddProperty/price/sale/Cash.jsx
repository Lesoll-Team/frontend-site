import RadioBtn from "@/Shared/ui/RadioBtn";
import { useSelector } from "react-redux";

const Cash = ({ errors, register, setValue, watch, clearErrors }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <div className="flex gap-4">
        <h3 className="text-xl">
          {language ? "هل السعر قابل للتفاوض؟" : "Is price negotiable?"}
        </h3>
        <div className="flex items-center gap-3">
          <RadioBtn
            active={watch("negotiable")}
            onClick={() => {
              setValue("negotiable", true);
            }}
            title={language ? "نعم" : "Yes"}
          />
          <RadioBtn
            active={!watch("negotiable")}
            onClick={() => {
              setValue("negotiable", false);
            }}
            title={language ? "لا" : "No"}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <h3 className="text-xl">
          {language ? "هل متاح تمويل عقاري؟" : "Is mortgage available?"}
        </h3>
        <div className="flex items-center gap-3">
          <RadioBtn
            active={watch("realEstateFinance")}
            onClick={() => {
              setValue("realEstateFinance", true);
            }}
            title={language ? "نعم" : "Yes"}
          />
          <RadioBtn
            active={!watch("realEstateFinance")}
            onClick={() => {
              setValue("realEstateFinance", false);
            }}
            title={language ? "لا" : "No"}
          />
        </div>
      </div>
    </>
  );
};
export default Cash;
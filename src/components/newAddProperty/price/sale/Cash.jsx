import RadioBtn from "@/Shared/ui/RadioBtn";
import { useSelector } from "react-redux";

const Cash = ({ setValue, watch }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <div className="flex gap-4">
        <p className="text-gray-800">
          {language ? "هل السعر قابل للتفاوض؟" : "Is price negotiable?"}
        </p>
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
        <p className="text-gray-800">
          {language ? "هل متاح تمويل عقاري؟" : "Is mortgage available?"}
        </p>
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

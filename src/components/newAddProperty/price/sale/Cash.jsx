import RadioBtn from "@/Shared/ui/RadioBtn";
import { useTranslation } from "next-i18next";

const Cash = ({ setValue, watch }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="flex gap-4">
        <p className="text-gray-800">{t("Is_Price_Negotiable")}</p>
        <div className="flex items-center gap-3">
          <RadioBtn
            active={watch("negotiable")}
            onClick={() => {
              setValue("negotiable", true);
            }}
            title={t("Yes")}
          />
          <RadioBtn
            active={!watch("negotiable")}
            onClick={() => {
              setValue("negotiable", false);
            }}
            title={t("No")}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <p className="text-gray-800">{t("Is_Mortage_Available")}</p>
        <div className="flex items-center gap-3">
          <RadioBtn
            active={watch("realEstateFinance")}
            onClick={() => {
              setValue("realEstateFinance", true);
            }}
            title={t("Yes")}
          />
          <RadioBtn
            active={!watch("realEstateFinance")}
            onClick={() => {
              setValue("realEstateFinance", false);
            }}
            title={t("No")}
          />
        </div>
      </div>
    </>
  );
};
export default Cash;

import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";

const InstallmentCard = ({ plan }) => {
  const language = getLangBoolean();
  const { t } = useTranslation("common");
  const periodYear =
    plan?.period > 1 && plan?.period < 11
      ? language
        ? "سنوات"
        : "Years"
      : language
        ? "سنة"
        : "Year";
  return (
    <div
      className={` w-full sm:w-[134px]  overflow-hidden relative px-3 md:px-5 py-3 flex flex-col gap-2 md:gap-2 items-center md:rounded-md rounded-lg ${!!plan?.discount ? "bg-[#FFF5F2]" : "bg-lightNeutral"}`}
    >
      {!!plan.discount && (
        <div
          className={`absolute bg-lightOrange  py-2 pb-[1px] sm:pb-1   text-white min-w-[100px] text-center ${language ? "rotate-45 -top-[4px] -right-[35px]" : "-top-[3px] -rotate-45 -left-[36px]"} w-fit`}
        >
          <p className={`text-white lg-text`}>{t("Sale")}</p>
        </div>
      )}
      <div className="flex flex-col items-center  ">
        <p
          className={`font-bold ${plan.discount ? "text-lightOrange " : "text-lightGreen "}`}
        >
          %{plan?.ProjectPercentage}
        </p>{" "}
        <p className="lg-text text-center">{t("Down_Payment")}</p>
      </div>
      <p className="text-black">
        {plan?.period} {periodYear}
      </p>
      <p className="lg-text text-center">
        {plan.discount
          ? ` ${t("Discount")} %${plan.discount}`
          : t("Original_Payment_Plan")}
      </p>
    </div>
  );
};
export default InstallmentCard;

import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";
import { useMemo } from "react";

const PropertyInstallmentPlans = ({ propertyData }) => {
  const { t } = useTranslation("common");
  const isInstallment = propertyData.saleOption.includes("Installment");
  return (
    isInstallment && (
      <section className="md:space-y-[30px] space-y-[16px]">
        <h2 className=" ">{t("Installment_Plans")}</h2>
        <div className="flex items-center flex-wrap gap-5">
          {propertyData.installment.map((item, index) => (
            <div key={index}>
              <InstallmentCard
                data={item}
                downPaymentPercentage={
                  !!item.downPayment &&
                  (propertyData.price * item.downPayment) / 100
                }
              />
            </div>
          ))}
        </div>
      </section>
    )
  );
};
export default PropertyInstallmentPlans;

const InstallmentCard = ({ data }) => {
  const { t } = useTranslation("common");
  const language = getLangBoolean();
  const period = useMemo(
    (period) => {
      switch (data.type) {
        case "Monthly":
          return t("Monthly");
        case "Yearly":
          return t("Yearly");
        case "6 Monthly":
          return t("Semi_Annually");
        case "3 Monthly":
          return t("Quarterly");
        default:
          return t("Egp");
      }
    },
    [language],
  );
  return (
    <div className="px-2 py-2 md:px-6 bg-lightNeutral md:py-4 flex items-center flex-col gap-2 rounded">
      <div className="flex gap-2 items-center">
        {!!data.amount && (
          <>
            {!!data.amount && (
              <p>
                {parseInt(data.amount).toLocaleString()} {period}
              </p>
            )}{" "}
            |{" "}
          </>
        )}
        {!!data.ProjectPercentage && (
          <>
            <p>
              {data.ProjectPercentage}% {t("Down_Payment")}
            </p>{" "}
            |
          </>
        )}
        <p>
          {data.period} {t("Years")}
        </p>
      </div>
    </div>
  );
};

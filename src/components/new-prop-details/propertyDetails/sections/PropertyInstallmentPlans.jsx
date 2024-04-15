import { useMemo } from "react";
import { useSelector } from "react-redux";

const PropertyInstallmentPlans = ({ propertyData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const isInstallment = propertyData.saleOption.includes("Installment");
  return isInstallment ? (
    <section className="md:space-y-[30px] space-y-[16px]">
      <h2 className=" ">{language ? "خطط السداد" : "Installment Plans"}</h2>
      <div className="flex items-center flex-wrap gap-5">
        {propertyData.installment.map((item) => {
          const downPaymentPercentage = item.downPayment
            ? (propertyData.price * item.downPayment) / 100
            : null;
          return (
            <InstallmentCard
              data={item}
              downPaymentPercentage={downPaymentPercentage}
            />
          );
        })}
      </div>
    </section>
  ) : null;
};
export default PropertyInstallmentPlans;

const InstallmentCard = ({ data, downPaymentPercentage }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const period = useMemo(
    (period) => {
      switch (data.type) {
        case "Monthly":
          return language ? "شهريا" : "Monthly";
        case "Yearly":
          return language ? "سنويا" : "Yearly";
        case "6 Monthly":
          return language ? "نصف سنويا" : "Semi-Annually";
        case "3 Monthly":
          return language ? "ربع سنويا" : "Quarterly";
        default:
          return language ? "جنية" : "Egp";
      }
    },
    [language]
  );
  return (
    <div className="px-2 py-2 md:px-6 bg-lightNeutral md:py-4 flex items-center flex-col gap-2 rounded">
      {/* {downPaymentPercentage && (
        <p className="text-sm md:text-2xl font-bold">
          {language ? "المقدم" : "Down Payment"} {downPaymentPercentage} %
        </p>
      )} */}
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
              {data.ProjectPercentage}% {language ? "مقدم" : "Down payment"}
            </p>{" "}
            |
          </>
        )}
        <p>
          {data.period} {language ? "سنوات" : "years"}
        </p>
      </div>
    </div>
  );
};

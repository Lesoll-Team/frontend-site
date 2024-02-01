import SectionContainer from "../SectionContainer";
import InstallmentCard from "./InstallmentCard";

const InstallmentData = ({ propertyDetails }) => {
  return (
    <SectionContainer style={"pb-10"}>
      <h3 className="mb-3 text-xl">نظام التقسيط</h3>
      {propertyDetails.getProperty.saleOption.includes("Installment") ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2  h-[80%]">
          <InstallmentCard
            title={"الدفعة الاولى"}
            info={propertyDetails.getProperty.downPayment}
          />

          <InstallmentCard
            title={"نوع التقسيط"}
            info={
              propertyDetails.getProperty.installmentOption.type === "Monthly"
                ? "شهرى"
                : propertyDetails.getProperty.installmentOption.type ===
                  "Yearly"
                ? "سنوى"
                : "سنوى"
            }
          />
          <InstallmentCard
            title={"فترة التقسيط"}
            info={propertyDetails.getProperty.installmentOption.period}
          />
          <InstallmentCard
            title={"مبلغ التقسيط"}
            info={propertyDetails.getProperty.installmentOption.amount}
          />
        </div>
      ) : (
        <div className="min-h-[120px] w-full grid place-content-center">
          <p>لا يوجود نظام تقسيط</p>
        </div>
      )}
    </SectionContainer>
  );
};
export default InstallmentData;

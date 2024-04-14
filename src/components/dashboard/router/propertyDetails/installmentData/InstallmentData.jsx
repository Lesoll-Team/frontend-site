import { localizedNumber } from "@/utils/localizedNumber";
import SectionContainer from "../SectionContainer";
import InstallmentCard from "./InstallmentCard";
import { useCallback } from "react";

const InstallmentData = ({ propertyDetails }) => {
  console.log(propertyDetails);
  const period = useCallback((period) => {
    switch (period) {
      case "Monthly":
        return "شهريا";
      case "Yearly":
        return "سنويا";
      case "6 Monthly":
        return "نصف سنويا";
      case "3 Monthly":
        return "ربع سنويا";
      default:
        return language ? "جنية" : "Egp";
    }
  }, []);
  return (
    <SectionContainer style={"pb-10"}>
      <h3 className="mb-3 text-xl">نظام التقسيط</h3>
      {propertyDetails.getProperty.saleOption.includes("Installment") ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2  h-[80%]">
          {propertyDetails.getProperty.installment.map((item, index) => {
            const type = period(item.type);
            return (
              <div
                key={index}
                className="border h-fit  p-2 bg-white drop-shadow rounded-md"
              >
                {!!item.downPayment && (
                  <div className="flex items-center justify-center gap-2">
                    <p>المقدم</p>
                    <p>{parseInt(item.downPayment).toLocaleString()}</p>
                  </div>
                )}
                <div className="gap-1 flex flex-col justify-center items-center">
                  <p className="flex items-center gap-1">
                    <span>{parseInt(item.amount).toLocaleString()}</span>{" "}
                    <span>{type}</span>
                  </p>{" "}
                  <div className="flex gap-1">
                    <span>{item.period}</span> <span>سنين</span>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <InstallmentCard
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
          /> */}
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

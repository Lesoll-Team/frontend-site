import AddPropDropdown from "@/components/addproperty/AddPropIputs/AddPropDropdown";
import AddPropInput from "@/components/addproperty/AddPropIputs/AddPropInput";
import React from "react";
import { useSelector } from "react-redux";
import Summary from "./Summary";

const Installment = ({ propertyDetils, setData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const saleOptions = {
    en: [
      { value: "Cash", name: "Cash" },
      { value: "Installment", name: "Installment" },
      { value: "Cash & Installment", name: "Cash & Installment" },
    ],
    ar: [
      { value: "Cash", name: "كاش" },
      { value: "Installment", name: "تقسيط" },
      { value: "Cash & Installment", name: "قاش وتقسيط" },
    ],
  };
  const installmentTypeOptions = {
    en: [
      { value: "Yearly", name: "Yearly" },
      { value: "Monthly", name: "Monthly" },
      { value: "3 Month", name: "3 Month" },
      { value: "6 Month", name: "6 Month" },
    ],
    ar: [
      { value: "Yearly", name: "سنوى" },
      { value: "Monthly", name: "شهرى" },
      { value: "3 Month", name: "3 شهور" },
      { value: "6 Month", name: "6 شهور" },
    ],
  };
  return (
    <div className="space-y-4 md:space-y-0 w-full flex flex-col md:flex-row md:justify-between items-stretch ">
      <div className="w-full md:w-[48%] space-y-4 flex flex-col items-stretch ">
        <AddPropDropdown
          title={language ? "نظام البيع" : "Payment Method"}
          value={propertyDetils.saleOption}
          setValue={(e) => {
            setData({ ...propertyDetils, saleOption: e });
          }}
          options={saleOptions}
        />
        <AddPropInput
          type={"number"}
          title={language ? "السعر" : " Price"}
          placeholder={"Price"}
          egp={true}
          value={propertyDetils.price}
          setValue={(e) =>
            setData({ ...propertyDetils, price: e.target.value })
          }
        />
        <AddPropInput
          type={"number"}
          title={language ? "المقدم" : "Down Payment"}
          placeholder={"Price"}
          egp={true}
          value={propertyDetils.downPayment}
          setValue={(e) =>
            setData({ ...propertyDetils, downPayment: e.target.value })
          }
        />
        <AddPropInput
          type={"number"}
          title={language ? "2 المقدم" : "Maintenance Payment"}
          placeholder={"Price"}
          egp={true}
          value={propertyDetils.maintenancePayment}
          setValue={(e) =>
            setData({ ...propertyDetils, maintenancePayment: e.target.value })
          }
        />
      </div>
      <div className=" gap-4 md:w-[48%]  flex flex-col items-stretch">
        <AddPropDropdown
          title={language ? "نظام التقسيط" : "Installment Type"}
          value={propertyDetils.installmentOption.type}
          setValue={(e) => {
            setData({
              ...propertyDetils,
              installmentOption: {
                ...propertyDetils.installmentOption,
                type: e,
              },
            });
          }}
          options={installmentTypeOptions}
        />
        <AddPropInput
          type={"number"}
          title={language ? "مدة التقسيط" : "Installment Period"}
          placeholder={
            propertyDetils.installmentOption.type === "Yearly"
              ? language
                ? "Number Years"
                : "عدد السنين"
              : language
              ? "Months"
              : "عدد الشهور"
          }
          value={propertyDetils.installmentOption.period}
          setValue={(e) =>
            setData({
              ...propertyDetils,
              installmentOption: {
                ...propertyDetils.installmentOption,
                period: e.target.value,
              },
            })
          }
        />
        <Summary propertyDetils={propertyDetils} setData={setData} />
      </div>
    </div>
  );
};

export default Installment;

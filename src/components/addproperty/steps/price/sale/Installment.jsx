import AddPropDropdown from "@/components/addproperty/AddPropIputs/AddPropDropdown";
import AddPropInput from "@/components/addproperty/AddPropIputs/AddPropInput";
import React from "react";
import { useSelector } from "react-redux";

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
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex flex-col gap-4 md:w-[48%]">
        <AddPropDropdown
          title={language ? "Sale Option" : "نظام البيع"}
          value={propertyDetils.saleOption}
          setValue={(e) => {
            setData({ ...propertyDetils, saleOption: e });
          }}
          options={saleOptions}
        />
        <AddPropInput
          type={"number"}
          title={language ? "Rental Price" : "سعر الإيجار"}
          placeholder={"Price"}
          egp={true}
          value={propertyDetils.price}
          setValue={(e) =>
            setData({ ...propertyDetils, price: e.target.value })
          }
        />
        <AddPropInput
          type={"number"}
          title={language ? "Down Payment" : "المقدم"}
          placeholder={"Price"}
          egp={true}
          value={propertyDetils.downPayment}
          setValue={(e) =>
            setData({ ...propertyDetils, downPayment: e.target.value })
          }
        />
        <AddPropInput
          type={"number"}
          title={language ? "Maintenance Payment" : "المقدم"}
          placeholder={"Price"}
          egp={true}
          value={propertyDetils.maintenancePayment}
          setValue={(e) =>
            setData({ ...propertyDetils, maintenancePayment: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col gap-4 md:w-[48%]">
        <AddPropDropdown
          title={language ? "Installment Type" : "نظام التقسيط"}
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
          title={language ? "Installment Period" : "مدة التقسيط"}
          placeholder={
            propertyDetils.installmentOption.type === "Yearly"
              ? language
                ? "Number Years"
                : "عدد السنين"
              : language
              ? "Months"
              : "عدد الشهور"
          }
          value={propertyDetils.downPayment}
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
      </div>
    </div>
  );
};

export default Installment;

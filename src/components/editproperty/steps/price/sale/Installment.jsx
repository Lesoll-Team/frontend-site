import AddPropDropdown from "@/components/editproperty/AddPropIputs/AddPropDropdown";
import AddPropInput from "@/components/editproperty/AddPropIputs/AddPropInput";
import React, { useEffect } from "react";
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
      { value: "Cash & Installment", name: "كاش وتقسيط" },
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
  const installmentTypeHandle = () => {
    switch (propertyDetils.installmentOption.type) {
      case "Yearly":
        return language ? "سنوى" : "Yearly";
        break;
      case "Monthly":
        return language ? "شهرى" : "Monthly";
        break;
      case "3 Month":
        return language ? "3 شهور" : "3 Month";
        break;
      case "6 Month":
        return language ? "6 شهور" : "6 Month";
        break;
      default:
        return language ? "سنوى" : "Yearly";
    }
  };
  useEffect(() => {
    // Convert input values to numbers
    const price = parseInt(propertyDetils.price);
    const downPayment = parseInt(propertyDetils.downPayment);
    const maintenancePayment = parseInt(propertyDetils.maintenancePayment || 0);
    const period = parseInt(propertyDetils.installmentOption.period);

    // Check if all values are valid numbers
    if (
      !isNaN(price) &&
      !isNaN(downPayment) &&
      !isNaN(maintenancePayment || 0) &&
      !isNaN(period) &&
      price > downPayment + (maintenancePayment || 0)
    ) {
      // Calculate the amount
      const amount = (price - (downPayment + maintenancePayment)) / period;

      // Update the data
      setData({
        ...propertyDetils,
        installmentOption: {
          ...propertyDetils.installmentOption,
          amount: amount.toString(),
        },
      });
    } else {
      setData({
        ...propertyDetils,
        installmentOption: {
          ...propertyDetils.installmentOption,
          amount: "",
        },
      });
    }
  }, [
    propertyDetils.installmentOption.period,
    propertyDetils.downPayment,
    propertyDetils.price,
    propertyDetils.maintenancePayment,
  ]);

  return (
    <div className="space-y-4 md:space-y-0 w-full flex flex-col md:flex-row md:justify-between items-stretch ">
      <div className="w-full md:w-[48%] space-y-4 flex flex-col items-stretch ">
        <AddPropDropdown
          title={language ? "نظام البيع" : "Payment Method"}
          value={language ? "تقسيط" : "Installment"}
          setValue={(e) => {
            setData({ ...propertyDetils, saleOption: [e] });
          }}
          options={saleOptions}
        />
        <AddPropInput
          type={"number"}
          title={language ? "السعر" : " Price"}
          placeholder={language ? "السعر" : " Price"}
          egp={true}
          value={propertyDetils.price}
          setValue={(e) =>
            setData({ ...propertyDetils, price: e.target.value })
          }
        />
        <AddPropInput
          type={"number"}
          title={language ? "المقدم" : "Down Payment"}
          placeholder={language ? "المقدم" : "Down Payment"}
          egp={true}
          value={propertyDetils.downPayment}
          setValue={(e) =>
            setData({ ...propertyDetils, downPayment: e.target.value })
          }
        />
        <AddPropInput
          type={"number"}
          title={language ? " المقدم 2" : "Maintenance Payment"}
          placeholder={"Price"}
          egp={true}
          value={propertyDetils.maintenancePayment}
          setValue={(e) =>
            setData({ ...propertyDetils, maintenancePayment: e.target.value })
          }
        />
      </div>
      <div className=" gap-4 md:w-[48%]  flex flex-col items-stretch">
        {/* ar: [
      { value: "Yearly", name: "سنوى" },
      { value: "Monthly", name: "شهرى" },
      { value: "3 Month", name: "3 شهور" },
      { value: "6 Month", name: "6 شهور" },
    ] */}
        <AddPropDropdown
          title={language ? "نظام التقسيط" : "Installment Type"}
          value={installmentTypeHandle()}
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
                ? "عدد السنين"
                : "Number Years"
              : language
              ? "عدد الشهور"
              : "Months"
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
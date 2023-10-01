import AddPropCheck from "@/components/addproperty/AddPropIputs/AddPropCheck";
import AddPropDropdown from "@/components/addproperty/AddPropIputs/AddPropDropdown";
import AddPropInput from "@/components/addproperty/AddPropIputs/AddPropInput";
import React from "react";
import { useSelector } from "react-redux";

const Rent = ({ propertyDetils, setData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const rentalPeriodOptions = {
    en: [
      { value: "Monthly", name: "Monthly" },
      { value: "Daily", name: "Daily" },
      { value: "Yearly", name: "Yearly" },
    ],
    ar: [
      { value: "Monthly", name: "شهري" },
      { value: "Daily", name: "يومي" },
      { value: "Yearly", name: "سنوي" },
    ],
  };
  const rentalPeriodValueLang = () => {
    if (propertyDetils.rentalPeriod === "Daily") {
      return language ? "يومي" : "Daily";
    } else if (propertyDetils.rentalPeriod === "Monthly") {
      return language ? "شهري" : "Monthly";
    } else if (propertyDetils.rentalPeriod === "Yearly") {
      return language ? "سنوي" : "Yearly";
    } else {
      return language ? "اختر نوع الإيجار" : "Choose Rental Type";
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between">
      <div className="space-y-4 md:w-[48%]">
        <AddPropInput
          type={"number"}
          title={language ? "سعر الإيجار" : "Rental Price"}
          placeholder={language ? "السعر" : "Price"}
          egp={true}
          value={propertyDetils.price}
          setValue={(e) =>
            setData({ ...propertyDetils, price: e.target.value })
          }
        />
        <AddPropInput
          type={"number"}
          title={language ? "التأمين" : "Insurance"}
          value={propertyDetils.insurance}
          placeholder={language ? "التأمين" : "Insurance"}
          setValue={(e) => {
            setData({ ...propertyDetils, insurance: e.target.value });
          }}
        />
      </div>
      <div className="space-y-4 md:w-[48%]">
        <AddPropDropdown
          title={language ? "نوع الإيجار" : "Rental Type"}
          value={rentalPeriodValueLang()}
          setValue={(e) => {
            setData({ ...propertyDetils, rentalPeriod: e });
          }}
          options={rentalPeriodOptions}
        />
        <AddPropCheck
          title={language ? "قابل للتفاوض" : "negotiable"}
          value={propertyDetils.negotiable}
          setValue={(e) =>
            setData({
              ...propertyDetils,
              negotiable: e,
            })
          }
        />
      </div>
    </div>
  );
};

export default Rent;

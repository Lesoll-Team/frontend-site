import AddPropCheck from "@/components/addproperty/AddPropIputs/AddPropCheck";
import AddPropDropdown from "@/components/addproperty/AddPropIputs/AddPropDropdown";
import AddPropInput from "@/components/addproperty/AddPropIputs/AddPropInput";
import React from "react";
import { useSelector } from "react-redux";

const Rent = ({ propertyDetils, setData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const rentalPeriodOptions = {
    en: [
      { value: "Daily", name: "Daily" },
      { value: "Weekly", name: "Weekly" },
      { value: "Monthly", name: "Monthly" },
      { value: "Yearly", name: "Yearly" },
    ],
    ar: [
      { value: "Daily", name: "يومي" },
      { value: "Weekly", name: "أسبوعي" },
      { value: "Monthly", name: "شهري" },
      { value: "Yearly", name: "سنوي" },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between">
      <div className="space-y-4 md:w-[48%]">
        <AddPropInput
          type={"number"}
          title={language ? "Rental Price" : "سعر الإيجار"}
          placeholder={"Price"}
          egp={true}
          value={propertyDetils?.price}
          setValue={(e) =>
            setData({ ...propertyDetils, price: e.target.value })
          }
        />
        <AddPropInput
          type={"number"}
          title={language ? "Insurance" : "التأمين"}
          value={propertyDetils?.insurance}
          placeholder={language ? "Insurance" : "التأمين"}
          setValue={(e) => {
            setData({ ...propertyDetils, insurance: e.target.value });
          }}
        />
      </div>
      <div className="space-y-4 md:w-[48%]">
        <AddPropDropdown
          title={language ? "Rental Type" : "نوع الإيجار"}
          value={propertyDetils?.rentalPeriod}
          setValue={(e) => {
            setData({ ...propertyDetils, rentalPeriod: e });
          }}
          options={rentalPeriodOptions}
        />
        <AddPropCheck
          title={language ? "negotiable" : "قابل للتفاوض"}
          value={propertyDetils?.negotiable}
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

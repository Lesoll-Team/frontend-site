import AddPropCheck from "@/components/editproperty/AddPropIputs/AddPropCheck";
import AddPropDropdown from "@/components/editproperty/AddPropIputs/AddPropDropdown";
import AddPropInput from "@/components/editproperty/AddPropIputs/AddPropInput";
import React from "react";
import { useSelector } from "react-redux";

const Cash = ({ propertyDetils, setData }) => {
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
      { value: "Installment", name: "قاش وتقسيط" },
    ],
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between">
      <div className="space-y-4 md:w-[48%]">
        <AddPropDropdown
          title={!language ? "Sale Option" : "نظام البيع"}
          value={language ? "كاش" : "Cash"}
          setValue={(e) => {
            setData({ ...propertyDetils, saleOption: [e] });
          }}
          options={saleOptions}
        />
        <AddPropInput
          type={"number"}
          title={!language ? "Rental Price" : "السعر "}
          placeholder={"Price"}
          egp={true}
          value={propertyDetils.price}
          setValue={(e) =>
            setData({ ...propertyDetils, price: e.target.value })
          }
        />
      </div>
      <div className="space-y-4 md:w-[48%]">
        <AddPropCheck
          title={!language ? "negotiable" : "قابل للتفاوض"}
          value={propertyDetils.negotiable}
          setValue={(e) =>
            setData({
              ...propertyDetils,
              negotiable: e,
            })
          }
        />
        <AddPropCheck
          title={!language ? "Real Estate Finance" : "متاح للتمويل العقارى"}
          value={propertyDetils.realEstateFinance}
          setValue={(e) =>
            setData({
              ...propertyDetils,
              realEstateFinance: e,
            })
          }
        />
      </div>
    </div>
  );
};

export default Cash;

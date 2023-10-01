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
      // { value: "Cash & Installment", name: "Cash & Installment" },
    ],
    ar: [
      { value: "Cash", name: "كاش" },
      { value: "Installment", name: "تقسيط" },
      // { value: "Installment", name: "قاش وتقسيط" },
    ],
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between">
      <div className="space-y-4 md:w-[48%]">
        <AddPropDropdown
          title={language ? "نظام البيع" : "Sale Option"}
          value={language ? "كاش" : "Cash"}
          setValue={(e) => {
            setData({ ...propertyDetils, saleOption: [e] });
          }}
          options={saleOptions}
        />
        <AddPropInput
          type={"number"}
          title={language ? "السعر " : "Rental Price"}
          placeholder={language ? "السعر" : "Price"}
          egp={true}
          value={propertyDetils.price}
          setValue={(e) =>
            setData({ ...propertyDetils, price: e.target.value })
          }
        />
      </div>
      <div className="space-y-4 md:w-[48%]">
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
        <AddPropCheck
          title={language ? "متاح للتمويل العقارى" : "Real Estate Finance"}
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

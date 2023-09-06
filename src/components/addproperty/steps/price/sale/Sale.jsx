import React from "react";
import Cash from "./Cash";
import Installment from "./Installment";
import AddPropDropdown from "@/components/addproperty/AddPropIputs/AddPropDropdown";
import { useSelector } from "react-redux";
const Sale = ({ propertyDetils, setData }) => {
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
  return (
    <>
      {propertyDetils.saleOption === "Cash" ? (
        <Cash propertyDetils={propertyDetils} setData={setData} />
      ) : propertyDetils.saleOption === "Installment" ? (
        <Installment propertyDetils={propertyDetils} setData={setData} />
      ) : propertyDetils.saleOption === "Cash & Installment" ? (
        <Installment propertyDetils={propertyDetils} setData={setData} />
      ) : (
        <div>
          <AddPropDropdown
            title={language ? "نظام البيع" : "Sale Option"}
            value={propertyDetils.saleOption}
            setValue={(e) => {
              setData({ ...propertyDetils, saleOption: e });
            }}
            options={saleOptions}
          />
        </div>
      )}
    </>
  );
};

export default Sale;

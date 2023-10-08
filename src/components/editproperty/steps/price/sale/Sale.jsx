import React from "react";
import Cash from "./Cash";
import Installment from "./Installment";
import AddPropDropdown from "@/components/addproperty/AddPropIputs/AddPropDropdown";
import { useSelector } from "react-redux";
const Sale = ({ propertyDetils, setData, propErrors, setPropErrors }) => {
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
  // console.log(propertyDetils.saleOption);
  return (
    <>
      {propertyDetils.saleOption && propertyDetils.saleOption[0] === "Cash" ? (
        <Cash
          propErrors={propErrors}
          setPropErrors={setPropErrors}
          propertyDetils={propertyDetils}
          setData={setData}
        />
      ) : (
        <Installment
          propErrors={propErrors}
          setPropErrors={setPropErrors}
          propertyDetils={propertyDetils}
          setData={setData}
        />
      )}
    </>
  );
};

export default Sale;

import React from "react";
import Cash from "./Cash";
import Installment from "./Installment";
// import { useSelector } from "react-redux";
const Sale = ({ propertyDetils, setData, propErrors, setPropErrors }) => {
  // const language = useSelector((state) => state.GlobalState.languageIs);
  // const saleOptions = {
  //   en: [
  //     { value: "Cash", name: "Cash" },
  //     { value: "Installment", name: "Installment" },
  //     { value: "Cash & Installment", name: "Cash & Installment" },
  //   ],
  //   ar: [
  //     { value: "Cash", name: "كاش" },
  //     { value: "Installment", name: "تقسيط" },
  //     { value: "Cash & Installment", name: "قاش وتقسيط" },
  //   ],
  // };
  return (
    <>
      {propertyDetils.saleOption &&
      propertyDetils.saleOption.includes("Installment") ? (
        <Installment
          propErrors={propErrors}
          setPropErrors={setPropErrors}
          propertyDetils={propertyDetils}
          setData={setData}
        />
      ) : (
        <Cash
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

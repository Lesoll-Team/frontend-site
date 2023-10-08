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
      // { value: "Cash & Installment", name: "Cash & Installment" },
    ],
    ar: [
      { value: "Cash", name: "كاش" },
      { value: "Installment", name: "تقسيط" },
      // { value: "Cash & Installment", name: "قاش وتقسيط" },
    ],
  };
  return (
    <>
      {propertyDetils.saleOption === "Cash" ? (
        <Cash
          propertyDetils={propertyDetils}
          setData={setData}
          propErrors={propErrors}
          setPropErrors={setPropErrors}
        />
      ) : propertyDetils.saleOption === "Installment" ? (
        <Installment
          propErrors={propErrors}
          setPropErrors={setPropErrors}
          propertyDetils={propertyDetils}
          setData={setData}
        />
      ) : propertyDetils.saleOption === "Cash & Installment" ? (
        <Installment
          propErrors={propErrors}
          setPropErrors={setPropErrors}
          propertyDetils={propertyDetils}
          setData={setData}
        />
      ) : (
        <div>
          <AddPropDropdown
            error={propErrors.saleOption}
            title={language ? "نظام البيع" : "Sale Option"}
            value={propertyDetils.saleOption}
            setValue={(e) => {
              setData({ ...propertyDetils, saleOption: e });
              setPropErrors((prevErrors) => ({
                ...prevErrors,
                saleOption: false,
              }));
            }}
            options={saleOptions}
          />
          {propErrors.saleOption && (
            <p className="text-red-500">{language ? "مطلوب" : "Requird."}</p>
          )}
        </div>
      )}
    </>
  );
};

export default Sale;

import React from "react";
import LandInfo from "./landinfo/LandInfo";
import CommercialInfo from "./commecialInfo/CommercialInfo";
import { useSelector } from "react-redux";

const PropertyInfo = ({
  propertyDetils,
  setData,
  propErrors,
  setPropErrors,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="space-y-7">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {language ? "تفاصيل العقار" : "Property Info"}
      </h3>
      {propertyDetils.propType === "Land" ? (
        <LandInfo
          propErrors={propErrors}
          setPropErrors={setPropErrors}
          propertyDetils={propertyDetils}
          setData={setData}
        />
      ) : (
        <CommercialInfo
          propErrors={propErrors}
          setPropErrors={setPropErrors}
          propertyDetils={propertyDetils}
          setData={setData}
        />
      )}
    </div>
  );
};

export default PropertyInfo;

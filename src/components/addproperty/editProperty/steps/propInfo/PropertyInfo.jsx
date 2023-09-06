import React from "react";
import LandInfo from "./landinfo/LandInfo";
import CommercialInfo from "./commecialInfo/CommercialInfo";
import { useSelector } from "react-redux";

const PropertyInfo = ({ propertyDetils, setData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="space-y-7">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {language ? "Property Info" : "تفاصيل العقار"}
      </h3>
      {propertyDetils?.propType === "Land" ? (
        <LandInfo propertyDetils={propertyDetils} setData={setData} />
      ) : (
        <CommercialInfo propertyDetils={propertyDetils} setData={setData} />
      )}
    </div>
  );
};

export default PropertyInfo;

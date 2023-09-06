import React from "react";
import MapComp from "./MapComp";
import { useSelector } from "react-redux";

const Location = ({ propertyDetils, setData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="space-y-4">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {language ? "موقع العقار" : "Property Location"}
      </h3>
      <MapComp propertyDetils={propertyDetils} setData={setData} />
    </div>
  );
};

export default Location;

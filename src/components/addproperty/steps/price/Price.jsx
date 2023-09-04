import React from "react";
import { useSelector } from "react-redux";
import Rent from "./rent/Rent";
import Sale from "./sale/Sale";

const Price = ({ propertyDetils, setData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="space-y-7">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {language ? "السعر" : "Price"}
      </h3>
      {propertyDetils.offer === "For Sale" ? (
        <Sale propertyDetils={propertyDetils} setData={setData} />
      ) : propertyDetils.offer === "For Rent" ? (
        <Rent propertyDetils={propertyDetils} setData={setData} />
      ) : (
        <div>
          <p>Please Choose Listing option</p>
        </div>
      )}
    </div>
  );
};

export default Price;

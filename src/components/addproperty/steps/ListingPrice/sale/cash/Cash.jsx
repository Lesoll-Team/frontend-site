import React from "react";
import Negotiable from "./Negotiable";
import RealEstateFinance from "../RealEstateFinance";

const Cash = ({
  negotiable,
  setNegotiable,
  realEstateFinance,
  setRealEstateFinance,
}) => {
  return (
    <div className="w-full space-y-4">
      <Negotiable
        className="w-full"
        negotiable={negotiable}
        setNegotiable={setNegotiable}
      />
      <RealEstateFinance
        realEstateFinance={realEstateFinance}
        setRealEstateFinance={setRealEstateFinance}
      />
    </div>
  );
};

export default Cash;

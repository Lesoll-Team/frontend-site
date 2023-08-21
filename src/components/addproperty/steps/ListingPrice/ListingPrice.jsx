import React, { useEffect, useRef, useState } from "react";

import Sale from "./sale/Sale";
import Rent from "./rent/Rent";
import { useSelector } from "react-redux";

const ListingPrice = () => {
  const listingOption = useSelector((state) => state.Property.offer);

  return (
    <div className="w-full mx-auto px-8 md:px-8 my-8 flex flex-col">
      <h3 className="text-lg md:text-2xl text-darkGreen font-bold mb-3 ">
        Price
      </h3>
      {listingOption === "Sale" ? (
        <Sale />
      ) : listingOption === "Rent" ? (
        <Rent />
      ) : (
        <Sale />
      )}
    </div>
  );
};

export default ListingPrice;

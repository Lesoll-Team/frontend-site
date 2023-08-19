import React, { useEffect, useRef, useState } from "react";

import Sale from "./sale/Sale";
import Rent from "./rent/Rent";

const ListingPrice = () => {
  const [listingOption, setListingOptions] = useState("sale");
  return (
    <div className="w-full mx-auto px-8 md:px-8 my-8 flex flex-col">
      <h3 className="text-lg md:text-2xl text-darkGreen font-bold mb-3 ">
        Price
      </h3>
      {listingOption === "sale" ? (
        <Sale />
      ) : listingOption === "rent" ? (
        <Rent />
      ) : (
        "error"
      )}
    </div>
  );
};

export default ListingPrice;

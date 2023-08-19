import React, { useState } from "react";

import AddPropInput from "@/components/addproperty/AddPropIputs/AddPropInput";
import AddPropDropdown from "@/components/addproperty/AddPropIputs/AddPropDropdown";
import AddPropCheck from "@/components/addproperty/AddPropIputs/AddPropCheck";

const Rent = () => {
  const initialState = {
    price: "",
    insurance: "",
    rentalPeriod: "",
    negotiable: false,
  };
  const [rentData, setRentData] = useState(initialState);
  const handleRentPrice = (price) => {
    setRentData((prevData) => ({
      ...prevData,
      price: price,
    }));
  };
  const handleRentInsurance = (price) => {
    setRentData((prevData) => ({
      ...prevData,
      price: price,
    }));
  };
  const handleRentPeriod = (period) => {
    setRentData((prevData) => ({
      ...prevData,
      rentalPeriod: period,
    }));
  };
  const handleNegotiable = () => {
    setRentData((prevData) => ({
      ...prevData,
      negotiable: !prevData.negotiable,
    }));
  };
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:space-y-0 space-y-4">
      <div className="md:w-[48%] w-full space-y-4">
        <AddPropInput
          title={"Rental Price"}
          type={"number"}
          placeholder={"Rental Price"}
          egp={true}
          setValue={handleRentPrice}
          value={rentData.price}
        />
        <AddPropDropdown
          title={"Rental period"}
          value={rentData.rentalPeriod}
          setValue={handleRentPeriod}
          options={["Daily rent", "Weekly rent", "Monthly rent", "Annual rent"]}
        />
      </div>
      <div className="md:w-[48%] w-full space-y-4">
        <AddPropInput
          title={"Insurance"}
          type={"number"}
          placeholder={"Insurance"}
          egp={true}
          setValue={handleRentInsurance}
          value={rentData.insurance}
        />
        <AddPropCheck
          title={"Negotiable"}
          value={rentData.negotiable}
          setValue={handleNegotiable}
        />
      </div>
    </div>
  );
};

export default Rent;

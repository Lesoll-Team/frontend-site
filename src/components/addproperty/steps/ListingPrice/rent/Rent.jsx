import React, { useState } from "react";

import AddPropInput from "@/components/addproperty/AddPropIputs/AddPropInput";
import AddPropDropdown from "@/components/addproperty/AddPropIputs/AddPropDropdown";
import AddPropCheck from "@/components/addproperty/AddPropIputs/AddPropCheck";
import { useDispatch, useSelector } from "react-redux";
import {
  setPrice,
  setNegotiable,
  setRentalPeriod,
  setInsurance,
} from "@/redux-store/features/propertySlice";
const Rent = () => {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.Property.price);
  const negotiable = useSelector((state) => state.Property.negotiable);
  const rentalPeriod = useSelector((state) => state.Property.rentalPeriod);
  const insurance = useSelector((state) => state.Property.insurance);
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:space-y-0 space-y-4">
      <div className="md:w-[48%] w-full space-y-4">
        <AddPropInput
          title={"Rental Price"}
          type={"number"}
          placeholder={"Rental Price"}
          egp={true}
          setValue={(amount) => dispatch(setPrice(amount))}
          value={price}
        />
        <AddPropDropdown
          title={"Rental period"}
          value={rentalPeriod}
          setValue={(amount) => dispatch(setRentalPeriod(amount))}
          options={["Daily rent", "Weekly rent", "Monthly rent", "Annual rent"]}
        />
      </div>
      <div className="md:w-[48%] w-full space-y-4">
        <AddPropInput
          title={"Insurance"}
          type={"number"}
          placeholder={"Insurance"}
          egp={true}
          setValue={(amount) => dispatch(setInsurance(amount))}
          value={insurance}
        />
        <AddPropCheck
          title={"Negotiable"}
          value={negotiable}
          setValue={() => dispatch(setNegotiable())}
        />
      </div>
    </div>
  );
};

export default Rent;

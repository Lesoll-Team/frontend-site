import React, { useState } from "react";
// import Negotiable from "./Negotiable";

import AddPropInput from "../../../../AddPropIputs/AddPropInput";
import AddPropCheck from "../../../../AddPropIputs/AddPropCheck";
import { useDispatch, useSelector } from "react-redux";
import {
  setPaymentMethod,
  setPrice,
  setRealEstateFinance,
  setNegotiable,
} from "@/redux-store/features/propertySlice";
import AddPropDropdown from "@/components/addproperty/AddPropIputs/AddPropDropdown";

const Cash = ({}) => {
  const dispatch = useDispatch();
  const paymentMethod = useSelector((state) => state.Property.saleOption);
  const negotiable = useSelector((state) => state.Property.negotiable);
  const price = useSelector((state) => state.Property.price);
  const realEstateFinance = useSelector(
    (state) => state.Property.realEstateFinance
  );
  // const [value, setValue] = useState("");

  return (
    <div className="space-y-4 md:space-y-0  w-full flex flex-col md:flex-row md:justify-between md:items-start">
      <div className="w-full md:w-[48%] space-y-4">
        {/* negotiable checkbox */}
        <AddPropDropdown
          title={"Payment method"}
          setValue={(method) => {
            dispatch(setPaymentMethod(method));
          }}
          value={paymentMethod}
          options={["Cash", "Installment"]}
        />
        {/* real Estate Finance checkbox */}
        <AddPropInput
          type={"number"}
          title={"Price"}
          value={price}
          setValue={(price) => dispatch(setPrice(price))}
          placeholder={"price"}
          egp={true}
        />
      </div>
      <div className="w-full md:w-[48%] space-y-4">
        {/* negotiable checkbox */}
        <AddPropCheck
          title={"Negotiable"}
          value={negotiable}
          setValue={() => dispatch(setNegotiable())}
        />
        {/* real Estate Finance checkbox */}
        <AddPropCheck
          title={"Real Estate Finance"}
          value={realEstateFinance}
          setValue={() => dispatch(setRealEstateFinance())}
        />
      </div>
    </div>
  );
};

export default Cash;

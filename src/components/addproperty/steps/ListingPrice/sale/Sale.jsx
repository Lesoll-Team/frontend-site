import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPaymentMethod } from "@/redux-store/features/propertySlice";

import Installment from "./installment/Installment";

import AddPropDropdown from "@/components/addproperty/AddPropIputs/AddPropDropdown";
import Cash from "./cash/Cash";

const Sale = () => {
  const dispatch = useDispatch();
  const paymentMethod = useSelector((state) => state.Property.saleOption);
  console.log(paymentMethod);
  const initialState = {
    // paymentMethod: "",
    price: "",
    cash: {
      negotiable: false,
    },
    installment: {
      downPayment: "",
      downPaymentType: "EGP",
      period: false,
      installmentAmount: "",
      installmentPlan: "year",
      mintenacePayment: "",
      mintenacePaymentType: "EGP",
    },
    realEstateFinance: false,
  };
  const [saleData, setSaleData] = useState(initialState);

  // console.log(saleData.paymentMethod);

  return (
    <>
      {!paymentMethod && (
        <AddPropDropdown
          title={"Payment method"}
          setValue={(method) => {
            dispatch(setPaymentMethod(method));
          }}
          value={paymentMethod}
          options={["Cash", "Installment"]}
        />
      )}
      <div className="w-full   md:space-y-0 space-y-4">
        <div>
          {paymentMethod === "Cash" ? (
            <Cash />
          ) : paymentMethod === "Installment" ? (
            <Installment />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Sale;

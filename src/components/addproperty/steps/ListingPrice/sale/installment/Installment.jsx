import AddPropDropdown from "@/components/addproperty/AddPropIputs/AddPropDropdown";
import AddPropInput from "@/components/addproperty/AddPropIputs/AddPropInput";
import React from "react";
import {
  setInstallmentPlan,
  setPaymentMethod,
  setInstallmentPeriod,
  setPrice,
  setDownPayment,
} from "@/redux-store/features/propertySlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Summary from "./Summary";

const Installment = () => {
  // const [downPayment, setDownPayment] = useState("");
  const [maintenancePayment, setMaintenancePayment] = useState("");
  // const [installmentPlan, setInstallmentPlan] = useState("");
  const dispatch = useDispatch();
  const paymentMethod = useSelector((state) => state.Property.saleOption);
  const price = useSelector((state) => state.Property.price);
  const downPayment = useSelector((state) => state.Property.downPayment);
  const installmentPeriod = useSelector(
    (state) => state.Property.installmentOption.period
  );
  const installmentPlan = useSelector(
    (state) => state.Property.installmentOption.type
  );
  return (
    <div className="space-y-4 md:space-y-0 w-full flex flex-col md:flex-row md:justify-between ">
      <div className="w-full md:w-[48%] space-y-4 ">
        <AddPropDropdown
          title={"Payment method"}
          setValue={(method) => {
            dispatch(setPaymentMethod(method));
          }}
          value={paymentMethod}
          options={["Cash", "Installment"]}
        />
        <AddPropInput
          type={"number"}
          title={"Price"}
          value={price}
          setValue={(price) => dispatch(setPrice(price))}
          placeholder={"price"}
          egp={true}
        />
        <AddPropInput
          title={"Down Paymnet"}
          type={"number"}
          placeholder={"Price"}
          percent={true}
          value={downPayment}
          setValue={(amount) => dispatch(setDownPayment(amount))}
        />
        <AddPropDropdown
          title={"Installment plan"}
          value={installmentPlan}
          setValue={(plan) => dispatch(setInstallmentPlan(plan))}
          options={["Year", "Month"]}
        />

        {/* <AddPropInput
          title={"Maintenance Payment"}
          type={"number"}
          placeholder={"Price"}
          percent={true}
          value={maintenancePayment}
          setValue={setMaintenancePayment}
        /> */}
      </div>
      <div className="w-full md:w-[48%] space-y-4">
        <AddPropInput
          title={"Insatllment period"}
          type={"number"}
          placeholder={"Period"}
          period={installmentPlan}
          value={installmentPeriod}
          setValue={(period) => dispatch(setInstallmentPeriod(period))}
        />

        <Summary />
      </div>
    </div>
  );
};

export default Installment;

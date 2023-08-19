import AddPropInput from "@/components/addproperty/AddPropIputs/AddPropInput";
import React from "react";

import { useState } from "react";

const Installment = () => {
  const [downPayment, setDownPayment] = useState("");
  const [maintenancePayment, setMaintenancePayment] = useState("");
  return (
    <div className="space-y-4  w-full">
      <AddPropInput
        title={"Down Paymnet"}
        type={"number"}
        placeholder={"Price"}
        percent={true}
        value={downPayment}
        setValue={setDownPayment}
      />
      <AddPropInput
        title={"Maintenance Payment"}
        type={"number"}
        placeholder={"Price"}
        percent={true}
        value={maintenancePayment}
        setValue={setMaintenancePayment}
      />
    </div>
  );
};

export default Installment;

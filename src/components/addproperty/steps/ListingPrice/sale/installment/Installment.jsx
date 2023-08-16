import React from "react";
import DownPayment from "./DownPayment";
import MaintenancePayment from "./MaintenancePayment";

const Installment = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row w-full">
      <DownPayment />
      <MaintenancePayment />
    </div>
  );
};

export default Installment;

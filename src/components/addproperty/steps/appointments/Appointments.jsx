import React from "react";
import DatePick from "./DatePick";
import FormControlBtns from "../../FormControlBtns";

const Appointments = () => {
  return (
    <div className="w-full min-h-[450px] mx-auto px-6 md:px-8 my-5 space-y- flex flex-col justify-between">
      <DatePick />
      <div className="-mb-6 mt-4">
        <FormControlBtns canGoNext={true} />
      </div>
    </div>
  );
};

export default Appointments;

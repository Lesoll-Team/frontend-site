import React, { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const DatePick = () => {
  // const [fieldValue,setFieldValue] =
  const [startDate, setStartDate] = useState(new Date());
  const minDate = new Date(); // Set your minimum date here
  const maxDate = new Date("2023-12-31");

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        console.log(date);
      }}
      minDate={minDate}
      maxDate={maxDate}
      showTimeSelect
      dateFormat="Pp"
    />
  );
};

export default DatePick;

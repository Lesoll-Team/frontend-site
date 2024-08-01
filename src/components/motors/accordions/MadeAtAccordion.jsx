import { useState } from "react";
import Accordion from "./Accordion";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const MadeAtAccordion = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <Accordion title={language ? "سنة الصنع" : "Years made"}>
      <div className={` grid grid-cols-2 px-2 py-4 `}>
        <div className="flex justify-center items-center gap-1">
          <label htmlFor="start date" className=" text-gray-700">
            {language ? "من:" : "From:"}
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showYearPicker
            name="start date"
            dateFormat="yyyy"
            className="w-28 border px-2 py-1 border-gray-300 rounded-sm"
          />
        </div>
        <div className="flex justify-center  items-center">
          <label htmlFor="end date" className=" text-gray-700">
            {language ? "الي:" : "To:"}
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            showYearPicker
            dateFormat="yyyy"
            name="end date"
            className="w-28 px-2 py-1 border border-gray-300 rounded-sm"
          />
        </div>
      </div>
    </Accordion>
  );
};
export default MadeAtAccordion;

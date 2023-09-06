import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiCalendarEvent } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { useSelector } from "react-redux";
import AddPropCheck from "@/components/addproperty/AddPropIputs/AddPropCheck";
import AddPropDropdown from "@/components/addproperty/AddPropIputs/AddPropDropdown";
import AddPropInput from "@/components/addproperty/AddPropIputs/AddPropInput";
// import { ar } from "../../../../language/ar/common";
// import { en } from "../../../../language/en/common";
const Appointment = ({ propertyDetils, setData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [startDate, setStartDate] = useState(
    propertyDetils?.appointments.startDate
  );
  const [endDate, setEndDate] = useState(propertyDetils?.appointments.endDate);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const [startTime, setStartTime] = useState(propertyDetils?.appointments.from);
  const startTimeRef = useRef(null);
  const [endTime, setEndTime] = useState(propertyDetils?.appointments.from);
  const endTimeRef = useRef(null);

  const openDatePicker = (ref) => {
    if (ref.current) {
      ref.current.setOpen(true);
    }
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setData({
      ...propertyDetils,
      appointments: {
        ...propertyDetils?.appointments,
        startDate: date?.toISOString(),
      },
    });
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setData({
      ...propertyDetils,
      appointments: {
        ...propertyDetils?.appointments,
        endDate: date?.toISOString(),
      },
    });
  };
  const handleStartTimeChange = (date) => {
    setStartTime(date);
    setData({
      ...propertyDetils,
      appointments: {
        ...propertyDetils?.appointments,
        from: date?.toISOString(),
      },
    });
  };
  const handleEndTimeChange = (date) => {
    setEndTime(date);
    setData({
      ...propertyDetils,
      appointments: {
        ...propertyDetils?.appointments,
        to: date?.toISOString(),
      },
    });
  };

  const formatDate = (date) =>
    `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}/${String(date.getDate()).padStart(2, "0")}`;
  //   console.log("end", propertyDetils?.appointments.endDate);
  //   console.log("start", propertyDetils?.appointments.startDate);

  return (
    <>
      {/* <div>Start Date: {formatDate(startDate)}</div> */}
      <div className="space-y-4">
        <h3 className="text-2xl text-darkGreen font-bold mb-1">
          {language ? "المواعيد المتاحة" : "Appointment"}
        </h3>
        {/* days */}
        <div className="space-y-4">
          <h3 className="font-semibold text-xl text-darkGreen">Days</h3>
          <AddPropCheck
            placeholder={language ? "كل الأيام" : "All Days"}
            value={propertyDetils?.appointments.allDays}
            setValue={(e) => {
              setData({
                ...propertyDetils,
                appointments: { ...propertyDetils?.appointments, allDays: e },
              });
            }}
          />
          <div className="flex flex-col md:flex-row justify-between gap-4 items-center w-full  space-y-4 md:space-y-0 ">
            <div
              onClick={() => openDatePicker(startDateRef)}
              className={`border-[3px] p-2 cursor-pointer rounded-lg md:w-[48%]  w-full  flex justify-between items-center ${
                propertyDetils?.appointments.allDays && "opacity-50"
              }`}
            >
              <DatePicker
                disabled={propertyDetils?.appointments.allDays}
                placeholderText={language ? "من" : "from"}
                closeOnScroll={(e) => e.target === document}
                className="focus:border-none bg-white cursor-auto placeholder:font-bold placeholder:text-darkGray placeholder:opacity-60  focus:outline-none text-xl text-darkGreen w-full p-3"
                minDate={new Date()}
                dateFormat="yyyy/MM/dd"
                value={startDate}
                ref={startDateRef}
                selected={startDate}
                onChange={handleStartDateChange}
              />
              <BiCalendarEvent className="text-darkGreen text-3xl" />
            </div>
            <div
              onClick={() => openDatePicker(endDateRef)}
              className={`border-[3px] p-2 cursor-pointer rounded-lg md:w-[48%]  w-full  flex justify-between items-center ${
                propertyDetils?.appointments.allDays && "opacity-50"
              }`}
            >
              {/* End Date: {formatDate(endDate)} */}
              <DatePicker
                disabled={propertyDetils?.appointments.allDays}
                minDate={new Date()}
                placeholderText="End Date"
                closeOnScroll={(e) => e.target === document}
                className="focus:border-none bg-white  focus:outline-none text-xl placeholder:font-bold placeholder:text-darkGray placeholder:opacity-60  text-darkGreen w-full p-3"
                dateFormat="yyyy/MM/dd"
                value={endDate}
                ref={endDateRef}
                selected={endDate}
                onChange={handleEndDateChange}
              />
              <BiCalendarEvent className="text-darkGreen text-3xl" />
            </div>
          </div>
        </div>
        {/* hours */}
        <div className="space-y-2">
          <h3 className="font-semibold text-xl text-darkGreen">Hours</h3>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-0 space-y-4 md:space-y-0 ">
            <div
              onClick={() => openDatePicker(startTimeRef)}
              className="border-[3px] cursor-pointer p-2 rounded-lg w-full md:w-[48%]  flex justify-between items-center"
            >
              <DatePicker
                placeholderText="From"
                closeOnScroll={(e) => e.target === document}
                showTimeSelectOnly
                showTimeSelect
                timeIntervals={15}
                className="focus:border-none bg-white  cursor-auto placeholder:font-bold placeholder:text-darkGray placeholder:opacity-60   focus:outline-none text-xl text-darkGreen w-full p-3"
                minDate={new Date()}
                dateFormat="p"
                value={startTime}
                ref={startTimeRef}
                selected={startTime}
                onChange={handleStartTimeChange}
              />
              <BsClock className="text-darkGreen text-3xl" />
            </div>
            <div
              onClick={() => openDatePicker(endTimeRef)}
              className="border-[3px] p-2  cursor-pointer rounded-lg  w-full md:w-[48%] flex justify-between items-center"
            >
              {/* End Date: {formatDate(endDate)} */}
              <DatePicker
                placeholderText="To"
                closeOnScroll={(e) => e.target === document}
                showTimeSelectOnly
                showTimeSelect
                timeIntervals={15}
                className="focus:border-none bg-white  cursor-auto placeholder:font-bold placeholder:text-darkGray placeholder:opacity-60 focus:outline-none text-xl text-darkGreen w-full p-3"
                minDate={new Date()}
                dateFormat="p"
                value={endTime}
                ref={endTimeRef}
                selected={endTime}
                onChange={handleEndTimeChange}
              />
              <BsClock className="text-darkGreen text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;

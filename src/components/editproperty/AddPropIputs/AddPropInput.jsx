import React from "react";
import { AiOutlinePercentage } from "react-icons/ai";
import { BsCash } from "react-icons/bs";
import { useSelector } from "react-redux";
const AddPropInput = ({
  type,
  title,
  placeholder,
  value,
  setValue,
  egp,
  percent,
  m2,
  isLand,
  period,
  choices,
  setData,
  propertyDetils,
  yearMonthes,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  // console.log(yearMonthes);
  return (
    <div className="relative">
      <h3 className="text-lg md:text-2xl text-darkGreen font-semibold mb-2">
        {title}
      </h3>
      <div className="relative ">
        <input
          inputMode={type === "number" ? "numeric" : undefined}
          value={value || ""}
          onChange={setValue}
          className=" w-full text-lg font-semibold text-darkGreen focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-[3px] rounded-xl p-3 py-4 "
          placeholder={placeholder}
          // type={type}
        />
        <p
          className={`absolute top-[20px] text-darkGreen font-extrabold  pl-1 pr-4 bg- ${
            language ? "left-3 " : "right-0"
          }`}
        >
          {isLand && isLand === "m" ? (
            <>
              <span>M </span>
              <sup>2</sup>
            </>
          ) : isLand === "carat" ? (
            "Carat"
          ) : isLand === "arce" ? (
            "Arce"
          ) : null}
          {m2 &&
            (language ? (
              <>
                <span>م</span>
                <sup>2</sup>
              </>
            ) : (
              <span>m&#178;</span>
            ))}
          {egp && (language ? <p className="roboto">جنية</p> : <p>EGP</p>)}
        </p>

        {/* Period  */}
        {period && (
          <p className="absolute top-[17px] text-darkGreen font-extrabold right-0 pl-1 pr-4 ">
            {period}
          </p>
        )}
      </div>
      {percent && (
        <div className="absolute bottom-[14px] right-3">
          <p className=" flex items-center  border border-darkGreen rounded-lg overflow-hidden  text-darkGreen font-extrabold  bg-white">
            <p className="bg-darkGreen text-sm w-10 font-bold text-center text-white text p-1 cursor-pointer">
              %
            </p>
            <p className=" text-sm text-darkGreen w-10 font-bold text-center  p-1 cursor-pointer  ">
              EGP
            </p>
          </p>
        </div>
      )}
      {choices && (
        <div
          className={`absolute bottom-[15px] text-darkGreen font-extrabold border-2 border-darkGreen  flex items-center overflow-hidden rounded-lg ${
            language ? "left-3 " : "right-3"
          }`}
        >
          <button
            onClick={() => {
              setData((prevState) => ({
                ...prevState,
                downPaymentType: "percentage",
              }));

              // setData({ ...propertyDetils, installmentPeriodType: "yearly" });
            }}
            // onClick={() => {
            //   setData({ ...propertyDetils, downPaymentType: "percentage" });
            // }}
            className={`px-2 py-1 ${
              propertyDetils.downPaymentType === "percentage" &&
              "text-white bg-darkGreen"
            }`}
          >
            <AiOutlinePercentage />
          </button>
          <button
            onClick={() => {
              setData((prevState) => ({
                ...prevState,
                downPaymentType: "cash",
              }));

              // setData({ ...propertyDetils, installmentPeriodType: "yearly" });
            }}
            // onClick={() => {
            //   setData({ ...propertyDetils, downPaymentType: "cash" });
            // }}
            className={`px-2 py-1 ${
              propertyDetils.downPaymentType === "cash" &&
              "text-white bg-darkGreen"
            }`}
          >
            <BsCash />
          </button>
        </div>
      )}
      {yearMonthes && (
        <div
          className={`absolute bottom-[15px] text-sm text-darkGreen font-extrabold border-2 border-darkGreen  flex items-center overflow-hidden rounded-lg ${
            language ? "left-3 " : "right-3"
          }`}
        >
          <button
            onClick={() => {
              setData((prevState) => ({
                ...prevState,
                installmentOption: {
                  ...prevState.installmentOption,
                  type: "Yearly",
                },
              }));

              // setData({ ...propertyDetils, installmentPeriodType: "yearly" });
            }}
            className={`px-2 py-1 ${
              yearMonthes === "Yearly" && "text-white bg-darkGreen"
            }`}
          >
            {language ? "سنين" : "Years"}
          </button>
          <button
            onClick={() => {
              setData((prevState) => ({
                ...prevState,
                installmentOption: {
                  ...prevState.installmentOption,
                  type: "Monthly",
                },
              }));

              // setData({ ...propertyDetils, installmentPeriodType: "monthly" });
            }}
            className={`px-2 py-1 ${
              yearMonthes === "Monthly" && "text-white bg-darkGreen"
            }`}
          >
            {language ? "شهور" : "Monthes"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPropInput;

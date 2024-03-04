import React from "react";
import { AiOutlinePercentage } from "react-icons/ai";
import { BsCash } from "react-icons/bs";
import { useSelector } from "react-redux";
const NeedInput = ({
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
  error,
  optinal,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="relative w-full ">
      <input
        // inputMode={type === "number" ? "numeric" : undefined}
        // type={type === "number" && "number"}
        name="number"
        type={type}
        value={value || ""}
        onChange={setValue}
        className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
          error && "border-red-500 focus:border-red-500"
        }`}
        placeholder={placeholder}
        // type={type}
      />
      <p
        className={`absolute top-[10px] text-darkGreen font-extrabold  pl-1 pr-4 bg- ${
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

        {egp && (language ? <span>جنية</span> : <span>EGP</span>)}
      </p>

      {/* Period  */}
    </div>
  );
};

export default NeedInput;

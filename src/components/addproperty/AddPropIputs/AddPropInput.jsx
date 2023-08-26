import React from "react";

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
}) => {
  return (
    <div className="relative">
      <h3 className="text-lg md:text-2xl text-darkGreen font-semibold mb-2">
        {title}
      </h3>
      <div className="relative ">
        <input
          value={value || ""}
          onChange={(e) => setValue(e.target.value)}
          className=" w-full text-lg font-semibold text-darkGreen focus:outline-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-lightGreen rounded-xl p-3 py-4 drop-shadow-xl"
          placeholder={placeholder}
          type={type}
        />
        <p className="absolute top-[17px] text-darkGreen font-extrabold right-0 pl-1 pr-4 bg-">
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
          {m2 && (
            <span>
              M <sup>2</sup>
            </span>
          )}
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
    </div>
  );
};

export default AddPropInput;

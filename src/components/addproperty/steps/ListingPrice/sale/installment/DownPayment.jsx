import React from "react";

const DownPayment = () => {
  return (
    <div className="">
      <h3 className="text-xl text-darkGreen font-bold mb-3">Down Payment</h3>
      <div className="relative">
        <input
          className=" w-full text-lg font-medium text-darkGreen focus:outline-none placeholder:text-darkGreen placeholder:opacity-60   border-lightGreen rounded-xl p-3 py-4 drop-shadow-xl"
          placeholder="Area"
          type="number"
        />
        <p className="absolute top-[17px] text-darkGreen font-extrabold right-0 pl-1 pr-4 bg-white">
          EGP
        </p>
      </div>
    </div>
  );
};

export default DownPayment;

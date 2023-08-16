import React from "react";

const Negotiable = ({ negotiable, setNegotiable }) => {
  return (
    <div className="w-full  ">
      <h3 className="text-xl text-darkGreen font-semibold mb-2">Negotiable</h3>
      <div
        onClick={() => {
          setNegotiable(!negotiable);
        }}
        className="bg-white font-semibold w-full text-lg text-darkGreen cursor-pointer flex justify-between items-center   border-lightGreen rounded-xl p-3 py-4 drop-shadow-xl"
      >
        <p>Negotiable</p>
        {/* switch input */}
        <div className="relative border-[3px] p-0  outline-2 border-darkGreen w-14 h-[25px] rounded-full cursor-pointer overflow-hidden">
          {/* bg checked color */}
          <div
            className={`absolute duration-200  h-full w-full rounded-full bg-lightGreen  ${
              !negotiable && "-left-[100%]"
            }`}
          ></div>
          {/* circle */}
          <div
            className={`bg-lightOrange right-0 absolute  duration-200  top-0 h-full w-5 rounded-full  ${
              !negotiable && "left-0 duration-200"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Negotiable;

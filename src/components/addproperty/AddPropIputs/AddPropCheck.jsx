import React from "react";

const AddPropCheck = ({ title, value, setValue }) => {
  return (
    <div className="w-full  ">
      <h3 className=" text-lg md:text-2xl text-darkGreen font-semibold mb-2">
        {title}
      </h3>
      <div
        onClick={() => {
          setValue(!value);
        }}
        className="bg-white font-semibold w-full text-lg text-darkGreen cursor-pointer flex justify-between items-center   border-lightGreen rounded-xl p-3 py-4 drop-shadow-xl"
      >
        <p>{title}</p>
        {/* switch input */}
        <div className="relative border-[3px] p-0  outline-2 border-darkGreen w-14 h-[25px] rounded-full cursor-pointer overflow-hidden">
          {/* bg checked color */}
          <div
            className={`absolute duration-200  h-full w-full rounded-full bg-lightGreen  ${
              !value && "-left-[100%]"
            }`}
          ></div>
          {/* circle */}
          <div
            className={`bg-lightOrange right-0 absolute  duration-200  top-0 h-full w-5 rounded-full  ${
              !value && "left-0 duration-200"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AddPropCheck;

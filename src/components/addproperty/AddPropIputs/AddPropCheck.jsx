import React from "react";

const AddPropCheck = ({ title, value, setValue, placeholder }) => {
  return (
    <div className="w-full  ">
      <h3 className=" text-lg md:text-2xl text-darkGreen font-semibold mb-2">
        {title}
      </h3>
      <div
        onClick={() => {
          setValue(!value);
        }}
        className="bg-white font-semibold w-full text-lg focus:outline-lightGreen text-darkGreen cursor-pointer flex justify-between items-center    rounded-xl p-3 py-4 border-[3px]"
      >
        <p>{title || placeholder}</p>
        {/* switch input */}
        <div
          className={`relative border-[3px] p-0 flex justify-start  border-darkGreen w-14 h-[25px] rounded-full cursor-pointer overflow-hidden ${
            value && "bg-darkGreen flex justify-end  "
          }`}
        >
          {/* bg checked color */}
          {/* <div
            className={`absolute duration-200  h-full w-full rounded-full bg-darkGreen  ${
              !value && "-left-[100%]"
            }`}
          ></div> */}
          {/* circle */}
          <div
            className={`bg-lightOrange  animate-appearance-in   duration-200  -top- h-full w-5 rounded-full  `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AddPropCheck;

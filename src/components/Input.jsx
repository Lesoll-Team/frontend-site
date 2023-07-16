import React, { useState } from "react";

const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const { id, errorMessage, handleChange, lable, ...others } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="w-full mt-3">
      <label className="font-medium block mb-1 text-darkGreen tracking-widest text-md ">
        {lable}
      </label>
      <input
        required
        className="block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
        {...others}
        onChange={handleChange}
        onBlur={handleFocus}
        // focused={focused.toSring()}
      />
      <span className="text-red-700">{errorMessage}</span>
    </div>
  );
};

export default Input;

import React from "react";

const Input = (props) => {
  return (
    <div className="w-full mt-3">
      <input
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className="block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2 "
      />
    </div>
  );
};

export default Input;

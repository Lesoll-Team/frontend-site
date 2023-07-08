import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        required
        className="block placeholder:text-gray-500 focus:outline-none mb-5 focus:border-lightGreen  w-100% border-2 rounded-md px-4 py-2"
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;

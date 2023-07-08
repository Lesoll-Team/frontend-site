import React from "react";

const Button = (props) => {
  return (
    <button className="rounded-3xl bg-lightGreen text-white  py-2  font-semibold w-100% text-2xl duration-300 hover:bg-lightGreenHover 2xl:py-3 text-3xl">
      {props.text}
    </button>
  );
};

export default Button;

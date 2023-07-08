import React from "react";

const Button = (props) => {
  return (
    <button className="rounded-3xl bg-lightGreen text-white px-3 py-2 font-bold w-100% text-1xl duration-300 hover:bg-lightGreenHover">
      {props.text}
    </button>
  );
};

export default Button;

import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className="rounded-3xl bg-lightOrange text-white mt-5  py-2  font-semibold  duration-300 hover:bg-lightOrangeHover md:active:scale-95"
    >
      {props.text}
    </button>
  );
};

export default Button;

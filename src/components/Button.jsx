import React from "react";

const Button = (props) => {
  return (
    <button className="rounded-3xl bg-lightOrange text-white  py-2  font-semibold  duration-300 hover:bg-lightOrangeHover active:scale-95">
      {props.text}
    </button>
  );
};

export default Button;

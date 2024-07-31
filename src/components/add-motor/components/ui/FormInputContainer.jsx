import React from "react";

const FormInputContainer = ({ children, title }) => {
  return (
    <div className="space-y-2">
      <p className="font-bold">{title}</p>
      {children}
    </div>
  );
};

export default FormInputContainer;

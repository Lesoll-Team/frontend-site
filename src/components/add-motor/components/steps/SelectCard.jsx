import React from "react";

const SelectCard = ({ handleSelect, children, disabled, color }) => {
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={handleSelect}
      className="space-y-6 text-start border-b pb-6  disabled:opacity-70"
    >
      {color ? (
        <div className="flex items-center gap-3">{children}</div>
      ) : (
        children
      )}
    </button>
  );
};

export default SelectCard;

import React from "react";
import { GoSearch } from "react-icons/go";

const ItemSearch = ({ value, setValue, placeholder, disabled }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="flex items-center w-full ">
      <input
        disabled={disabled}
        type="text"
        value={value}
        onChange={handleChange}
        className="w-full px-5 py-3 rounded-md disabled:opacity-50 bg-white md:placeholder:text-lg placeholder:font-medium focus:outline-none focus:border-lightGreen border-2"
        placeholder={placeholder}
      />
      <GoSearch className="-mx-9 text-darkGray text-xl" />
    </div>
  );
};

export default ItemSearch;

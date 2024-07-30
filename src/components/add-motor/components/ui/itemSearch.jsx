import React from "react";
import { GoSearch } from "react-icons/go";

const ItemSearch = ({ value, setValue, placeholder }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="flex items-center w-full ">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-full px-5 py-3 rounded-md bg-white md:placeholder:text-lg placeholder:font-medium focus:outline-none focus:border-lightGreen border-2"
        placeholder={placeholder}
      />
      <GoSearch className="-mx-9 text-darkGray text-xl" />
    </div>
  );
};

export default ItemSearch;

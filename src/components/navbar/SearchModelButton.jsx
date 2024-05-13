import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

export default function SearchModelButton({ setOpen, isOpen }) {
  return (
    <button
      onClick={() => setOpen(!isOpen)}
      className="text-lightGreen text-xl 2xl:text-2xl "
    >
      <AiOutlineSearch />
    </button>
  );
}

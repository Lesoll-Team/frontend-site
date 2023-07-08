import Link from "next/link";
import React from "react";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="bg-gray-200">
      <div className="container mx-auto py-3 items-center  flex justify-between">
        {/* logo */}
        <div className="">logo</div>
        {/* links */}
        <div className="">
          <Link href="/">
            <img src="@/public/icons/home.svg" alt="" /> Home
          </Link>
        </div>
        {/* buttons */}
        <div className="">
          <button></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

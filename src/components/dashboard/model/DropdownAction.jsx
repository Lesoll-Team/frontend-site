import ConfirmModal from "@/Shared/models/ConfirmModal";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const ItemDropdown = ({ label, href, action, id, title, description }) => {
  return (
    <ul>
      {href == null && action !== null ? (
        <li
          onClick={() => action}
          className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <ConfirmModal
            actinFunction={action}
            title={title}
            description={description}
            children={label}
            id={id}
          />
          {/* {label} */}
        </li>
      ) : (
        <Link
          href={href}
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          {label}
        </Link>
      )}
    </ul>
  );
};

const DropdownAction = ({ children, iconIs }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const dropdownIcon = iconIs;

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none  focus:ring-gray-50 "
      >
        {dropdownIcon}
      </button>

      {isDropdownOpen && (
        <div className="z-10 absolute right-0 mt-2 w-max max-h-[160px] overflow-y-auto overflow-hidden bg-white divide-y divide-gray-100 rounded-lg shadow ">
          <ul className="py-2 text-sm text-gray-700 ">
            {React.Children.map(children, (child) =>
              React.cloneElement(child, { onClick: closeDropdown })
            )}
            {/* {children} */}
          </ul>
        </div>
      )}
    </div>
  );
};

export { DropdownAction, ItemDropdown };

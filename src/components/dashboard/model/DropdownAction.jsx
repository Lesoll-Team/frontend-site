import ConfirmModal from "@/Shared/models/ConfirmModal";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const ItemDropdown = ({ label, href, action, id, title, description }) => {
  return (
    <ul >
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

const DropdownAction = ({ children }) => {
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
  const dropdownIcon = (
    <svg
      className="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 4 15"
    >
      <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  );

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        {dropdownIcon}
      </button>

      {isDropdownOpen && (
        <div className="z-10 absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
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

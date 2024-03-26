import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";

const NeedsLink = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        className="relative text-base 2xl:text-xl font-noto"
        onClick={toggleMenu}
      >
        <span className="flex items-center ">
          {language ? "الطلبات" : " Needs"}{" "}
          <IoIosArrowDown
            className={`mt-1 duration-100 ${showMenu && "rotate-180 duration-100"}`}
          />
        </span>
      </button>
      {showMenu && (
        <div className="absolute right-0-0 top-9 bg-white py-3 drop-shadow-lg rounded min-w-[180px] flex flex-col gap-2">
          <Link
            onClick={closeMenu}
            className="break-keep min-w-fit px-2  hover:text-lightGreen duration-150 font-noto"
            href={"/add-need"}
          >
            {language ? " أطلب عقارك" : "Add Need"}
          </Link>
          <hr />
          <Link
            onClick={closeMenu}
            className="break-keep min-w-fit px-2  hover:text-lightGreen duration-150 font-noto"
            href={"/needs"}
          >
            {language ? " رؤية جميع الطلبات" : " Needs"}
          </Link>
        </div>
      )}
    </div>
  );
};
export default NeedsLink;

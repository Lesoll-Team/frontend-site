import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";

const CurrenciesDropDown = ({ className, setValue, watch }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const currencies = useSelector((state) => state.getCurrencies.data);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
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
    <div className={cn("relative", className)} ref={menuRef}>
      <button
        onClick={toggleMenu}
        type="button"
        className={`h-full w-full px-3 sm:px-4 flex items-center gap-1 ${language ? "border-r" : "border-l"}`}
      >
        <MdKeyboardArrowDown />
        <span className="lg-text"> {watch("currencies.ISO_code")}</span>
      </button>
      {showMenu && (
        <div
          className={`absolute fade-in border z-50 flex flex-col items-center top-12 w-[200px] bg-white duration-200 drop-shadow-xl overflow-y-auto rounded-md max-h-[300px] ${
            language ? "left-0" : "right-0"
          }`}
        >
          {currencies?.getCurrencies.map((item) => {
            return (
              <button
                key={item.ISO_code}
                onClick={() => {
                  setShowMenu(false);
                  setValue("currencies", item);
                }}
                type="button"
                className="dropdown-option  w-full text-start  font-semibold text-darkGray py-2 px-2 md:px-2 cursor-pointer active:ring-none duration-200 focus:outline-none focus:bg-slate-100 hover:bg-slate-100"
              >
                {language ? item.title.ar : item.title.en}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default CurrenciesDropDown;

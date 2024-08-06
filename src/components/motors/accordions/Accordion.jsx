import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

const Accordion = ({ title, children, isBrandAccordion }) => {
  const [isOpen, setIsOpen] = useState(isBrandAccordion || false);
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div
      dir={language && "rtl"}
      className="border  border-gray-300 rounded-md overflow-hidden"
    >
      <button
        className={`${isBrandAccordion && "cursor-default"} w-full flex justify-between items-center p-3 text-left font-semibold`}
        onClick={() => !isBrandAccordion && setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="accordion-content"
      >
        {title}
        {isOpen ? (
          <IoCloseSharp
            className={`${isBrandAccordion && "hidden"} text-[#666666]`}
          />
        ) : (
          <IoIosArrowDown
            className={`${isBrandAccordion && "hidden"} text-[#666666]`}
          />
        )}
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "h-fit py-4" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;

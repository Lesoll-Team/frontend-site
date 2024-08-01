import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border  border-gray-300 rounded-md overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-3 text-left font-semibold"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="accordion-content"
      >
        {title}
        {isOpen ? (
          <IoCloseSharp className="text-[#666666]" />
        ) : (
          <IoIosArrowDown className="text-[#666666]" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-[300px] py-4" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;

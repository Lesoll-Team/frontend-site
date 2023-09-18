import { Button, Input } from "@nextui-org/react";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import { RxDash } from "react-icons/rx";
const DropdownRooms = ({ classNames, name,countBathrooms,countBedrooms, setCountBedrooms,setCountBathroom }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dropdownButtonRef = useRef(null);
  const dropdownContentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target) &&
        dropdownContentRef.current &&
        !dropdownContentRef.current.contains(event.target)
      ) {
        setMenuIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleMenuOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <div  className={`${classNames} relative w-full  `}>
      <div
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        className="w-full font-semibold text-darkGreen text-md flex items-center justify-between
          focus:outline-lightGreen bg-white border-[3px]   rounded-xl p-2 cursor-pointer  whitespace-nowrap"
      >
        {name}
        <AiFillCaretDown
          className={`text-darkGreen duration-150 ${
            menuIsOpen && "rotate-180"
          }`}
        />
      </div>
      {menuIsOpen && (
        <div
        ref={dropdownContentRef}

          className={`absolute right-0 w-[200px] lg:w-[300px] animate-appearance-in z-10  mt-1
           bg-white duration-200 drop-shadow-xl border overflow-y-auto rounded-xl max-h-[550px]`}
        >
          <div className="w-full  p-4 flex flex-col items-center">
            <div className="flex  gap-2 items-center pb-2">
              <span className="font-bold">Bedrooms</span>
              <Button
                onClick={() =>
                  setCountBedrooms(
                    countBedrooms >= 7 ? (countBedrooms = 0) : countBedrooms + 1
                  )
                }
                isIconOnly
                className="bg-lightOrange text-white"
                aria-label="Plath"
              >
                {/* <HeartIcon /> */}
                <MdAdd className="font-bold text-2xl" />
              </Button>
              <b>{countBedrooms}</b>
              <Button
                onClick={() =>
                  setCountBedrooms(
                    countBedrooms <= 1 ? (countBedrooms = 0) : countBedrooms - 1
                  )
                }
                isIconOnly
                className="bg-lightOrange text-white"
                aria-label="Negative"
              >
                {/* <HeartIcon /> */}
                <RxDash className="font-bold text-2xl" />
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="font-bold">Bathroom</span>

              <Button
                onClick={() =>
                  setCountBathroom(
                    countBathrooms >= 7
                      ? (countBathrooms = 0)
                      : countBathrooms + 1
                  )
                }
                isIconOnly
                color="warning"
                className="text-lightOrange"
                variant="faded"
                aria-label="Plath"
              >
                {/* <CameraIcon /> */}
                <MdAdd className="font-bold text-2xl" />
              </Button>
              <b>{countBathrooms}</b>

              <Button
                onClick={() =>
                  setCountBathroom(
                    countBathrooms <= 1
                      ? (countBathrooms = 0)
                      : countBathrooms - 1
                  )
                }
                isIconOnly
                color="warning"
                variant="faded"
                className="text-lightOrange"
                aria-label="Negative"
              >
                {/* <CameraIcon /> */}
                <RxDash className="font-bold text-2xl" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(DropdownRooms);

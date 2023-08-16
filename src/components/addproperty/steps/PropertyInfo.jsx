import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const PropertyInfo = () => {
  const [finishingOptions, setFinishingOptions] = useState("");
  const [finishingOptionsMenu, setFinishingOptionsMenu] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [registerd, setRegisterd] = useState(false);

  const handleFinishingOptions = () => {
    setFinishingOptionsMenu(!finishingOptionsMenu);
  };
  const finishingOptionsButtonRef = useRef(null); // Ref for the finishing options button

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        finishingOptionsButtonRef.current &&
        !finishingOptionsButtonRef.current.contains(event.target)
      ) {
        setFinishingOptionsMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className=" w-full mx-auto px-8 md:px-8 my-8 flex flex-col  gap-3  md:gap-5 md:flex-row justify-between items-start  ">
      <div className=" w-full md:w-[48%] space-y-5">
        <div className="">
          <h3 className="text-xl text-darkGreen font-bold mb-3">Area</h3>
          <input
            className=" w-full text-lg font-medium text-darkGreen focus:outline-none placeholder:text-darkGreen placeholder:opacity-60   border-lightGreen rounded-xl p-3 py-4 drop-shadow-xl"
            placeholder="Area"
            type="number"
          />
        </div>
        <div className="">
          <h3 className="text-xl text-darkGreen font-bold mb-3">
            Number of rooms
          </h3>
          <input
            className=" w-full text-lg font-medium text-darkGreen focus:outline-none placeholder:text-darkGreen placeholder:opacity-60   -lightGreen rounded-xl p-3 py-4 drop-shadow-xl"
            placeholder="Number of rooms"
            type="number"
          />
        </div>
        <div className="">
          <h3 className="text-xl text-darkGreen font-bold mb-3">
            Number of bathrooms
          </h3>
          <input
            className=" w-full text-lg font-medium text-darkGreen focus:outline-none placeholder:text-darkGreen placeholder:opacity-60   border-lightGreen rounded-xl p-3 py-4 drop-shadow-xl"
            placeholder="Number of bathrooms"
            type="number"
          />
        </div>
      </div>
      <div className="  w-full md:w-[48%] space-y-5">
        <div className="relative ">
          <h3 className="text-xl text-darkGreen font-bold mb-3">
            Finishin Options
          </h3>
          <button
            ref={finishingOptionsButtonRef}
            onClick={handleFinishingOptions}
            className="w-full font-semibold text-darkGreen text-lg flex items-center justify-between gap-6 focus:outline-none bg-white  border-lightGreen rounded-xl p-4 drop-shadow-xl  whitespace-nowrap"
          >
            {finishingOptions || "Finishing Options"}
            <AiFillCaretDown className="text-darkGreen" />
          </button>
          {finishingOptionsMenu && (
            <div
              className={`absolute z-10 w-full  mt-1 bg-white duration-200 drop-shadow-2xl border rounded-xl `}
            >
              <p
                onClick={() => setFinishingOptions("Residential")}
                className="text-lg font-semibold text-darkGreen py-2 px-3  duration-200 bg-slate-100 "
              >
                Residential
              </p>
              <p
                onClick={() => setFinishingOptions("Commercial")}
                className="text-lg font-semibold text-darkGreen py-2 px-3 duration-200 hover:bg-slate-100"
              >
                Commercial
              </p>
              <p
                onClick={() => setFinishingOptions("Land")}
                className="text-lg font-semibold text-darkGreen py-2 px-3 duration-200 hover:bg-slate-100"
              >
                Land
              </p>
            </div>
          )}
        </div>

        <div className="">
          <h3 className="text-xl text-darkGreen font-bold mb-3">Furnished</h3>
          <div
            onClick={() => {
              setFurnished(!furnished);
            }}
            className="bg-white font-semibold w-full text-lg text-darkGreen cursor-pointer flex justify-between items-center  border-lightGreen rounded-xl p-3 py-4 drop-shadow-xl"
          >
            <p>Furnished</p>
            {/* switch input */}
            <div className="relative border-[3px] p-0  outline-2 border-darkGreen w-14 h-[25px] rounded-full cursor-pointer overflow-hidden">
              {/* bg checked color */}
              <div
                className={`absolute duration-200  h-full w-full rounded-full bg-lightGreen  ${
                  !furnished && "-left-[100%]"
                }`}
              ></div>
              {/* circle */}
              <div
                className={`bg-lightOrange right-0 absolute  duration-200  top-0 h-full w-5 rounded-full  ${
                  !furnished && "left-0 duration-200"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl text-darkGreen font-bold mb-3">Registerd</h3>
          <div
            onClick={() => {
              setRegisterd(!registerd);
            }}
            className="bg-white font-semibold w-full text-lg text-darkGreen cursor-pointer flex justify-between items-center  border-lightGreen rounded-xl p-3 py-4 drop-shadow-xl"
          >
            <p>Registerd</p>
            {/* switch input */}
            <div className="relative border-[3px] p-0  outline-2 border-darkGreen w-14 h-[25px] rounded-full cursor-pointer overflow-hidden">
              {/* bg checked color */}
              <div
                className={`absolute  h-full w-full rounded-full bg-lightGreen  ${
                  !registerd && "-left-[100%]"
                }`}
              ></div>
              {/* circle */}
              <div
                className={`bg-lightOrange absolute right-0 duration-200  top-0 h-full w-5 rounded-full  ${
                  !registerd && " left-0 duration-200"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;

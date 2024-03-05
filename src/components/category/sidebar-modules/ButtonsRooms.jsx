import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ButtonsRooms = ({
  numBedrooms,
  numBathrooms,
  setNumBedrooms,
  setNumBathrooms,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();
  const [bedClickCount, setBedClickCount] = useState(0);
  const [bathClickCount, setBathClickCount] = useState(0);

  const handleButtonClick = (i, name) => {
    switch (name) {
      case "bed":
        setNumBedrooms(numBedrooms === i + 1 ? null : i + 1);
        setBedClickCount((prevCount) => prevCount + 1);
        if (bedClickCount % 2 === 0) {
          dispatch(updateAllStates({ numBedrooms: i + 1 }));
        } else {
          dispatch(updateAllStates({ numBedrooms: null }));
        }
        break;

      case "bath":
        setNumBathrooms(numBathrooms === i + 1 ? null : i + 1);
        setBathClickCount((prevCount) => prevCount + 1);
        if (bathClickCount % 2 === 0) {
          dispatch(updateAllStates({ numBathrooms: i + 1 }));
        } else {
          dispatch(updateAllStates({ numBathrooms: null }));
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex bg-[#F8F8F8] gap-y-[10px] flex-col p-1 gap-x-[1.5vw]">
      <div className="flex w-full flex-col   gap-x-2">
        <span className="font-bold text-gray2">
          {language ? "عدد الغرف" : "Bedrooms"}
        </span>

        <div className="p-1 flex gap-x-[14px] ">
          {Array.from(Array(7), (_, i) => (
            <button
              className={` md:w-[40px] md:h-[40px] h-[30px] w-[30px] bg-white  rounded-[1vw]  
                             transition-colors duration-200 ease-in-out md:hover:bg-gray-200 md:active:bg-gray-300
                             ${
                               numBedrooms == i + 1
                                 ? "border-1  border-lightGreen text-lightGreen "
                                 : "border-1 border-gray-400 text-gray-400"
                             }`}
              key={i}
              onClick={() => handleButtonClick(i, "bed")}
            >
              {i == 6 ? "7+" : `${i + 1}`}
            </button>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col  gap-x-2">
        <span className="font-bold text-gray2">
          {language ? "عدد الحمامات" : "Bathrooms"}
        </span>

        <div className="p-1 flex gap-x-[14px] ">
          {Array.from(Array(7), (_, i) => (
            <button
              className={` md:w-[40px] md:h-[40px] h-[30px] w-[30px] bg-white  rounded-[1vw]  
                             transition-colors duration-200 ease-in-out md:hover:bg-gray-200 md:active:bg-gray-300
                             ${
                               numBathrooms == i + 1
                                 ? "border-1  border-lightGreen text-lightGreen "
                                 : "border-1 border-gray-400 text-gray-400"
                             }`}
              key={i}
              onClick={() => handleButtonClick(i, "bath")}
            >
              {i == 6 ? "7+" : `${i + 1}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonsRooms;

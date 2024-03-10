import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ButtonsRooms = () =>
  // { setNumBedrooms, setNumBathrooms }
  {
    const language = useSelector((state) => state.GlobalState.languageIs);
    const { numBedrooms, numBathrooms } = useSelector(
      (state) => state.Category
    );
    const dispatch = useDispatch();
    const handleButtonClick = (i, name) => {
      switch (name) {
        case "bed":
          // setNumBedrooms(numBedrooms === i + 1 ? null : i + 1);
          dispatch(
            updateAllStates({
              numBedrooms: numBedrooms === i + 1 ? null : i + 1,
            })
          );
          break;
        case "bath":
          // setNumBathrooms(numBathrooms === i + 1 ? null : i + 1);
          dispatch(
            updateAllStates({
              numBathrooms: numBathrooms === i + 1 ? null : i + 1,
            })
          );
          break;

        default:
          break;
      }
    };

    return (
      <div className="flex bg-[#F8F8F8] gap-y-[2vh] flex-col p-[1.5vw] ">
        <div className="flex w-full flex-col gap-y-[1.5vh]">
          <span className="font-bold text-gray2">
            {language ? "عدد الغرف" : "Bedrooms"}
          </span>

          <div className=" flex gap-x-[0.78vw] ">
            {Array.from(Array(7), (_, i) => (
              <button
                className={` md:w-[40px] md:h-[40px] h-[30px] w-[30px] bg-white  rounded-[6px]  
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
        <div className="flex w-full flex-col gap-y-[1.5vh]">
          <span className="font-bold text-gray2">
            {language ? "عدد الحمامات" : "Bathrooms"}
          </span>

          <div className=" flex gap-x-[0.78vw] ">
            {Array.from(Array(7), (_, i) => (
              <button
                className={` md:w-[40px] md:h-[40px] h-[30px] w-[30px] bg-white  rounded-[6px]  
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

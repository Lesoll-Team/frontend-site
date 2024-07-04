import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import { useTranslation } from "next-i18next";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

const ButtonsRooms = () => {
  const { t } = useTranslation("common");

  const { numBedrooms, numBathrooms } = useSelector((state) => state.Category);
  const dispatch = useDispatch();
  const handleButtonClick = (i, name) => {
    switch (name) {
      case "bed":
        dispatch(
          updateAllStates({
            numBedrooms: numBedrooms === i + 1 ? null : i + 1,
          }),
        );
        break;
      case "bath":
        dispatch(
          updateAllStates({
            numBathrooms: numBathrooms === i + 1 ? null : i + 1,
          }),
        );
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex bg-[#F8F8F8] gap-y-[2vh] flex-col p-[1.5vw] ">
      <div className="flex w-full flex-col gap-y-[1.5vh]">
        <span className="font-bold lg-text text-gray2">
          {t("Number_of_Rooms")}
        </span>

        <div className=" flex md:gap-x-[1vw]  gap-x-[1.5vw] sm-text">
          {Array.from(Array(7), (_, i) => (
            <button
              className={` md:w-[40px] md:h-[40px] h-[30px] w-[30px] bg-white  rounded-[6px]
                             transition-colors duration-200 ease-in-out md:hover:bg-gray-200 md:active:bg-gray-300
                             ${
                               numBedrooms == i + 1
                                 ? "border-1  border-lightGreen text-lightGreen "
                                 : "border-1 border-[#CCCCCC] text-gray2"
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
        <span className="font-bold lg-text text-gray2">
          {t("Number_of_Bathrooms")}
        </span>

        <div className=" flex md:gap-x-[1vw]  gap-x-[1.5vw] sm-text">
          {Array.from(Array(7), (_, i) => (
            <button
              className={` md:w-[40px] md:h-[40px] h-[30px] w-[30px] bg-white  rounded-[6px]
                             transition-colors duration-200 ease-in-out md:hover:bg-gray-200 md:active:bg-gray-300
                             ${
                               numBathrooms == i + 1
                                 ? "border-1  border-lightGreen text-lightGreen "
                                 : "border-1 border-[#CCCCCC] text-gray2"
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

export default memo(ButtonsRooms);

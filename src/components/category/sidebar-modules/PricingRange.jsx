import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PricingRange = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { priceFrom, priceTo } = useSelector((state) => state.Category);
  const dispatch = useDispatch();
  const handleChangePriceFrom = (e) => {
    const value = parseInt(e.target.value);

    dispatch(
      updateAllStates({
        priceFrom: value,
      })
    );
  };

  const handleChangePriceTo = (e) => {
    const value = parseInt(e.target.value);
    dispatch(
      updateAllStates({
        priceTo: value,
      })
    );
  };
  return (
    <div className="bg-[#F8F8F8] flex flex-col gap-y-[1.5vh] p-[1.5vw]">
      <div className="flex lg-text font-bold text-gray2 gap-x-2">
        <span>{language ? "السعر" : "Price"}</span>

        <span className="">{language ? "(جنيه)" : "(EGY)"}</span>
      </div>
      <div className="flex sm-text justify-between md:gap-x-[1vw]  gap-x-[1.5vw]">
        <input
          type="number"
          className="indent-3 h-[40px] md:h-[3.313rem] w-6/12  border-1 border-[#CCCCCC]  md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
          onChange={handleChangePriceFrom}
          placeholder={language ? "اقل سعر" : "min price"}
          value={priceFrom || ""}
        />

        <input
          type="number"
          className="indent-3 h-[40px] md:h-[3.313rem] w-6/12  border-1 border-[#CCCCCC]  md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
          onChange={handleChangePriceTo}
          placeholder={language ? "اعلى سعر" : "max price"}
          value={priceTo || ""}
        />
      </div>
    </div>
  );
};

export default PricingRange;

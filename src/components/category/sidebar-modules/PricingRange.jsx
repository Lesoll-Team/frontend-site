import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PricingRange = () =>
  // { setPriceTo, priceTo, setPriceFrom, priceFrom }
  {
    const language = useSelector((state) => state.GlobalState.languageIs);
    const { priceFrom, priceTo } = useSelector((state) => state.Category);
    const dispatch = useDispatch();
    const handleChangePriceFrom = (e) => {
      // setSearchKeyword(e.target.value);
      // setPriceFrom(e.target.value);
      dispatch(
        updateAllStates({
          priceFrom: e.target.value,
        })
      );
    };

    const handleChangePriceTo = (e) => {
      // setSearchKeyword(e.target.value);
      // setPriceTo(e.target.value);
      dispatch(
        updateAllStates({
          priceTo: e.target.value,
        })
      );
    };
    return (
      <div className="bg-[#F8F8F8] gap-y-[10px] pt-[10px] pb-[10px]">
        <div className="flex font-bold text-gray2 gap-x-2">
          <span>{language ? "السعر" : "Price"}</span>

          <span className="">{language ? "(جنيه)" : "(EGY)"}</span>
        </div>
        <div className="flex justify-between gap-x-[1.5vw]">
          <input
            type="number"
            className="indent-2 h-[40px] md:h-[3.313rem] w-6/12  border-1 border-gray1 md:px-3 md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
            onChange={handleChangePriceFrom}
            placeholder={language ? "اقل سعر" : "min price"}
            value={priceFrom || ""}
          />

          <input
            type="number"
            className="indent-2 h-[40px] md:h-[3.313rem] w-6/12  border-1 border-gray1 md:px-3 md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
            onChange={handleChangePriceTo}
            placeholder={language ? "اعلى سعر" : "max price"}
            value={priceTo || ""}
          />
        </div>
      </div>
    );
  };

export default PricingRange;
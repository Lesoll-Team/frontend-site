import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const OfferButtons = ({ setSaleOptionKey, saleOptionKey }) => {
  const dispatch = useDispatch();

  const language = useSelector((state) => state.GlobalState.languageIs);
  const handleOfferClick = (name) => {
    dispatch(
      updateAllStates({
        saleOption: name,
      })
    );
    switch (name) {
      case "sale":
        setSaleOptionKey("sale");
        break;
      case "rent":
        setSaleOptionKey("rent");
        break;
      case "investment":
        setSaleOptionKey("investment");
        break;
    }
  };

  //   const handleStateChange = (e) => {
  //     setSearchKeyword(e.target.value);
  //     dispatch(
  //       updateAllStates({
  //         searchKeyword: e.target.value,
  //       })
  //     );
  //   };
  return (
    <div className="flex md:hidden w-full flex-col p-[10px] bg-[#F8F8F8] gap-y-[10px] gap-x-2">
      <span className="font-bold text-gray2">
        {language ? "نوع الإعلان" : "Add Property"}
      </span>
      <div className="gap-x-[10px]  flex">
        <button
          onClick={() => handleOfferClick("sale")}
          className={`py-2 px-5 bg-white ${
            saleOptionKey == "sale"
              ? "border-1 border-lightGreen text-lightGreen "
              : "border-1 border-gray1"
          }  rounded-[6px] p-[10px] `}
        >
          {language ? "للبيع" : "For Sale"}
        </button>
        <button
          onClick={() => handleOfferClick("rent")}
          className={`py-2 px-5 bg-white ${
            saleOptionKey == "rent"
              ? "border-1 border-lightGreen text-lightGreen  "
              : "border-1 border-gray1"
          }  rounded-[6px] p-[10px] `}
        >
          {language ? "للإيجار" : "For Rent"}
        </button>
        <button
          onClick={() => handleOfferClick("investment")}
          className={`py-2 px-5 bg-white ${
            saleOptionKey == "investment"
              ? "border-1 border-lightGreen text-lightGreen  "
              : "border-1 border-gray1"
          }  rounded-[6px] p-[10px] `}
        >
          {language ? "للإستثمار" : "For Investment"}
        </button>
      </div>
    </div>
  );
};

export default OfferButtons;

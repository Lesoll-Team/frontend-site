import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import { useTranslation } from "next-i18next";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

const OfferButtons = () => {
  const dispatch = useDispatch();
  const { saleOption } = useSelector((state) => state.Category);
  const { t } = useTranslation("common");

  const handleOfferClick = (name) => {
    dispatch(
      updateAllStates({
        saleOption: name,
      }),
    );
  };

  return (
    <div className="flex md:hidden w-full flex-col p-[1.5vw] bg-[#F8F8F8] gap-y-[1.5vh] gap-x-2">
      <span className="font-bold lg-text text-gray2">{t("Add_Property")}</span>
      <div className=" sm-text flex md:gap-x-[1vw]  gap-x-[1.5vw]">
        <button
          onClick={() => handleOfferClick("sale")}
          className={`py-2 px-5 bg-white ${
            saleOption == "sale"
              ? "border-1 border-lightGreen text-lightGreen "
              : "border-1 border-[#CCCCCC]"
          }  rounded-[6px] p-[10px] `}
        >
          {t("For_Sale")}
        </button>
        <button
          onClick={() => handleOfferClick("rent")}
          className={`py-2 px-5 bg-white ${
            saleOption == "rent"
              ? "border-1 border-lightGreen text-lightGreen  "
              : "border-1 border-[#CCCCCC]"
          }  rounded-[6px] p-[10px] `}
        >
          {t("For_Rent")}
        </button>
        <button
          onClick={() => handleOfferClick("investment")}
          className={`py-2 px-5 bg-white ${
            saleOption == "investment"
              ? "border-1 border-lightGreen text-lightGreen  "
              : "border-1 border-[#CCCCCC]"
          }  rounded-[6px] p-[10px] `}
        >
          {t("For_Investment")}
        </button>
      </div>
    </div>
  );
};

export default memo(OfferButtons);

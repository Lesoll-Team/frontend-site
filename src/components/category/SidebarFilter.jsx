import React, { memo } from "react";
import { IoClose } from "react-icons/io5";
import SearchKeywords from "./sidebar-modules/SearchKeywords";
import OfferButtons from "./sidebar-modules/OfferButtons";
import PropertiesTypes from "./sidebar-modules/PropertiesTypes";
import PricingRange from "./sidebar-modules/PricingRange";
import ButtonsRooms from "./sidebar-modules/ButtonsRooms";
import AreaRange from "./sidebar-modules/AreaRange";
import FinishingList from "./sidebar-modules/FinishingList";
import PaymentType from "./sidebar-modules/PaymentType";
import FinancingButtons from "./sidebar-modules/FinancingButtons";
import ButtonSearchAction from "./shared/ButtonSearchAction";
import { useDispatch } from "react-redux";
import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";

const SidebarFilter = () => {
  const language = getLangBoolean();
  const { t } = useTranslation("common");

  const dispatch = useDispatch();
  const openSideFilter = () => {
    dispatch(
      updateAllStates({
        openFilter: false,
      }),
    );
  };
  return (
    <div dir="ltr" className="w-full  h-screen flex">
      <div
        dir={language ? "rtl" : "ltr"}
        className={` bg-white shadow-lg overflow-y-auto shadow-gray-600 z-[1] h-screen  md:w-[37.7vw] w-full
         p-[2vw] pb-[100px]  flex flex-col md:gap-y-[3vh] gap-y-[20px]relative `}
      >
        {/*search text and button close*/}
        <div className=" w-full flex justify-between pb-5 items-center">
          <h3>{t("More_Filter")}</h3>
          <IoClose
            onClick={openSideFilter}
            className="text-[20px] cursor-pointer"
          />
        </div>
        {/*search by keywords  */}
        <SearchKeywords />
        {/*offer and property type  */}
        <OfferButtons />
        <PropertiesTypes />
        {/*pricing from and to limit  */}
        <PricingRange />
        {/*number bedrooms and bathrooms */}
        <ButtonsRooms />
        {/* area range */}
        <AreaRange />
        <FinishingList />
        {/* area from & to */}
        <PaymentType />
        {/* buttons Property Financing */}
        <FinancingButtons />
        {/* submit button */}
        <ButtonSearchAction />
      </div>

      <div
        onClick={openSideFilter}
        className=" h-screen absolute w-full bg-[#323232] z-[0] opacity-30 "
      />
    </div>
  );
};

export default memo(SidebarFilter);

/* <div className="  py-[10px]  flex flex-col gap-y-5 md:hidden  ">
          <span className="flex lg-text font-bold text-gray2 ">          {languageIs ? "نوع الوحدة" : "unit type"}
          </span>
          <UnitTypesSmallScreen
          // unitTypesItems={result?.UnitTypes}
          />
        </div> */

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

const SidebarFilter = ({ languageIs }) => {
  const dispatch = useDispatch();
  // const openFilter = useSelector((state) => state.Category.openFilter);
  const openSideFilter = () => {
    dispatch(
      updateAllStates({
        openFilter: false,
      })
    );
  };
  return (
    <div dir="ltr" className="w-full  h-screen flex   ">
      {/*body content in sidebar */}
      <div
        dir={languageIs ? "rtl" : "ltr"}
        className={` bg-white shadow-lg overflow-y-auto shadow-gray-600 z-[1] h-screen  md:w-[37.7vw] w-full  
         p-[2vw] flex flex-col md:gap-y-[3vh] gap-y-[20px]`}
      >
        {/*search text and button close*/}
        <div className=" w-full flex justify-between items-center">
          <h3 className="">
            {languageIs ? "خيارات أكثر" : "More Option"}
          </h3>
          <IoClose
            onClick={openSideFilter}
            className="text-[20px] cursor-pointer"
          />
        </div>
        {/* <div className="md:container py-[48px] md:mx-auto mx-[20px] md:hidden block ">
          <UnitTypeIcons
            category={categoryTypeKey}
            items={result?.aggregation_links}
            setUnitTypesKey={setUnitTypesKey}
            unitTypesKey={unitTypesKey}
            setLocationGovernorate={setLocationGovernorate}
            setLocationRegion={setLocationRegion}
            setCategoryTypeKey={setCategoryTypeKey}
            setClickOnTap={setClickOnTap}
            clickOnTap={clickOnTap}
            locationGovernorate={locationGovernorate}
            locationRegion={locationRegion}
          />
        </div> */}
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

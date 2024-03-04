import { createNeed } from "@/utils/propertyAPI";
import { useEffect, useState } from "react";
import MainData from "./sections/nainData/MainData";
import { useDispatch, useSelector } from "react-redux";
import Pricing from "./sections/pricing/Pricing";
import NeedDetails from "./sections/details/NeedDetails";
import NeedsLocation from "./sections/location/NeedsLocation";
import {
  postNeed,
  resetData,
  setStep,
} from "@/redux-store/features/needsSlice";
import { useNeedValidation } from "@/Hooks/useNeedValidation";
import NeedDescription from "./sections/description/NeedDescription";
import NeedPosted from "./NeedPosted";
import OfferType from "./steps/OfferType";
import SaleType from "./steps/SaleType";
import RentType from "./steps/RentType";
import { IoIosArrowBack } from "react-icons/io";
import NeedsFeed from "./needFeed/NeedsFeed";
import NeedsForm from "./steps/form/NeedsForm";
import SecondStep from "./steps/SecondStep";

const AddNeed = () => {
  const need = useSelector((state) => state.needs.needsData);

  const step = useSelector((state) => state.needs.step);

  const language = useSelector((state) => state.GlobalState.languageIs);

  const dispatch = useDispatch();
  const { validateNeed } = useNeedValidation();

  const handlePostNeed = (e) => {
    if (
      need.unitType &&
      need.propType &&
      need.rooms &&
      need.bathrooms &&
      need.governrate &&
      need.region &&
      need.price.from &&
      need.price.to &&
      need.area.from &&
      need.area.to &&
      need.description.length < 300
    ) {
      dispatch(postNeed(need));
    } else {
      validateNeed(need);
    }
  };
  const renderStep =
    step === 1 ? (
      <OfferType />
    ) : step === 2 ? (
      <SecondStep />
    ) : (
      step === 3 && <NeedsForm />
    );
  return (
    <div className=" my-10">
      <div className="container mx-auto ">
        {/* <button onClick={() => dispatch(setStep(step + 1))}>+</button> */}
        {renderStep}
        {/* <OfferType /> */}
        {/* <SaleType /> */}
        {/* <RentType /> */}
        {/* <NeedsForm /> */}
        {/* <MainData />
          <Pricing />
          <NeedDetails />
          <NeedsLocation />
          <NeedDescription /> */}
        {/* <button
            className="rounded-xl w-full h-14 bg-lightGreen text-white font-semibold hover:bg-lightGreenHover duration-150 active:scale-95"
            onClick={handlePostNeed}
          >
            {status === "loading"
              ? "loading ..."
              : language
              ? "أضف طلبك"
              : "Add your need"}
          </button> */}
      </div>
    </div>
  );
};
export default AddNeed;

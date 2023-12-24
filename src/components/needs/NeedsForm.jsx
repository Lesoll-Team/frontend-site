import { createNeed } from "@/utils/propertyAPI";
import { useEffect, useState } from "react";
import MainData from "./sections/nainData/MainData";
import { useDispatch, useSelector } from "react-redux";
import Pricing from "./sections/pricing/Pricing";
import NeedDetails from "./sections/details/NeedDetails";
import NeedsLocation from "./sections/location/NeedsLocation";
import { postNeed, resetData } from "@/redux-store/features/needsSlice";
import { useNeedValidation } from "@/Hooks/useNeedValidation";
import NeedDescription from "./sections/description/NeedDescription";
import NeedPosted from "./NeedPosted";

const NeedsForm = () => {
  const need = useSelector((state) => state.needs.needsData);
  const errors = useSelector((state) => state.needs.errors);
  const status = useSelector((state) => state.needs.status);
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

  return (
    <div className="container mx-auto space-y-6 my-10">
      {status === "succeeded" ? (
        <NeedPosted />
      ) : (
        <div className="space-y-5 ">
          <MainData />
          <Pricing />
          <NeedDetails />
          <NeedsLocation />
          <NeedDescription />
          <button
            className="rounded-xl w-full h-14 bg-lightGreen text-white font-semibold hover:bg-lightGreenHover duration-150 active:scale-95"
            onClick={handlePostNeed}
          >
            {status === "loading"
              ? "loading ..."
              : language
              ? "أضف طلبك"
              : "Add your need"}
          </button>
        </div>
      )}
    </div>
  );
};
export default NeedsForm;

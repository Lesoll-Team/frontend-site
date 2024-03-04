import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setBathroomsErr,
  setDescriptionErr,
  setGovernrateErr,
  setMaxAreaErr,
  setMaxPriceErr,
  setMinAreaErr,
  setMinPriceErr,
  setPropTypeErr,
  setRegionErr,
  setRoomsErr,
  setUnitTypeErr,
} from "@/redux-store/features/needsSlice";
function isNumber(input) {
  const value = parseInt(input);
  return (
    !isNaN(value) &&
    parseFloat(Number(value)) === value &&
    !isNaN(parseInt(value, 10))
  );
}
export const useNeedValidation = () => {
  const dispatch = useDispatch();

  const validateNeed = (needData) => {
    // Reset isValid for each validation check

    if (!needData.unitType) {
      dispatch(setUnitTypeErr(true));
    }
    if (!needData.propType) {
      dispatch(setPropTypeErr(true));
    }
    if (!needData.rooms) {
      dispatch(setRoomsErr(true));
    }
    if (!needData.bathrooms) {
      dispatch(setBathroomsErr(true));
    }
    if (!needData.governrate.name) {
      dispatch(setGovernrateErr(true));
    }
    if (!needData.region.name) {
      dispatch(setRegionErr(true));
    }
    if (!needData.price.from) {
      dispatch(setMinPriceErr(true));
    }
    if (!needData.price.to) {
      dispatch(setMaxPriceErr(true));
    }
    if (!needData.area.from) {
      dispatch(setMinAreaErr(true));
    }
    if (!needData.area.to) {
      dispatch(setMaxAreaErr(true));
    }
    if (needData.description.length > 300) {
      dispatch(setDescriptionErr(true));
    }
  };

  return {
    validateNeed,
  };
};

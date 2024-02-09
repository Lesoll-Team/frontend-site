import { getGov } from "@/redux-store/features/location/getGovSlice";
import { getRegion } from "@/redux-store/features/location/getRegionSlice";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
const useGovRegion = ({
  govInput,
  regionInput,

  selectedGov,
  selectedRegion,
  setValue,
  clearErrors,
}) => {
  const dispatch = useDispatch();
  const region = useSelector((state) => state.getRegion.region);
  const gov = useSelector((state) => state.getGov.gov);
  useEffect(() => {
    if (!gov) {
      dispatch(getGov());
    }
    if (!region) {
      dispatch(getRegion());
    }
  }, []);

  // filter region  by government id
  const filteredRegions = useMemo(() => {
    if (region) {
      if (selectedGov.number) {
        return region?.filter(
          (item) => item.governorate_number == selectedGov.number
        );
      } else {
        return region;
      }
    }
  }, [selectedGov._id, region]);

  const searchedRegions = useMemo(() => {
    if (filteredRegions) {
      console.log("filterdRegions", filteredRegions);
      if (typeof regionInput === "string") {
        if (regionInput.trim() !== "") {
          console.log("region input", regionInput);
          return filteredRegions.filter((item) => {
            // Ensure to return the result of the comparison
            return (
              (item.city_name_ar && item.city_name_ar.includes(regionInput)) ||
              (item.city_name_en &&
                item.city_name_en
                  .toLowerCase()
                  .includes(regionInput.toLowerCase()))
            );
          });
        }
      }
    }
    return []; // Return an empty array if filteredRegions is falsy or no input
  }, [filteredRegions, regionInput]);

  const getGovByGovNumber = (govNumber) => {
    return gov.filter((item) => item.number == govNumber);
  };

  console.log(searchedRegions);
  const filteredGov = useMemo(() => {
    if (gov) {
      if (typeof govInput === "string") {
        // Check if govInput is a string
        if (govInput.trim() !== "") {
          // Trim and check if it's not an empty string
          return gov.filter(
            (item) =>
              item.governorate_name_ar.includes(govInput) ||
              item.governorate_name_en
                .toLowerCase()
                .includes(govInput.toLowerCase())
          );
        } else {
          return gov;
        }
      } else {
        return gov; // Return gov if govInput is not a string
      }
    }
  }, [govInput, gov]);

  const selectGov = (gov) => {
    setValue("governrate", gov);
    clearErrors("governrate._id");
  };

  const selectRegion = (region) => {
    // console.log("hi its region", region);
    if (selectGov?.number !== region.governorate_number) {
      setValue("governrate", {});
    }
    // console.log("gov", getGovByGovNumber(region.governorate_number));
    const govByNumber = getGovByGovNumber(region.governorate_number);
    setValue("governrate", govByNumber[0]);

    setValue("region", region);
    clearErrors("region._id");
    clearErrors("governrate._id");
  };
  const clearGov = () => {
    setValue("governrate", {});
    setValue("region", {});
  };
  const clearRegion = () => {
    setValue("region", {});
  };
  return {
    filteredGov,
    filteredRegions,
    selectGov,
    clearRegion,
    clearGov,
    searchedRegions,
    selectRegion,
  };
};
export default useGovRegion;

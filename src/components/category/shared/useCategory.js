import { governorateData } from "@/Shared/search/dropdown/governorateLocation";
import { regionData } from "@/Shared/search/dropdown/regionLocation";

const {
  saleOptionsType,
  propertyType,
  categoryUnitType,
} = require("@/Shared/search/dropdown/dataDropdown");

export const useQueryFilter = ({ context }) => {
  const { roots } = context.params;

  const newSearchKeywords = {};
  const mapGovernorates = new Map();
  const mapRegions = new Map();
  let currentGovernorate = "";
  let currentRegion = "";
  let unitType = "";
  let category = "";
  let saleOption = "";

  Object.entries(context.query).forEach(([key, value]) => {
    if (key !== "roots") {
      newSearchKeywords[key] = value;
    }
  });

  governorateData.forEach((item) => {
    mapGovernorates.set(
      item.governorate_name_en.split(" ").join("_").toLowerCase(),
      {
        name_ar: item.governorate_name_ar.split(" ").join("_"),
        name_en: item.governorate_name_en.split(" ").join("_").toLowerCase(),
      },
    );
  });

  regionData.forEach((item) => {
    mapRegions.set(item.city_name_en.split(" ").join("_").toLowerCase(), {
      name_ar: item.city_name_ar.split(" ").join("_"),
      name_en: item.city_name_en.split(" ").join("_").toLowerCase(),
    });
  });

  roots.forEach((value) => {
    if (mapGovernorates.get(value)) {
      currentGovernorate = value;
    }
    if (mapRegions.get(value)) {
      currentRegion = value;
    }
    if (categoryUnitType.includes(value)) {
      unitType = value;
    }
    if (propertyType.ar.some((item) => item.value === value)) {
      category = value;
    }
    if (saleOptionsType.ar.some((item) => item.value === value)) {
      saleOption = value;
    }
  });

  return {
    newSearchKeywords,
    currentGovernorate,
    currentRegion,
    unitType,
    category,
    saleOption,
  };
};

export const useFilterObject = (objectData) => {
  let objectFiltered = {};
  objectFiltered = Object.fromEntries(
    Object.entries(objectData).filter(
      ([_, value]) => value != null && value !== "" && value !== 0,
    ),
  );
  return objectFiltered;
};

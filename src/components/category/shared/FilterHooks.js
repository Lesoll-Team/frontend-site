import {
  unitTypeCommercial,
  unitTypeLand,
  unitTypeResidential,
} from "@/Shared/search/dropdown/dataDropdown";
import { useCallback } from "react";

export function useGetNameWithValue(categoryTypeKey) {
  const getNameWithValue = useCallback(
    ({ language, type, dataObject }) => {
      if (dataObject !== null) {
        const value = language
          ? dataObject?.ar?.find((data) => data.value === type)?.name
          : dataObject?.en?.find((data) => data.value === type)?.name;

        return value;
      }
    },
    [categoryTypeKey]
  );

  return getNameWithValue;
}
export const useUnitTypesData = (categoryTypeKey) => {
  const unitTypesData = useCallback(() => {
    if (categoryTypeKey) {
      if (
        categoryTypeKey === "residential" ||
        categoryTypeKey === "compounds" ||
        categoryTypeKey === "finance"
      ) {
        return unitTypeResidential;
      } else if (categoryTypeKey === "commercial") {
        return unitTypeCommercial;
      } else if (categoryTypeKey === "lands") {
        return unitTypeLand;
      } else if (categoryTypeKey === "graves") {
        return null;
      }
    }
    return null;
  }, [categoryTypeKey, unitTypeResidential, unitTypeCommercial, unitTypeLand]);

  return unitTypesData;
};

export const useSendFilterSearch = ({ queryInput, filterInput }) => {
  const filteredKeywords = Object.fromEntries(
    Object.entries(queryInput).filter(
      ([_, value]) => value != null && value !== "" && value !== 0
    )
  );

  const filterInputAfter = Object.fromEntries(
    Object.entries(filterInput).filter(
      ([_, value]) => value != null && value !== "" && value !== 0
    )
  );

  const pagesInput3 = Object.keys(filterInputAfter)
    .map((key) => `${filterInputAfter[key]}`)
    .join("/")
    .toLowerCase();

  const queryString = Object.keys(filteredKeywords)
    .map((key) => `${key}=${encodeURIComponent(filteredKeywords[key])}`)
    .join("&");

  const newUrl = `/properties/${
    pagesInput3 ? pagesInput3 + "/" : ""
  }search?${queryString}`;

  return newUrl;
};

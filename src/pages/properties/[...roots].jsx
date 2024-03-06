import {
  categoryUnitType,
  propertyType,
  saleOptionsType,
} from "@/Shared/search/dropdown/dataDropdown";
import { governorateData } from "@/Shared/search/dropdown/governorateLocation";
import { regionData } from "@/Shared/search/dropdown/regionLocation";
import SidebarAndBarFilter from "@/components/category/SidebarAndBarFilter";
import { foundKeyword } from "@/components/category/api";

const SearchPage = ({ page, result }) => {
  return (
    <SidebarAndBarFilter
      // searchKeywords={searchKeywords}
      page={page}
      result={result}
    />
  );
};
export default SearchPage;

export async function getServerSideProps(context) {
  const { roots } = context.params;
  const governorateLocation = governorateData;
  const regionLocation = regionData;
  let mapGovernorates = new Map();
  let maRegions = new Map();
  let currentGovernorate = null;
  let currentRegion = null;
  let unitType = null;
  let category = null;
  let saleOption = null;
  const newSearchKeywords = {};

  Object.entries(context.query).forEach(([key, value]) => {
    if (key !== "roots") {
      newSearchKeywords[key] = value;
    }
  });

  governorateLocation.forEach((item) => {
    mapGovernorates.set(
      item.governorate_name_en.split(" ").join("_").toLowerCase(),
      {
        name_ar: item.governorate_name_ar.split(" ").join("_"),
        name_en: item.governorate_name_en.split(" ").join("_").toLowerCase(),
      }
    );
  });

  regionLocation.forEach((item) => {
    maRegions.set(item.city_name_en.split(" ").join("_").toLowerCase(), {
      name_ar: item.city_name_ar.split(" ").join("_"),
      name_en: item.city_name_en.split(" ").join("_").toLowerCase(),
    });
  });
  roots.forEach((value) => {
    if (mapGovernorates.get(value)) {
      currentGovernorate = value;
    }
    if (maRegions.get(value)) {
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

  const queryKeywords = {
    ...newSearchKeywords,
    governorate: currentGovernorate,
    region: currentRegion,
    unitType,
    category,
    saleOptions: saleOption,
    page: newSearchKeywords.page || 1,
  };

  let response = await foundKeyword(queryKeywords);
  return {
    props: {
      // searchKeywords: {
      //   ...newSearchKeywords,
      // },
      result: response?.data || null,
      page: newSearchKeywords.page || 1,
    },
  };
}
// /**
//  * React functional component SSR for the search page.
//  * @component
//  * @param {Object} props - The props object containing data for the page.
//  * @param {string[]} props.saleOption - The sale option.
//  * @param {Object[]} props.mapGovernorates - The governorate object.
//  * @param {string[]} props.category - The category data type.
//  * @param {Object[]} props.maRegions - The region object.
//  * @param {string[]} props.unitType - The category unit type data.
//  * @param {boolean} props.searchKeywords - A boolean indicating whether "search" is included in roots.
//  * @returns {JSX.Element} - The JSX element representing the search page.
//  */

import {
  categoryUnitType,
  propertyType,
  saleOptionsType,
} from "@/Shared/search/dropdown/dataDropdown";
import { governorateData } from "@/Shared/search/dropdown/governorateLocation";
import { regionData } from "@/Shared/search/dropdown/regionLocation";
import SidebarAndBarFilter from "@/components/category/SidebarAndBarFilter";
import { foundKeyword } from "@/components/category/api";

/**
 * React functional component SSR for the search page.
 * @component
 * @param {Object} props - The props object containing data for the page.
 * @param {string[]} props.saleOption - The sale option.
 * @param {Object[]} props.mapGovernorates - The governorate object.
 * @param {string[]} props.category - The category data type.
 * @param {Object[]} props.maRegions - The region object.
 * @param {string[]} props.unitType - The category unit type data.
 * @param {boolean} props.searchKeywords - A boolean indicating whether "search" is included in roots.
 * @returns {JSX.Element} - The JSX element representing the search page.
 */
const SearchPage = ({
  searchKeywords,
  // currentQueryKeywords,
  mapGovernorates,
  maRegions,
  unitType,
  saleOption,
  category,
  page,
  result,
}) => {
  return (
    <SidebarAndBarFilter
      searchKeywords={searchKeywords}
      governorate={mapGovernorates}
      region={maRegions}
      unitType={unitType}
      category={category}
      saleOptions={saleOption}
      // currentQueryKeywords={currentQueryKeywords}
      page={page}
      result={result}
    />
  );
};
export default SearchPage;

export async function getServerSideProps(context) {
  const { roots } = context.params; // routers pages
  const governorateLocation = governorateData; //governorate object
  const regionLocation = regionData; //region object
  let mapGovernorates = new Map();
  let maRegions = new Map();
  let currentGovernorate = null;
  let currentRegion = null;
  let unitType = null;
  let category = null;
  let saleOption = null;
  const newSearchKeywords = {};

  /* this function returns from context.query search keywords
   * context.query returns object search keyword and roots array
   */
  Object.entries(context.query).forEach(([key, value]) => {
    if (key !== "roots") {
      newSearchKeywords[key] = value;
    }
  });
  /*
  * for (const key in context.query) {
  *   if (key !== "roots") {
  *     // Use square brackets to access property dynamically
  *    newSearchKeywords[key] = context.query[key];
  *   }
  }*/
  //*set governorate key & value to Map from region object
  governorateLocation.forEach((item) => {
    mapGovernorates.set(
      item.governorate_name_en.split(" ").join("_").toLowerCase(), //say if governorate value='Red Sea' => 'red_sea'
      {
        name_ar: item.governorate_name_ar.split(" ").join("_"),
        name_en: item.governorate_name_en.split(" ").join("_").toLowerCase(), //say if region value='Red Sea' => 'red_sea'
      }
    );
  });

  //*set region key & value to Map from region object
  regionLocation.forEach((item) => {
    maRegions.set(item.city_name_en.split(" ").join("_").toLowerCase(), {
      name_ar: item.city_name_ar.split(" ").join("_"),
      name_en: item.city_name_en.split(" ").join("_").toLowerCase(), //say if Sayeda Zeinab => sayeda_zeinab
    });
  });
  //*get category & city & region & sale option & unit type from url routs(roots)
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

  //* this object contain merge roots and keyword
  const queryKeywords = {
    ...newSearchKeywords,
    governorate: currentGovernorate,
    region: currentRegion,
    unitType,
    category,
    saleOptions: saleOption,
    page: newSearchKeywords.page || 1,
  };

  /*
   for (const key in context.query) {

  */
  //* here i call api and pass all keywords as object
  let response = await foundKeyword(queryKeywords);
  return {
    props: {
      unitType,
      saleOption,
      category,
      mapGovernorates: currentGovernorate,
      maRegions: currentRegion,
      searchKeywords: {
        ...newSearchKeywords,
      },
      result: response?.data || null,

      // result: response ? { data: response.data } : null,
      page: newSearchKeywords.page || 1,
      // currentQueryKeywords: {
      //   ...queryKeywords,
      // },
      // result: { data: response.data },
    },
  };
}

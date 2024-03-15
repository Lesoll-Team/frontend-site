// import {
//   categoryUnitType,
//   propertyType,
//   saleOptionsType,
// } from "@/Shared/search/dropdown/dataDropdown";
// import { governorateData } from "@/Shared/search/dropdown/governorateLocation";
// import { regionData } from "@/Shared/search/dropdown/regionLocation";
import FilterLayout from "@/components/category/FilterLayout";
import HeadMetaTags from "@/components/category/shared/HeadMetaTags";
import { foundKeyword } from "@/components/category/shared/api";
import { useFilterObject, useQueryFilter } from "@/components/category/shared/useCategory";
// import Head from "next/head";

const SearchPage = ({ page, result, dataObjectFromURL }) => {
  return (
    <>
      <HeadMetaTags result={result} />
      <FilterLayout page={page} result={result} dataObjectFromURL={dataObjectFromURL} />
    </>
  );
};
export default SearchPage;

export async function getServerSideProps(context) {
  const { newSearchKeywords,
    currentGovernorate,
    currentRegion,
    unitType,
    category,
    saleOption, } = useQueryFilter({ context })

  const queryKeywords = {
    ...newSearchKeywords,
    governorate: currentGovernorate,
    region: currentRegion,
    unitType,
    category,
    saleOptions: saleOption,
    page: newSearchKeywords.page || 1,
  };

  const objectFilter = useFilterObject(queryKeywords)
  const response = await foundKeyword(objectFilter);
  return {
    props: {
      result: response?.data || null,
      page: newSearchKeywords.page || 1,
      dataObjectFromURL: objectFilter,
    },
  };
}

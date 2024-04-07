import FilterLayout from "@/components/category/FilterLayout";
import HeadMetaTags from "@/components/category/shared/HeadMetaTags";
import { foundKeyword } from "@/components/category/shared/api";
import {
  useFilterObject,
  useQueryFilter,
} from "@/components/category/shared/useCategory";

const SearchPage = ({ page, result, dataObjectFromURL, queries }) => {
  return (
    <>
      <HeadMetaTags
        result={result}
        queries={queries}
        dataObjectFromURL={dataObjectFromURL}
      />
      <FilterLayout
        queries={queries}
        page={page}
        result={result}
        dataObjectFromURL={dataObjectFromURL}
      />
    </>
  );
};
export default SearchPage;

export async function getServerSideProps(context) {
  const {
    newSearchKeywords,
    currentGovernorate,
    currentRegion,
    unitType,
    category,
    saleOption,
  } = useQueryFilter({ context });

  const queryKeywords = {
    ...newSearchKeywords,
    governorate: currentGovernorate,
    region: currentRegion,
    unitType,
    category,
    saleOptions: saleOption,
    page: newSearchKeywords.page || 1,
  };

  const objectFilter = useFilterObject(queryKeywords);
  const response = await foundKeyword(objectFilter);
  return {
    props: {
      result: response?.data || null,
      page: newSearchKeywords.page || 1,
      dataObjectFromURL: objectFilter,
      queries: newSearchKeywords,
    },
  };
}

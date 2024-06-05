import FilterLayout from "@/components/category/FilterLayout";
import HeadMetaTags from "@/components/category/shared/HeadMetaTags";
import { foundKeyword } from "@/components/category/shared/api";
import {
  useFilterObject,
  useQueryFilter,
} from "@/components/category/shared/useCategory";

const SearchPage = ({
  page,
  result,
  dataObjectFromURL,
  queries,
  isSmallScreen,
  isMobile,
}) => {
  return (
    <>
      <HeadMetaTags
        result={result}
        queries={queries}
        dataObjectFromURL={dataObjectFromURL}
      />
      <FilterLayout
        isSmallScreen={isSmallScreen}
        isMobile={isMobile}
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
  const { req } = context;
  const userAgent = req.headers["user-agent"];
  const isMobile = /mobile/i.test(userAgent);

  const screenWidth =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const isSmallScreen = parseInt(screenWidth, 10) <= 768; // Adjust the threshold as needed

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
  // const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return {
    props: {
      result: response?.data || { categoryResults: [] },
      page: newSearchKeywords.page || 1,
      dataObjectFromURL: objectFilter,
      queries: newSearchKeywords,
      isSmallScreen,
      isMobile,
    },
  };
}

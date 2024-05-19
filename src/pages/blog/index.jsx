import axiosInstance from "@/Shared/axiosInterceptorInstance";
import BestLinksInHome from "@/components/linksInHome/BestLinksInHome";
import BlogFeed from "@/components/newBlogs/BlogFeed";
import cache from "memory-cache";

const index = ({ keyword, data, bestSearch }) => {
  return (
    <>
      <BlogFeed blogs={data} keyword={keyword} />
      <BestLinksInHome
        PopularSearches={bestSearch?.POPULAR_SEARCHES}
        MostArea={bestSearch?.Most_Area}
        MostGovernorate={bestSearch?.Most_Governorate}
        Others={bestSearch?.Others}
      />
    </>
  );
};
export default index;

export async function getServerSideProps({ query }) {
  const keyword = query;
  let linkInHome = cache.get("linkInHome");
  if (!linkInHome) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/property/linkshome`,
    );
    const linkInHome = await response.json();
    cache.put("linkInHome", linkInHome, 86400000);
  }
  const response = await axiosInstance.get(
    `/admin/blog/allblogs?page=${
      keyword.page || 1
    }&limit=${"5"}&keyword=${keyword.search || ""}&category=${
      keyword.category || ""
    }`,
  );
  const data = response.data;
  return {
    props: {
      keyword: keyword || {},
      data: data || {},
      bestSearch: linkInHome,
    },
  };
}

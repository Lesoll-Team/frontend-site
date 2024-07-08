import axiosInstance from "@/Shared/axiosInterceptorInstance";
import BestLinksInHome from "@/components/linksInHome/BestLinksInHome";
import BlogFeed from "@/components/newBlogs/BlogFeed";

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
  const linksHome = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/linkshome`,
  );

  const response = await axiosInstance.get(
    `/admin/blog/allblogs?page=${
      keyword?.page || 1
    }&limit=${"5"}&keyword=${keyword?.search || ""}&category=${
      keyword?.category || ""
    }`,
  );
  const linkInHome = await linksHome.json();
  const data = response.data;
  return {
    props: {
      keyword: keyword || {},
      data: data || {},
      bestSearch: linkInHome,
    },
  };
}

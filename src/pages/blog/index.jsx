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
  let category = "";
  let search = "";
  if (keyword?.category?.includes(" ")) {
    category = keyword?.category?.split(" ").join("-");
    return {
      redirect: {
        destination: `/blog?category=${category}`,
        statusCode: 308,
      },
    };
  } else {
    category = keyword?.category?.split("-").join(" ");
  }
  if (keyword.search?.includes(" ")) {
    search = keyword.search?.split(" ").join("-");
    return {
      redirect: {
        destination: `/blog?search=${search}`,
        statusCode: 308,
      },
    };
  } else {
    search = keyword?.search?.split("-").join(" ");
  }
  try {
    const response = await axiosInstance.get(
      `/admin/blog/allblogs?page=${
        keyword.page || 1
      }&limit=${"5"}&keyword=${search || ""}&category=${category || ""}`,
    );
    const data = response.data;
    return {
      props: {
        keyword: keyword,
        data: data,
      },
    };
  } catch (error) {
    throw error.response.data;
  }
}

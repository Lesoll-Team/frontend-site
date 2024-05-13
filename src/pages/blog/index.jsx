import axiosInstance from "@/Shared/axiosInterceptorInstance";
import BlogFeed from "@/components/newBlogs/BlogFeed";

const index = ({ keyword, data }) => {
  return <BlogFeed blogs={data} keyword={keyword} />;
};
export default index;

export async function getServerSideProps({ query }) {
  const keyword = query;
  try {
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
        keyword: keyword,
        data: data,
      },
    };
  } catch (error) {
    throw error.response.data;
  }
}

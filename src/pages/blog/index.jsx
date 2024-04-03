import BlogFeed from "@/components/newBlogs/BlogFeed";
import axios from "axios";

const index = ({ keyword, data }) => {
  return <BlogFeed blogs={data} keyword={keyword} />;
};
export default index;

export async function getServerSideProps({ query }) {
  const keyword = query;
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/blog/allblogs?page=${
        keyword.page || 1
      }&limit=${"5"}&keyword=${keyword.search || ""}&category=${
        keyword.category || ""
      }`
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

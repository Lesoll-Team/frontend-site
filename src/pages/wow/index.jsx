// import AddProperty from "@/components/newAddProperty/AddProperty";

import axios from "axios";

const index = ({ keyword, data }) => {
  console.log(keyword);
  console.log(data);
  return <div>hi</div>;
};
export default index;

export async function getServerSideProps({ query }) {
  const keyword = query;
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/blog/allblogs`
    );
    const data = response.data.getBlogs;
    return {
      props: {
        keyword: keyword,
        data: data,
      },
    };
  } catch (error) {
    throw error.response.data;
  }

  return {
    props: {
      keyword,
    },
  };
}

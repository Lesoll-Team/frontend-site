import axiosInstance from "@/Shared/axiosInterceptorInstance";
import BestLinksInHome from "@/components/linksInHome/BestLinksInHome";
import BlogFeed from "@/components/newBlogs/BlogFeed";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export async function getServerSideProps({ query, locale }) {
  const keyword = query;
  if (locale === "en") {
    return {
      redirect: {
        destination: `/blog?page=${keyword.page || 1}`,
        permanent: true,
      },
    };
  }
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
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } catch (error) {
    throw error.response.data;
  }
  // const response = await axiosInstance.get(
  //   `/admin/blog/allblogs?page=${
  //     keyword.page || 1
  //   }&limit=${"5"}&keyword=${keyword.search || ""}&category=${
  //     keyword.category || ""
  //   }`,
  // );
  // const data = response.data;
  // return {
  //   props: {
  //     keyword: keyword || {},
  //     data: data || {},
  //     bestSearch: linkInHome,
  //   },
  // };
}

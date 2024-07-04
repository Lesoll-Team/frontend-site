import axiosInstance from "@/Shared/axiosInterceptorInstance";
import NeedsFeed from "@/components/needs/needFeed/NeedsFeed";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const NeedsPage = ({ data, keyword }) => {
  const language = getLangBoolean();

  return (
    <div className="min-h-[85dvh]">
      <Head>
        <title>{language ? "الطلبات" : "Needs"}</title>
      </Head>
      <NeedsFeed data={data} keyword={keyword} />
    </div>
  );
};
export default NeedsPage;
export async function getServerSideProps({ query, locale }) {
  const keyword = query;
  try {
    const response = await axiosInstance.get(
      `/need/get-all-needs?page=${
        keyword?.page || 1
      }&limit=9&cdb=${keyword.cdb || ""}`,
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
    if (error?.response?.status == 400) {
      return {
        props: {
          keyword: keyword,
          data: { getAllData: [] },
        },
      };
    } else {
      throw error.response.data;
    }
  }
}

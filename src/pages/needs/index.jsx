import NeedsFeed from "@/components/needs/needFeed/NeedsFeed";
import axios from "axios";
import Head from "next/head";
import { useSelector } from "react-redux";

const NeedsPage = ({ data, keyword }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

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
export async function getServerSideProps({ query }) {
  const keyword = query;
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/need/get-all-needs?page=${
        keyword?.page || 1
      }&limit=9&cdb=${keyword.cdb || ""}`,
    );
    const data = response.data;
    return {
      props: {
        keyword: keyword,
        data: data,
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

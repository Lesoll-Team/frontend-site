// import Search from "@/components/search/Search";
import { SearchBar } from "@/Shared/search/SearchBar";
import SearchResult from "@/components/SearchResult/SearchResult";
import Head from "next/head";
import { useSelector } from "react-redux";

const index = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <>
      <Head>
        <title>{language ? "البحث عن عقار" : "Search for a property"}</title>
        <meta
          name="description"
          content="ابحث عن العقار الذي تحلم بشرائه أو استئجاره. اعثر على منازل وشقق وعقارات تجارية تتناسب مع معاييرك."
        />
      </Head>
      <div className="min-h-[100dvh]">
        <SearchBar />
        <SearchResult />
      </div>
    </>
  );
};
export default index;

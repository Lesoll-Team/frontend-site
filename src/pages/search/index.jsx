// import Search from "@/components/search/Search";
// import { SearchBar } from "@/Shared/search/SearchBar";
import SearchResult from "@/components/SearchResult/SearchResult";
import Head from "next/head";
import { useSelector } from "react-redux";

const search = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const setInputKeyword = useSelector((state) => state.Search.setInputKeyword);
  // console.log(setInputKeyword);
  return (
    <>
      <Head>
        <title>
          {language
            ? `${" أبحث عن"} ${
                setInputKeyword?.unitType || " شقتك"
              }  في مصر | ليسول`
            : `${setInputKeyword?.propType || "search"} ${
                setInputKeyword?.unitType || "about your property"
              } in egypt|lesoll`}
        </title>
        <meta
          name="description"
          content={
            language
              ? `ابحث عن أفضل ${setInputKeyword?.propType || ""}  ${
                  setInputKeyword?.unitType || ""
                } في مصر باستخدام الخريطة أو الصور. ابحث عن عقارات كاش أو تقسيط، واستكشف عقارات متنوعه بمختلف المساحات والأسعار في جميع أنحاء مصر`
              : `Search for the best ${
                  setInputKeyword?.propType || "search"
                } for ${
                  setInputKeyword?.unitType || "about your property"
                } in Egypt using maps or images. Explore a variety of properties available for cash or installment payments across Egypt`
          }
        />
      </Head>
      <div className="min-h-[100dvh]">
        {/* <SearchBar /> */}
        <SearchResult />
      </div>
    </>
  );
};
export default search;

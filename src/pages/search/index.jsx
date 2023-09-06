// import Search from "@/components/search/Search";
import { SearchBar } from "@/Shared/search/SearchBar";
import SearchResult from "@/components/SearchResult/SearchResult";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Lesoll Search</title>
      </Head>
      <div>
           <SearchBar/>
           <SearchResult/>
      </div>
    </>
  );
};
export default index;




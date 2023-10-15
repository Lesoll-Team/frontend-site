import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "@/Shared/search/SearchBar";

import { useRouter } from "next/router";
import { dataFoundFromSearch } from "@/redux-store/features/searchingSlice";
import SearchResult from "@/components/SearchResult/SearchResultTow";
import Head from "next/head";

export default function Searching({ keyword }) {
  const keyValuePairs = keyword
          .split("&")
          .map((pair) => pair.split("="));

        // Reverse the filtering
        const reversedFilteredKeywords = Object.fromEntries(
          keyValuePairs.filter(
            ([_, value]) => value != null && value !== "" && value !== "0"
          )
        );
  const router = useRouter();
  const language = useSelector((state) => state.GlobalState.languageIs);

  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.Searching.currentPage);
  useEffect(() => {
    if (keyword !== undefined) {
      dispatch(
        dataFoundFromSearch({
          InputKeywords: keyword,
          page: currentPage,
        })
      );
    }
  }, [router]);
  // console.log(reversedFilteredKeywords);
  return (
    <>
          <Head>
        <title>{language ? `ابحث عن ${reversedFilteredKeywords.unitType=="شقة"?"شقق":reversedFilteredKeywords.unitType||"عقارات" } ${reversedFilteredKeywords.offer=="كل"?"للبيع والإيجار":reversedFilteredKeywords.offer||"للبيع والإيجار"} فى مصر ` :
        `Search About ${reversedFilteredKeywords.unitType||"Properties"} ${reversedFilteredKeywords.offer=="all"?"For Rent Or Buy":reversedFilteredKeywords.offer|| "for rent or buy"} In Egypt`}</title>
        <meta
          name="description"
          content={`
          
          `}
        />
      </Head>
      <SearchBar reversedFilteredKeywords={reversedFilteredKeywords}/>
      {/* <h3></h3> */}
      <SearchResult />
    </>
  );
}
export async function getServerSideProps({ params }) {
  const keyword = params.keyword;


  return {
    props: {
      keyword,
    },
  };
}
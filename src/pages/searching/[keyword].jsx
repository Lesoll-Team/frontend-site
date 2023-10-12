import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "@/Shared/search/SearchBar";

import { useRouter } from "next/router";
import { dataFoundFromSearch } from "@/redux-store/features/searchingSlice";
import SearchResult from "@/components/SearchResult/SearchResultTow";

export default function Searching({ keyword }) {
  const router = useRouter();
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
  return (
    <>
      <SearchBar />
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
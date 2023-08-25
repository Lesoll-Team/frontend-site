import Head from "next/head";
import React from "react";
import MainSearch from "../../components/search/MainSearch";

export default function buy() {
  return (
    <div>
      <Head>
        <title>Lesoll Buy</title>
      </Head>
      <MainSearch />
      welcome in <b>Buy</b>
    </div>
  );
}

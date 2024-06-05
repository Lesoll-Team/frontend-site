import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

const HeadMetaTags = ({ result, dataObjectFromURL, queries }) => {
  const { category, saleOptions, unitType, region, governorate } =
    dataObjectFromURL;

  const siteUrl = process.env.NEXT_PUBLIC_API_LOCAL_DOMAIN;
  const language = useSelector((state) => state.GlobalState.languageIs);

  const queryString = Object.keys(queries)
    .map((key) => `${key}=${encodeURIComponent(queries[key])}`)
    .join("&");

  const canonicalUrl = `${siteUrl}/properties/${saleOptions ? saleOptions + "/" : ""}${category ? category + "/" : ""}${unitType ? unitType + "/" : ""}${governorate ? governorate + "/" : ""}${region ? region + "/" : ""}search?${queryString ? queryString : "page=1"}`;

  return (
    <Head>
      <title>
        {language ? result?.supTitleCategory?.ar : result?.supTitleCategory?.en}
      </title>
      <meta
        name="description"
        content={`${result?.supTitleCategory?.ar} لدينا العديد من العقارات في مصر، شقق، اراضي، محلات تجارية.  اتصل بنا واكتشف مجموعة متنوعة من الخيارات المتاحة  اراضي، محلات تجارية, شقة `}
      />
      {result?.length == 0 && (
        <meta name="robots" content="noindex, nofollow" />
      )}
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default HeadMetaTags;

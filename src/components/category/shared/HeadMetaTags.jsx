import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const HeadMetaTags = ({ result }) => {
  const siteUrl=process.env.NEXT_PUBLIC_API_LOCAL_DOMAIN
  const language = useSelector((state) => state.GlobalState.languageIs);
    const router = useRouter();
  const cleanPath = router.asPath.split('#')[0];
  const canonicalUrl = `${siteUrl}` + (router.asPath === '/' ? '' : cleanPath);
console.log("canonicalUrl router::::",canonicalUrl);
// console.log(" router::::",router);
// console.log(" router asPath ::::",router.asPath);
  return (
    <Head>
      <title>
        {language ? result?.supTitleCategory.ar : result?.supTitleCategory.en}
      </title>
      <meta
        name="description"
        content={`${result?.supTitleCategory?.ar} لدينا العديد من العقارات في مصر، شقق، اراضي، محلات تجارية.  اتصل بنا واكتشف مجموعة متنوعة من الخيارات المتاحة  اراضي، محلات تجارية, شقة `}
      />
          <link rel="canonical" href={canonicalUrl} />

    </Head>
  );
};

export default HeadMetaTags;

/* <meta
           name="description"
           content={
             language
               ? ` ${
                   reversedFilteredKeywords.unitType == "شقة"
                     ? " شقق "
                     : reversedFilteredKeywords.unitType || " عقارات "
                 }  ${
                   reversedFilteredKeywords.offer == "all" ||
                   reversedFilteredKeywords.offer == "كل"
                     ? " للبيع والإيجار "
                     : reversedFilteredKeywords.offer || " للبيع والإيجار "
                 } فى ${
                   reversedFilteredKeywords?.cdb?.split("_").join(" ") || " مصر "
                 } ` +
                 " من ليسول. لدينا العديد من العقارات في مصر، شقق، اراضي، محلات تجارية.  اتصل بنا واكتشف مجموعة متنوعة من الخيارات المتاحة "
               : ` ${
                   reversedFilteredKeywords.unitType == "شقة"
                     ? " شقق "
                     : reversedFilteredKeywords.unitType || " عقارات "
                 }  ${
                   reversedFilteredKeywords.offer == "all" ||
                   reversedFilteredKeywords.offer == "كل"
                     ? " للبيع والإيجار "
                     : reversedFilteredKeywords.offer || " للبيع والإيجار "
                 } فى ${
                   reversedFilteredKeywords?.cdb?.split("_").join(" ") || " مصر "
                 } ` +
                 " من ليسول. لدينا العديد من العقارات في مصر، شقق، اراضي، محلات تجارية.  اتصل بنا واكتشف مجموعة متنوعة من الخيارات المتاحة "
           }
         /> */

/* <link rel="canonical" href={`https://lesoll.com/searching/${query}`} /> */

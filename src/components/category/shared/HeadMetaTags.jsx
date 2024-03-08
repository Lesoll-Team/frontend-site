import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

const HeadMetaTags = ({ result }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <Head>
      <title>
        {language ? result.supTitleCategory.ar : result.supTitleCategory.en}
      </title>
      <meta
        name="description"
        content={`${result.supTitleCategory?.ar} لدينا العديد من العقارات في مصر، شقق، اراضي، محلات تجارية.  اتصل بنا واكتشف مجموعة متنوعة من الخيارات المتاحة  اراضي، محلات تجارية, شقة `}
      />
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

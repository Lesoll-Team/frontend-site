import { useEffect } from "react";
import { useRouter } from "next/router";
const SearchPageRedirect = () => {
  const router = useRouter();
  useEffect(() => {
    // Redirect to the new URL
    // const keywords = router.asPath;

    router.push(`/`);
  }, [router]);
  return null;
};
export default SearchPageRedirect;

// import React, { useEffect } from "react";

// import { useDispatch, useSelector } from "react-redux";

// import { useRouter } from "next/router";
// import { dataFoundFromSearch } from "@/redux-store/features/searchingSlice";
// // import SearchResult from "@/components/SearchResult/SearchResult";
// import Head from "next/head";

// export default function Searching({ keyword, bestSearch }) {
//   const keyValuePairs = keyword.split("&").map((pair) => pair.split("="));

//   // Reverse the filtering
//   const reversedFilteredKeywords = Object.fromEntries(
//     keyValuePairs.filter(
//       ([_, value]) => value != null && value !== "" && value !== "0"
//     )
//   );
//   const router = useRouter();
//   const language = useSelector((state) => state.GlobalState.languageIs);

//   const dispatch = useDispatch();
//   const query = router.query.keyword;
//   const currentPage = useSelector((state) => state.Searching.currentPage);
//   useEffect(() => {
//     if (keyword !== undefined) {
//       dispatch(
//         dataFoundFromSearch({
//           InputKeywords: keyword,
//           page: currentPage,
//         })
//       );
//     }
//   }, [router]);
//   const typeIsApartment = reversedFilteredKeywords.unitType == "شقة";
//   const isUnitType = reversedFilteredKeywords.unitType || " عقارات ";
//   const isOfferIs =
//     reversedFilteredKeywords.offer === "كل" ||
//     reversedFilteredKeywords.offer === "all";
//   const offerValue = reversedFilteredKeywords.offer || " للبيع والإيجار ";
//   const cdbValue = reversedFilteredKeywords.cdb || " مصر ";
//   const getTitleInArabic = (
//     typeIsApartment,
//     isUnitType,
//     isOfferIs,
//     offerValue,
//     cdbValue
//   ) => {
//     const unitType = typeIsApartment ? " شقق " : isUnitType;
//     const offer = isOfferIs
//       ? " للبيع والإيجار "
//       : offerValue || "للبيع والإيجار";
//     const location = cdbValue || "مصر";

//     return `${unitType} ${offer} فى ${location} | ليسول`;
//   };
//   const getMetaDescription = (language, reversedFilteredKeywords) => {
//     const unitType =
//       reversedFilteredKeywords.unitType == "شقة"
//         ? "شقق"
//         : reversedFilteredKeywords.unitType || "عقارات";
//     const offer =
//       reversedFilteredKeywords.offer == "all" ||
//       reversedFilteredKeywords.offer == "كل"
//         ? "للبيع والإيجار"
//         : reversedFilteredKeywords.offer || "للبيع والإيجار";
//     const location = reversedFilteredKeywords.cdb || "مصر";

//     const arabicDescription = `${unitType} ${offer} فى ${location} من ليسول. لدينا العديد من العقارات في مصر، شقق، اراضي، محلات تجارية. اتصل بنا واكتشف مجموعة متنوعة من الخيارات المتاحة`;

//     const englishDescription = `${unitType} ${offer} فى ${location} من ليسول. لدينا العديد من العقارات في مصر، شقق، اراضي، محلات تجارية. اتصل بنا واكتشف مجموعة متنوعة من الخيارات المتاحة`;

//     return language ? arabicDescription : englishDescription;
//   };
//   const getTitleInEnglish = (reversedFilteredKeywords) => {
//     const unitType =
//       reversedFilteredKeywords.unitType == "شقة"
//         ? "شقق"
//         : reversedFilteredKeywords.unitType || "عقارات";
//     const offer =
//       reversedFilteredKeywords.offer == "all" ||
//       reversedFilteredKeywords.offer == "كل"
//         ? "For Rent Or Buy"
//         : reversedFilteredKeywords.offer || "for rent or buy";
//     const location = reversedFilteredKeywords.cdb || "Egypt";

//     return `Search About ${unitType} ${offer} In ${location} | lesoll`;
//   };
//   return (
//     <>
//       <Head>
//         <title>
//           {language
//             ? getTitleInArabic(
//                 typeIsApartment,
//                 isUnitType,
//                 isOfferIs,
//                 offerValue,
//                 cdbValue
//               )
//             : getTitleInEnglish(reversedFilteredKeywords)}
//         </title>
//         <meta
//           name="description"
//           content={getMetaDescription(language, reversedFilteredKeywords)}
//         />
//         <link rel="canonical" href={`https://lesoll.com/searching/${query}`} />
//       </Head>

//       {/* <SearchResult
//         PopularSearches={bestSearch.POPULAR_SEARCHES}
//         MostArea={bestSearch.Most_Area}
//         MostGovernorate={bestSearch.Most_Governorate}
//         Others={bestSearch.Others}
//         reversedFilteredKeywords={reversedFilteredKeywords}
//       /> */}
//     </>
//   );
// }
// export async function getServerSideProps({ params }) {
//   const keyword = params.keyword;
//   const linkHome = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/property/linkshome`
//   );
//   const linkInHome = await linkHome.json();

//   return {
//     props: {
//       keyword,
//       bestSearch: linkInHome,
//     },
//   };
// }

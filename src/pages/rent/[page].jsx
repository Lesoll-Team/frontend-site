// pages/rent.js
// import Head from "next/head";
// import PaginationPage from "../../Shared/Pagination/Pagination";
// import { useRouter } from "next/router";
// import RealtyCardRent from "../../components/realtyCard/RealtyCard";
// import { SearchBar } from "@/Shared/search/SearchBar";
// import { useSelector } from "react-redux";

export default function PropertyRent() {
  // export default function PropertyRent({ propertyForRent }) {
  // const language = useSelector((state) => state.GlobalState.languageIs);
  // const router = useRouter();
  // const currentPage = router.query.page;
  return null;
  // return (
  //   <div className="container mx-auto">
  //     <Head>
  //       <title>
  //         {language
  //           ? "عقارات للايجار في مصر | شقق للايجار | شقق دوبلكس | ليسول"
  //           : "Properties for rent in Egypt | Apartments for rent | Duplex apartments | Lesoll"}
  //       </title>
  //       <link rel="canonical" href={`https://lesoll.com/rent/${currentPage}`} />
  //       <meta
  //         name="description"
  //         content={
  //           language
  //             ? "هل تبحث عن عقارات للايجارفي مصر؟ تقدم ليسول مجموعة متنوعة من الشقق الفاخرة للايجار في أفضل المناطق. لدينا العديد من العقارات في مصر، شقق، اراضي، محلات تجارية"
  //             : "Are you looking for properties for rent in Egypt? Lesoll offers a variety of luxury apartments for rent in the best areas. We have many properties in Egypt, apartments, lands, and shops"
  //         }
  //       />
  //     </Head>
  //     <SearchBar pageSaleOption="For Rent" />
  //     <div>
  //       <h1 className="font-bold text-5xl pt-20 md:flex md:justify-start flex justify-center text-lightGreen">
  //         {language ? "عقارات للإيجار فى مصر" : " Properties for Rent in Egypt"}
  //       </h1>
  //     </div>

  //     <div className=" flex flex-wrap items-center py-5 gap-x-5 justify-center justify-items-center gap-y-12 md:gap-y-16 mt-5 md:mt-12">
  //       {/**items-center py-5 grid lg:grid-cols-4 md:grid-cols-3 gap-x-2 justify-center justify-items-center gap-y-12 md:gap-y-16 mt-5 md:mt-12 */}
  //       {propertyForRent && propertyForRent.result
  //         ? propertyForRent.result.map((property) => (
  //             <RealtyCardRent key={property?._id} propertyDetails={property} />
  //           ))
  //         : "no property found"}
  //     </div>

  //     <div>
  //       <div className="py-2 px-2 flex  justify-center items-center">
  //         <PaginationPage
  //           hrefRout={"rent"}
  //           currentPage={currentPage}
  //           totalPages={propertyForRent?.totalPages}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
}
export async function getServerSideProps() {
  // Your logic to determine if the resource is gone
  const isResourceGone = true; // Example condition

  if (isResourceGone) {
    // Redirect to the homepage with a 410 status code
    return {
      redirect: {
        destination: "/properties/sale/residential",
        statusCode: 308,
      },
    };
  }

  // Continue with your logic if the resource is not gone
  // return {
  //   props: {}, // Your props object
  // };
}

// export async function getServerSideProps(context) {
//   const { page } = context.query;
//   const resRent = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/property/gethomerent?limit=20&page=${
//       page || 1
//     }`
//   );
//   const dataRent = await resRent.json();

//   return {
//     props: { propertyForRent: dataRent, revalidate: 1 },
//   };
// }

// import Head from "next/head";
// import Link from "next/link";
// import PaginationPage from "../../Shared/Pagination/Pagination";
// import { useRouter } from "next/router";
// import RealtyCardRent from "../../components/realtyCard/RealtyCard";
// import { SearchBar } from "@/Shared/search/SearchBar";
// import { useSelector } from "react-redux";
// export default function PropertyRent({ propertyForRent }) {
//   const language = useSelector((state) => state.GlobalState.languageIs);
//   const router = useRouter();
//   const currentPage = router.query.page;
//   return (
//     <div className=" container mx-auto">
//       <Head>
//         <title>{language ? "عقارات للإيجار" : "properties for rent"}</title>
//         <meta
//           name="description"
//           content="استكشف مجموعة واسعة من العقارات المتاحة للإيجار على منصتنا للعقارات. ابحث عن شقق ومنازل ومساحات تجارية للإيجار في المواقع الرئيسية. ابحث عن العقار المؤجَّر المثالي اليوم!"
//         />
//       </Head>
//       <SearchBar />
//       <div>
//         <h2 className="font-bold text-5xl pt-20  md:flex md:justify-start flex justify-center text-lightGreen">
//           {language ? "عقارات للإيجار" : " Properties for Rent"}
//         </h2>
//       </div>

//       <div className="items-center py-5  grid  lg:grid-cols-4 md:grid-cols-2 gap-x-2 justify-center justify-items-center gap-y-12 md:gap-y-16 mt-5 md:mt-12  ">
//         {/* {propertyForRent
//           ? propertyForRent.result.map((property) => (
//               <RealtyCardRent key={property?._id} propertyDetails={property} />
//             ))
//           : "no property found"} */}
//           {propertyForRent && propertyForRent.result
//   ? propertyForRent.result.map((property) => (
//       <RealtyCardRent key={property?._id} propertyDetails={property} />
//     ))
//   : "no property found"}
//         {/* <Link  href={`/propertyDetails/${property._id}`}>  </Link> */}
//       </div>

//       <div>
//         <div className="py-2 px-2 flex justify-between items-center">
//           <PaginationPage
//             hrefRout={"rent"}
//             currentPage={currentPage}
//             totalPages={propertyForRent?.totalPages}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// export async function getServerSideProps(context) {
//   const { page } = context.query;
//   const resRent = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/property/gethomerent?limit=9&page=${page}` //limit|| page||
//   );
//   const dataRent = await resRent.json();

//   return {
//     props: { propertyForRent: dataRent },
//   };
// }

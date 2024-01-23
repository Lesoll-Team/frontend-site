import { saleOptionsData } from "@/Shared/search/dropdown/dataDropdown";
import { filter } from "lodash";
import { useRouter } from "next/router";

const SearchPage = () => {
  const router = useRouter();
  const { roots } = router.query;

  // Ensure that roots is defined and is an array
  if (!roots || !Array.isArray(roots)) {
    return <div>Loading...</div>;
  }

  const data = saleOptionsData.en;

  const filteredOffer = data.filter((item) => roots.includes(item.value));



  // Use the extracted data to set values or perform other actions

  return (
    <div>
s
    </div>
  );
};

export default SearchPage;
// // pages/[...root].jsx

// import { useRouter } from "next/router";

// const DynamicSearchPage = () => {
//   const router = useRouter();
//   const { root } = router.query;

//   // Ensure that root is defined and is an array
//   if (!root || !Array.isArray(root)) {
//     return <div>Loading...</div>;
//   }

//   // Extract data from the route parameters
//   const [offer, type, governorate, region] = root;

//   // Your data object
// switch (root) {
//   case root.offer==="rent"||"sale":
//      offer;
//     break;

//   default:
//     break;
// }
//   const data = {
//     offer,
//     type,
//     governorate,
//     region,
//   };

//   // Use the data object for filtering or any other logic
//   // For example, you can log the data to the console
//   console.log(data);

//   // Your JSX content goes here
//   return (
//     <div className="min-h-[80dvh] flex flex-col justify-center items-center">
//       <h3>Offer: {offer}</h3>
//       <h3>Type: {type}</h3>
//       <h3>Governorate: {governorate}</h3>
//       <h3>Region: {region}</h3>
//     </div>
//   );
// };

// export default DynamicSearchPage;

// import { useRouter } from 'next/router';
// import React from 'react';
// // const fetchData = (rootParams) => {
// //   // Replace this with your actual data-fetching logic
// //   // For demonstration purposes, returning a simple object
// //   return {
// //     propertyData: `Data for ${rootParams.join("/")}`,
// //   };
// // };

// const Root = ({ data }) => {
//   const router = useRouter()
//   console.log(router.query);
//   console.log(data);
//   return <div className='min-h-[80dvh] flex items-center justify-center'>
//     {JSON.stringify(data)}
//   </div>;
// };

// export default Root;

// export async function getServerSideProps({ params }) {

//   const data = params.root;

//   return {
//     props: {
//       data,
//     },
//   };
// }

/**
   * offer_ rent | sale | investment 
   * _______________________________________________
   * *type_ residential | commercial | land |
   *        graves | investment | compounds |,
   _________________________________________________
   * region
   * governorate
   * 
   * saleOption: paymentMethod,
   * bathRooms: countBathrooms,
   * rooms: countBedrooms,
   * maxPrice: toPrice,
   * minPrice: fromPrice,
   * keywords: keywords.trim().split(" ").join("_"),
   * finishingType: finishingOptions,
   * minArea: fromArea,
   * maxArea: toArea,
   * MortgagePrice: propertyFinance,
   * sort_by: sortProp,
   * cdb: locationValue || locationName.trim().split(" ").join("_"),
 */

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: [ ["aa", "1"] , ["bb", "2"]  ]},
//       // { params: { root: ["bb", "2"] } },
//       // { params: { root: ["cc", "3"] } },
//     ],
//     fallback: false,
//   };
// }

// export async function getStaticProps() {
//   return {
//     props: {
//       paramsa: "linkInHome",
//     },
//   };
//   // return   {  props:
//   //   [{ slug: ["aa", "1"] }, { slug: ["bb", "2"] }, { slug: ["cc", "3"] }]}
// }

import { useRouter } from 'next/router';
import React from 'react';
// const fetchData = (rootParams) => {
//   // Replace this with your actual data-fetching logic
//   // For demonstration purposes, returning a simple object
//   return {
//     propertyData: `Data for ${rootParams.join("/")}`,
//   };
// };

const Root = ({ data }) => {
  const router = useRouter()
  console.log(router.query);
  console.log(data);
  // Your component logic here
  return <div>{JSON.stringify(data)}</div>;
};

export default Root;

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
export async function getServerSideProps({ params }) {
  // const data = fetchData(params.root);
  const data = params.root;

  return {
    props: {
      data,
    },
  };
}










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













// export async function getStaticProps() {
//   return {
//     props: {
//       paramsa: "linkInHome",
//     },
//   };
//   // return   {  props:
//   //   [{ slug: ["aa", "1"] }, { slug: ["bb", "2"] }, { slug: ["cc", "3"] }]}
// }

// import React, { useEffect } from "react";
// import CompareCard from "../realtyCard/CompareCard";
// import { Button } from "@nextui-org/react";
// import { useDispatch, useSelector } from "react-redux";
// import CompareDetails from "./CompareDetails";
// import { GetCompareCard } from "@/redux-store/features/compareSlice";
// import Link from "next/link";
// function CompareCards() {
//   const language = useSelector((state) => state.GlobalState.languageIs);
//   const propertyData = useSelector((state) => state.Compare.propertyData);

// const dispatch=useDispatch()//GetCompareCard
// useEffect(() => {
//   dispatch(GetCompareCard())
// }, [dispatch,GetCompareCard])
//   return (
//     <>
//     <div className="container mx-auto gap-3 px-5 flex   bg-gray-200 rounded-lg "> {/**justify-center */}
//          {propertyData?.propertyCompared.length>0 ? (
//         propertyData.propertyCompared.map((property) => (
//           <div className="flex flex-col w-3/12 items-center justify-center" key={property?._id}>
//             <div>
//               <Button color="danger" className="font-bold text-white">
//                 {language ? "إزالة" : "delete"}
//               </Button>
//             </div>
//             <CompareCard propertyDetails={property}/>
//             <CompareDetails propertyDetails={property} />
//           </div>
//         ))
//       ) : (
//         <div className="py-36 w-full justify-center items-center flex flex-col">
//         <div className="text-center text-xl font-semibold text-default-500">{language?"لا يوجد عقارات للمقارنة":"There are no properties to compare"}</div>
//         <Link className="  px-3 border-[3px] items-center flex justify-center border-lightGreen text-lightGreen font-medium py-1 rounded-lg text-center"
//      href={"/"}
//         >{language?"الصفحة الرئيسية>>":"home page>>"}</Link>
//         </div>
//       )}
//     </div>
//     </>
//   );
// }

// export default CompareCards;

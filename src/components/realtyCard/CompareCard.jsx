// import { AddToFavorites } from "@/utils/propertyAPI";
// import { Image } from "@nextui-org/react";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import Link from "next/link";
// import { useSelector } from "react-redux";
// import { useEffect, useState, memo } from "react";
// const CompareCard = ({ propertyDetails }) => {
//   const userInfo = useSelector((state) => state.GlobalState.userData);
//   const [loved, setLoved] = useState(false);
//   const addToFAv = async () => {
//     try {
//       await AddToFavorites(propertyDetails?._id);
//     } catch (error) {
//       console.error("Error add to fav :", error);
//     }
//   };

//   useEffect(() => {
//     if (userInfo?.favorites.includes(propertyDetails?._id)) {
//       setLoved(true);
//     }
//   }, [userInfo?.favorites]);
//   return (
//     <div className=" rounded-[25px]   bg-white text-lightGreen p-3 w-full drop-shadow-xl mb-5 mt-5">
//       <div className="flex items-center justify-between absolute  top-10">
//         {userInfo && (
//           <div className="z-[10000] bg-white  drop-shadow-lg  mx-2 p-1 text-2xl rounded-lg text-center  cursor-pointer  ">
//             {userInfo ? (
//               loved ? (
//                 <AiFillHeart
//                   className="text-red-500"
//                   onClick={() => {
//                     addToFAv();
//                     setLoved(!loved);
//                   }}
//                 />
//               ) : (
//                 <AiOutlineHeart
//                   className="text-red-500"
//                   onClick={() => {
//                     addToFAv();
//                     setLoved(!loved);
//                   }}
//                 />
//               )
//             ) : (
//               ""
//             )}
//           </div>
//         )}
//       </div>

//       {/* card img */}
//       <div className="z-10 w-full bg-red-200 ">
//         <Link
//           key={propertyDetails?._id}
//           href={`/propertyDetails/${propertyDetails?.slug}`}
//         >
//           <Image
//             isZoomed="true"
//             alt="Realty"
//             radius="lg"
//             // src="https://placehold.co/600x400/000000/FFFFFF/png"
//             src={propertyDetails?.thumbnail}
//             loading="lazy"
//             className="w-full object-cover"
//           />
//         </Link>
//       </div>
//       {/* card body  */}
//       <div className="relative space-y-5">

//         <Link
//           key={propertyDetails?._id}
//           href={`/propertyDetails/${propertyDetails?.slug}`}
//         >
//           <div
//             dir="rtl"
//             className=" text-lightOrange mt-3  px-5 flex justify-between  hover:underline  font-medium"
//           >

//             {/* asasasadasdsadsadasdasdasdasdasd */}
//               {/* {propertyDetails?.title.substring(0, 30)*/}
//               {propertyDetails?.title.length>27?<p>{propertyDetails?.title.slice(0, 25)} ...</p> : <p>{propertyDetails?.title}</p>}

//           </div>
//         </Link>

//       </div>
//     </div>
//   );
// };

// export default memo(CompareCard);

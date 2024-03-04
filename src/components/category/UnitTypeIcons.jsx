import React from "react";
// import {
//   ApartmentIcon,
//   // ApartmentWithGardenIcon,
//   // ArchitectureIcon,
//   // CabinIcon,
//   ClinicIcon,
//   CoffeeIcon,
//   // DuplexIcon,
//   FactoryIcon,
//   // FurnishedApartmentIcon,
//   GarageIcon,
//   HotelApartmentIcon,
//   // HouseIcon,
//   OfficeIcon,
//   // PenthouseIcon,
//   RestaurantIcon,
//   ShopIcon,
//   // StudioIcon,
//   // TownhouseIcon,
//   // TwinHouseIcon,
//   // VillaIcon,
//   WarehouseIcon,
// } from "./iconsSVG";
// import { PiPlantBold } from "react-icons/pi";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

const UnitTypeIcons = ({
  category,
  items,
  setUnitTypesKey,
  unitTypesKey,
  setLocationGovernorate,
  setLocationRegion,
  setCategoryTypeKey,
  setClickOnTap,
  clickOnTap,
  locationGovernorate,
  locationRegion,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const handleTapClicked = (Key) => {
    if (!category) {
      setClickOnTap(!clickOnTap);
      setCategoryTypeKey(Key);
    } else if (!unitTypesKey) {
      setClickOnTap(!clickOnTap);
      setUnitTypesKey(Key);
    } else if (!locationGovernorate) {
      setClickOnTap(!clickOnTap);
      setLocationGovernorate(Key);
    } else if (!locationRegion) {
      setClickOnTap(!clickOnTap);
      setLocationRegion(Key);
    }
  };
  console.log(items);
  return (
    <div className="flex overflow-x-auto no-scrollbar gap-x-[2.05vw] ">
      {items?.map((item) => (
        <button
          key={item.keyword}
          onClick={() => handleTapClicked(item.keyword)}
          className=" text-[12px] md:text-[20px] flex  hover:text-lightGreen "
        >
          {language ? item.ar : item.en}
        </button>
      ))}
    </div>
  );
  // switch (category) {
  //   case "residential":
  //   case "compounds":
  //   case "finance":
  //     return (
  //       <div
  //         className="flex gap-x-5 md:overflow-hidden
  //        overflow-x-auto no-scrollbar justify-start "
  //       >
  //         {items?.map((item) => (
  //           <button
  //             key={item.keyword}
  //             onClick={() => handleTapClicked(item.keyword)}
  //             className=" group  cursor-pointer    items-center "
  //           >
  //             <span className="text-[0.75rem] md:text[1.25rem] 	flex leading-none text-center group-hover:text-lightGreen ">
  //               {language ? item.ar : item.en}
  //             </span>
  //           </button>
  //         ))}
  //       </div>
  //     );

  //   case "commercial":
  //     return (
  //       <div
  //         className="flex gap-x-5 md:overflow-hidden
  //        overflow-x-auto no-scrollbar justify-start "
  //       >
  //         {items?.map((item) => (
  //           <button
  //             key={item.keyword}
  //             onClick={() => handleTapClicked(item.keyword)}
  //             className=" group  cursor-pointer    items-center "
  //           >
  //             <span className="text-[0.75rem] md:text[1.25rem] 	flex leading-none text-center group-hover:text-lightGreen ">
  //               {language ? item.ar : item.en}
  //             </span>
  //           </button>
  //         ))}
  //       </div>
  //     );
  //   case "graves":
  //     return null;
  //   case "lands":
  //     return (
  //       <div
  //         className="flex gap-x-5 md:overflow-hidden
  //        overflow-x-auto no-scrollbar justify-start "
  //       >
  //         {items?.map((item) => (
  //           <button
  //             key={item.keyword}
  //             onClick={() => handleTapClicked(item.keyword)}
  //             className=" group  cursor-pointer    items-center "
  //           >
  //             <span className="text-[0.75rem] md:text[1.25rem] 	flex leading-none text-center group-hover:text-lightGreen ">
  //               {language ? item.ar : item.en}
  //             </span>
  //           </button>
  //         ))}
  //       </div>
  //     );
  // }
};

export default UnitTypeIcons;

// import React from "react";
// import {
//   ApartmentIcon,
//   ApartmentWithGardenIcon,
//   ArchitectureIcon,
//   CabinIcon,
//   ClinicIcon,
//   CoffeeIcon,
//   DuplexIcon,
//   FactoryIcon,
//   FurnishedApartmentIcon,
//   GarageIcon,
//   HotelApartmentIcon,
//   HouseIcon,
//   OfficeIcon,
//   PenthouseIcon,
//   RestaurantIcon,
//   ShopIcon,
//   StudioIcon,
//   TownhouseIcon,
//   TwinHouseIcon,
//   VillaIcon,
//   WarehouseIcon,
// } from "./iconsSVG";
// import { PiPlantBold } from "react-icons/pi";
// // import { useSelector } from "react-redux";

// const UnitTypeIcons = ({ unitType }) => {
//   // const language = useSelector((state) => state.GlobalState.languageIs);
/**
 *         <div
          className="flex gap-x-2 md:overflow-hidden
         overflow-x-auto no-scrollbar"
        >
          {items?.map((item) => (
            <div
              key={item.keyword}
              className=" group  cursor-pointer  md:min-w-[97px] md:max-w-[97px] min-w-[35px] max-w-[35px]   items-center  p-2 flex flex-col"
            >
              <div className="md:flex block">
                <span className="text-[0.75rem] md:text[1.25rem] 	flex leading-none text-center group-hover:text-lightGreen ">
                  {language ? item.ar : item.en}
                </span>
              </div>
            </div>
          ))}
        </div>
 */
//   switch (unitType) {
//     case "residential":
//     case "compounds":
//     case "finance":
//       return (
//         <div
//           className="flex gap-x-2 md:overflow-hidden
//          overflow-x-auto no-scrollbar"
//         >
//           <div className=" group  cursor-pointer  md:min-w-[97px] md:max-w-[97px] min-w-[35px] max-w-[35px]   items-center  p-2 flex flex-col">
//             <ApartmentIcon />
//             <div className="md:flex block">
//               <span className="text-[0.75rem] md:text[1.25rem] 	flex leading-none text-center group-hover:text-lightGreen ">
//                 شقة (442)
//               </span>
//             </div>
//           </div>
//           <div className=" group  cursor-pointer md:min-w-[97px] md:max-w-[97px] min-w-[35px] max-w-[35px]  p-2 flex items-center  flex-col">
//             <FurnishedApartmentIcon />
//             <span className="text-[0.75rem] md:text[1.25rem] l text-center group-hover:text-lightGreen flex leading-none">
//               شقة مفروشة (442)
//             </span>
//           </div>
//           <div className=" p-2 group  cursor-pointer md:min-w-[97px] md:max-w-[97px] min-w-[35px] max-w-[35px]  items-center  flex flex-col">
//             <DuplexIcon />
//             <div className="md:flex block">
//               <span className="text-[0.75rem] md:text[1.25rem]   group-hover:text-lightGreen flex leading-none text-center">
//                 دوبليكس (442)
//               </span>
//             </div>
//           </div>
//           <div className="  group  cursor-pointer md:min-w-[97px] md:max-w-[97px] min-w-[35px] max-w-[35px]  p-2 flex items-center  flex-col">
//             <HotelApartmentIcon />
//             <div className="md:flex block">
//               <span className="text-[0.75rem] md:text[1.25rem]   group-hover:text-lightGreen flex leading-none text-center">
//                 شقة فندقية (442)
//               </span>
//             </div>
//           </div>
//           <div className="group  cursor-pointer md:min-w-[97px]  md:max-w-[97px] min-w-[35px] max-w-[35px]  p-2 items-center  flex flex-col">
//             <StudioIcon />
//             <div className="md:flex block">
//               <span className="text-[0.75rem] md:text[1.25rem]   group-hover:text-lightGreen flex leading-none text-center">
//                 ستوديو (442)
//               </span>
//             </div>
//           </div>
//           <div className=" group  cursor-pointer md:min-w-[97px] md:max-w-[97px] min-w-[35px] max-w-[35px]  p-2 flex items-center  flex-col">
//             <TwinHouseIcon />
//             <div className="md:flex block">
//               <span className="text-[0.75rem] md:text[1.25rem]   group-hover:text-lightGreen flex leading-none text-center">
//                 توين هاوس (442)
//               </span>
//             </div>
//           </div>
//           <div className="group  cursor-pointer md:min-w-[97px]  md:max-w-[97px] min-w-[35px] max-w-[35px]  p-2 flex items-center  flex-col">
//             <CabinIcon />
//             <div className="md:flex block">
//               <span className="text-[0.75rem] md:text[1.25rem]   group-hover:text-lightGreen flex leading-none text-center">
//                 كابينه (442)
//               </span>
//             </div>
//           </div>
//           <div className="group  cursor-pointer md:min-w-[97px] md:hidden md:max-w-[97px] min-w-[35px] max-w-[35px]  p-2 flex items-center  flex-col">
//             <WarehouseIcon />
//             <div className="md:flex block">
//               <span className="text-[0.75rem] md:text[1.25rem]   group-hover:text-lightGreen flex leading-none text-center">
//                 مستودع (442)
//               </span>
//             </div>
//           </div>
//           <div className=" group  cursor-pointer md:min-w-[97px] md:max-w-[97px]   min-w-[35px] max-w-[35px]  p-2 flex items-center  flex-col">
//             <PenthouseIcon />
//             <div className="md:flex block">
//               <span className="text-[0.75rem] md:text[1.25rem]   group-hover:text-lightGreen flex leading-none text-center">
//                 بينت هاوس (442)
//               </span>
//             </div>
//           </div>
//           <div className="group  cursor-pointer md:min-w-[97px]   md:max-w-[97px] min-w-[35px] max-w-[35px]  p-2 flex items-center  flex-col">
//             <ApartmentWithGardenIcon />
//             <div className="md:flex block">
//               <span className="text-[0.75rem] md:text[1.25rem]   group-hover:text-lightGreen flex leading-none text-center">
//                 شقة حديقة (442)
//               </span>
//             </div>
//           </div>
//           <div className="group  cursor-pointer md:min-w-[97px]   md:max-w-[97px] min-w-[35px] max-w-[35px]  p-2 flex items-center  flex-col">
//             <VillaIcon />
//             <div className="md:flex block">
//               <span className="text-[0.75rem] md:text[1.25rem]   group-hover:text-lightGreen flex leading-none text-center">
//                 فيلا (442)
//               </span>
//             </div>
//           </div>
//           <div className="group  cursor-pointer md:min-w-[97px] md:hidden  md:max-w-[97px] min-w-[35px] max-w-[35px]  p-2 flex items-center  flex-col">
//             <HouseIcon />
//             <div className="md:flex block">
//               <span className="text-[0.75rem] md:text[1.25rem]   group-hover:text-lightGreen flex leading-none text-center">
//                 عمارة (442)
//               </span>
//             </div>
//           </div>
//           <div className="group cursor-pointer md:min-w-[97px]   md:max-w-[97px] min-w-[35px] max-w-[35px]  p-2 flex items-center  flex-col">
//             <ArchitectureIcon />
//             <div className="md:flex block">
//               <span className="text-[0.75rem] md:text[1.25rem]   group-hover:text-lightGreen flex leading-none text-center">
//                 بيت (442)
//               </span>
//             </div>
//           </div>
//         </div>
//       );

//     case "commercial":
//       return (
//         <div className="flex gap-x-3">
//           <FactoryIcon />
//           <OfficeIcon />
//           <RestaurantIcon />
//           <ShopIcon />
//           <CoffeeIcon />
//           <GarageIcon />
//           <ClinicIcon />
//         </div>
//       );
//     case "graves":
//       return null;
//     case "lands":
//       return (
//         <div className="flex gap-x-3">
//           <HotelApartmentIcon />
//           <PiPlantBold />
//         </div>
//       );
//   }
//   // return (
//   //   <>
//   //     <div className="bg-[#F2F8F9] w-[full] p-3 overflow-x-auto flex gap-x-2 no-scrollbar">
//   //       <div className="group cursor-pointer min-h-[44px] max-h-[44px] flex flex-col items-center max-w-[27px] min-w-[27px] ">
//   //         <RestaurantIcon />
//   //         <span className="text-[12px] leading-none group-hover:text-lightGreen flex leading-none">
//   //           شقة (442)
//   //         </span>
//   //       </div>
//   //       <div className="min-h-[44px] group cursor-pointer max-h-[44px] flex flex-col items-center max-w-[27px] min-w-[27px] ">
//   //         <FactoryIcon />
//   //         <span className="text-[12px] group-hover:text-lightGreen flex leading-none leading-none ">
//   //           شقة (442)
//   //         </span>
//   //       </div>
//   //       <div className="group min-h-[44px] cursor-pointer max-h-[44px] flex flex-col items-center max-w-[27px] min-w-[27px] ">
//   //         <OfficeIcon />
//   //         <span className="text-[12px] leading-none group-hover:text-lightGreen flex leading-none">
//   //           شقة (442)
//   //         </span>
//   //       </div>
//   //     </div>
//   //   </>
//   // );
// };

// export default UnitTypeIcons;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SidebarFilter from "./SidebarFilter";
import BarFilter from "./BarFilter";
import { useRouter } from "next/router";
import UnitTypeIcons from "./UnitTypeIcons";
import { IoIosStar } from "react-icons/io";
import { LuArrowDownUp } from "react-icons/lu";
import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
import { sortedData } from "@/Shared/search/dropdown/dataDropdown";
import { saveSearchFilter } from "./api";
import PaginationPage from "@/Shared/Pagination/PaginationSearch";
import RealtyCard from "../realtyCard/RealtyCard";
import ResultNotFound from "./ResultNotFound";

const SidebarAndBarFilter = ({ result, page }) => {
  const router = useRouter();
  /***start init state BarFilter Components*/
  const [categoryTypeKey, setCategoryTypeKey] = useState("");
  const [unitTypesKey, setUnitTypesKey] = useState("");
  const [locationGovernorate, setLocationGovernorate] = useState("");
  const [locationRegion, setLocationRegion] = useState("");

  const [openSaveFilterInput, setOpenSaveFilterInput] = useState(false);
  const [confirmSendMessage, setConfirmSendMessage] = useState(false);
  const [isSaveed, setIsSaveed] = useState(false);
  const [messageConfirmed, setMessageConfirmed] = useState("");
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [openFilter, setOpenFilter] = useState(false);
  // const [clickOnTap, setClickOnTap] = useState(false);
  const { sort } = useSelector((state) => state.Category);

  useEffect(() => {
    setIsSaveed(false);
    setConfirmSendMessage(false);
    setMessageConfirmed("");
  }, [router]);
  const handleSendSearchFilter = async () => {
    await saveSearchFilter({
      confirmSendMessage,
      messageConfirmed,
      slug: router.asPath,
    }).then(() => {
      setOpenSaveFilterInput(false);
      setIsSaveed(true);
    });
    setOpenSaveFilterInput(!openSaveFilterInput);
  };
  const userInfo = useSelector((state) => state.userProfile.userData);

  return (
    <>
      {/*Sidebar filter */}
      {openFilter && (
        <div className="fixed z-[700] w-full top-0">
          <SidebarFilter languageIs={language} setOpenFilter={setOpenFilter} />
        </div>
      )}
      {/*bar filter */}
      <div
        className={` z-20 shadow-sm bg-white flex justify-center sticky ${
          userInfo ? "top-[60px] md:top-[90px]" : "top-[97px] md:top-[122px]"
        } `}
      >
        <BarFilter
          setOpenFilter={setOpenFilter}
          setLocationGovernorate={setLocationGovernorate}
          setLocationRegion={setLocationRegion}
        />
      </div>
      {/*unit types */}
      <div className="md:container py-[48px] md:mx-auto mx-[20px] md:block hidden">
        <UnitTypeIcons
          category={categoryTypeKey}
          items={result?.aggregation_links}
          setUnitTypesKey={setUnitTypesKey}
          unitTypesKey={unitTypesKey}
          setLocationGovernorate={setLocationGovernorate}
          setLocationRegion={setLocationRegion}
          setCategoryTypeKey={setCategoryTypeKey}
          // setClickOnTap={setClickOnTap}
          // clickOnTap={clickOnTap}
          locationGovernorate={locationGovernorate}
          locationRegion={locationRegion}
        />
      </div>
      {/*title & save and filter button*/}
      <div className="md:container md:mx-auto mx-[20px] flex flex-wrap justify-between items-center py-[20px] gap-y-[10px]">
        {/*title filter page */}
        <div className=" w-full text-[#4E4E4E] md:w-6/12 md:text-[25px] text-[14px]">
          {language
            ? result?.supTitleCategory?.ar
            : result?.supTitleCategory?.en}
        </div>
        {/*sorted and save search filter page */}
        <div className="flex z-10 gap-[2rem]  md:justify-end justify-between w-full md:w-6/12">
          <div className="flex   whitespace-nowrap gap-x-3 items-center">
            <span className="text-[12px] md:text-[20px]">
              {language ? "الترتيب حسب:" : "Sort by"}
            </span>
            <Dropdown
              stateName={"sort"}
              baseIcon={<LuArrowDownUp />}
              data={sortedData}
              defaultValue={language ? "الاحدث" : "recent"}
              value={sort}
              isSort
              dataOptions="text"
            />
          </div>

          <button
            disabled={isSaveed}
            onClick={handleSendSearchFilter}
            className="indent-2 h-[24px] md:h-[40px] md:min-w-[8.438rem] min-w-[6rem]  rounded-[1vh] flex items-center gap-x-1 md:justify-between 
             md:px-3 
             text-[12px] md:text-[20px]
             whitespace-nowrap
            "
            // md:px-3 md:p-2 p-1 px-1
          >
            {language
              ? isSaveed
                ? "تم حفظ البحث"
                : " حفظ البحث"
              : isSaveed
              ? "has been saved"
              : "Save search"}
            <IoIosStar
              className={`${
                isSaveed
                  ? "fill-lightGreen"
                  : "fill-none stroke-[20px] stroke-black"
              } `}
            />
          </button>
        </div>
      </div>
      {/*cards result  */}
      <div
        className="  md:container mx-[10px] md:mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      gap-x-5 gap-y-3 md:gap-y-16 mt-5 md:mt-12 "
      >
        {result?.categoryResults?.map((property) => (
          <RealtyCard key={property._id} propertyDetails={property} />
        ))}
      </div>
      {/*error not found */}
      {result == null && (
        <div className="w-full md:container md:mx-auto mx-[10px">
          <ResultNotFound />
        </div>
      )}
      {/*Pagination   */}
      {result?.totalPages && (
        <div className="my-[4vh]">
          <PaginationPage totalPage={result.totalPages} currentPage={page} />
        </div>
      )}
    </>
  );
};

export default SidebarAndBarFilter;
// {
//   openSaveFilterInput && (
//     <>
//       <div className="z-[800] h-screen fixed  justify-center w-full flex items-center -mt-20">
//         <ConfirmModule
//           setConfirmSendMessage={setConfirmSendMessage}
//           confirmSendMessage={confirmSendMessage}
//           setOpenSaveFilterInput={setOpenSaveFilterInput}
//           openSaveFilterInput={openSaveFilterInput}
//           setMessageConfirmed={setMessageConfirmed}
//           messageConfirmed={messageConfirmed}
//           setSaveed={setIsSaveed}
//         />
//         <div className="h-screen absolute -mt-[0px] w-full bg-[#323232] z-[0] opacity-30" />
//       </div>
//       <style>
//         {`
// body {
//   overflow: hidden;
// }
// `}
//       </style>
//     </>
//   );
// }

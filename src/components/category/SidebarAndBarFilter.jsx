import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SidebarFilter from "./SidebarFilter";
import BarFilter from "./BarFilter";
import { useRouter } from "next/router";
import UnitTypeIcons from "./UnitTypeIcons";
import { IoIosStar } from "react-icons/io";
import { LuArrowDownUp } from "react-icons/lu";
import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
import { sortedData } from "@/Shared/search/dropdown/dataDropdown";
import { useGetNameWithValue } from "./FilterHooks";
import ConfirmModule from "./ConfirmModule";
import { saveSearchFilter } from "./api";
import PaginationPage from "@/Shared/Pagination/PaginationSearch";
import RealtyCard from "../realtyCard/RealtyCard";
import ResultNotFound from "./ResultNotFound";

const SidebarAndBarFilter = ({
  governorate,
  region,
  unitType,
  category,
  saleOptions,
  searchKeywords,
  result,
  page,
}) => {
  const router = useRouter();
  /***start init state BarFilter Components*/
  const [pageNumber, setPageNumber] = useState(0); //**********************************
  const [categoryType, setCategoryType] = useState(""); ////xxxxxxxxxxxxxxxxxxxxxxxxxxx
  const [categoryTypeKey, setCategoryTypeKey] = useState(""); //***********************
  const [saleOption, setSaleOption] = useState(""); ////xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const [saleOptionKey, setSaleOptionKey] = useState(""); //***************************
  const [unitTypes, setUnitTypes] = useState(""); ////xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const [unitTypesKey, setUnitTypesKey] = useState(""); //*****************************
  const [locationGovernorate, setLocationGovernorate] = useState(""); ////xxxxxxxxxxxxx
  const [locationRegion, setLocationRegion] = useState(""); ////xxxxxxxxxxxxxxxxxxxxxxx
  const [priceFrom, setPriceFrom] = useState(0); //************************************
  const [priceTo, setPriceTo] = useState(0); //****************************************
  const [numBathrooms, setNumBathrooms] = useState(null); //***************************
  const [numBedrooms, setNumBedrooms] = useState(null); //*****************************
  const [areaFrom, setAreaFrom] = useState(0); //**************************************
  const [areaTo, setAreaTo] = useState(0); //******************************************
  const [finishedOption, setFinishedOption] = useState(""); ////xxxxxxxxxxxxxxxxxxxxxxx
  const [finishedOptionKey, setFinishedOptionKey] = useState(""); //*******************
  const [paymentType, setPaymentType] = useState(""); ////xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const [paymentTypeKey, setPaymentTypeKey] = useState(""); //*************************
  const [sort, setSort] = useState(""); ////xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const [sortKey, setSortKey] = useState(""); //***************************************
  const [propFinancing, setPropFinancing] = useState(""); //***************************
  const [searchKeyword, setSearchKeyword] = useState(""); //***************************
  const [openSaveFilterInput, setOpenSaveFilterInput] = useState(false); ////xxxxxxxxxx
  const [confirmSendMessage, setConfirmSendMessage] = useState(false); ////xxxxxxxxxxxx
  const [isSaveed, setIsSaveed] = useState(false); ////xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const [messageConfirmed, setMessageConfirmed] = useState(""); ////xxxxxxxxxxxxxxxxxxx
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [openFilter, setOpenFilter] = useState(false);
  const [clickOnTap, setClickOnTap] = useState(false);

  // useEffect(() => {

  //   setLocationGovernorate(governorate);
  //   setLocationRegion(region);
  // }, []);
  const firstFetchData = () => {
    do {
      setLocationGovernorate(governorate);
      setLocationRegion(region);
      setUnitTypesKey(unitType);
      setSaleOptionKey(saleOptions);
      setCategoryTypeKey(category);
      setSearchKeyword(searchKeywords.keyword);
      setPropFinancing(searchKeywords.mortgage);
      setAreaFrom(searchKeywords.areaFrom);
      setAreaTo(searchKeywords.areaTo);
      setNumBathrooms(searchKeywords.numBathrooms);
      setNumBedrooms(searchKeywords.numBedrooms);
      setPriceFrom(searchKeywords.priceFrom);
      setPriceTo(searchKeywords.priceTo);
      setPageNumber(searchKeywords.page);
      setFinishedOptionKey(searchKeywords.finishedOption);
      setPaymentTypeKey(searchKeywords.paymentType);
      setSortKey(searchKeywords.sort);
      // setLocationGovernorate(locationGovernorate || governorate);
      // setLocationRegion(locationRegion || region);
      // setUnitTypesKey(unitTypesKey || unitType);
      // setSaleOptionKey(saleOptionKey || saleOptions);
      // setCategoryTypeKey(categoryTypeKey || category);
      // setSearchKeyword(searchKeyword || searchKeywords.keyword);
      // setPropFinancing(propFinancing || searchKeywords.mortgage);
      // setAreaFrom(areaFrom || searchKeywords.areaFrom);
      // setAreaTo(areaTo || searchKeywords.areaTo);
      // setNumBathrooms(numBathrooms || searchKeywords.numBathrooms);
      // setNumBedrooms(numBedrooms || searchKeywords.numBedrooms);
      // setPriceFrom(priceFrom || searchKeywords.priceFrom);
      // setPriceTo(priceTo || searchKeywords.priceTo);
      // setPageNumber(pageNumber || searchKeywords.page);
      // setFinishedOptionKey(finishedOptionKey || searchKeywords.finishedOption);
      // setPaymentTypeKey(paymentTypeKey || searchKeywords.paymentType);
      // setSortKey(sortKey || searchKeywords.sort);
    } while (false);
  };
  useEffect(() => {
    firstFetchData();
  }, []);
  const filterInput = {
    category: categoryTypeKey, //|| category,
    saleOptions: saleOptionKey, //|| saleOptions,
    unitType: unitTypesKey, //|| unitType,
    governorate: locationGovernorate, //|| governorate,
    region: locationRegion, //|| region,
  };
  const queryInput = {
    priceFrom: priceFrom, //|| searchKeywords.priceFrom,
    priceTo: priceTo, //|| searchKeywords.priceTo,
    areaFrom: areaFrom, //|| searchKeywords.areaFrom,
    areaTo: areaTo, //|| searchKeywords.areaTo,
    numBathrooms: numBathrooms, //|| searchKeywords.numBathrooms,
    numBedrooms: numBedrooms, //|| searchKeywords.numBedrooms,
    finishedOption: finishedOptionKey, //|| searchKeywords.finishedOption,
    keyword: searchKeyword, //|| searchKeywords.keyword,
    paymentType: paymentTypeKey, //|| searchKeywords.paymentType,
    page: pageNumber, //|| searchKeywords.page,
    mortgage: propFinancing, //|| searchKeywords.mortgage,
    sort: sortKey, //|| searchKeywords.sort,
  };
  // const routes = {
  //   category,
  //   saleOptions,
  //   unitType,
  // };
  const handleFilterAction =
    // useCallback(
    () => {
      firstFetchData();

      const filteredKeywords = Object.fromEntries(
        Object.entries(queryInput).filter(
          ([_, value]) => value != null && value !== "" && value !== 0
        )
      );

      const filterInputAfter = Object.fromEntries(
        Object.entries(filterInput).filter(
          ([_, value]) => value != null && value !== "" && value !== 0
        )
      );

      const combinedToObject = { ...filterInputAfter };

      const pagesInput3 = Object.keys(combinedToObject)
        .map((key) => `${combinedToObject[key]}`)
        .join("/")
        .toLowerCase();

      const existingQueryParams = new URLSearchParams(
        router.asPath.split("?")[1]
      );

      const combinedKeywords = { ...filteredKeywords };
      for (const [key, value] of Object.entries(combinedKeywords)) {
        existingQueryParams.set(key, value);
      }

      const queryString = existingQueryParams.toString(combinedKeywords);

      router.push(
        `/properties/${pagesInput3 && pagesInput3 + "/"}search?${queryString}`
      );
    };
  // , [
  //   queryInput,
  //   searchKeyword,
  //   filterInput,
  //   propFinancing,
  //   sortKey,
  //   sort,
  //   paymentTypeKey,
  //   paymentType,
  //   finishedOptionKey,
  //   finishedOption,
  //   areaTo,
  //   areaFrom,
  //   numBedrooms,
  //   numBathrooms,
  //   priceTo,
  //   priceFrom,
  //   locationRegion,
  //   unitTypesKey,
  //   locationGovernorate,
  //   unitTypes,
  //   saleOptionKey,
  //   saleOption,
  //   categoryTypeKey,
  //   categoryType,
  //   pageNumber,
  // ]);

  const getNameWithValue = useGetNameWithValue(sortKey);
  // useEffect(() => {

  //   handleFilterAction();
  // }, [sort, pageNumber, clickOnTap]);
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
  // useEffect(() => {
  //   setLocationGovernorate(governorate);
  //   setLocationRegion(region);
  //   setUnitTypesKey(unitType);
  //   setSaleOptionKey(saleOptions);
  //   setCategoryTypeKey(category);
  //   setSearchKeyword(searchKeywords.keyword);
  //   setPropFinancing(searchKeywords.mortgage);
  //   setAreaFrom(searchKeywords.areaFrom);
  //   setAreaTo(searchKeywords.areaTo);
  //   setNumBathrooms(searchKeywords.numBathrooms);
  //   setNumBedrooms(searchKeywords.numBedrooms);
  //   setPriceFrom(searchKeywords.priceFrom);
  //   setPriceTo(searchKeywords.priceTo);
  //   setPageNumber(searchKeywords.page);
  //   setFinishedOptionKey(searchKeywords.finishedOption);
  //   setPaymentTypeKey(searchKeywords.paymentType);
  //   setSortKey(searchKeywords.sort);
  // }, []);
  return (
    <>
      {/* pop UP module after save  */}
      {openSaveFilterInput && (
        <>
          <div className="z-[800] h-screen fixed  justify-center w-full flex items-center -mt-20">
            <ConfirmModule
              setConfirmSendMessage={setConfirmSendMessage}
              confirmSendMessage={confirmSendMessage}
              setOpenSaveFilterInput={setOpenSaveFilterInput}
              openSaveFilterInput={openSaveFilterInput}
              setMessageConfirmed={setMessageConfirmed}
              messageConfirmed={messageConfirmed}
              setSaveed={setIsSaveed}
            />
            <div className="h-screen absolute -mt-[0px] w-full bg-[#323232] z-[0] opacity-30" />
          </div>
          <style>
            {`
      body {
        overflow: hidden;
      }
      `}
          </style>
        </>
      )}
      {/******************************/}
      {/*open sidebar filter */}
      {openFilter && (
        <div className="fixed z-[700] w-full top-0">
          <SidebarFilter
            setPropFinancing={setPropFinancing}
            propFinancing={propFinancing}
            setSearchKeyword={setSearchKeyword}
            searchKeyword={searchKeyword}
            handleFilterAction={handleFilterAction}
            setPaymentTypeKey={setPaymentTypeKey}
            setPaymentType={setPaymentType}
            paymentType={paymentType}
            setFinishedOptionKey={setFinishedOptionKey}
            setFinishedOption={setFinishedOption}
            finishedOption={finishedOption}
            setAreaFrom={setAreaFrom}
            setAreaTo={setAreaTo}
            areaFrom={areaFrom}
            areaTo={areaTo}
            setNumBathrooms={setNumBathrooms}
            setNumBedrooms={setNumBedrooms}
            numBedrooms={numBedrooms}
            numBathrooms={numBathrooms}
            openFilter={openFilter}
            languageIs={language}
            setOpenFilter={setOpenFilter}
            categoryType={categoryType}
            categoryTypeKey={categoryTypeKey}
            setCategoryType={setCategoryType}
            setCategoryTypeKey={setCategoryTypeKey}
            saleOption={saleOption}
            saleOptionKey={saleOptionKey}
            setSaleOption={setSaleOption}
            setSaleOptionKey={setSaleOptionKey}
            setPriceFrom={setPriceFrom}
            setPriceTo={setPriceTo}
            priceFrom={priceFrom}
            priceTo={priceTo}
            filterData={{
              searchKeywords: searchKeywords || "",
              governorate,
              region,
              unitType,
              category,
              saleOptions,
            }}
          />
        </div>
      )}
      {/******************************/}
      {/* bar filter */}
      <div className=" md:container md:mx-auto mx-[10px] z-[500] bg-white flex justify-center sticky top-[80px]">
        <BarFilter
          handleFilterAction={handleFilterAction}
          setOpenFilter={setOpenFilter}
          filterData={{
            searchKeywords,
            governorate,
            region,
            unitType,
            category,
            // paymentOption,
            saleOptions,
          }}
          categoryType={categoryType}
          categoryTypeKey={categoryTypeKey}
          saleOption={saleOption}
          saleOptionKey={saleOptionKey}
          unitTypes={unitTypes}
          unitTypesKey={unitTypesKey}
          locationGovernorate={locationGovernorate}
          locationRegion={locationRegion}
          setCategoryType={setCategoryType}
          setCategoryTypeKey={setCategoryTypeKey}
          setSaleOption={setSaleOption}
          setSaleOptionKey={setSaleOptionKey}
          setUnitTypes={setUnitTypes}
          setUnitTypesKey={setUnitTypesKey}
          setLocationGovernorate={setLocationGovernorate}
          setLocationRegion={setLocationRegion}
        />
      </div>
      {/******************************/}
      {/* unit types  */}
      <div className="md:container md:mx-auto mx-[10px md:block hidden">
        <UnitTypeIcons
          category={categoryTypeKey || category}
          items={result?.aggregation_links}
          setUnitTypesKey={setUnitTypesKey}
          unitTypesKey={unitTypesKey}
          setLocationGovernorate={setLocationGovernorate}
          setLocationRegion={setLocationRegion}
          setCategoryTypeKey={setCategoryTypeKey}
          setClickOnTap={setClickOnTap}
          clickOnTap={clickOnTap}
          locationGovernorate={locationGovernorate}
          locationRegion={locationRegion}
        />
      </div>
      {/******************************/}
      {/* title & save and filter button  */}
      <div className="md:container md:mx-auto mx-[10px flex flex-wrap justify-between items-center ">
        {/*title filter page */}
        <div className=" w-full md:w-6/12">
          {language
            ? result?.supTitleCategory?.ar
            : result?.supTitleCategory?.en}
        </div>
        {/*sorted and save search filter page */}
        <div className="flex z-10 gap-[2rem]  md:justify-end justify-between w-full md:w-6/12">
          <div className="flex  whitespace-nowrap gap-x-3 items-center">
            <span>الترتيب حسب:</span>
            <Dropdown
              baseIcon={<LuArrowDownUp />}
              data={sortedData}
              setValue={setSort}
              setValueKey={setSortKey}
              defaultValue={language ? "الاحدث" : "recent"}
              setSortKey={setSortKey}
              value={
                sort ||
                getNameWithValue({
                  language,
                  type: searchKeywords.sort,
                  dataObject: sortedData,
                })
              }
              dataOptions="text"
            />
          </div>

          <button
            disabled={isSaveed}
            onClick={handleSendSearchFilter}
            className="indent-2 h-[1.875rem] md:h-[3.313rem] md:min-w-[8.438rem] min-w-[6rem]   md:px-3 md:p-2 p-1 px-1 rounded-[1vh] flex items-center gap-x-2 justify-between"
          >
            {isSaveed ? "تم حفظ البحث" : " حفظ البحث"}
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
      {/******************************/}
      {/*filter result  */}
      <div
        className="  md:container mx-[10px] md:mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      gap-x-5 gap-y-3 md:gap-y-16 mt-5 md:mt-12 "
      >
        {result?.categoryResults?.map((property) => (
          <RealtyCard key={property._id} propertyDetails={property} />
        ))}
      </div>
      {result == null && (
        <div className="w-full md:container md:mx-auto mx-[10px">
          <ResultNotFound />
        </div>
      )}
      {/******************************/}
      {/*Pagination   */}
      {result?.totalPages && (
        <div className="my-[4vh]">
          <PaginationPage
            totalPage={result.totalPages}
            currentPage={page}
            setPageNumber={setPageNumber}
          />
        </div>
      )}
      {/******************************/}
    </>
  );
};

export default SidebarAndBarFilter;
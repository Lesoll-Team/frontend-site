import { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";
import { SearchDropdownLocation } from "./SearchDropdownLocation";
import { IoIosArrowDown } from "react-icons/io";
// import DropdownSearchLocation from "./dropdown/DropdownSearchLocation";
// import Dropdown from "./dropdown/Dropdown";
// import DropdownMoreHome from "./dropdown/DropdownMoreHome";
// import Dropdown from "../category/Dropdowns/Dropdown";

export function SearchBarHome() {
  const languageIs = useSelector((state) => state.GlobalState.languageIs);
  const [saleOptions, setSaleOptions] = useState("sale");
  const router = useRouter();
  const [keywords, setKeywords] = useState("");
  const [locationGovernorate, setLocationGovernorate] = useState("");
  const [locationRegion, setLocationRegion] = useState("");
  // const [menuIsOpen, setMenuIsOpen] = useState(false);

  /**contain search data from state
   * */
  const InputKeywords = {
    offer: saleOptions,
    governorate: locationGovernorate,
    region: locationRegion,
    // keyword: keywords,
  };

  // /**
  //  * @function handleSubmitSearch got to searching page with input search
  //  * @param filteredKeywords make filter "InputKeywords" just get value is equal data
  //  * @param queryString make "filteredKeywords" to query text
  //  */
  const handleSubmitSearch = (e) => {
    e?.preventDefault();
    //   //  this step make filter "InputKeywords" just get value is equal data
    const filteredKeywords = Object.fromEntries(
      Object.entries(InputKeywords).filter(
        ([_, value]) => value != null && value !== "" && value !== 0
      )
    );

    //   //  this step make "filteredKeywords" to query text
    const pagesInput = Object.keys(filteredKeywords)
      .map((key) => `${filteredKeywords[key]}`)
      .join("/")
      .toLowerCase();

    const url = `${pagesInput}/search?page=1${
      keywords && "&keyword=" + keywords.split(" ").join("_")
    }`;
    router.push(`/properties/${url}`);
  };

  // start code 3 button in search bar
  const setForSaleButton = (e) => {
    e.preventDefault();
    setSaleOptions("sale");
  };
  const setForRentButton = (e) => {
    e.preventDefault();
    setSaleOptions("rent");
  };
  const setForInvestmentButton = (e) => {
    e.preventDefault();
    setSaleOptions("investment");
  };
  // end code 3 button in search bar

  return (
    <div className=" w-full  flex flex-col justify-end  p-1">
      {/* 3 button in search bar */}
      <div className=" flex gap-x-1  md:w-4/12 w-full justify-between md:items-end">
        <button
          id="Click-Gtm"
          onClick={setForSaleButton}
          className={` ${
            saleOptions == "sale"
              ? "text-lightGreen bg-white"
              : "text-white  bg-lightGreen"
          }  
            w-4/12 h-[30px] rounded-t-md`}
        >
          {languageIs ? "للبيع" : "Buy"}
        </button>
        <button
          id="Click-Gtm"
          onClick={setForRentButton}
          className={` ${
            saleOptions == "rent"
              ? "text-lightGreen bg-white"
              : "text-white  bg-lightGreen"
          } w-4/12 h-[30px] rounded-t-md`}
        >
          {languageIs ? "للإيجار" : "Rent"}
        </button>

        <button
          id="Click-Gtm"
          onClick={setForInvestmentButton}
          className={` ${
            saleOptions == "investment"
              ? "text-lightGreen bg-white"
              : "text-white  bg-lightGreen"
          }
             w-4/12 h-[30px] rounded-t-md`}
        >
          {languageIs ? "للإستثمار" : "Investment"}
        </button>
      </div>

      {/*box search bar */}
      <div
        className={` md:flex md:flex-row flex flex-col  items-center ${
          languageIs
            ? "rounded-br-sm rounded-l-sm md:rounded-br-md md:rounded-l-md"
            : "rounded-bl-md rounded-r-md md:rounded-bl-md md:rounded-r-md"
        }  bg-white  p-[20px] drop-shadow-md  sm:drop-shadow-md md:h-auto h-[290px]  md:gap-x-5 gap-y-[28px]
          `}
      >
        {/*search box */}
        <div className="flex flex-col md:w-5/12 w-full  min-h-[63px] md:h-full ">
          <h6 className="text-gray2 font-medium">بحث بالكلمات المميزة</h6>
          <div className=" border-1 md:h-full min-h-[33px] bg-white border-gray1 px-1 rounded-[0.5vh] flex items-center">
            <input
              type="text"
              placeholder={
                languageIs
                  ? "بحث : بالكلمات المميزة ."
                  : "Search by special words..."
              }
              onChange={(e) => setKeywords(e.target.value)}
              autoComplete="off"
              className=" rounded-[1vw] w-full font-inter h-full  text-black   active:outline-none indent-1 hover:outline-none focus:outline-none"
            />
            <AiOutlineSearch className="text-grayText md:w-[2vw] md:h-[2vw] w-[3vw] h-[3vw]" />
          </div>
        </div>
        {/*search with location */}
        <div className="flex flex-col md:w-5/12  w-full min-h-[63px] md:h-full ">
          <h6 className="text-gray2 font-medium">بحث بالمنطقة</h6>
          <div className="  md:h-full min-h-[33px]  bg-white border-gray1 border-b px-1 rounded-[0.5vh] flex items-center">
            <SearchDropdownLocation
              // defaultGovernorate={filterData.governorate}
              // defaultRegion={filterData.region}
              setLocationGovernorate={setLocationGovernorate}
              setLocationRegion={setLocationRegion}
            />
            <IoIosArrowDown className={`text-gray2 duration-150 `} />
            {/* <input
              type="text"
              placeholder={
                languageIs
                  ? "بحث : بالكلمات المميزة ."
                  : "Search by special words..."
              }
              autoComplete="off"
              className=" rounded-[1vw] w-full font-inter h-full  text-black   active:outline-none indent-1 hover:outline-none focus:outline-none"
            /> */}
            {/* <AiOutlineSearch className="text-grayText md:w-[2vw] md:h-[2vw] w-[3vw] h-[3vw]" /> */}
          </div>
        </div>

        <div className="flex min-h-[40px] md:h-full md:w-2/12 w-8/12  ">
          <button
            id="Click-Gtm"
            onClick={handleSubmitSearch}
            className={`bg-lightGreen text-white font-inter font-bold select-none
          w-full rounded-[1vh]`}
          >
            {languageIs ? "بـحـث" : "Search"}
          </button>
        </div>
      </div>
    </div>
  );
}

/*
            /  
            //    languageIs
            //       "rounded-sm md:rounded-l-lg  lg:rounded-l-lg"
            //       "rounded-sm md:rounded-r-lg  lg:rounded-r-lg"
            //
            */
/*search dropdown */
//h-[30px] sm:h-[45px] md:h-[55px] xl:h-[70px] 2xl:h-[80px]

// onClick={handleSubmitSearch}
//w-[62px] md:w-[100px] lg:w-[140px]  xl:w-[177px]
//   text-[13px] md:text-[16px] lg:text-[20px] xl:text-[25px] 2xl:text-[31px]
/* <div className=" w-[30vw] md:py-2 p-1 flex items-center h-full">
            <DropdownSearchLocation
              setKeywords={setKeywords}
              setLocationGovernorate={setLocationGovernorate}
              setLocationRegion={setLocationRegion}
              output="giza-haram"
            />
          </div> */

/*search button */

//      {/* <div className="  w-full  flex flex-col justify-end"> */}

// {/* </div> */}

// <div
//   className="
//     w-[52px] xl:w-[69px] 2xl:w-[92px] bg-red-200 h-full flex items-center justify-center"
// ></div>

import { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";
import { SearchDropdownLocation } from "./SearchDropdownLocation";
import { IoIosArrowDown } from "react-icons/io";

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
      <div className=" flex gap-x-1 font-inter md:w-4/12 w-full justify-between md:items-end">
        <button
          id="Click-Gtm"
          onClick={setForSaleButton}
          className={` ${
            saleOptions == "sale"
              ? "text-lightGreen bg-white"
              : "text-white  bg-lightGreen"
          }  
            w-4/12 md:h-[40px] h-[30px] rounded-t-[8px] text-[12px] md:text-[20px]`}
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
          } w-4/12 md:h-[40px] h-[30px] rounded-t-[8px] text-[12px] md:text-[20px]`}
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
             w-4/12 md:h-[40px] h-[30px] rounded-t-[8px] text-[12px] md:text-[20px]`}
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
        }  bg-white  md:py-[23px] py-[20px] md:px-[39px] px-[20px] drop-shadow-md  sm:drop-shadow-md h-[257px] md:h-[130px]  md:gap-x-[64px] md:gap-y-[0px] gap-y-[28px]
          `}
      >
        {/*search box */}
        <div className="flex flex-col md:w-[520px] w-full gap-y-[8px] md:gap-y-[12px]  md:h-[84px] h-[63px]  ">
          <h6 className="text-gray2 font-bold text-[12px] md:text-[20px]">
            بحث بالكلمات المميزة
          </h6>
          <div className=" border-1 md:h-full min-h-[40px] bg-white rounded-[4px] flex items-center border-gray1 px-1 ">
            <input
              type="text"
              onChange={(e) => setKeywords(e.target.value)}
              autoComplete="off"
              className=" rounded-[1vw] w-full font-inter h-full  text-black   active:outline-none indent-1 hover:outline-none focus:outline-none"
            />
            <AiOutlineSearch
              className="text-[#656565] md:ml-[24px] ml-[8px] md:text-3xl text-xl"
              // md:w-[full] md:h-[2vw] w-[3vw] h-[3vw]
            />
          </div>
        </div>
        {/*search with location */}
        {/**flex flex-col md:w-[52px]  w-full min-h-[63px] md:h-full */}
        <div className=" flex flex-col md:w-[328px] w-full gap-y-[8px] md:gap-y-[12px]  md:h-[84px] h-[63px]  ">
          <h6 className="text-gray2 font-bold text-[12px] md:text-[20px]">
            بحث بالمنطقة
          </h6>
          <div className="md:h-full min-h-[40px] bg-white rounded-[4px] flex items-center border-gray1 border-b px-1 ">
            <SearchDropdownLocation
              // defaultGovernorate={filterData.governorate}
              // defaultRegion={filterData.region}
              setLocationGovernorate={setLocationGovernorate}
              setLocationRegion={setLocationRegion}
            />
            <IoIosArrowDown
              className={`text-[#656565]  md:text-3xl text-xl duration-150 `}
            />
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

        <div className="flex h-[40px] md:h-[80px] md:w-[177px] w-8/12  ">
          <button
            id="Click-Gtm"
            onClick={handleSubmitSearch}
            className={`bg-lightGreen text-white text-[14px] md:text-[25px]  font-bold select-none 
          w-full rounded-[8px]`}
          >
            {languageIs ? "بـحـث" : "Search"}
          </button>
        </div>
      </div>
    </div>
  );
}

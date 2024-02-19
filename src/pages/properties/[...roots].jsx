import {
  categoryType,
  categoryUnitType,
  paymentMethodData,
} from "@/Shared/search/dropdown/dataDropdown";
import { governorateData } from "@/Shared/search/dropdown/governorateLocation";
import { regionData } from "@/Shared/search/dropdown/regionLocation";
import SearchFilter from "@/components/category/Filter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
/**
 * React functional component for the search page.
 * @component
 * @param {Object} props - The props object containing data for the page.
 * @param {string[]} props.roots - The routers pages.
 * @param {Object[]} props.governorateLocation - The governorate object.
 * @param {string[]} props.categoryIs - The category data type.
 * @param {Object[]} props.regionLocation - The region object.
 * @param {string[]} props.unitTypeInCategories - The category unit type data.
 * @param {boolean} props.urlIncludeSearch - A boolean indicating whether "search" is included in roots.
 * @returns {JSX.Element} - The JSX element representing the search page.
 */
const SearchPage = ({ roots, governorateLocation, regionLocation }) => {
  const router = useRouter();
  const urlObject = router.query;
  const [mapGovernorates, setMapGovernorates] = useState(new Map()); //{ red_sea => 'red_sea',..etc}
  const [mapRegion, setMapRegion] = useState(new Map()); //{ red_sea => 'red_sea',..etc}

  const [searchKeywords, setSearchKeywords] = useState({}); //{keyword: 'value'}
  const [governorate, setGovernorate] = useState("");
  const [region, setRegion] = useState("");
  const [unitType, setUnitType] = useState("");
  const [category, setCategory] = useState("");
  const [paymentOption, setPaymentOption] = useState("");

  /** filter search query from url
   *  const [category] = roots; //["category", "unit Type", "governorate", "region"];
   */
  useEffect(() => {
    const newSearchKeywords = {};
    for (const key in urlObject) {
      if (key !== "roots") {
        // Use square brackets to access property dynamically
        newSearchKeywords[key] = urlObject[key];
      }
    }
    // Use the spread operator to update the state
    setSearchKeywords((prevSearchKeywords) => ({
      ...prevSearchKeywords,
      ...newSearchKeywords,
    }));
  }, [urlObject]);
  /**
   *              key       value
   *               ^          ^
   *return => { red_sea => 'red_sea',..etc}
   **/
  useEffect(() => {
    const newMapGovernorates = new Map();
    const newMapregion = new Map();

    governorateLocation.forEach((item) => {
      newMapGovernorates.set(
        item.governorate_name_en.split(" ").join("_").toLowerCase(), //say if governorate value='Red Sea' => 'red_sea'
        {
          name_ar: item.governorate_name_ar.split(" ").join("_"),
          name_en: item.governorate_name_en.split(" ").join("_").toLowerCase(), //say if region value='Red Sea' => 'red_sea'
        }
      );
    });

    regionLocation.forEach((item) => {
      newMapregion.set(item.city_name_en.split(" ").join("_").toLowerCase(), {
        name_ar: item.city_name_ar.split(" ").join("_"),
        name_en: item.city_name_en.split(" ").join("_").toLowerCase(), //say if Sayeda Zeinab => sayeda_zeinab
      });
    });

    setMapGovernorates(newMapGovernorates);
    setMapRegion(newMapregion);
  }, []);

  useEffect(() => {
    roots.forEach((value) => {
      if (paymentMethodData.ar.some((item) => item.value === value)) {
        setPaymentOption(value);
      }
      if (mapGovernorates.get(value)) {
        setGovernorate(value);
      }
      if (mapRegion.get(value)) {
        setRegion(value);
      }
      if (categoryUnitType.includes(value)) {
        setUnitType(value);
      }
      if (categoryType.includes(value)) {
        setCategory(value);
      }
    });
  }, [
    mapGovernorates,
    categoryUnitType,
    paymentMethodData,
    categoryType,
    mapRegion,
  ]);
  return (
    <div className="min-h-[90vh] container mx-auto relative">
      <div className="  z-[500]  bg-gray-100 flex justify-center sticky top-[80px]">
        <SearchFilter
          filterData={{
            searchKeywords,
            governorate,
            region,
            unitType,
            category,
            paymentOption,
          }}
        />
      </div>

      <h6>category : {category}</h6>
      <h6>unitType : {unitType}</h6>
      <h6>payment option : {paymentOption}</h6>
      <h6>governorate : {governorate.split("_").join(" ")}</h6>
      <h6>region : {region.split("_").join(" ")}</h6>
      <h6>
        search keywords : {searchKeywords && JSON.stringify(searchKeywords)}
      </h6>
    </div>
  );
};
export default SearchPage;

export async function getServerSideProps({ params }) {
  const { roots } = params; // routers pages
  const governorateLocation = governorateData; //governorate object
  const regionLocation = regionData; //region object
  return {
    props: {
      roots,
      governorateLocation,
      regionLocation,
    },
  };
}
/**
 * العرض او نظام البيع  <BsCashCoin />   //<BsCash />
 * نوع العقار <BsHouses />
 * المساحة || الايكون موجود فى كمبوننت الكارد
 * الغرف //  /// // /// // // // / / 
 * الحمامات / / // // / / / / / / / / / / / / / 
 * نوع التشطيب  <PiPaintBrushBroad />
 * الدور <TbStairsUp />
 * سنة التسليم  <TbCalendarCheck />
 * مسجل ف الشهر العقاري   <FaRegStickyNote />  <LiaFileSignatureSolid />
 * الشقة مفروشة <PiArmchair />  /// <LuArmchair />

 *
 */
/**
 *   // const categoryIs = categoryType; //category data type
  // const urlIncludeSearch = params.roots.includes("search"); //true or false
  // const unitTypeInCategories = categoryUnitType; //category unit type data
  // categoryIs,
  // unitTypeInCategories,
  // urlIncludeSearch,
 *   // const governorateHas =
  //   governorateName && mapGovernorates.has(governorateName.toLowerCase());
  // const regionHas = regionName && mapRegion.has(regionName.toLowerCase());
  // const categoryEqual = category && categoryIs.includes(category);
  // const unitCategoryType = unitType && unitTypeInCategories.includes(unitType);
  // useEffect(() => {
  //   roots.forEach((currentValue) => {
  //     if (mapGovernorates.has(currentValue.toLowerCase())) {
  //       console.log(
  //         `Value ${currentValue} is present in the MapConstructor with value ${mapGovernorates.get(
  //           currentValue.toLowerCase()
  //         )}`
  //       );
  //     } else console.log(mapGovernorates.has(currentValue));
  //   });
  // }, []);
  // console.table({
  //   governorateHas: governorateHas,
  //   regionHas: regionHas,
  //   categoryEqual: categoryEqual,
  //   unitCategoryType: unitCategoryType,
  // });
  // console.log(roots);
 */

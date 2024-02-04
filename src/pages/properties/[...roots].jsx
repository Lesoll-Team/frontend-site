import {
  categoryType,
  categoryUnitType,
} from "@/Shared/search/dropdown/dataDropdown";
import { governorateData } from "@/Shared/search/dropdown/governorateLocation";
import { regionData } from "@/Shared/search/dropdown/regionLocation";
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
const SearchPage = ({
  roots,
  governorateLocation,
  regionLocation,
  // categoryIs,
  // unitTypeInCategories,
  // urlIncludeSearch,
}) => {
  const router = useRouter();
  const urlObject = router.query;
  const [mapGovernorates, setMapGovernorates] = useState(new Map()); //{ red_sea => 'red_sea',..etc}
  const [mapRegion, setMapRegion] = useState(new Map()); //{ red_sea => 'red_sea',..etc}

  const [searchKeywords, setSearchKeywords] = useState({}); //{keyword: 'value'}
  const [governorate, setGovernorate] = useState("");
  const [region, setRegion] = useState("");
  const [unitType, setUnitType] = useState("");
  const [category, setCategory] = useState("");

  // const [category] = roots; //["category", "unit Type", "governorate", "region"];

  /**
   *filter search query from url
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
        //say if Sayeda Zeinab => sayeda_zeinab
        name_ar: item.city_name_ar.split(" ").join("_"),
        name_en: item.city_name_en.split(" ").join("_").toLowerCase(), //say if Sayeda Zeinab => sayeda_zeinab
      });
    });

    setMapGovernorates(newMapGovernorates);
    setMapRegion(newMapregion);
  }, []);
  // const governorateHas =
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
  useEffect(() => {
    roots.forEach((value) => {
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
  }, [mapGovernorates, categoryUnitType, categoryType, mapRegion]);
  return (
    <center className="min-h-[90vh]">
      <h6>category : {category}</h6>
      <h6>unitType : {unitType}</h6>
      <h6>governorate : {governorate.split("_").join(" ")}</h6>
      <h6>region : {region.split("_").join(" ")}</h6>
      <h6>
        search keywords : {searchKeywords && "yes"} ={" "}
        {JSON.stringify(searchKeywords)}
      </h6>
    </center>
  );
};
export default SearchPage;
export async function getServerSideProps({ params }) {
  const { roots } = params; // routers pages
  // const urlIncludeSearch = params.roots.includes("search"); //true or false
  const governorateLocation = governorateData; //governorate object
  const regionLocation = regionData; //region object
  // const categoryIs = categoryType; //category data type
  // const unitTypeInCategories = categoryUnitType; //category unit type data
  return {
    props: {
      roots,
      governorateLocation,
      regionLocation,
      // categoryIs,
      // unitTypeInCategories,
      // urlIncludeSearch,
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

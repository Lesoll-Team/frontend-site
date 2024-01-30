import {
  categoryType,
  categoryUnitType,
} from "@/Shared/search/dropdown/dataDropdown";
import { governorateData } from "@/Shared/search/dropdown/governorateLocation";
import { regionData } from "@/Shared/search/dropdown/regionLocation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const SearchPage = ({
  roots,
  governorateLocation,
  categoryIs,
  regionLocation,
  unitTypeInCategories,
}) => {
  const [searchKeywords, setSearchKeywords] = useState({});

  const router = useRouter();
  const urlObject = router.query;
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

  const [mapGovernorates, setMapGovernorates] = useState(new Map());
  const [mapRegion, setMapRegion] = useState(new Map());
  /**
   * Destructures the `roots` array to extract governorate and region names.
   * @type {string[]} roots - An array containing governorate and region names.
   * @type {string} governorateName - The name of the governorate extracted from `roots`.
   * @type {string} regionName - The name of the region extracted from `roots`.
   */
  const [category, unitType, governorateName, regionName] = roots;
  useEffect(() => {
    const newMapGovernorates = new Map();
    const newMapregion = new Map();

    governorateLocation.forEach((item) => {
      newMapGovernorates.set(
        item.governorate_name_en.split(" ").join("_").toLowerCase(), //say if Red Sea => red_sea
        {
          name_ar: item.governorate_name_ar.split(" ").join("_"),
          name_en: item.governorate_name_en.split(" ").join("_").toLowerCase(), //say if Red Sea => red_sea
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
  const governorateHas =
    governorateName && mapGovernorates.has(governorateName.toLowerCase());
  const regionHas = regionName && mapRegion.has(regionName.toLowerCase());
  const categoryEqual = category && categoryIs.includes(category);
  const unitCategoryType = unitType && unitTypeInCategories.includes(unitType);
  console.log(searchKeywords);
  return (
    <center className="min-h-[90vh]">
      <h6>category : {categoryEqual && category}</h6>
      <h6>unitType : {unitCategoryType && unitType}</h6>
      <h6>
        governorate : {governorateHas && governorateName.split("_").join(" ")}
      </h6>
      <h6>region : {regionHas && regionName.split("_").join(" ")}</h6>
      <h6>search keywords : {searchKeywords && "yes"}</h6>
    </center>
  );
};

export default SearchPage;

export async function getServerSideProps({ params }) {
  const { roots } = params;
  const governorateLocation = governorateData;
  const regionLocation = regionData;
  const categoryIs = categoryType;
  const unitTypeInCategories = categoryUnitType;
  return {
    props: {
      roots,
      governorateLocation,
      regionLocation,
      categoryIs,
      unitTypeInCategories,
    },
  };
}

/**
 * propertyType={sale,rent,investment,commercial ,graves,compounds,lands}
 * governorates={}
 * region={}
 * unitTypeData={}
 */
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

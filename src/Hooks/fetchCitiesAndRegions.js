import { regionData } from "@/Shared/search/dropdown/regionLocation";

const { governorateData } = require("@/Shared/search/dropdown/governorateLocation");

export const useGetCity = (cityKey) => {
    const citiesMap = new Map();
    governorateData.map((city) => {
        citiesMap.set(
            city.governorate_name_en.toLowerCase().split(" ").join("_"),
            {
                name_ar: city.governorate_name_ar,
                name_en: city.governorate_name_en,
            })
    })

    return citiesMap.get(cityKey)

}

export const useGetRegion = (regionKey) => {
    const regionsMap = new Map();
    regionData.map((region) => {
        regionsMap.set(
            region.city_name_en.toLowerCase().split(" ").join("_"),
            {
                name_ar: region.city_name_ar,
                name_en: region.city_name_en,
            })
    })

    return regionsMap.get(regionKey)

}
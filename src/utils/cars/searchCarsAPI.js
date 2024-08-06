import { debounce } from "@/Functions/debouncedSearch";
import axios from "axios";
export const fetchBrandNameData = async ({ brand, page = 1 }) => {
  const response = await axios.get(
    "http://ec2-3-227-150-208.compute-1.amazonaws.com:8000/v2/api/car/search/brand?limit=20",
    {
      params: { brand, page },
    },
  );
  return response.data;
};
const fetchModelNameData = async ({ number }) => {
  const response = await axios.get(
    "http://ec2-3-227-150-208.compute-1.amazonaws.com:8000/v2/api/car/search/model",
    {
      params: { number, limit: 100 },
    },
  );
  return response.data.result;
};

export const getModelName = debounce(fetchModelNameData, 1050);
// export const getBrandName = debounce(fetchBrandNameData, 1050);

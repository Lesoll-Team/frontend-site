import axiosInstance from "@/Shared/axiosInterceptorInstance";
import Cookies from "js-cookie";

export async function foundKeyword(keyword, page) {
  try {
    const userToken = Cookies.get("userToken");

    const response = await axiosInstance.get(
      `/search/get?${keyword}&limit=30&page=${
        page || 1
      }&local_storage_device_id=${userToken ? userToken : undefined}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getGovernorate() {
  try {
    const response = await axiosInstance.get(
      `/admin/governorate/get-all-gov-and-reg`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

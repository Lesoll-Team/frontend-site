import axiosInstance from "@/Shared/axiosInterceptorInstance";
import Cookies from "js-cookie";

export async function saveSearchFilter({
  confirmSendMessage,
  messageConfirmed,
  slug,
}) {
  try {
    const userToken = Cookies.get("userToken");

    const response = await axiosInstance.post(
      `/search/save-search?token=${userToken}`,
      {
        title: messageConfirmed,
        slug,
        sendEmail: confirmSendMessage,
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function foundKeyword(keyword) {
  try {
    const queryString = Object.keys(keyword)
      .map((key) => `${key}=${encodeURIComponent(keyword[key])}`)
      .join("&");

    const response = await axiosInstance.get(
      `/category/get-data?${queryString}&limit=18`,
    );
    return response;
  } catch (error) {
    console.log("error in foundKeyword");
  }
}

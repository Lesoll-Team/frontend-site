import axiosInstance from "@/Shared/axiosInterceptorInstance";

export async function saveSearchFilter({
  confirmSendMessage,
  messageConfirmed,
  slug,
}) {
  try {
    const response = await axiosInstance.post(`/search/save-search`, {
      title: messageConfirmed,
      slug,
      sendEmail: confirmSendMessage,
    });
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

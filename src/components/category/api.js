import axios from "axios";

export async function saveSearchFilter({
  confirmSendMessage,
  messageConfirmed,
  slug,
}) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/search/save-search?token=${userToken}`,
      {
        title: messageConfirmed,
        slug,
        sendEmail: confirmSendMessage,
        supTitleEn: "s",
        supTitleAr: "s",
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function foundKeyword(keyword) {
  try {
    const filteredKeywords = Object.fromEntries(
      Object.entries(keyword).filter(
        ([_, value]) =>
          value != null && value !== "" && value !== " " && value !== 0
      )
    );

    const queryString = Object.keys(filteredKeywords)
      .map((key) => `${key}=${encodeURIComponent(filteredKeywords[key])}`)
      .join("&");
    console.log("queryStringsss", queryString);
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/category/get-data?${queryString}&limit=30`
    );
    return response;
  } catch (error) {
    console.log(
      "response error message in function foundKeyword",
      error.response
    );
  }
}
// const userToken = JSON.parse(localStorage.getItem("userToken"));
//&local_storage_device_id=${userToken}
/**
 *       const filteredKeywords = Object.fromEntries(
        Object.entries(InputKeywords).filter(
          ([_, value]) => value != null && value !== "" && value !== 0
        )
      );
      const queryString = Object.keys(filteredKeywords)
        .map((key) => `${key}=${encodeURIComponent(filteredKeywords[key])}`)
        .join("&");
 */

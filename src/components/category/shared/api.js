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
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function foundKeyword(keyword) {
  // console.log("looking printing");
  try {
    const queryString = Object.keys(keyword)
      .map((key) => `${key}=${encodeURIComponent(keyword[key])}`)
      .join("&");

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/category/get-data?${queryString}&limit=18`
    );
    return response;
  } catch (error) {
    console.log("error in foundKeyword");
  }
}

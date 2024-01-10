import axios from "axios";

export async function foundKeyword(keyword, page) {
  try {
        const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/search/get?${keyword}&limit=30&page=${
        page || 1
      }&local_storage_device_id=${userToken ? userToken : undefined}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}


export async function getGovernorate() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/governorate/get-all-gov-and-reg`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

import axios from "axios";

export async function foundKeyword(keyword, page) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/search/get?${keyword}&limit=30&page=${
        page || 1
      }`
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getGovernorate() {
  try {
    const response = await axios.get(
      "http://ec2-3-87-159-22.compute-1.amazonaws.com:8000/api/admin/governorate/getall"
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

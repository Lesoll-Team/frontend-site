import axios from "axios";

export async function foundKeyword(keyword, page) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/search/get?${keyword}&limit=30&page=${page || 1}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}



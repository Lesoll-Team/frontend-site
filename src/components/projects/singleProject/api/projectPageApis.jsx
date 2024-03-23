import axios from "axios";

export async function getRecommendedProjects({ setProjects }) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/property/get-home-projects?limit=3&page=1`
    );
    if (response.status === 200 || response.status === 201) {
      setProjects(response.data.result);
    }
    return response.data;
  } catch (error) {
    throw error.response;
  }
}

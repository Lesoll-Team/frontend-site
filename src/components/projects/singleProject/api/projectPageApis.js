import axiosInstance from "@/Shared/axiosInterceptorInstance";

export async function getRecommendedProjects({ setProjects }) {
  try {
    const response = await axiosInstance.get(
      `/property/get-home-projects?limit=3&page=1`,
    );
    if (response.status === 200 || response.status === 201) {
      setProjects(response.data.result);
    }
    return response.data;
  } catch (error) {
    throw error.response;
  }
}

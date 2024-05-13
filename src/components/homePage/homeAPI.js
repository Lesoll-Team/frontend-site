import axiosInstance from "@/Shared/axiosInterceptorInstance";

export async function getFeaturesCards() {
  try {
    const specialData = await axiosInstance.get(
      `/property/get-home-projects?limit=3&page=1`,
    );
    return specialData.data;
  } catch (error) {
    return null;
  }
}

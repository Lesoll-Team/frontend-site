import axiosInstance from "@/Shared/axiosInterceptorInstance";

export async function getGovernorate() {
  try {
    const response = await axiosInstance.get(
      `/admin/governorate/get-all-gov-and-reg`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

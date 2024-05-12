import axiosInstance from "@/Shared/axiosInterceptorInstance";

export async function fetchAllProperty() {
  try {
    const response = await axiosInstance.post(`/admin/blog/add`, blogData);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

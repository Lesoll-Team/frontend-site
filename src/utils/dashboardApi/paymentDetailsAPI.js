import axiosInstance from "@/Shared/axiosInterceptorInstance";

export async function getUsersVIP() {
  try {
    const response = await axiosInstance.get(`/admin/dashboard/payment/users`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function getUsersVIPPackage({ packageId }) {
  try {
    const response = await axiosInstance.get(
      `/admin/dashboard/package/${packageId}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function getUserDataVIP({ userId }) {
  try {
    const response = await axiosInstance.get(
      `/admin/dashboard/package/user/${userId}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

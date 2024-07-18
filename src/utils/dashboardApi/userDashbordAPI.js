import axiosInstance from "@/Shared/axiosInterceptorInstance";

export async function pinUserProfileInHome({ userId }) {
  try {
    const response = await axiosInstance.patch(
      `/admin/dashboard/pin-account/${userId}`,
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function unpinUserProfileInHome({ userId }) {
  try {
    const response = await axiosInstance.patch(
      `/admin/dashboard/unpin-account/${userId}`,
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function editUserInfoProfile({ userId, changesData }) {
  try {
    const response = await axiosInstance.put(
      `/admin/update-user/${userId}`,
      changesData,
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
//PUT: /api/admin/update/user/:id + token

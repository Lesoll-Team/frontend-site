import axiosInstance from "@/Shared/axiosInterceptorInstance";

export async function getAllUsers(rowsPerPage, page) {
  try {
    const response = await axiosInstance.get(
      `/admin/getallusers?limit=${rowsPerPage}&page=${page}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.massage;
  }
}

export async function searchUsersApi(rowsPerPage, page, filterUser) {
  try {
    const response = await axiosInstance.get(
      `/admin/search/searchuser?keywords=${filterUser}&limit=${rowsPerPage}&page=${page}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.massage;
  }
}

export async function deleteUsers(userID) {
  try {
    const response = await axiosInstance.delete(`/admin/delete/user/${userID}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function updateUsers(userID, newData) {
  try {
    const response = await axiosInstance.put(
      `/admin/update/user/${userID}`,
      newData,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function banUser(userID) {
  try {
    const response = await axiosInstance.patch(`/admin/ban/user/${userID}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

//BanUser: PATCH /api/admin/ban/user/:id

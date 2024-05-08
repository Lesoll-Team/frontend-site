import axiosInstance from "@/Shared/axiosInterceptorInstance";
import Cookies from "js-cookie";

export async function getAllUsers(rowsPerPage, page, userToken) {
  try {
    const response = await axiosInstance.get(
      `/admin/getallusers?limit=${rowsPerPage}&page=${page}`,
      {
        headers: {
          token: userToken,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.massage;
  }
}

export async function searchUsersApi(rowsPerPage, page, filterUser) {
  const userToken = Cookies.get("userToken");
  try {
    const response = await axiosInstance.get(
      `/admin/search/searchuser?keywords=${filterUser}&limit=${rowsPerPage}&page=${page}`,
      {
        headers: {
          token: userToken,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.massage;
  }
}

export async function deleteUsers(userID) {
  const userToken = Cookies.get("userToken");
  try {
    const response = await axiosInstance.delete(
      `/admin/delete/user/${userID}`,
      {
        headers: {
          token: userToken,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function updateUsers(userID, newData) {
  const userToken = Cookies.get("userToken");
  try {
    const response = await axiosInstance.put(
      `/admin/update/user/${userID}`,
      newData,
      {
        headers: {
          token: userToken,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function banUser(userID) {
  const userToken = Cookies.get("userToken");
  try {
    const response = await axiosInstance.patch(
      `/admin/ban/user/${userID}?token=${userToken}`,
      // {
      //   headers: {
      //     token: userToken,
      //   },
      // }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

//BanUser: PATCH /api/admin/ban/user/:id

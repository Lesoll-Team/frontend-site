import Cookies from "js-cookie";
import axiosInstance from "@/Shared/axiosInterceptorInstance";
import { formatDate } from "./FormateData";

export async function registerUser(userData) {
  try {
    const response = await axiosInstance.post(`/auth/register`, userData); // register
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function loginUser(userData) {
  try {
    const response = await axiosInstance.post(`/auth/login`, userData); //login
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function logoutUser() {
  Cookies.remove("userToken");
  Cookies.remove("jwt");
  await axiosInstance.post(`/auth/logout`);
}

export async function updateUserDataInfo(userID, userUpdate) {
  try {
    const response = await axiosInstance.put(
      `/user/update/${userID}`,
      userUpdate,
    );
    return response.data.userData;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function changePassword(userNewPassword) {
  try {
    const response = await axiosInstance.patch(
      `/user/update/changepassword`,
      userNewPassword,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function verifyEmail() {
  try {
    const response = await axiosInstance.post(`/user/sendverify`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function sendCodeVerifyEmail(codenumber) {
  try {
    const response = await axiosInstance.post(`/user/getverify`, codenumber);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function sendResetNewPassword(userNewPassword) {
  try {
    const response = await axiosInstance.patch(
      `/user/changepassword?chps=${userNewPassword.token}`,
      { password: userNewPassword.password },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function signWithGoogle() {
  try {
    const response = await axiosInstance.get(`/auth/google`);
    const authUrl = response.data.Link;
    window.location.href = authUrl;
  } catch (error) {
    console.log(error);
  }
}
export async function GetActiveProp(page) {
  try {
    const response = await axiosInstance.get(
      `/user/confirmedprofile?limit=9&page=${page}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function ViewUser(username) {
  try {
    const response = await axiosInstance.get(`/user/uservisit/${username}`);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getUserDataDashboard(username) {
  try {
    const response = await axiosInstance.get(
      `/admin/dashboard/user-data/${username}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function getUserPropertiesDashboard(username, page, propType) {
  try {
    const response = await axiosInstance.get(
      `/admin/dashboard/user-properties/${username}?limit=9&page=${page || 1}&of=${propType}`,
    );
    return response.data;
  } catch (error) {
    if (error.response.data.code == 400) {
      error.response.data.getConfirmedRealty = [];
      return error.response.data;
    } else throw error.response.data;
  }
}

export const downloadUserLog = async (id, name) => {
  const res = await axiosInstance.get(
    `/admin/generated/generated-single-user-excel/${id}`,
    {
      responseType: "arraybuffer",
    }, // {
  );
  const blob = new Blob([res.data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = `${name}.xlsx`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export async function getOutSoldProperties() {
  try {
    const response = await axiosInstance.get(`/user/sold/get`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getPendingProperties() {
  try {
    const response = await axiosInstance.get(`/user/pendingrealtyprofile`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function getUserOffline({ url }) {
  const data = new Date();
  const { formattedTime } = formatDate(data);
  try {
    const userToken = Cookies.get("userToken");
    const response = await axiosInstance.get(
      `/s?local_storage_device_id=${
        userToken ? userToken : undefined
      }&urlString=${url}?time=${formattedTime}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

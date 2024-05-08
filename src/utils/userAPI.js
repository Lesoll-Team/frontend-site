import Cookies from "js-cookie";
import axiosInstance from "@/Shared/axiosInterceptorInstance";
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
  await axiosInstance.post(`/auth/logout`); //login
}

export async function getUserData() {
  const userToken = Cookies.get("userToken");
  if (userToken) {
    try {
      const response = await axiosInstance.get(
        `/user/profile?token=${userToken}`,
      );
      return response.data.userData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  return null;
}

export async function updateUserDataInfo(userID, userUpdate) {
  // if (userToken != null || userID != null || userUpdate != null) {
  const userToken = Cookies.get("userToken");

  try {
    const response = await axiosInstance.put(
      `/user/update/${userID}`,
      userUpdate,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          token: userToken,
        },
      },
    );
    return response.data.userData;
  } catch (error) {
    console.error(error);
    return null;
  }
  // }
  // return null;
}

export async function changePassword(userNewPassword) {
  const userToken = Cookies.get("userToken");

  try {
    const response = await axiosInstance.patch(
      `/user/update/changepassword`,
      userNewPassword,
      {
        headers: {
          token: userToken,
        },
      },
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function verifyEmail() {
  const userToken = Cookies.get("userToken");
  try {
    const response = await axiosInstance.post(`/user/sendverify`, {
      headers: {
        token: userToken,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function sendCodeVerifyEmail(codenumber) {
  const userToken = Cookies.get("userToken");
  try {
    const response = await axiosInstance.post(`/user/getverify`, codenumber, {
      headers: {
        token: userToken,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function sendEmailResetPassword(email) {
  const userToken = Cookies.get("userToken");
  try {
    const response = await axiosInstance.post(
      `/user/reset-password?token=${userToken}&lang=AR`,
      email,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function sendResetNewPassword(userNewPassword) {
  // const userToken = Cookies.get("userToken");
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
      {
        headers: {
          token: JSON.parse(localStorage.getItem("userToken")),
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function updateGoogleData({ data, token }) {
  try {
    // const response =
    await axiosInstance.put(`/auth/update-users-google?token=${token}`, data);
  } catch (error) {
    console.log(error);
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
export async function ViewUserProperties(username, page, type) {
  try {
    const response = await axiosInstance.get(
      `/user/uservisit-property/${username}?limit=12&page=${page}&of=${type}`,
    );

    return response.data;
  } catch (error) {
    if (error.response.status === 400) {
      error.response.getConfirmedRealty = [];
      return error.response;
    } else {
      throw error.response.data;
    }
  }
}

// dashboard view user apis

export async function getUserDataDashboard(username) {
  const userToken = Cookies.get("userToken");
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard/user-data/${username}?token=${userToken}`,

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
export async function getUserPropertiesDashboard(username, page = 1, propType) {
  const userToken = Cookies.get("userToken");
  try {
    const response = await axiosInstance.get(
      `/admin/dashboard/user-properties/${username}?token=${userToken}&limit=9&page=${page}&of=${propType}`,

      // {
      //   headers: {
      //     token: userToken,
      //   },
      // }
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
  const userToken = Cookies.get("userToken");

  const res = await axiosInstance.get(
    `/admin/generated/generated-single-user-excel/${id}?token=${userToken}`,
    {
      responseType: "arraybuffer",
      // headers: {
      //   token: userToken,
      // },
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
    const userToken = Cookies.get("userToken");

    const response = await axiosInstance.get(`/user/sold/get`, {
      headers: { token: userToken },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getPendingProperties() {
  try {
    const userToken = Cookies.get("userToken");

    const response = await axiosInstance.get(`/user/pendingrealtyprofile`, {
      headers: { token: userToken },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

import axios from "axios";

export async function getUserOffline({ url }) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/s?local_storage_device_id=${
        userToken ? userToken : undefined
      }&urlString=${url}`
    );
    return response.data;
  } catch (error) {
    throw error.response;
  }
}

export async function registerUser(userData) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      userData
    ); // register
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function loginUser(userData) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      userData
    ); //login
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getUserData() {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  if (userToken) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/profile?token=${userToken}`
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
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/user/update/${userID}`,
      userUpdate,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          token: userToken,
        },
      }
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
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/update/changepassword`,
      userNewPassword,
      {
        headers: {
          token: userToken,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function verifyEmail() {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/user/sendverify?token=${userToken}`
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

export async function sendCodeVerifyEmail(codenumber) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/user/getverify`,
      codenumber,
      {
        headers: {
          token: userToken,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function sendEmailResetPassword(email) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/user/reset-password?token=${userToken}&lang=AR`,
      email
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function sendResetNewPassword(userNewPassword) {
  // const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/changepassword?chps=${userNewPassword.token}`,
      { password: userNewPassword.password }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function signWithGoogle() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/google`
    );
    const authUrl = response.data.Link;
    window.location.href = authUrl;
  } catch (error) {
    console.log(error);
  }
}
export async function GetActiveProp(page) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/confirmedprofile?limit=9&page=${page}`,
      {
        headers: {
          token: JSON.parse(localStorage.getItem("userToken")),
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function updateGoogleData({ data, token }) {
  try {
    // const response =
    await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/update-users-google?token=${token}`,
      data
    );
  } catch (error) {
    console.log(error);
  }
}
export async function ViewUser(username) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/uservisit/${username}`
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function ViewUserProperties(username, page, type) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/uservisit-property/${username}?limit=12&page=${page}&of=${type}`
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
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard/user-data/${username}?token=${userToken}`

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
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard/user-properties/${username}?token=${userToken}&limit=9&page=${page}&of=${propType}`

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
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/generated/generated-single-user-excel/${id}?token=${userToken}`,
    {
      responseType: "arraybuffer",
      // headers: {
      //   token: userToken,
      // },
    } // {
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
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/sold/get`,
      { headers: { token: userToken } }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getPendingProperties() {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/pendingrealtyprofile`,
      { headers: { token: userToken } }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

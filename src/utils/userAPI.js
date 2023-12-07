import axios from "axios";

export async function getUserOffline({ url }) {
  try {
    const userID = JSON.parse(localStorage.getItem("local_storage_device_id"));

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/s?local_storage_device_id=${userID}&urlString=${url}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
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
    // console.log("updateUserDataInfo",userID,userToken,userUpdate,);
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
  return null;
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
    // console.log("yes out 1:",response.data);
    return response.data;
  } catch (error) {
    // console.log(error);
    // console.log("error out 2:",error);
    return error.response.data;
  }
}

export async function verifyEmail() {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/user/sendverify`,
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
    // window.open(authUrl,"_blank");
    // console.log("response",response.data);
    // return response
  } catch (error) {
    console.log(error);
  }
  // console.log(response);
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

import axios from "axios";

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
  if (userToken != null) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
        {
          headers: {
            token: userToken,
          },
        }
      );
      return response.data.userData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  return null;
}

export async function updateUserDataInfo(userID, userToken, userUpdate) {
  if (userToken != null || userID != null || userUpdate != null) {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/user/update/${userID}?token=${userToken}`,
        userUpdate,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.userData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  return null;
}




export async function changePassword(userNewPassword) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));

    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/update/changepassword`,userNewPassword,
        {
          headers: {
            token: userToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  
}






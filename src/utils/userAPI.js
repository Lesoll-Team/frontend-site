import axios from "axios";

export async function registerUser(userData) {
  try {
    const response = await axios.post(
      `http://ec2-184-73-152-95.compute-1.amazonaws.com:9000/api/auth/register`,
      userData
    ); // register
    // const response = await axios.post(`http://api0.lesoll-demo.site/api/auth/register`,userData);// register
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function loginUser(userData) {
  try {
    const response = await axios.post(
      `http://ec2-184-73-152-95.compute-1.amazonaws.com:9000/api/auth/login`,
      userData
    ); //login
    // const response = await axios.post(`http://api0.lesoll-demo.site/api/auth/login`,userData);//login
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getUserData() {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  if (userToken != null) {
    const response = await axios
      .get(
        `http://ec2-184-73-152-95.compute-1.amazonaws.com:9000/api/user/profile`,
        // const response = await axios.get(`http://api0.lesoll-demo.site/api/user/profile`,
        {
          headers: {
            token: userToken,
          },
        }
      ) //?token=${userToken}
      .then((UserData) => UserData.data.userData)
      .catch((error) => error.message);
    // localStorage.setItem("UserData",JSON.stringify(response))
    // const data=  JSON.parse(localStorage.getItem("UserData"))
    //   console.log(data);
    return response;
  }
  return null;
}

export async function updateUserDataInfo(userID, userToken, userUpdate) {
  if (userToken != null || userID != null || userUpdate != null) {
    const response = await axios
      .put(
        `http://ec2-184-73-152-95.compute-1.amazonaws.com:9000/api/user/update/${userID}?token=${userToken}`,
        userUpdate,
        {
          // const response = await axios.put(`http://api0.lesoll-demo.site/api/user/update/${userID}?token=${userToken}`,userUpdate, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((message) => message)
      .catch((error) => error);
    return response.data.userData;
  }
  return null;
}

// export async function updateUserPassword(userData,userLang) {
//   if (userToken!=null||userID!=null||userUpdate!=null) {
//     const response = await axios.put(`http://api0.lesoll-demo.site/api/user/update/${userID}?token=${userToken}`,userUpdate, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     })
//     .then((message)=>message)
//     .catch((error)=>error)
//     return response.data.userData
//   }
//   return null

// }

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
    const response = await axios.post( `${process.env.NEXT_PUBLIC_API_URL}/user/sendverify?token=${userToken}`
    // {
    //   headers:{
    //     token:userToken
    //   }
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
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/getverify?token=${userToken}`,codenumber);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}



export async function sendEmailResetPassword(email) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/reset-password?token=${userToken}&lang=AR`,email);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}


export async function sendResetNewPassword(userNewPassword) {
  // const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/user/changepassword?chps=${userNewPassword.token}`,{password:userNewPassword.password});
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
// export async function getTokenGoogle(){
//   try {
    
//   } catch (error) {
    
//   }
// }
export async function signWithGoogle(){
  try {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/google`)
  const authUrl = response.data.Link;
  window.location.href=authUrl
  // window.open(authUrl,"_blank");
// console.log("response",response.data);
  // return response
} catch (error) {
    console.log(error);
}
  // console.log(response);
}

export async function GetActiveProp(page){
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/confirmedprofile?limit=1&page=${page}`,
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






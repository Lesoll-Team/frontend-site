import axios from 'axios';


export async function registerUser(userData) {
  try {
    const response = await axios.post(`http://api0.lesoll-demo.site/api/auth/register`,userData);// register
    return response.data;
  } catch (error) {
    throw error.response.data
  }
}
export async function loginUser(userData) {
  try {
    const response = await axios.post(`http://api0.lesoll-demo.site/api/auth/login`,userData);//login 
    return response.data;
  } catch (error) {
    throw error.response.data
  }
}


export async function getUserData(userToken) {
  if (userToken!=null) {
    const response = await axios.get(`http://api0.lesoll-demo.site/api/user/profile`,
    {
      headers:{
        token:userToken
      }
    })//?token=${userToken}
    .then((UserData)=>UserData.data.userData)
    .catch((error)=>error.message)
    return response
  }
  return null
}


export async function updateUserDataInfo(userID,userToken,userUpdate) {
  if (userToken!=null||userID!=null||userUpdate!=null) {
    const response = await axios.put(`http://api0.lesoll-demo.site/api/user/update/${userID}?token=${userToken}`,userUpdate, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((message)=>message)
    .catch((error)=>error)
    return response.data.userData
  }
  return null

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











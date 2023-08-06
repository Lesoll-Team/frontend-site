import axios from 'axios';



export async function registerUser(userData) {
  try {
                                     //http://api0.lesoll-demo.site/
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
    const response = await axios.get(`http://api0.lesoll-demo.site/api/user/profile?token=${JSON.parse(userToken)}`)
    .then((UserData)=>UserData.data.userData)
    .catch((error)=>error.message)
    return response
  }
  return null
}


export async function updateUserData(userID,userToken,userUpdate) {
  if (userToken!=null||userID!=null||userUpdate!=null) {
    const response = await axios.put(`http://api0.lesoll-demo.site/api/user/update/${userID}?token=${userToken}`,userUpdate, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((message)=>message)
    .catch((error)=>error)
    return response
  }
  return null

}


export async function deleteUserAccount(userID,userToken) {
  if (userToken!=null||userID!=null) {
    const response = await axios.delete(`http://api0.lesoll-demo.site/api/user/setting/delete/${userID}?token=${userToken}`)
    .then((message)=>message)
    .catch((error)=>error)
    return response
  }
  return null

}






// export async function getUserData(userToken) {
//   try {
//     const response = await axios.get(`http://api0.lesoll-demo.site/api/user/profile`,{
//       headers: {
//         token:JSON.parse(userToken)
//       }
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response.data
//   }
// }






// export async function getUserData() {
//     const userToken=JSON.parse(localStorage.getItem("userToken"))
//     if (userToken!=null) {
//       const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
//       // const response = await axiosInstance.get(`http://api0.lesoll-demo.site/api/user/profile`,
//       {
//         headers:{
//           token:userToken
//         }
//       })//?token=${userToken}
//       .then((UserData)=>UserData.data.userData)
//       .catch((error)=>error.message)
//       // localStorage.setItem("UserData",JSON.stringify(response))
//     // const data=  JSON.parse(localStorage.getItem("UserData"))
//       return response
//     }
//     return null
//   }

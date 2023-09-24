// import axios from 'axios';



// export async function AddPropertyToCompare(propertyId) {
//     const userToken = JSON.parse(localStorage.getItem("userToken"));

//     try {
//       const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/user/compared/${propertyId}?token=${userToken}`);
//       return response.data;
//     } catch (error) {
//       throw error.response.data
//     }
//   }

//   export async function GetPropertiesCompare() {
//     const userToken = JSON.parse(localStorage.getItem("userToken"));
//     try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/compared/get?token=${userToken}`);
//       return response.data;
//     } catch (error) {
//       throw error.response.data
//     }
//   }
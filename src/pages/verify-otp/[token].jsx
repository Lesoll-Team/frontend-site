import Otp from "@/components/auth/otp/components/Otp";
import axios from "axios";

const OtpPage = ({ userData, token }) => {
  return <Otp userData={userData} token={token} />;
};

export default OtpPage;
// export const getUserData = createAsyncThunk(
//   "userProfile/getUserData",
//   async (thunkAPI) => {
//     const userToken = JSON.parse(localStorage.getItem("userToken"));
//     if (userToken) {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/user/profile?token=${userToken}`
//         );
//         const userData = response.data.userData;
//         return {
//           props: {
//             userData,
//           },
//         };
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.response);
//       }
//     } else {
//       throw "failed";
//     }
//   }
// );
export async function getServerSideProps(context) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/profile?token=${context.query.token}`,
    );
    const userData = response.data.userData;
    const token = context.query.token;
    return {
      props: {
        userData,
        token,
      },
    };
  } catch (error) {
    throw error.response.data;
  }
}

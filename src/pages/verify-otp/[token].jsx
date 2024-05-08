import axiosInstance from "@/Shared/axiosInterceptorInstance";
import Otp from "@/components/auth/otp/components/Otp";

const OtpPage = ({ userData, token }) => {
  return <Otp userData={userData} token={token} />;
};

export default OtpPage;
// export const getUserData = createAsyncThunk(
//   "userProfile/getUserData",
//   async (thunkAPI) => {
//     const userToken = Cookies.get("userToken");
//     if (userToken) {
//       try {
//         const response = await axiosInstance.get(
//           `/user/profile?token=${userToken}`
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
    const response = await axiosInstance.get(
      `/user/profile?token=${context.query.token}`,
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

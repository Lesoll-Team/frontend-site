import axiosInstance from "@/Shared/axiosInterceptorInstance";
import Otp from "@/components/auth/otp/components/Otp";

const OtpPage = ({ userData, token }) => {
  return <Otp userData={userData} token={token} />;
};

export default OtpPage;

export async function getServerSideProps(context) {
  try {
    const response = await axiosInstance.get(`/user/profile`);
    const user = response.data.userData;
    const token = context.query.token;
    return {
      props: {
        userData: user,
        token,
      },
    };
  } catch (error) {
    throw error.response.data;
  }
}

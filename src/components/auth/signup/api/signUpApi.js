import axiosInstance from "@/Shared/axiosInterceptorInstance";
import Cookies from "js-cookie";
export const userSignUp = async ({
  setFormStatus,
  setToken,
  setServerError,
  data,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.post(`/auth/register`, data);
    if (response.status === 200 || response.status === 201) {
      Cookies.set("userToken", token);
      setFormStatus("success");
      setToken(response.data.token);
    }
    return response.data;
  } catch (error) {
    setFormStatus("failed");
    setServerError(error.response.data);
    throw error.response.data;
  }
};

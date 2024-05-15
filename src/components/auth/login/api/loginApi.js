import axiosInstance from "@/Shared/axiosInterceptorInstance";
import Cookies from "js-cookie";

export const userLogin = async ({
  setToken,
  setFormStatus,
  setServerError,
  data,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.post(`/auth/login`, data);
    if (response.status === 200 || response.status === 201) {
      Cookies.set("userToken", response.data.token);
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

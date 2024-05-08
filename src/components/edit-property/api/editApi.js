import axiosInstance from "@/Shared/axiosInterceptorInstance";
import Cookies from "js-cookie";

export const editProperty = async ({
  data,
  id,
  setFormStatus,
  setServerError,
}) => {
  try {
    setFormStatus("loading");
    const userToken = Cookies.get("userToken");
    const response = await axiosInstance.put(
      `/property/update/property/${id}`,
      data,
      {
        headers: {
          token: userToken,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
      setServerError(null);
    }
    return response.data;
  } catch (error) {
    setFormStatus("failed");
    setServerError(error.response.data);
    throw error.response.data;
  }
};

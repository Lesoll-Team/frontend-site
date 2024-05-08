import axiosInstance from "@/Shared/axiosInterceptorInstance";
import Cookies from "js-cookie";

export const editNeed = async ({ data, setFormStatus, setError }) => {
  const userToken = Cookies.get("userToken");
  try {
    setFormStatus("loading");
    setError(null);
    const response = await axiosInstance.put(
      `/need/update-need/${data.id}`,
      data,
      {
        headers: {
          token: userToken,
        },
      },
    );
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
    } else {
      setFormStatus("error");
    }
  } catch (error) {
    setError(error.response.data);
  }
};

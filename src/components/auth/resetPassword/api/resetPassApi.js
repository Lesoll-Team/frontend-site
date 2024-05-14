import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const resetPass = async ({
  setFormStatus,
  setServerError,
  token,
  data,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.patch(
      `/user/changepassword?chps=${token}`,
      data,
    );
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
    }
    return response.data;
  } catch (error) {
    setFormStatus("failed");
    setServerError(error.response.data);
    throw error.response.data;
  }
};

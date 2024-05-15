import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const forgetPass = async ({
  setFormStatus,
  setServerError,
  data,
  lang,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.post(
      `/user/reset-password?lang=${lang || "AR"}`,
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

import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const postProperty = async ({
  setFormStatus,
  setServerError,
  data,
  setReturnData,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.post(`/property/drafts`, data);
    if (response.status === 200 || response.status === 201) {
      setFormStatus("idle");
      setReturnData(response.data.final);
    }
    return response.data;
  } catch (error) {
    setFormStatus("failed");
    setServerError(error.response.data);
    throw error.response.data;
  }
};

import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const postNeed = async ({ setFormStatus, setServerError, data }) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.post(`/need/create-need`, data);
    if (response.status === 200 || response.status === 201) {
      setServerError(null);
      setFormStatus("success");
    }
    return response.data;
  } catch (error) {
    setFormStatus("failed");

    setServerError(error?.response);
    throw error?.response;
  }
};

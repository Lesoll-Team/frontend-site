import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const addCompound = async ({ setFormStatus, setServerError, data }) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.post(
      `/admin/service/add-compounds`,
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

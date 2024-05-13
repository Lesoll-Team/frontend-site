import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const editProperty = async ({
  data,
  id,
  setFormStatus,
  setServerError,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.put(
      `/property/update/property/${id}`,
      data,
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

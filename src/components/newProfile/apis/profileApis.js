import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const editUserData = async ({
  data,
  setServerError,
  setFormStatus,
  userId,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.put(`/user/update/${userId}`, data);
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

import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const postProjectContact = async ({
  setFormStatus,
  setFormError,
  data,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.post(`/admin/contact/add`, data);
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
    }
    return response.data;
  } catch (error) {
    setFormStatus("failed");
    setFormError(error.response.data);
    throw error.response.data;
  }
};

import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const createMotorDraft = async ({
  data,
  setServerError,
  setFormStatus,
}) => {
  try {
    setFormStatus("loading");
    setServerError(null);
    const response = await axiosInstance.post(`/`);
    if (response.status == 200 || response.status == 201) {
      setFormStatus("success");
    }
    return response;
  } catch (error) {
    setFormStatus("failed");
    setFormStatus(error.response.data);
    throw error.response.data;
  }
};
export const updateMotorDraft = async ({
  data,
  setServerError,
  setFormStatus,
}) => {
  try {
    setFormStatus("loading");
    setServerError(null);
    const response = await axiosInstance.post(`/`);
    if (response.status == 200 || response.status == 201) {
      setFormStatus("success");
    }
    return response;
  } catch (error) {
    setFormStatus("failed");
    setFormStatus(error.response.data);
    throw error.response.data;
  }
};

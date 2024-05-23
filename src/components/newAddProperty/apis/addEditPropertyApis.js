import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const postProperty = async ({ setFormStatus, setServerError, data }) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.post(`/property/create`, data);
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
export const postDraft = async ({
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

export const editDraft = async ({
  setFormStatus,
  setServerError,
  data,
  id,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.put(
      `/property/update/property-draft/${id}`,
      data,
    );
    if (response.status === 200 || response.status === 201) {
      setFormStatus("idle");
    }
    return response.data;
  } catch (error) {
    setFormStatus("failed");
    setServerError(error.response.data);
    throw error.response.data;
  }
};

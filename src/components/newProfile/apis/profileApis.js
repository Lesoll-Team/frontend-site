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

export const getActiveProperties = async ({
  setFormStatus,
  setServerError,
  setActiveProperties,
  page,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.get(`/user/confirmedprofile?limit=9&page=${page}`);
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
      setActiveProperties(response.data);
    }
    return response.data;
  } catch (error) {
    setServerError(error?.response?.data);
  }
};
export const getPendingProperties = async ({
  setFormStatus,
  setServerError,
  setPendingProperties,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.get(`/user/pendingrealtyprofile`);
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
      setPendingProperties(response.data);
    }
    return response.data;
  } catch (error) {
    setServerError(error?.response?.data);
  }
};
export const getSoldProperties = async ({
  setFormStatus,
  setServerError,
  setSoldProperties,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.get(`/user/sold/get`);
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
      setSoldProperties(response.data);
    }
    return response.data;
  } catch (error) {
    setServerError(error?.response?.data);
  }
};

export const deleteProperty = async ({
  setFormStatus,
  setServerError,
  propdId,
  message,
}) => {
  setFormStatus("loading");
  try {
    const response = await axiosInstance.delete(`/property/delete/property/${propdId}`,
      {
        data: {
          reason: message,
        },
      }
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

export const toggleSold = async ({
  setFormStatus,
  setServerError,
  propdId,
}) => {
  try {
    const response = await axiosInstance.patch(`/admin/property/sold/${propdId}`);
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

// payment apis
export const repostProperty = async ({
  setFormStatus,
  setServerError,
  propId,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.patch(`/payment-user/repost-property/${propId}`);
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

export const pinProperty = async ({
  setFormStatus,
  setServerError,
  propId,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.patch(`/payment-user/pin-property/${propId}`);
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

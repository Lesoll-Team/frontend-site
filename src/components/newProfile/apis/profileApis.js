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
    const response = await axiosInstance.get(
      `/user/confirmedprofile?limit=9&page=${page}`,
    );
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
    const response = await axiosInstance.delete(
      `/property/delete/property/${propdId}`,
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
    const response = await axiosInstance.patch(
      `/admin/property/sold/${propdId}`,
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

// payment apis
export const repostProperty = async ({
  setFormStatus,
  setServerError,
  propId,
}) => {
  try {
    setFormStatus("loading");

    const response = await axiosInstance.patch(
      `/payment-user/repost-property/${propId}`,
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

export const pinProperty = async ({
  setFormStatus,
  setServerError,
  propId,
}) => {
  try {
    setFormStatus("loading");

    const response = await axiosInstance.patch(
      `/payment-user/pin-property/${propId}`,
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
export const getUserActivePackages = async ({
  setFormStatus,
  setServerError,
  setActivePackages,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.get(
      `/payment-user/continuous-package`,
    );
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
    }
    setActivePackages(response.data);
    return response.data;
  } catch (error) {
    setFormStatus("failed");
    setServerError(error.response.data);
    throw error.response.data;
  }
};

export const getUserPerviousPackages = async ({
  setFormStatus,
  setServerError,
  setPerviousPackages,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.get(`/payment-user/end-package`);
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
      setPerviousPackages(response.data);
    }
    return response.data;
  } catch (error) {
    setFormStatus("failed");
    setServerError(error.response.data);
    throw error.response.data;
  }
};

export const getInvoice = async ({
  setFormStatus,
  setServerError,
  id,
  setDownloadLink,
  lang,
}) => {
  try {
    setFormStatus("loading");

    const response = await axiosInstance.get(
      `/payment-user/download-invoice/${id}?lang=${lang ? "ar" : "en"}`,
    );
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
      setDownloadLink(response.data?.link);
      return response.data;
    }
    return response.data;
  } catch (error) {
    setServerError(error.response);
    throw error.response.data;
  }
};

export const getPropertyAnalytics = async ({
  slug,
  setApiStatus,
  setServerError,
  setData,
}) => {
  try {
    setApiStatus("loading");
    const response = await axiosInstance.get(
      `/payment-user/dashboard-min/${slug}`,
    );
    if (response.status === 200) {
      setApiStatus("success");
      setData(response.data);
    }
  } catch (error) {
    setApiStatus("failed");
    setServerError(error.response.data);
  }
};

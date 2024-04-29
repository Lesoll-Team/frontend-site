import axios from "axios";

export const editUserData = async ({
  data,
  setServerError,
  setFormStatus,
  userId,
}) => {
  // console.log(userId);
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    setFormStatus("loading");
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/user/update/${userId}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          token: token,
        },
      },
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

export const getActiveProperties = async ({
  setFormStatus,
  setServerError,
  setActiveProperties,
  page,
}) => {
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    setFormStatus("loading");
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/confirmedprofile?limit=9&page=${page}`,
      {
        headers: {
          token: token,
        },
      },
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
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    setFormStatus("loading");
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/pendingrealtyprofile`,
      {
        headers: {
          token: token,
        },
      },
    );
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
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    setFormStatus("loading");
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/sold/get`,
      {
        headers: {
          token: token,
        },
      },
    );
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
  const token = JSON.parse(localStorage.getItem("userToken"));
  setFormStatus("loading");
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/property/delete/property/${propdId}?token=${token}`,

      {
        headers: {
          token,
        },
        data: {
          reason: message,
        },
      },
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
    const token = JSON.parse(localStorage.getItem("userToken"));
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/property/sold/${propdId}?token=${token}`,
      {
        headers: {
          token,
        },
      },
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

    const token = JSON.parse(localStorage.getItem("userToken"));
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/payment-user/repost-property/${propId}?token=${token}`,
      {
        headers: {
          token,
        },
      },
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
    const token = JSON.parse(localStorage.getItem("userToken"));
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/payment-user/pin-property/${propId}?token=${token}`,
      {
        headers: {
          token,
        },
      },
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
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    setFormStatus("loading");
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/payment-user/continuous-package`,
      {
        headers: {
          token,
        },
      },
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
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    setFormStatus("loading");
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/payment-user/end-package`,
      {
        headers: {
          token,
        },
      },
    );
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

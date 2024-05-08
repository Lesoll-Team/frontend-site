import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const propertyCallClick = async ({ id }) => {
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axiosInstance.patch(
      `/property/calls/${id}?token=${token}`,
      {},
      {
        headers: {
          token: token,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const propertyWhatsClick = async ({ id }) => {
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axiosInstance.patch(
      `/property/whatsappbtn/${id}?token=${token}`,
      {},
      {
        headers: {
          token: token,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const needsWhatsClick = async ({ id }) => {
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axiosInstance.patch(
      `/need/whatsappbtn/${id}?token=${token}`,
      {},
      {
        headers: {
          token: token,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const needsCallClick = async ({ id }) => {
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axiosInstance.patch(
      `/need/calls/${id}?token=${token}`,
      {},
      {
        headers: {
          token: token,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

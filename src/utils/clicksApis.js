import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const propertyCallClick = async ({ id }) => {
  try {
    const response = await axiosInstance.patch(`/property/calls/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const propertyWhatsClick = async ({ id }) => {
  try {
    const response = await axiosInstance.patch(`/property/whatsappbtn/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const needsWhatsClick = async ({ id }) => {
  try {
    const response = await axiosInstance.patch(`/need/whatsappbtn/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const needsCallClick = async ({ id }) => {
  try {
    const response = await axiosInstance.patch(`/need/calls/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

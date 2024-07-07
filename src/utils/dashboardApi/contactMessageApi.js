import axiosInstance from "@/Shared/axiosInterceptorInstance";

export async function getContactMessages() {
  try {
    const response = await axiosInstance.get(
      `/admin/contact/payemnt-contact/getall`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getSingleContactMessages({ messageId }) {
  try {
    const response = await axiosInstance.get(
      `/admin/contact/payemnt-contact/get/${messageId}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

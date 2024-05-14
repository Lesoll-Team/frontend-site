import axiosInstance from "@/Shared/axiosInterceptorInstance";

export async function sendMessage(messageInfo) {
  try {
    const response = await axiosInstance.post(
      `/admin/contact/add`,
      messageInfo,
    ); // register
    // const response = await axiosInstance.post(`http://api0.lesoll-demo.site/api/auth/register`,userData);// register
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

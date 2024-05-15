import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const getOtpCode = async (phone, token) => {
  try {
    const response = await axiosInstance.post(
      `/user/otp/send/phonenumber/`,
      {
        phoneNumber: phone,
      },
      {
        headers: {
          token,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const sendOtp = async ({
  setFormStatus,
  otp,
  setServerError,
  token,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.post(
      `/user/otp/send/verify`,
      {
        codenumber: otp,
      },
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

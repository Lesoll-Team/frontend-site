import axiosInstance from "../axiosInterceptorInstance";

export const getOtp = async ({ phoneNumber }) => {
  try {
    const response = await axiosInstance.post(`/user/send-otp-phone-number`, {
      phoneNumber,
    });

    return response;
  } catch (error) {
    throw error.response;
  }
};

export const verifyPhoneNumber = async ({
  setFormStatus,
  setServerError,
  otp,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.post(`/user/verify-phone-number`, {
      codenumber: otp,
    });
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
    } else {
      setFormStatus("failed");
    }
    return response;
  } catch (error) {
    setFormStatus("failed");
    setServerError(error.response.data);
    throw error.response.data;
  }
};

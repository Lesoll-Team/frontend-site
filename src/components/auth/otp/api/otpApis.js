import axios from "axios";

export const getOtpCode = async (phone, token) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/user/otp/send/phonenumber?token=${token}`,
      {
        phoneNumber: phone,
      },
      {
        headers: {
          token: token,
        },
      }
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
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/user/otp/send/verify?token=${token}`,
      {
        codenumber: otp,
      },
      {
        headers: {
          token: token,
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

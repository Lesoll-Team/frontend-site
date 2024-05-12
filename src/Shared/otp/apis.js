import axios from "axios";

export const getOtp = async ({
  setFormStatus,
  setServerError,
  phoneNumber,
}) => {
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    // setFormStatus("loading");
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/user/send-otp-phone-number?token=${token}`,
      {
        phoneNumber,
      },
      {
        headers: {
          token,
        },
      },
    );
    if (response.status === 200 || response.status === 201) {
      // setFormStatus("success");
    } else {
      // setFormStatus("failed");
    }
    return response;
  } catch (error) {
    // setFormStatus("failed");
    // setServerError(error.response.data);
    throw error.response.data;
  }
};

export const verifyPhoneNumber = async ({
  setFormStatus,
  setServerError,
  otp,
}) => {
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    setFormStatus("loading");
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/user/verify-phone-number?token=${token}`,
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

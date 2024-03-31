import axios from "axios";

export const resetPass = async ({
  setFormStatus,
  setServerError,
  token,
  data,
}) => {
  try {
    setFormStatus("loading");
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/changepassword?chps=${token}`,
      data
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

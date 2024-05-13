import axios from "axios";
export const userSignUp = async ({
  setFormStatus,
  setToken,
  setServerError,
  data,
}) => {
  try {
    setFormStatus("loading");
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      data,
    );
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
      setToken(response.data.token);
    }
    return response.data;
  } catch (error) {
    setFormStatus("failed");
    setServerError(error.response.data);
    throw error.response.data;
  }
};

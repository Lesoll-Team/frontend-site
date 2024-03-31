import axios from "axios";

export const postNeed = async ({ setFormStatus, setServerError, data }) => {
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    setFormStatus("loading");
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/need/create-need?token=${token}`,
      data,
      {
        headers: {
          token: token,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      setServerError(null);
      setFormStatus("success");
    }
    return response.data;
  } catch (error) {
    setFormStatus("failed");

    setServerError(error.response.data);
    throw error.response.data;
  }
};

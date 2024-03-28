import axios from "axios";

export const postProperty = async ({ setFormStatus, setServerError, data }) => {
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    setFormStatus("loading");
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/property/create`,
      data,
      {
        headers: {
          token: token,
          "Content-Type": "multipart/form-data",
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

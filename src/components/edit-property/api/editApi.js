import axios from "axios";

export const editProperty = async ({
  data,
  id,
  setFormStatus,
  setServerError,
}) => {
  try {
    setFormStatus("loading");
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/property/update/property/${id}`,
      data,
      {
        headers: {
          token: userToken,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
      setServerError(null);
    }
    return response.data;
  } catch (error) {
    setFormStatus("failed");
    setServerError(error.response.data);
    throw error.response.data;
  }
};

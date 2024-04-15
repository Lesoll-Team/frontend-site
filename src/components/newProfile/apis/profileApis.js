import axios from "axios";

export const editUserData = async ({
  data,
  setServerError,
  setFormStatus,
  userId,
}) => {
  // console.log(userId);
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    setFormStatus("loading");
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/user/update/${userId}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
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

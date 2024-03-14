import axios from "axios";

export const editNeed = async ({ data, setFormStatus, setError }) => {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    setFormStatus("loading");
    setError(null);
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/need/update-need/${data.id}`,
      data,
      {
        headers: {
          token: userToken,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
    } else {
      setFormStatus("error");
    }
  } catch (error) {
    setError(error.response.data);
  }
};

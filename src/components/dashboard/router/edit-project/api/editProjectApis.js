import axios from "axios";

export const getSingleProject = async ({
  setApiStatus,
  setServerError,
  setData,
  slug,
}) => {
  try {
    setApiStatus("loading");
    const token = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/property/get-single-projects/${slug}`,

      {
        headers: {
          token,
        },
      }
    );

    if (response.status === 200 || response.status === 201) {
      setApiStatus("success");
      setData(response.data);
    }
  } catch (error) {
    setServerError(error.response);
  }
};

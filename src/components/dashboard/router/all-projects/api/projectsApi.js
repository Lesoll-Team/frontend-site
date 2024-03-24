import axios from "axios";

export const getProjectsDashBoard = async ({
  setStatus,
  setServerError,
  setData,
  page,
}) => {
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    setStatus("loading");
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/property/admin-all-project?limit=1&page=${page || 1}`,

      {
        headers: {
          token: token,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      setStatus("success");
      setData(response.data);
    }
    return response.data;
  } catch (error) {
    setStatus("failed");
    setServerError(error.response.data);
    throw error.response;
  }
};

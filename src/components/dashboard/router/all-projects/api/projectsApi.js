import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const getProjectsDashBoard = async ({
  setStatus,
  setServerError,
  setData,
  page,
}) => {
  try {
    setStatus("loading");
    const response = await axiosInstance.get(
      `/admin/property/admin-all-project?limit=1&page=${page || 1}`,
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

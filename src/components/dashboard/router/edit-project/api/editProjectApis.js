import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const getSingleProject = async ({
  setApiStatus,
  setServerError,
  setData,
  slug,
}) => {
  try {
    setApiStatus("loading");
    const response = await axiosInstance.get(
      `/property/get-single-projects/${slug}`,
    );

    if (response.status === 200 || response.status === 201) {
      setApiStatus("success");
      setData(response.data);
    }
  } catch (error) {
    setServerError(error.response);
  }
};

import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const editNeed = async ({ data, setFormStatus, setError }) => {
  try {
    setFormStatus("loading");
    setError(null);
    const response = await axiosInstance.put(
      `/need/update-need/${data.id}`,
      data,
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

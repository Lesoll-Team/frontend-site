import axiosInstance from "@/Shared/axiosInterceptorInstance";

const updateUserData = async ({ data, setFormStatus }) => {
  try {
    setFormStatus("loading");
    const response = await axiosInstance.put(`/user/update/${data.id}`, data);
    if (response.status == 200 || response.status == 201) {
      setFormStatus("success");
      response?.data?.userData?.token &&
        Cookies.set("userToken", response.data.userData.token);
    }
    return response.data;
  } catch (error) {
    setFormStatus("failed");
    throw error.response.data;
  }
};

export { updateUserData };

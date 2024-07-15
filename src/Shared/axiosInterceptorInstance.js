import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Replace with your API base URL
  withCredentials: true, //
});
const refreshToken = async () => {
  try {
    const refreshResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
      { withCredentials: true },
    );
    const { accessToken } = refreshResponse.data;
    Cookies.set("userToken", accessToken);
    return accessToken;
  } catch (error) {
    throw error.response.data;
  }
};
axiosInstance.interceptors.request.use(
  async (config) => {
    let token = Cookies.get("userToken");
    if (token) {
      config.headers.token = token;
    }
    // const userLanguage = navigator.language || "ar"; // Default to "en-US" if navigator.language is unavailable
    // config.headers["Accept-Language"] = userLanguage;
    // console.log("userLanguage:>:>:>", userLanguage);
    // console.log("navigator:>:>:>", navigator);
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor to handle refreshing tokens
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      ((error.response && error.response.status === 401) ||
        error.response.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const accessToken = await refreshToken();
        originalRequest.headers.token = accessToken;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        Cookies.remove("userToken");
        if (
          window.location.pathname.includes("/profile") ||
          window.location.pathname.includes("/dashboard")
        ) {
          window.location.replace("/");
        }
        return Promise.reject(error); // Return the original error from the endpoint
      }
    }
    return Promise.reject(error);
  },
);
export default axiosInstance;

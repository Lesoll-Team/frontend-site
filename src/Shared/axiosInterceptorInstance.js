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
      {
        withCredentials: true,
      },
    );
    const { accessToken } = refreshResponse.data;
    Cookies.set("userToken", accessToken);
    return accessToken;
  } catch (error) {
    console.error("Failed to refresh token", error);
    throw error;
  }
};
axiosInstance.interceptors.request.use(
  async (config) => {
    let token = Cookies.get("userToken");
    const jwt = Cookies.get("jwt");

    if (!token && jwt) {
      token = await refreshToken();
    }

    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
// Response interceptor to handle refreshing tokens
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response) {
      const { status } = error.response;

      if ((status === 401 || status === 403) && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const token = await refreshToken();
          originalRequest.headers.token = token;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          if (status === 401) {
            if (
              window.location.pathname.includes("/profile") ||
              window.location.pathname.includes("/dashboard")
            ) {
              window.location.replace("/");
            }
          }
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  },
);
export default axiosInstance;

import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Replace with your API base URL
  withCredentials: true, //
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("userToken");
    console.log("first token (*)line 12", token);
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    console.log("Error getting user access token from cookies (*)line 19");
    return Promise.reject(error);
  },
);
// Response interceptor to handle refreshing tokens
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("response ::::>>> ::>>>(*)line 26", response);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      Cookies.remove("userToken");
      console.log("Access token expired, logging out user... (*) line 36");
      return Promise.reject("logging out user...");
    }
    if (
      error.response &&
      error.response.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const refreshResponse = await axiosInstance.get("/auth/refresh", {
          withCredentials: true,
        });

        const { accessToken } = refreshResponse.data;
        Cookies.set("userToken", accessToken);
        originalRequest.headers.token = accessToken;
        console.log("Done ::>>>(*)line 55");
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Failed to refresh token (*) line 57:", refreshError);
        return Promise.reject(refreshError);
      }
    }

    console.error("Failed to refresh token (*) line 65", error);
    return Promise.reject(error);
  },
);
export default axiosInstance;

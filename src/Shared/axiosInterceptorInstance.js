import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Replace with your API base URL
  timeout: 1000,
  // headers: { "Content-Type": "application/json" },
});

// Request interceptor to inject the token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");
    if (token) {
      config.headers.token = token; // Set token directly in the headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor to handle refreshing tokens
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshResponse = await axiosInstance.post(
          "/auth/refresh",
          {
            // Send any necessary data for refreshing token
          },
          {
            withCredentials: true, // Ensure cookies are sent with the request
          },
        );
        const { accessToken } = refreshResponse.data;
        localStorage.setItem("userToken", accessToken);
        originalRequest.headers.token = accessToken; // Update token in headers
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Handle refresh token failure
        // For example, redirect to login page or show an error message
        console.error("Failed to refresh token:", refreshError);
        // You may want to clear localStorage or perform other actions based on your application logic
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
export default axiosInstance;

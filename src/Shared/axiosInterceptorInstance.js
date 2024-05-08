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
      return "logging out user... (*)line 37";
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

/* if (accessToken) {
        *   const response = await axiosInstance.get(
        *     `/user/profile?token=${accessToken}`,
        *   );
        *   localStorage.setItem("id", response.data._id);
        *   localStorage.setItem("fullname", response.data.fullname);
        *   localStorage.setItem("email", response.data.email);
        *   localStorage.setItem("avatarUrl", response.data.avatarUrl);
        *   localStorage.setItem("phone", response.data.phone);
        *   localStorage.setItem("code", response.data.code);
        *   localStorage.setItem("username", response.data.username);
        *   localStorage.setItem("typeOfUser", response.data.typeOfUser);
        *   localStorage.setItem(
        *     "features",
        *     JSON.stringify(response.data.Features),
        *   );
        *   console.log("calling profile ", response);
        *   return response.data.userData;
         }*/

// if (error.response.status === 403 && !originalRequest._retry) {
//   originalRequest._retry = true;
//   console.log("### if refresh to refresh token ###");
//   try {
//     const refreshResponse = await axiosInstance.get("/auth/refresh", {
//       withCredentials: true,
//     });
//     console.log("### try refresh to refresh token ###");
//     const { accessToken } = refreshResponse.data;
//     Cookies.get("userToken") && Cookies.remove("userToken");
//     Cookies.set("userToken", accessToken);
//     originalRequest.headers.token = accessToken;
//     return axiosInstance(originalRequest);
//   } catch (refreshError) {
//     console.error("Failed to refresh token:::>>>");
//     // Redirect to login page or handle the error as you prefer
//     return Promise.reject(refreshError);
//   }
// }

import axiosInstance from "@/Shared/axiosInterceptorInstance";
import Cookies from "js-cookie";

export async function getAllNotifications() {
  const userToken = Cookies.get("userToken");
  if (userToken) {
    try {
      const response = await axiosInstance.get(`/notification/get/user`, {
        headers: {
          token: userToken,
        },
      });
      return response.data.notification;
    } catch (error) {
      console.log("getAllNotifications ", error);
      return [];

      // throw error.response.data;
    }
  }
  return [];
}

export async function seeAllNotifications() {
  try {
    const userToken = Cookies.get("userToken");
    const response = await axiosInstance.put(
      `/notification/markall?token=${userToken}`,
    );
    return response.data;
  } catch (error) {
    console.log("seeAllNotifications ", error);

    // throw error.response.data;
  }
}

export async function visitNotifications(NotificationsID) {
  try {
    const userToken = Cookies.get("userToken");
    const response = await axiosInstance.patch(
      `/notification/markasread/${NotificationsID}?token=${userToken}`,
    );
    return response.data;
  } catch (error) {
    console.log("visitNotifications ", error);

    // throw error.response.data;
  }
}

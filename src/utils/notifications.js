import axios from "axios";

export async function getAllNotifications() {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  if (userToken) {
    
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/notification/get/user`,{
        headers: {
          token: userToken,
        },
      }
    );
    return response.data.notification;
  } catch (error) {
    throw error.response.data;
  }
}
return []
}

export async function seeAllNotifications() {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/notification/markall?token=${userToken}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}


export async function visitNotifications(NotificationsID) {
    try {
      const userToken = JSON.parse(localStorage.getItem("userToken"));
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/notification/markasread/${NotificationsID}?token=${userToken}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }


import axios from "axios";

export async function getAllNotifications() {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/notification/get/user`,
      {
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



export async function visitNotifications(NotificationsID) {
    try {
      const userToken = JSON.parse(localStorage.getItem("userToken"));
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/notification/markasread/${NotificationsID}?token=${userToken}`
        // {
        //   headers: {
        //     token: userToken,
        //   },
        // }
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

// console.log(getAllNotifications());

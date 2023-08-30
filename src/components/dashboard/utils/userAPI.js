import axios from "axios";

export async function getAllUsers(userToken) {
//   if (userToken) {
    try {
      const response = await axios.get(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/admin/getallusers?limit=${10}&page=1`,
        {
          headers: {
            token: userToken,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      throw error.response.massage;
    }
}


export async function deleteUsers(userID) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/delete/user/${userID}`,
      {
        headers: {
          token: userToken,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function updateUsers(userID,newData) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/update/user/${userID}`,newData,
      {
        headers: {
          token: userToken,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}




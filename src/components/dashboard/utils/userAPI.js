import axios from "axios";

export async function getAllUsers(rowsPerPage,page,userToken) {

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/getallusers?limit=${rowsPerPage}&page=${page}`,
        {
          headers: {
            token: userToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response.massage;
    }
}


export async function searchUsersApi(rowsPerPage,page,filterUser) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/search/searchuser?keywords=${filterUser}&limit=${rowsPerPage}&page=${page}`,
      {
        headers: {
          token: userToken,
        },
      }
    );
    return response.data;
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

export async function banUser(userID) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/ban/user/${userID}?token=${userToken}`
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

//BanUser: PATCH /api/admin/ban/user/:id
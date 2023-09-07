import axios from "axios";

export async function createNewProperty(propertyDetils) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/property/create`,
      propertyDetils,
      {
        headers: {
          token: userToken,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function editProperty(propertyDetils) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/property/create`,
      propertyDetils,
      {
        headers: {
          token: userToken,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function AddToFavorites(propertyid) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/favorites/${propertyid}`,
      {},
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
export async function deleteProperty(propertyid) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/property/delete/property/${propertyid}?token=${userToken}`,
      {
        headers: {
          token: userToken,
          us,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
    // console.log();
  }
}

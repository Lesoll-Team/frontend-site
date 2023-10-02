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
export async function editProperty(propertyDetils, propertyId) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/property/update/property/${propertyId}`,
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
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
    // console.log();
  }
}

export async function getRecommendRealty(propertyid) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/search/recommendrealty/?realtyId=${propertyid}`,
      {
        headers: {
          token: userToken,
        },
      }
    );
    //?token=${userToken}
    return response.data.recommendedData;
  } catch (error) {
    throw error.response.data;
    // console.log();
  }
}







export async function GetActiveProp(page) {
  try {
    // const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/confirmedprofile?limit=2w&page=${page}`,
      {
        headers: {
          token: JSON.parse(localStorage.getItem("userToken")),
        },
      }
    );
    //?token=${userToken}
    return response.data.recommendedData;
  } catch (error) {
    throw error.response.data;
    // console.log();
  }
}
///api/search/recommendrealty/?realtyId=64f97c54a7708382a343d1a2

import axios from "axios";

export async function createNewProperty(propertyDetils) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.post(
      `http://ec2-184-73-152-95.compute-1.amazonaws.com:9000/api/property/create`,
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

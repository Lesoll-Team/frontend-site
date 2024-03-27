export async function editProperty(propertyDetils, propertyId) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/property/update/property/${propertyId}`,
      propertyDetils,
      {
        headers: {
          token: userToken,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

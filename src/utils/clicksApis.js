import axios from "axios";

export const propertyCallClick = async ({ id }) => {
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/property/calls/${id}`,
      {
        headers: {
          token: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const propertyWhatsClick = async ({ id }) => {
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/property/whatsappbtn/${id}`,
      {
        headers: {
          token: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const needsWhatsClick = async ({ id }) => {
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/need/whatsappbtn/${id}`,
      {
        headers: {
          token: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const needsCallClick = async ({ id }) => {
  const token = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/need/calls/${id}`,
      {
        headers: {
          token: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

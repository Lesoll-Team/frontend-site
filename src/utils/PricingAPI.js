import axios from "axios";

export async function createPlanPrice(pricePlanData) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.post(
      `http://ec2-3-87-159-22.compute-1.amazonaws.com:8000/api/admin/payment/create-payment`,
      pricePlanData,
      {
        headers: {
          token: userToken,
          //   "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getPlanPrice() {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.get(
      `http://ec2-3-87-159-22.compute-1.amazonaws.com:8000/api/admin/payment/get-admin-payment`,
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

export async function getServicePricePlan() {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    const response = await axios.get(
      `http://ec2-3-87-159-22.compute-1.amazonaws.com:8000/api/admin/payment/get-service`,
      {
        headers: {
          token: userToken,
        },
      }
    );
    // console.log("service", response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
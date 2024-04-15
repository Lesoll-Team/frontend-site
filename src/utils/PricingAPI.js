import axios from "axios";

export async function createPlanPrice(pricePlanData) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/payment/create-payment`,
      pricePlanData,
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
export async function updatePlanPrice({ pricePlanData, id }) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/payment/update-payment/${id}`,
      pricePlanData,
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

export async function getPlanPrice() {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/payment/get-admin-payment`,
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
export async function getSinglePlanPrice({ id }) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/payment/get-payment-single/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
}

export async function getServicePricePlan() {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/payment/get-service`,
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
export async function deleteSinglePlanPrice({ id }) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/payment/delete-package/${id}`,
      {
        headers: {
          token: userToken,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
}
export async function buyPackageAction({ id }) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/payment-user/payment-card/${id}`,
    { headers: { token: userToken } }
  );
  // const authUrl = response.data;
  // console.log(authUrl);
  console.log(response);
  return response.data;
}
/**
   *  const authUrl = response.data.Link;
    window.location.href = authUrl;
   */

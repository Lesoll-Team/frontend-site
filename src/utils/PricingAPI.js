import axiosInstance from "@/Shared/axiosInterceptorInstance";

export async function createPlanPrice(pricePlanData) {
  try {
    const response = await axiosInstance.post(
      `/admin/payment/create-payment`,
      pricePlanData,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function updatePlanPrice({ pricePlanData, id }) {
  try {
    const response = await axiosInstance.put(
      `/admin/payment/update-payment/${id}`,
      pricePlanData,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getPlanPrice() {
  try {
    const response = await axiosInstance.get(
      `/admin/payment/get-admin-payment`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function getPlanPayments() {
  try {
    const response = await axiosInstance.get(`/admin/payment/get-payment`);
    return response.data;
  } catch (error) {
    console.log("getPlanPayments error ");
  }
}
export async function getSinglePlanPrice({ id }) {
  try {
    const response = await axiosInstance.get(
      `/admin/payment/get-payment-single/${id}`,
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
}

export async function getServicePricePlan() {
  try {
    const response = await axiosInstance.get(`/admin/payment/get-service`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function deleteSinglePlanPrice({ id }) {
  try {
    const response = await axiosInstance.delete(
      `/admin/payment/delete-package/${id}`,
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
}
export async function buyPackageAction({ id }) {
  const response = await axiosInstance.get(`/payment-user/payment-card/${id}`);
  return response.data;
}
export async function updateIndexPlan(setIndex, id) {
  try {
    const response = await axiosInstance.patch(
      `/admin/payment/change-index/${id}`,
      { indexNumber: setIndex },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

import axiosInstance from "@/Shared/axiosInterceptorInstance";

export async function getUsersVIP() {
  try {
    const response = await axiosInstance.get(`/admin/dashboard/payment/users`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function getUsersVIPPackage({ packageId }) {
  try {
    const response = await axiosInstance.get(
      `/admin/dashboard/package/${packageId}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function getUserDataVIP({ userId }) {
  try {
    const response = await axiosInstance.get(
      `/admin/dashboard/package/user/${userId}`,
    );
    return response.data;
  } catch (error) {
    console.log("error:>>>", error);
    throw error.response.data;
  }
}
export const downloadUserInvoice = async ({ bundleId, userName, lang }) => {
  try {
    const response = await axiosInstance.get(
      `/admin/dashboard/download-invoice/${bundleId}?lang=${lang ? "ar" : "en"}`,
    );

    const link = document.createElement("a");
    const url = response.data.link;
    link.href = url;
    link.target = "_blank";
    link.download = `${userName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // const blob = new Blob([response.data.link]);
    // const link = document.createElement("a");
    // // const url = window.URL.createObjectURL(response.data.link);
    // link.href = response.data.link;
    // // link.download = `${userName}-invoice.pdf`;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  } catch (error) {
    // console.log(error);
    throw error.response.data;
  }
};
/**
 * @param  keyword search by order id
 * @param   status all || field || success
 * @returns array contain all fields and success pid payments
 */
export async function getStatusOperation({
  keyword,
  status,
  startDate,
  endDate,
}) {
  try {
    const response = await axiosInstance.get(
      `/admin/dashboard/success-pay?limit=100&page=1&order=${keyword}&success=${status}&start=${startDate || undefined}&end=${endDate || undefined}`,
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
}
export async function downloadFileVipUsers({ startDate, endDate }) {
  console.log("startDate downloadFileVipUsers", startDate);
  console.log("endDate downloadFileVipUsers", endDate);
  const response = await axiosInstance.get(
    `/admin/generated/generated-revenues?start=${startDate}&end=${endDate}`,
    { responseType: "arraybuffer" },
  );
  const blob = new Blob([response.data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "vip-users.xlsx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export async function sendGiftToUser({ packageID, userID }) {
  try {
    const response = await axiosInstance.post(`/admin/dashboard/gift-sub`, {
      package: packageID,
      user: userID,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function deleteGiftFromUser({ packageID, userID }) {
  try {
    const response = await axiosInstance.patch(`/admin/dashboard/delete-sub`, {
      package: packageID,
      user: userID,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

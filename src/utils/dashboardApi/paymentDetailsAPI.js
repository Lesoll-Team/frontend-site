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
  //admin/dashboard/package/:id => id package
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
      { responseType: "blob" },
    );
    console.log("response.data.link:>", response.data.link);
    const blob = new Blob([response.data.link], { type: "application/pdf" });

    const link = document.createElement("a");
    const url = window.URL.createObjectURL(blob);
    link.href = url;
    link.download = `${userName}-invoice.pdf`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // const link = document.createElement("a");
    // const url = response.data.link;
    // link.href = url;
    // link.target = "_blank";
    // link.download = `${userName}-invoice.pdf`;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  } catch (error) {
    // console.log(error);
    throw error.response.data;
  }
};

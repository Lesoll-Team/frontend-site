import axiosInstance from "@/Shared/axiosInterceptorInstance";
import Cookies from "js-cookie";

export async function fetchPropertiesView(dates) {
  const userToken = Cookies.get("userToken");

  if (userToken) {
    try {
      const response = await axiosInstance.get(
        `/admin/property/result-for-all-realty?start=${dates.dateFrom}&end=${dates.dateEnd}`,
        {
          headers: {
            token: userToken,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  return null;
}

export async function fetchSaleView(dates) {
  const userToken = Cookies.get("userToken");

  if (userToken) {
    try {
      const response = await axiosInstance.get(
        `/admin/property/result-for-all-realty-sale?start=${dates.dateFrom}&end=${dates.dateEnd}`,
        {
          headers: {
            token: userToken,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  return null;
}

export async function fetchUsersView(dates) {
  const userToken = Cookies.get("userToken");

  if (userToken) {
    try {
      const response = await axiosInstance.get(
        `/admin/property/result-for-all-realty-users?start=${dates.dateFrom}&end=${dates.dateEnd}`,
        {
          headers: {
            token: userToken,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  return null;
}

export async function fetchDeleteView(dates) {
  const userToken = Cookies.get("userToken");

  if (userToken) {
    try {
      const response = await axiosInstance.get(
        `/admin/property/result-for-all-realty-delete?start=${dates.dateFrom}&end=${dates.dateEnd}`,
        {
          headers: {
            token: userToken,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  return null;
}

export async function fetchRentView(dates) {
  const userToken = Cookies.get("userToken");

  if (userToken) {
    try {
      const response = await axiosInstance.get(
        `/admin/property/result-for-all-realty-rent?start=${dates.dateFrom}&end=${dates.dateEnd}`,
        {
          headers: {
            token: userToken,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  return null;
}

export const downloadUserData = async (dates) => {
  const userToken = Cookies.get("userToken");

  const res = await axiosInstance.get(
    `/admin/generated/generated-user-excel?token=${userToken}&end=${dates.dateEnd}&start=${dates.dateFrom}`,
    { responseType: "arraybuffer" },
  );
  const blob = new Blob([res.data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Create a download link and trigger the download
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "user-report.xlsx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadRealtyData = async (dates) => {
  const userToken = Cookies.get("userToken");

  const res = await axiosInstance.get(
    `/admin/generated/generated-realty-excel?token=${userToken}&end=${dates.dateEnd}&start=${dates.dateFrom}`,
    { responseType: "arraybuffer" },
  );
  const blob = new Blob([res.data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Create a download link and trigger the download
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "realty-report.xlsx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadOverviewData = async (dates) => {
  const userToken = Cookies.get("userToken");

  const res = await axiosInstance.get(
    `/admin/generated/generated-overview-excel?token=${userToken}&end=${dates.dateEnd}&start=${dates.dateFrom}`,
    { responseType: "arraybuffer" },
  );
  const blob = new Blob([res.data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "overview-report.xlsx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadSearchKeyword = async (dates) => {
  const userToken = Cookies.get("userToken");

  const res = await axiosInstance.get(
    `/admin/generated/generated-search-keyword-excel?token=${userToken}&end=${dates.dateEnd}&start=${dates.dateFrom}`,
    { responseType: "arraybuffer" },
  );
  const blob = new Blob([res.data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Create a download link and trigger the download
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "search-keyword.xlsx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
export const downloadUpdateProperties = async (dates) => {
  const userToken = Cookies.get("userToken");

  const res = await axiosInstance.get(
    `/admin/generated/generated-update-property-excel?token=${userToken}&end=${dates.dateEnd}&start=${dates.dateFrom}`,
    { responseType: "arraybuffer" },
  );
  const blob = new Blob([res.data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Create a download link and trigger the download
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "update-property.xlsx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadTrackUsers = async (dates) => {
  const userToken = Cookies.get("userToken");

  const res = await axiosInstance.get(
    `/admin/generated/generated-track-excel?token=${userToken}&end=${dates.dateEnd}&start=${dates.dateFrom}`,
    { responseType: "arraybuffer" },
  );
  const blob = new Blob([res.data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Create a download link and trigger the download
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "track-user.xlsx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadCampaign = async (dates) => {
  const userToken = Cookies.get("userToken");

  const res = await axiosInstance.get(
    `/admin/generated/generated-campaign-excel?token=${userToken}&end=${dates.dateEnd}&start=${dates.dateFrom}`,
    { responseType: "arraybuffer" },
  );
  const blob = new Blob([res.data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Create a download link and trigger the download
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "campaign.xlsx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadPropertyTrack = async (dates) => {
  const userToken = Cookies.get("userToken");

  const res = await axiosInstance.get(
    `/admin/generated/generated-property-track-excel?token=${userToken}&end=${dates.dateEnd}&start=${dates.dateFrom}`,
    { responseType: "arraybuffer" },
  );
  const blob = new Blob([res.data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Create a download link and trigger the download
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "property-track.xlsx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
//online-users
export const downloadOnlineUsers = async (dates) => {
  const userToken = Cookies.get("userToken");

  const res = await axiosInstance.get(
    `/admin/generated/generated-online-users-excel?token=${userToken}&end=${dates.dateEnd}&start=${dates.dateFrom}`,
    { responseType: "arraybuffer" },
  );
  const blob = new Blob([res.data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Create a download link and trigger the download
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "online-users.xlsx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

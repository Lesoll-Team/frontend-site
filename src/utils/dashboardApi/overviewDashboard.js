import axios from "axios";

export async function fetchPropertiesView(dates) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  if (userToken) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/property/result-for-all-realty?start=${dates.dateFrom}&end=${dates.dateEnd}`,
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
  return null;
}

export async function fetchSaleView(dates) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  if (userToken) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/property/result-for-all-realty-sale?start=${dates.dateFrom}&end=${dates.dateEnd}`,
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
  return null;
}

export async function fetchUsersView(dates) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  if (userToken) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/property/result-for-all-realty-users?start=${dates.dateFrom}&end=${dates.dateEnd}`,
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
  return null;
}

export async function fetchDeleteView(dates) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  if (userToken) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/property/result-for-all-realty-delete?start=${dates.dateFrom}&end=${dates.dateEnd}`,
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
  return null;
}

export async function fetchRentView(dates) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  if (userToken) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/property/result-for-all-realty-rent?start=${dates.dateFrom}&end=${dates.dateEnd}`,
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
  return null;
}




    export const downloadUserData = async (dates) => {
      const userToken = JSON.parse(localStorage.getItem("userToken"));

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/generated/generated-user-excel?token=${userToken}&end=${dates.dateEnd}&start=${dates.dateFrom}`
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
        const userToken = JSON.parse(localStorage.getItem("userToken"));

        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/generated/generated-realty-excel?token=${userToken}&end=${dates.dateEnd}&start=${dates.dateFrom}`
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
          const userToken = JSON.parse(localStorage.getItem("userToken"));

          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/admin/generated/generated-overview-excel?token=${userToken}&end=${dates.dateEnd}&start=${dates.dateFrom}`
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

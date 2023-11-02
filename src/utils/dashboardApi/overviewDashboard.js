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

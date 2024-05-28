import axiosInstance from "@/Shared/axiosInterceptorInstance";

export async function fetchAllProperty() {
  try {
    const response = await axiosInstance.get(`/admin/property/getpending`);
    return response.data.result;
  } catch (error) {
    throw error.response.massage;
  }
}

export async function fetchActiveProperty(
  rowsPerPage,
  page,
  filterUser,
  formattedStartDate,
  formattedEndDate,
  isRepost,
  isPin,
) {
  try {
    const response = await axiosInstance
      // .get
      // `/admin/search/searchprop?keywords=${filterUser}&&&start=${formattedStartDate}&end=${formattedEndDate}&limit=${rowsPerPage}&page=${page}`,
      .get(`/admin/search/searchprop`, {
        params: {
          keywords: filterUser,
          start: formattedStartDate,
          end: formattedEndDate,
          limit: rowsPerPage,
          page,
          makeRepost: isRepost,
          makePin: isPin,
        },
      });
    return response.data;
  } catch (error) {
    throw error.response.massage;
  }
}


export async function deleteProperties(propertyID) {
  try {
    const response = await axiosInstance.delete(
      `/property/delete/property/${propertyID}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.massage;
  }
}

export async function deleteActiveProperty(propertyID) {
  try {
    const response = await axiosInstance.delete(
      `/admin/property/deleteforever/${propertyID}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.massage;
  }
}

export async function acceptProperties(propertyID) {
  try {
    const response = await axiosInstance.patch(
      `/admin/property/accept/${propertyID}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.massage;
  }
}


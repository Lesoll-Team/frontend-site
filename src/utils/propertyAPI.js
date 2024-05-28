import axiosInstance from "@/Shared/axiosInterceptorInstance";



export async function propertyIsSold({ propertyId }) {
  try {
    const response = await axiosInstance.patch(
      `/admin/property/sold/${propertyId}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function editProperty(propertyDetils, propertyId) {
  try {
    const response = await axiosInstance.put(
      `/property/update/property/${propertyId}`,
      propertyDetils,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function AddToFavorites(propertyid) {
  try {
    const response = await axiosInstance.patch(`/user/favorites/${propertyid}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
//  contat btns
export async function WhatsAppBtn(propertyid) {
  try {
    await axiosInstance.patch(`/property/whatsappbtn/${propertyid}`);
  } catch (error) {
    console.log("error:>>>>", error);
  }
}
export async function CallBtn(propertyid) {
  try {
    const response = await axiosInstance.patch(`/property/calls/${propertyid}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
// share btns
export async function shareWhatsappBtn(propertyid) {
  try {
    const response = await axiosInstance.patch(
      `/property/whatsapp-share/${propertyid}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function shareFacebookBtn(propertyid) {
  try {
    const response = await axiosInstance.patch(
      `/property/facebook-share/${propertyid}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function shareTwitterBtn(propertyid) {
  try {
    const response = await axiosInstance.patch(
      `/property/twitter-share/${propertyid}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function shareOtherBtn(propertyid) {
  try {
    const response = await axiosInstance.patch(
      `/property/other-share/${propertyid}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function deleteProperty(propertyid, message) {
  try {
    const response = await axiosInstance.delete(
      `/property/delete/property/${propertyid}`,
      {
        data: {
          reason: message,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getRecommendRealty(propertyid) {
  try {
    const response = await axiosInstance.get(
      `/search/recommendrealty/?realtyId=${propertyid}`,
    );
    return response.data.recommendedData;
  } catch (error) {
    throw error.response.data;
  }
}

export async function GetActiveProp(page) {
  try {
    const response = await axiosInstance.get(
      `/user/confirmedprofile?limit=2w&page=${page}`,
    );
    return response.data.recommendedData;
  } catch (error) {
    throw error.response.data;
  }
}
export async function GetEditAds(slug) {
  try {
    const response = await axiosInstance.get(
      `/admin/property/updatepending/${slug}`,
    );
    return response.data.find;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getGovernorate() {
  try {
    const response = await axiosInstance.get(`/admin/governorate/getall`);
    return response.data.governorate;
  } catch (error) {
    throw error.response.data;
  }
}
export async function getRegion() {
  try {
    const response = await axiosInstance.get(`/admin/region/getall`);
    return response.data.Region;
  } catch (error) {
    throw error.response.data;
  }
}
// property details dashboard admin

export async function getPropertyDashboard(slug) {
  try {
    const response = await axiosInstance.get(
      `/admin/dashboard/property-details-dashboard/${slug}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

import axiosInstance from "@/Shared/axiosInterceptorInstance";
import Cookies from "js-cookie";

export async function createNewProperty(propertyDetils) {
  try {
    const userToken = Cookies.get("userToken");

    const response = await axiosInstance.post(
      `/property/create`,
      propertyDetils,
      {
        headers: {
          token: userToken,
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function propertyIsSold({ propertyId }) {
  try {
    const userToken = Cookies.get("userToken");
    const response = await axiosInstance.patch(
      `/admin/property/sold/${propertyId}?token=${userToken}`,
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

export async function editProperty(propertyDetils, propertyId) {
  try {
    const userToken = Cookies.get("userToken");

    const response = await axiosInstance.put(
      `/property/update/property/${propertyId}`,
      propertyDetils,
      {
        headers: {
          token: userToken,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function AddToFavorites(propertyid) {
  try {
    const userToken = Cookies.get("userToken");

    const response = await axiosInstance.patch(
      `/user/favorites/${propertyid}`,
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
//  contat btns
export async function WhatsAppBtn(propertyid) {
  try {
    await axiosInstance.patch(`/property/whatsappbtn/${propertyid}`, {
      headers: {
        token: userToken,
        "Content-Type": "multipart/form-data",
      },
    });
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
    const userToken = Cookies.get("userToken");

    const response = await axiosInstance.delete(
      `/property/delete/property/${propertyid}?token=${userToken}`,

      {
        headers: {
          token: userToken,
        },
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
    const userToken = Cookies.get("userToken");

    const response = await axiosInstance.get(
      `/search/recommendrealty/?realtyId=${propertyid}`,
      {
        headers: {
          token: userToken,
        },
      },
    );
    //?token=${userToken}
    return response.data.recommendedData;
  } catch (error) {
    throw error.response.data;
  }
}

export async function GetActiveProp(page) {
  try {
    // const userToken = Cookies.get("userToken");

    const response = await axiosInstance.get(
      `/user/confirmedprofile?limit=2w&page=${page}`,
      {
        headers: {
          token: JSON.parse(localStorage.getItem("userToken")),
        },
      },
    );
    //?token=${userToken}
    return response.data.recommendedData;
  } catch (error) {
    throw error.response.data;
  }
}
export async function GetEditAds(slug) {
  try {
    // const userToken = Cookies.get("userToken");

    const response = await axiosInstance.get(
      `/admin/property/updatepending/${slug}`,
      {
        headers: {
          token: JSON.parse(localStorage.getItem("userToken")),
        },
      },
    );
    //?token=${userToken}
    return response.data.find;
  } catch (error) {
    throw error.response.data;
  }
}

///api/search/recommendrealty/?realtyId=64f97c54a7708382a343d1a2
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
  const userToken = Cookies.get("userToken");
  try {
    const response = await axiosInstance.get(
      `/admin/dashboard/property-details-dashboard/${slug}?token=${userToken}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

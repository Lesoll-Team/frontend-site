import axios from "axios";

export async function createNewProperty(propertyDetils) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/property/create`,
      propertyDetils,
      {
        headers: {
          token: userToken,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function createNeed(needDetails) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.post(
      `http://192.168.1.17:9000/api/need/create-need?token=${userToken}`,
      needDetails,
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
export async function editProperty(propertyDetils, propertyId) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/property/update/property/${propertyId}`,
      propertyDetils,
      {
        headers: {
          token: userToken,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function AddToFavorites(propertyid) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/favorites/${propertyid}`,
      {},
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
//  contat btns
export async function WhatsAppBtn(propertyid) {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/property/whatsappbtn/${propertyid}`
    );
  } catch (error) {
    throw error;
  }
}
export async function CallBtn(propertyid) {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/property/calls/${propertyid}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
// share btns
export async function shareWhatsappBtn(propertyid) {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/property/whatsapp-share/${propertyid}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function shareFacebookBtn(propertyid) {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/property/facebook-share/${propertyid}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function shareTwitterBtn(propertyid) {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/property/twitter-share/${propertyid}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function shareOtherBtn(propertyid) {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/property/other-share/${propertyid}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function deleteProperty(propertyid, message) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/property/delete/property/${propertyid}?token=${userToken}`,

      {
        headers: {
          token: userToken,
        },
        data: {
          reason: message,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
    // console.log();
  }
}

export async function getRecommendRealty(propertyid) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/search/recommendrealty/?realtyId=${propertyid}`,
      {
        headers: {
          token: userToken,
        },
      }
    );
    //?token=${userToken}
    return response.data.recommendedData;
  } catch (error) {
    throw error.response.data;
    // console.log();
  }
}

export async function GetActiveProp(page) {
  try {
    // const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/confirmedprofile?limit=2w&page=${page}`,
      {
        headers: {
          token: JSON.parse(localStorage.getItem("userToken")),
        },
      }
    );
    //?token=${userToken}
    return response.data.recommendedData;
  } catch (error) {
    throw error.response.data;
    // console.log();
  }
}
export async function GetEditAds(slug) {
  try {
    // const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/property/updatepending/${slug}`,
      {
        headers: {
          token: JSON.parse(localStorage.getItem("userToken")),
        },
      }
    );
    //?token=${userToken}
    return response.data.find;
  } catch (error) {
    throw error.response.data;
    // console.log();
  }
}

///api/search/recommendrealty/?realtyId=64f97c54a7708382a343d1a2
export async function getGovernorate() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/governorate/getall`
    );
    return response.data.governorate;
  } catch (error) {
    throw error.response.data;
  }
}
export async function getRegion() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/region/getall`
    );
    return response.data.Region;
  } catch (error) {
    throw error.response.data;
  }
}
// property details dashboard admin

export async function getPropertyDashboard(slug) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard/property-details-dashboard/${slug}?token=${userToken}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

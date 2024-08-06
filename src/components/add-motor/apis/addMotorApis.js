import axiosInstance from "@/Shared/axiosInterceptorInstance";
import axios from "axios";
import Cookies from "js-cookie";

export const createMotorDraft = async ({
  data,
  setServerError,
  setFormStatus,
  setReturnData,
}) => {
  try {
    let token = Cookies.get("userToken");
    setFormStatus("loading");
    setServerError(null);
    const response = await axios.post(
      `http://ec2-3-227-150-208.compute-1.amazonaws.com:8000/v2/api/car/draft`,
      data,
      {
        headers: {
          token,
        },
      },
    );
    if (response.status == 200 || response.status == 201) {
      setFormStatus("success");
      setReturnData({ _id: response.data.id });
    }
    return response;
  } catch (error) {
    setFormStatus("failed");
    setFormStatus(error.response.data);
    throw error.response.data;
  }
};
export const updateMotorDraft = async ({
  data,
  setServerError,
  setFormStatus,
  setReturnData,
  id,
}) => {
  try {
    let token = Cookies.get("userToken");
    setFormStatus("loading");
    setServerError(null);
    const response = await axios.put(
      `http://ec2-3-227-150-208.compute-1.amazonaws.com:8000/v2/api/car/draft/${id}`,
      data,
      {
        headers: {
          token,
        },
      },
    );
    if (response.status == 200 || response.status == 201) {
      setFormStatus("success");
      setReturnData(response.data.data);
    }
    return response;
  } catch (error) {
    setFormStatus("failed");
    setFormStatus(error.response.data);
    throw error.response.data;
  }
};

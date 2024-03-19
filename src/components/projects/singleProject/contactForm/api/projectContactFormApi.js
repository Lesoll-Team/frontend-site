import axios from "axios";

export const postProjectContact = async ({
  setFormStatus,
  setFormError,
  data,
}) => {
  try {
    setFormStatus("loading");
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/contact/add`,
      data
    );
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
    }
    return response.data;
  } catch (error) {
    setFormStatus("failed");
    setFormError(error.response.data);
    throw error.response.data;
  }
};

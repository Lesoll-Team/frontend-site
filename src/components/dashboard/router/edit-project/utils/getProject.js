export const getProject = async (slug) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/property/get-single-projects/${slug}`,
    );
    return res.data;
  } catch (error) {
    console.error("Error in API request:", error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

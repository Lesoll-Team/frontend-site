import axiosInstance from "@/Shared/axiosInterceptorInstance";

export async function postImagesBlogs() {
  try {
    const response = await axiosInstance.post(
      `/admin/blog/upload-image-in-blog`,
    );
    return response;
  } catch (error) {
    throw error.response;
  }
}
export async function getImagesBlogs() {
  try {
    const response = await axiosInstance.get(`/admin/blog/image`);
    return response;
  } catch (error) {
    throw error.response;
  }
}
export async function deleteImagesBlogs({ imageID }) {
  try {
    const response = await axiosInstance.delete(
      `/admin/blog/image-delete/${imageID}`,
    );
    return response;
  } catch (error) {
    throw error.response;
  }
}

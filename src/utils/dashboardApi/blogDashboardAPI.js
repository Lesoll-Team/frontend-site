import axiosInstance from "@/Shared/axiosInterceptorInstance";

export async function addBlogs(blogData) {
  try {
    const response = await axiosInstance.post(`/admin/blog/add`, blogData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.blog;
  } catch (error) {
    throw error.response.data;
  }
}
export async function updateBlog(blogData, blogID) {
  try {
    const response = await axiosInstance.put(
      `/admin/blog/update/blog/${blogID}`,
      blogData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getAllBlogs() {
  try {
    const response = await axiosInstance.get(`/admin/blog/allblogs`);
    // const data = await res.data
    return response.data.getBlogs;
  } catch (error) {
    throw error.response.data;
  }
}
export async function getAllCategoryBlogs() {
  try {
    const response = await axiosInstance.get(`/admin/blog/get-category`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function deleteOneBlog(blogID) {
  try {
    const response = await axiosInstance.delete(
      `/admin/blog/delete/blog/${blogID}`,
    );
    // const data = await res.data
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

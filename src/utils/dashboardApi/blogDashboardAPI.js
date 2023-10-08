import axios from 'axios';



export async function addBlogs(userToken,blogData) {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/blog/add`,blogData
      ,{
        headers:{
          token:userToken,
          'Content-Type': 'multipart/form-data'
        }
      }
      );// register
      // const response = await axios.post(`http://api0.lesoll-demo.site/api/auth/register`,userData);// register
      return response.data.blog;
    } catch (error) {
      throw error.response.data
    }
  }

  

  export async function getAllBlogs() {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/blog/allblogs`);
      // const data = await res.data
      return response.data.getBlogs;
    } catch (error) {
      throw error.response.data
    }
  }


  export async function deleteOneBlog(blogID) {
      const userToken=JSON.parse(localStorage.getItem("userToken"))
    try {
      // console.log("in function utils:"+blogID);
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/admin/blog/delete/blog/${blogID}`,{
        headers:{
          token:userToken,
        }
      });
      // const data = await res.data
      return response.data;
    } catch (error) {
      throw error.response.data
    }
  }
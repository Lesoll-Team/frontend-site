import axios from 'axios';



export async function fetchAllProperty() {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/blog/add`,blogData);// register
      // const response = await axios.post(`http://api0.lesoll-demo.site/api/auth/register`,userData);// register
      return response.data;
    } catch (error) {
      throw error.response.data
    }
  }
import axios from 'axios';



export async function registerUser(userData) {
  try {
    const response = await axios.post(`http://api1.lesoll-demo.site/api/auth/register`,userData);// register
    return response.data;
  } catch (error) {
    throw error.response.data
  }
}
export async function loginUser(userData) {
  try {
    const response = await axios.post(`http://api1.lesoll-demo.site/api/auth/login`,userData);//login 
    return response.data;
  } catch (error) {
    throw error.response.data
  }
}



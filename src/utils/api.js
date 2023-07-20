// import axios from 'axios';

// export async function fetchPosts() {
//   const response = await axios.get("http://www.backendsite.lesoll-demo.site/api/auth/register")
//   return response.data;
// }

// utils/api.js
import axios from 'axios';

export async function registerUser(userData) {
try {
  const response = await axios.post('http://www.backendsite.lesoll-demo.site/api/auth/register', userData);
  return response.data;
} catch (error) {

  throw error.response.data;
  
}
}
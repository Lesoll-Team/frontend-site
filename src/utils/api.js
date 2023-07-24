import axios from 'axios';

export async function registerUser(userData) {
  try {
    const response = await axios.post('http://www.backendsite.lesoll-demo.site/api/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data
  }
}

export async function loginUser(userData) {

    const response = await axios.post('http://www.backendsite.lesoll-demo.site/api/auth/login', userData);
    return response.data;


}
export async function getUserData(){
  
  const response =await axios.get("http://www.backendsite.lesoll-demo.site/api/profile",{headers:{
    token:localStorage.getItem("token")

  }})

}
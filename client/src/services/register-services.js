import axios from 'axios';

const url = "http://localhost:5000/api/auth/register"

export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${url}`, data);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};
export default registerUser;

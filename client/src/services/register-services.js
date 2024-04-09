import axios from 'axios';

const url = "http://localhost:5000/api/auth/register";

export const createUser = async (data) => {
  try {
    const response = await axios.post(`${url}`, data);
    if (response.data.token) {
      console.log('Token recibido:', response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default createUser;
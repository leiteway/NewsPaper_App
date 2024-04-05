import axios from 'axios';

interface RegisterData {
  name: string;
  password: string;
  email: string;
}

interface LoginData {
    email: string;
    password: string;
}

const url = "http://localhost:5000/api/auth/register"

export const registerUser = async (data: RegisterData) => {
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

export const loginUser = async (data: LoginData) =>{
    try{
        const response = await axios.post('http://localhost:5000/api/auth/login', data);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch(error){
        throw error;
    }
};
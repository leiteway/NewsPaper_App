import axios from 'axios';

interface LoginData {
    email: string;
    password: string;
}

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

export default loginUser;
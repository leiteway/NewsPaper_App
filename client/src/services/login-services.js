import axios from 'axios';

const url = 'http://localhost:5000/api/auth/login';

export const loginUser = async (data) =>{
    try{
        const response = await axios.post(`${url}`, data.id);
        if (response.data.token) {
            localStorage.setItem('verifyToken', response.data.token);
            console.log('Log in successful!!')
        }
        return response.data;
    } catch(error) {
        throw error;
    }
};
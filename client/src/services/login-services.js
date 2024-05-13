import axios from 'axios';

const url = 'https://newspaper-api-10c3.onrender.com/api/auth/login';

export const loginUser = async (data) =>{
    try{
        const response = await axios.post(`${url}`, data);
        if (response.data.token) {
            console.log('Log in succesful!!')
        }
        return response.data;
    } catch(error) {
        throw error;
    }
};
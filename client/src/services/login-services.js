import axios from 'axios';

const url = 'http://localhost:5000/api/auth/login';

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
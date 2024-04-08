import axios from 'axios';

export const loginUser = async (data) =>{
    try{
        const response = await axios.post('http://localhost:5000/api/auth/login', data);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            console.log('Log in succesful!!')
        }
        return response.data;
    } catch(error){
        throw error;
    }
};

export default loginUser;
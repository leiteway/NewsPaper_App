import axios from 'axios';

///REVISAR TODAS LAS URLS

const url= 'http://localhost:5000/api/news'

//Método GET
export const getAllNews = async () => { 
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in localstorage');
        }
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        
        const response = await axios.get(`${url}`, {headers}); 
        const data = response.data;
        console.log(data)
        return data; 
    }

    catch (error) { 
        console.error('Error loading news:', error); 
    }
};

//Método DELETE
export const deletePost = async (id) => {
    try{
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in localstorage');
        }
        const headers = {
            'Authorization': `Bearer ${token}`
        };  

    if(confirm('¿Estás seguro de que quieres eliminar esta noticia?')=== true){
        const news =await axios.delete(`${url}/${id}`, {headers})
        return news
    }
    }
    catch(error){
        console.error('Error delete news:', error);
    }
};

//Método POST
export const addNewPost = async (newPost) => { 
    try{
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in localstorage');
        }
        const headers = {
            'Authorization': `Bearer ${token}`
        }; 

    const news = await axios.post(`${url}`, newPost, {headers}) 

    }
    catch(error){
    console.error('Error at posting your news', error);
    }
};

//Método GETONEPOST
export const getOnePost = async (id) => {
    try{
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in localstorage');
        }
        const headers = {
            'Authorization': `Bearer ${token}`
        };  

    const response = await axios.get(`${url}/${id}`, {headers}); 
    const data = await response.data; 
    return data;
    }
    catch(error){
        console.error('Error fetching this post', error);
    }
};

//Método PUT
export const editPost = async (id, data) => { 
    console.log("Modificando la noticia");
    try{
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in localstorage');
        }
        const headers = {
            'Authorization': `Bearer ${token}`
        };

    const response = await axios.put(`${url}/${id}`, data, { headers });
    return response.data;
    }catch(error){
        console.error('Error editing your news', error);
    }
};
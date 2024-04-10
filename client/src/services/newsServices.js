import axios from 'axios';

///REVISAR TODAS LAS URLS

const url= 'http://localhost:5000/api'

//Método GET
export const getAllNews = async () => {  
    try {
        const token = localStorage.getItem('verifyToken');
        if (!token) {
            throw new Error('Token no encontrado en el almacenamiento local');
        }
        const headers = {
            'Authorization': `Bearer ${token}`
        };
    
        const response = await axios.get(`${url}/news`, {headers}); 
        const data = response.data; 
        return data; 
    } catch (error) { 
        console.error('Error al cargar las noticias:', error); 
    }
};

//Método DELETE
export const deletePost = async () => { 
    if(confirm('¿Estás seguro de que quieres eliminar esta noticia?')=== true){
        const news =await axios.delete(`${url}/news/${id}`)
        return news
    }
};

//Método POST
export const addNewPost = async () => { 

    const news = await axios.post(`${url}/news`, data) 
        alert("Noticia añadida correctamente")
        return news 
};

//Método GETONEPOST
export const getOnePost = async () => { 
    const response = await fetch(`${url}/news/${id}`); 
    const data = await response.json(); 
    return data; 
};

//Método PUT
export const editPost = async () => { 
    console.log("Modificando la noticia");

    const response = await axios.put(`${url}/news/${id}`, newData, { 
        headers: {
        'Content-Type': 'application/json'
        }
    });
    return response.data;
};
import axios from 'axios';

///REVISAR TODAS LAS URLS

const url= 'http://localhost:3000'

//Método GET
export const getNews = async () => {  //Declaramos una función asíncrona llamada getBicycles que nos permite hacer la petición a la API
    try {  //Usamos try para manejar errores
      const response = await fetch(`${url}/`); //Usamos el método fetch para hacer la petición a la API y almacenamos la respuesta en la constante response
      const data = await response.json(); //Usamos el método json() para convertir la respuesta en un objeto JSON y lo almacenamos en la constante data 
      return data; //Retornamos la constante data que contiene los datos de las bicicletas
    } catch (error) { //Usamos catch para manejar errores y mostramos un mensaje de error en la consola
      console.error('Error fetching news:', error); //Mostramos un mensaje de error en la consola
    }
  };
//Método DELETE
export const deleteNews = async (id) => { //Definimos una función asíncrona llamada deleteBicycle que recibe un parámetro id que representa el ID de la bicicleta que queremos eliminar
   if(confirm('¿Estás seguro de que quieres eliminar esta noticia?')=== true){
    const news =await axios.delete(`${url}/${id}`)
    return news
   }
  };

//Método POST
export const addNews = async (data) => { //Definimos una función asíncrona llamada addBicycle que recibe un parámetro data que representa los datos de la bicicleta que queremos añadir
 
  const news = await axios.post(`${url}/`, data) //Usamos el método post de axios para hacer la petición a la API y almacenamos la respuesta en la constante news
    alert("Noticia añadida correctamente")
    return news //Retornamos la constante news que contiene los datos de la bicicleta añadida
};
      
//Método GETBYID
export const getNewById = async (id) => { //Definimos una función asíncrona llamada getItemById que recibe un parámetro id que representa el ID de la bicicleta que queremos obtener
 const response = await fetch(`${url}/${id}`); //Usamos el método fetch para hacer la petición a la API y almacenamos la respuesta en la constante response
 const data = await response.json(); //Usamos el método json() para convertir la respuesta en un objeto JSON y lo almacenamos en la constante data
  return data; //Retornamos la constante data que contiene los datos de la news
};

//Método PUT
export const updateNew = async (id, newData) => { //Definimos una función asíncrona llamada updateItem que recibe dos parámetros: id que representa el ID de la bicicleta que queremos actualizar y newData que representa los nuevos datos de la bicicleta
  console.log("modificando noticia");
  const response = await fetch(`${url}/${id}`, {
    method:"PUT",
    headers:{
      "Content-Type":"application/json",
    },
    body: JSON.stringify(newData)
    });
    const data = await response.json();
    return data 
  };


/* import CardSmall from "../components/card/CardSmall"; */
import SideBar from "../components/sideBar/SideBar";
/* import { Typography, CardContent, CardActions, Button, Link } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { styled } from '@mui/material/styles'; */
import { useState, useEffect, useNavigate  } from 'react'; 
/* import { getAllNews, deletePost } from '../services/newsServices';  */ 
import CardHome from "../components/card/CardHome";



const Home = () => {
  /* const [news, setNews] = useState<CardHome>([]);
}
  /* const navigate = useNavigate();
 */
/*   useEffect(() => {
    const fetchData = async () => {
      const data = await getAllNews();
      setNews(data);
    };
    fetchData();
   []);
 */ 
/*   const handleDelete = async (id: string) => { 
    try {
      await deletePost(id); // Llamar al servicio para borrar la noticia
      
      // Actualizar el estado local u otras acciones necesarias
      setNews(news.filter(newsItem => newsItem.id !== id));
    } catch (error) {
      console.error('Error al borrar noticia:', error);
    }
  }; */




 


  return (
    
    <div className="home-container">
     
      
        <SideBar/>
   

      <div className="card-container">
        <CardHome/>
      </div>

    </div>
    
  );
}

export default Home;
import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../services/newsServices";
import Swal from 'sweetalert2';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';



const NewsCard = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #43766C;
  border-radius: 25px;
  box-shadow: 5px;  
  padding: 2%;
  margin: 2%;
  max-width: 35rem;
  box-sizing: content-box;
  height: 40rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  background:linear-gradient(#041116, #071A21, #09242E, #1A3645);
  color: white;

  .news-image {
    overflow: hidden;
  }

  img {
    width: 100%; 
    height: auto; 
    object-fit: cover;
    border-radius: 25px;
    

  }

  .news-text p {
    font-size: 0.8rem;
    margin: 1rem;
    color: 
    
  }

  .news-text h3 {
    
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem;
    color: white;
  }

  .news-text h4 {
    font-weight: 300;
    font-size: 1rem;
    margin: 0;
    padding: 1rem;
    text-align: justify;
    
  }

  .news-buttons {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 1rem;
    padding: 1rem;
  }

  .news-button-readmore {
    background-color: rgba(7, 26, 33, 0.5);
    color: #f0f0f0;
    border: 1px solid ;
    border-radius: 25px;
    padding: 0.75rem;
    cursor: pointer;
  }

  
  .animated-icon-heart , .animated-icon-edit, .animated-icon-delete {
    cursor: pointer;
  }

  .animated-icon-heart :hover, .animated-icon-edit :hover, .animated-icon-delete :hover {

    transform: scale(1.2);
    transition: transform 0.5s;

  }




`

const Card = ({ news }) => {
    if (!news) {
        return <div>Loading...</div>; // O cualquier otro componente de carga
    }
    
    const { id, title, content, date, image } = news;
    console.log(news)
    const navigate = useNavigate();
    const shortContent = content.length > 150 ? content.slice(0, 150) + '...' : content;
    const shortDate = date.slice(0, 10);
    const [isClicked, setIsClicked] = useState(false);

  return (

    
    <NewsCard>
     <section className="news-image">
        <img src={image} alt="news" />
       </section>
    <section className="news-text">
      <p>{shortDate}</p>
      <h3 className="news-title">{title}</h3>
      <h4 className="news-content">{shortContent}</h4>
    </section>
      
    
    <div className="news-buttons">
      <button className="news-button-readmore" onClick={() => navigate(`Article/${id}`)}>Leer más</button>
      
      <div className="animated-icon-heart">
      <FavoriteBorderIcon style={{ color: isClicked ? 'red' : 'white' }} onClick={() => setIsClicked(!isClicked)} />
      </div>
      <div className="animated-icon-edit">
      <EditOutlinedIcon className="news-button-edit" onClick={() => navigate(`EditPost/${id}`)} />
      </div>
      <div className="animated-icon-delete">
      <DeleteOutlined className="news-button-delete" onClick={() => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deletePost(id).then(() => {
          Swal.fire(
            'La noticia ha sido eliminada con éxito.',
          );
          navigate('/home');
        }).catch((error) => {
          Swal.fire(
            'Hubo un problema al eliminar la noticia.',
          );
        });
      }
    });
 }}/></div>

 </div>
 
</NewsCard>

)
}

export default Card
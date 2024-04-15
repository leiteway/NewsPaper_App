import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { getOnePost } from "../../services/newsServices";
import './CardArticle.css'


const CardArticle = () => {
    const { id } = useParams(); 
    const [post, setPost] = useState(null); 
    const navigate = useNavigate() 

    useEffect(() => {
        const fetchPostById = async () => { 
        try {
            const response = await getOnePost(id); 
            setPost(response); 
        } catch (error) {
            console.error('Error al cargar los datos de la noticia:', error);
        }};

        fetchPostById(); 
    }, [id]);

  return (
    <>
    {post && (
    <div className="card-detail">
        <img className="card-detail-image" src={post.image}/>
        <div className='heart-date'>
            <img src="/src/assets/public/heart.png" alt="" /><span className='card-detail-date'>
            <p className="card-detail-date"> {post.date}</p></span>
        </div>
        <div className='text-card-detail'>
            <h2 className="card-detail-title">{post.title}</h2>
            <p className="card-detail-content"> {post.content}</p>
        </div>   
        
    </div>
  )
}
</>
  )
}

export default CardArticle

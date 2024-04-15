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
        <div className="imgcard">
            <img className="card-detail__image" src={post.image}/>
        </div>
        <div className="details">
            <h2 className="card-detail__title">{post.title}</h2>
        <div className='descriptions'>
            <p className="card-detail__content"> {post.content}</p>
            <p className="card-detail__year"> {post.date}</p>
        </div>
        </div>
    </div>
  )
}
</>
  )
}

export default CardArticle

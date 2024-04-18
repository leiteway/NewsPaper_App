import { editPost, getOnePost } from '../../services/newsServices';
import './EditNews.css';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const FormEditNews = () => {
    const {register, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const newsId = useParams().id; 

    const getOneNews = async () => {
      const newsData = await getOnePost(newsId);
      const dateSlice = newsData.date.slice(0, 10);

      setValue("title", newsData.title)
      setValue("content", newsData.content)
      setValue("date", dateSlice)
      setValue("image", newsData.image)
    }
    getOneNews();

  return (
    <div className="container-form-create-news">
        <form onSubmit={handleSubmit(data => {editPost(newsId, data).then(() => {
            Swal.fire('Noticia creada correctamente');
            navigate('/home'); // Asegúrate de que navigate esté definido y disponible en este contexto
        })})} className="form-edit-news"id="form-edit-news" >


            <div className="form-input-label">
                <label for="title" className="form-label" >Título de la noticia</label>
                <input {...register('title')} id="title" type="text" className="input-label" placeholder="Añade tu título aquí" />
                <p></p>                
            </div>


            <div className="form-input-label">
                <label for="content" className="form-label" >Contenido</label>
                <textarea {...register('content')} id="content" type="text" className="input-label form-content-label" placeholder="Añade tu contenido aquí" style={{height:"10rem"}} />
                <p></p>                
            </div>


            <div className="form-input-label">
                <label for="date" className="form-label" >Fecha</label>
                <input {...register('date')} id="date" type="date" className="input-label" placeholder="Añade tu fecha aquí" />
                <p></p>                
            </div>


            <div className="form-input-label">
                <label for="image" className="form-label" >Imagen</label>
                <input {...register('image')} id="image" type="link" className="input-label" placeholder="Añade tu archivo de imagen aquí" />
                <p></p>                
            </div>


            <div>
                <button onClick={() => navigate('/home')} className='button-form-create'>CANCELAR</button>
                <button type="submit" className='button-form-create'>ENVIAR</button>
            </div>


        </form>  
   </div>
  )
};


export default FormEditNews;
import { editPost } from '../../services/newsServices';
import './EditNews.css';
import { useForm } from 'react-hook-form';


const FormEditNews = () => {
    const {register, handleSubmit } = useForm();




  return (
   
        <form onSubmit={handleSubmit(newsData => {editPost(newsData)})} className="form-edit-news"id="form-edit-news" action="" method="">


            <div className="form-input-label">
                <label className="form-label" >Título de la noticia</label>
                <input {...register('title')} id="nombre" type="text" className="input-label" placeholder="Añade tu título aquí" />
                <p></p>                
            </div>


            <div className="form-input-label">
                <label className="form-label" >Contenido</label>
                <input {...register('content')} id="nombre" type="text" className="input-label" placeholder="Añade tu contenido aquí" />
                <p></p>                
            </div>


            <div className="form-input-label">
                <label className="form-label" >Fecha</label>
                <input {...register('date')} id="nombre" type="date" className="input-label" placeholder="Añade tu contenido aquí" />
                <p></p>                
            </div>


            <div className="form-input-label">
                <label className="form-label" >Imagen</label>
                <input {...register('image')} id="nombre" type="link" className="input-label" placeholder="Añade tu archivo de imagen aquí" />
                <p></p>                
            </div>


            <div>
                <button onClick={() => navigate()} className='button-form-create'>CANCELAR</button>
                <button type="submit" className='button-form-create'>ENVIAR</button>
            </div>


        </form>  
   
  )
};


export default FormEditNews;
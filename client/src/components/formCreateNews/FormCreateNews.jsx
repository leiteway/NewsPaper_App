import { addNewPost } from '../../services/newsServices';
import './FormCreateNews.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const FormCreateNews = () => {
    const {register, handleSubmit } = useForm();
    const navigate = useNavigate();


  return (
        <div className="container-form-create-news">
        <form onSubmit={handleSubmit(newPost => {addNewPost(newPost).then(navigate('/home'))})} className="form-create-news" id="form-create-news" action="" method="">

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
                <button onClick={() => navigate('/home')} className='button-form-create'>CANCELAR</button>
                <button type="submit" className='button-form-create'>ENVIAR</button>
            </div>

        </form> 
        </div>
  )
};

export default FormCreateNews;


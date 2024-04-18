import { addNewPost } from '../../services/newsServices';
import './FormCreateNews.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    title: yup.string().required("Añade un titulo"),
    content: yup.string().required("Añade el cuerpo de tu noticia"),
    date: yup.date().required("Selecciona una fecha"),
    image: yup.string().required("Hace falta un link").matches(/^(ftp|http|https):\/\/[^ "]+$/, "Sólo es válido formato http")});

const FormCreateNews = () => {
    const {register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationSchema)});
    
    const navigate = useNavigate();


  return (
    <div className="container-form-create-news">
    <form onSubmit={handleSubmit(newPost => {
        addNewPost(newPost)
        .then(() => {
            Swal.fire('Noticia creada con éxito!');
            navigate('/home'); // Asegúrate de que navigate esté definido y disponible en este contexto
        })
        .catch(error => {
            console.error('Error al crear la noticia:', error);
        });
    })} className="form-create-news" id="form-create-news">

            <div className="form-input-label">
                <label className="form-label" >Título de la noticia</label>
                <input {...register('title')} id="nombre" type="text" className="input-label" placeholder="Añade tu título aquí" />
                {errors.title && <div className="text-error">{errors.title.message}</div>}             
            </div> 

            <div className="form-input-label">
                <label className="form-label" >Contenido</label>
                <input {...register('content')} id="nombre" type="text" className="input-label" placeholder="Añade tu contenido aquí" />
                {errors.content && <div className="text-error">{errors.content.message}</div>}                
            </div> 

            <div className="form-input-label">
                <label className="form-label" >Fecha</label>
                <input {...register('date')} id="nombre" type="date" className="input-label" placeholder="Añade tu contenido aquí" />
                {errors.date && <div className="text-error">{errors.date.message}</div>}                
            </div> 

            <div className="form-input-label">
                <label className="form-label" >Imagen</label>
                <input {...register('image')} id="nombre" type="link" className="input-label" placeholder="Añade tu archivo de imagen aquí" />
                {errors.image && <div className="text-error">{errors.image.message}</div>}                
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


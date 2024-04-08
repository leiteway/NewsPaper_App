import './CardHome.css'; // Asegúrate de tener este archivo CSS en el mismo directorio

// import { useNavigate } from 'react-router-dom';


interface CardProps {
    expand: boolean;
    id: string;
    title: string;
    description: string;
    content: string;
    image: string;
    date: string;
    user_id: string;
  }


const CardHome = (props:CardProps) => {
  return (
    <section className="cardHome">
        <div className="cardHome-image">
            <img src={props.image} alt="Imagen de la tarjeta" />
        </div>
        <article className="cardHome-content">
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <p className='cardHome-description'>{props.description}</p>
            <p>{props.content}</p>
           
        </article>
        <article className="cardHome-buttons">
            <button className='readmore-button'>Leer más</button>
            <button className="delete-button" /* onClick={() => { const confirmDelete = window.confirm('¿Deseas eliminar esta noticia?'); if (confirmDelete) { handleDelete(news.id, user.id ); useNavigate(0)}}} */>
            Eliminar</button>

            <button className='edit-button'>Editar</button>
            <img className='cardHome-user' src={props.user_id}  alt="Imagen del user"/>
      </article>
    </section>
  );    
}

export default CardHome;
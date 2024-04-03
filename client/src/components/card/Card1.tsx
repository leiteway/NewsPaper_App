import IconButton from '@mui/material/IconButton';

import './Card.css';


export const Card1 = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src="https://via.placeholder.com/150" alt="Placeholder"></img>
      </div>
      <div className="card-content">
        <p className='card-date'>Date</p>
        <p className="card-title">Open AI</p>
        <p className="card-description">OpenAI lanza DALL-E 3, un modelo de IA que genera imágenes realistas a partir de descripciones textuales: un hito en la generación infinita de este tipo de creaciones.</p>
        </div>

        <div className="card-buttons">
        <button className="card-button-read">Leer</button>
        <button className="card-button-update">Editar</button>
        <button className="card-button-delete">Eliminar</button>
        <button className="card-button-like">Like</button>
        <div className="card-author">Author</div>
        </div>
    </div>

  );
}

export default Card1;
import './FormCreateNews.css'

export default function FormCreateNews(){
  return (
    
        <form className="form-create-news"id="form-create-news" action="" method="">

            <div className="form-input">
                <label htmlFor="nombre">Título de la noticia</label>
                <input id="nombre" type="text" className="name-form" placeholder="Añade tu título aquí" />
                <p></p>                
            </div> 

            <div className="form-input">
                <label htmlFor="nombre">Contenido</label>
                <input id="nombre" type="text" className="name-form" placeholder="Añade tu contenido aquí" />
                <p></p>                
            </div> 

            <div className="form-input">
                <label htmlFor="nombre">Fecha</label>
                <input id="nombre" type="date" className="name-form" placeholder="Añade tu contenido aquí" />
                <p></p>                
            </div> 

            <div className="form-input">
                <label htmlFor="nombre">Imagen</label>
                <input id="nombre" type="date" className="name-form" placeholder="Añade tu archivo de imagen aquí" />
                <p></p>                
            </div> 

            <div>
                <button>PREVISUALIZAR</button>
                <button>CANCELAR</button>
            </div>

            <button>ENVIAR</button>

            
        </form>  
    
  )
}


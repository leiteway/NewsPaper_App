import './FormCreateNews.css'

export default function FormCreateNews(){
  return (
    <>
        <form className="form-create-news" id="form-create-news" action="" method="">

            <div className='form-input-label'>
                <label className="form-label" htmlFor="nombre">Título de la noticia</label><br />
                <input className="input-label" id="titulo" type="text" placeholder="Añade tu título aquí" />
                <p></p>                
            </div> 

            <div className='form-input-label'>
                <label className="form-label"  htmlFor="nombre">Contenido</label><br />
                <input className="input-label"  id="contenido" type="text" placeholder="Añade tu contenido aquí" />
                <p></p>                
            </div> 

            <div className='form-input-label'>
                <label className="form-label"  htmlFor="nombre">Fecha</label><br />
                <input className="input-label" id="fecha" type="date" placeholder="Añade tu contenido aquí" />
                <p></p>                
            </div> 

            <div className='form-input-label'>
                <label className="form-label"  htmlFor="nombre">Imagen</label><br />
                <input className="input-label"  id="imagen" placeholder="Añade tu archivo de imagen aquí" />
                <p></p>                
            </div> 

            <div>
                <button className='button-form-create'>PREVISUALIZAR</button>
                <button className='button-form-create'>CANCELAR</button>
            </div>

            <button className='button-form-delete'>ENVIAR</button>

            
        </form>  
    </>
  )
}


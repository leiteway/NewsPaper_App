import './SideBar.css'

export default function SideBar(){
  return (
    <div>
        <div className='sideBar-container'>
            <p className='title-sidebar'>My Feed</p>
            {<hr  />} 
            <p className='text-sidebar'>Inicio</p>
            <p className='text-sidebar'>Mis Posts</p>
            <p className='text-sidebar'>CUENTA</p>
            <p className='text-sidebar'>Perfil</p>
            <p className='text-sidebar'>Sign Out</p>
            <p className='text-sidebar'>Nuevo Post</p>
            <p className='text-sidebar'>REDES SOCIALES</p>
            <img src="src/assets/public/social icons.png" alt="Iconos de redes sociales" />   
        </div> 
        <div className='contact-container'>
            <img src="src/assets/images/bg-sidebar.png" alt="" /> /*Este es el bg del Need Help y tiene que estar de fondo*/
            <img src="src/assets/public/Icon-contact-us.png" alt="Icono de contacto" />
            <p className='text-sidebar'>¿Necesitas ayuda?</p>
            <p className='text-sidebar'>Contacta con nosotras</p>
            <button className='text-sidebar'>CONTACTAR</button>

        </div>   
    </div>
  )
}


import './SideBar.css'
import CottageIcon from '@mui/icons-material/Cottage';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PushPinIcon from '@mui/icons-material/PushPin';
import PersonIcon from '@mui/icons-material/Person';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Link } from 'react-router-dom'

export default function SideBar(){
 

  return (
    <>
 
      <div className='sidebar-container'>
        <p className='title-sidebar'>My Feed</p>
            {<hr  />} 
            <section>
            <Link to="/home" replace className='icon-sidebar' style={{textDecoration: "none"}}><p className='text-sidebar'><CottageIcon className='icon-sidebar'/>Inicio</p></Link>
            <Link to="/home" replace className='icon-sidebar' style={{textDecoration: "none"}}><p className='text-sidebar'><EqualizerIcon className='icon-sidebar'/> Posts</p></Link>           
            <Link to="/home/newpost" replace className='icon-sidebar'style={{textDecoration: "none"}}><p className='text-sidebar'><PushPinIcon className='icon-sidebar'/> Nuevo Post</p></Link>
            </section>
            <section>
            <p className='text-sidebar'>CUENTA</p>
            <p className='text-sidebar'><PersonIcon className='icon-sidebar'/>Perfil</p>
            <p className='text-sidebar'><RocketLaunchIcon className='icon-sidebar'/>Sign Out</p>
            </section>
            <section>  
            <p className='text-sidebar'>REDES SOCIALES</p>
            <img className='social-icons-sidebar' src="/src/assets/public/social icons.png" alt="Iconos de redes sociales" />   
            </section>

            <section className='contact-container'>
                <img className='contact-bg' src="/src/assets/images/bg-sidebar.png" alt="" /> 
                <img className='icon-contact-sidebar' src="/src/assets/public/Icon-contact-us.png" alt="Icono de contacto" />
                <p className='text-contact-sidebar'>¿Necesitas ayuda?</p>
                <p className='text-contact-sidebar'>Contacta con nosotras</p>
                <button className='button-contact-sidebar'>CONTACTAR</button>
            </section> 
        </div>   
    </>
  )
}


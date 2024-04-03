import './SideBar.css'
import CottageIcon from '@mui/icons-material/Cottage';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PushPinIcon from '@mui/icons-material/PushPin';
import PersonIcon from '@mui/icons-material/Person';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function SideBar(){
  return (
    <div>
        <div className='sideBar-container'>
            <p className='title-sidebar'>My Feed</p>
            {<hr  />} 
            <section>
           <p className='text-sidebar'><CottageIcon className='cottage-icon'/>Inicio</p>
            <p className='text-sidebar'><EqualizerIcon className='equalizer-icon'/> Posts</p>
            </section>
            <p className='text-sidebar'><PushPinIcon className='pin-icon'/>Nuevo Post</p>
            <p className='text-sidebar'>CUENTA</p>
            <p className='text-sidebar'><PersonIcon className='person-icon'/>Perfil</p>
            <p className='text-sidebar'><RocketLaunchIcon className='rocket-icon'/>Sign Out</p>
            
            
            
            <p className='text-sidebar'>REDES SOCIALES</p>
            <img className='icons-sidebar' src="src/assets/public/social icons.png" alt="Iconos de redes sociales" />   
        
            <div className='contact-container'>
                <img src="src/assets/images/bg-sidebar.png" alt="" /> {/* Este es el bg del Need Help y tiene que estar de fondo */}
                <img src="src/assets/public/Icon-contact-us.png" alt="Icono de contacto" />
                <p className='text-sidebar'>¿Necesitas ayuda?</p>
                <p className='text-sidebar'>Contacta con nosotras</p>
                <button className='text-sidebar'>CONTACTAR</button>
            </div> 
        </div>   
    </div>
  )
}


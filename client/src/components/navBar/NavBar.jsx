import './NavBar.css'
import Box from '@mui/material/Box';
import { useUserContext } from '../../context/UserContext';
import LogOutButton from '../LogOutButton';
import { Link } from 'react-router-dom'

export default function NavBar() {
  const { isAuthenticated, user } = useUserContext()
  return (
    <div className="navbar">
        <Link to="/home" replace className='logo-nav'><img className="logotipo" src='/src/assets/images/Logo/logo tech-3-AdminScreen.svg' alt="" /></Link>
        <Box>
            <input className="searchBar" placeholder="Escribe tu búsqueda aquí..." />
        </Box>
        {isAuthenticated && (
            <>
          <div className='userContainer'>
            <img src='../src/assets/public/avatar-admin-screen.png' alt="" />
            <p>{user && user.name}</p>
            </div>
            <LogOutButton />
            </>
        )}
    </div>
  );
}


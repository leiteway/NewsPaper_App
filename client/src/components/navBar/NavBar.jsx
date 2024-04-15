import './NavBar.css'
import Box from '@mui/material/Box';
import { useUserContext } from '../../context/UserContext';
import LogOutButton from '../LogOutButton';

export default function NavBar() {
  const { isAuthenticated } = useUserContext()
  return (
    <div className="navbar">
        <img className="logotipo" src='/src/assets/images/Logo/logo tech-3-AdminScreen.svg' alt="" />
        <Box>
            <input className="searchBar" placeholder="Escribe tu búsqueda aquí..." />
        </Box>
        {isAuthenticated && (
            <>
          <div className='userContainer'>
            <img src='../src/assets/public/avatar-admin-screen.png' alt="" />
            <p>Fátima</p>
            </div>
            <LogOutButton />
            </>
        )}
    </div>
  );
}


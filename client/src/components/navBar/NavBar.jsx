import './NavBar.css'
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

export default function NavBar() {
  return (
    <div className="navbar">
        <img className="logotipo" src='../src/assets/public/logotipo.png' alt="" />
        <Box>
            <SearchIcon className='searchIcon'/>
            <input className="searchBar" placeholder="Escribe tu búsqueda aquí..." />
        </Box>
        <div className='userContainer'>
        <img src='../src/assets/public/avatar-admin-screen.png' alt="" />
        <p>Fátima</p>
        </div>
    </div>
  );
}


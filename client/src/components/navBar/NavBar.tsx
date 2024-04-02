import './NavBar.css'
// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function NavBar() {
  return (
    <div className="navbar">
        <img className="logotipo" src='../src/assets/public/logotipo.png' alt="" />
        <Box className="searchBar" >
            <TextField className="textField" label="Busca tu noticia" variant='outlined' id="fullWidth" />
        </Box>
        <img src='../src/assets/public/avatar-admin-screen.png' alt="" />
    </div>
  );
}
// import { Link } from 'react-router-dom'

// const NavBar = () => {
//     return (
//     <>
//     <nav>



//     </nav>
//     </>
//     )
// }

// export default NavBar

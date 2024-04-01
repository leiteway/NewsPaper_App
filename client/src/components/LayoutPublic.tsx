// import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from '../components/navBar/NavBar';
import Footer from '../components/footer/Footer';


const LayoutPublic = () => {
  return (
    <div>
        <NavBar/>
        {/* <main> */}
        <Outlet/>
        {/* </main> */}
        <Footer/>
    </div>
    
  )
}

export default LayoutPublic
import { Link, useLoaderData } from 'react-router-dom';
import Card from "../components/card/Card";
import SideBar from '../components/sideBar/SideBar';
import React, { useState } from 'react';


const Home = () => {
 const news = useLoaderData();
 

  return (
    <>
    <h2 style={{ display:"flex", justifyContent:"center", color:"white", fontWeight:"lighter", margin:"2rem" }}>Bienvenido a la página de noticias más interesantes del mundo tech</h2>

    <Link to="NewPost" style= {{display:"flex", justifyContent:"center", textDecoration:"none"}}>
      <button className="button" style={
        { display:"flex", justifyContent:"center", textDecoration:"none", backgroundColor: "rgba(7, 26, 33, 0.5)",margin:"1rem", color: "#f0f0f0", border: "1px solid", borderRadius: "25px" ,padding: "0.75rem",marginTop:"1rem", color:"white" }}>
          Agregar Noticia
      </button>
    </Link>
    
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
     <SideBar/>
    {news && news.map((news) => (
        <Card key={news.id} news={news} />
      ))}
    </div>
  </>
  );
}

export default Home;
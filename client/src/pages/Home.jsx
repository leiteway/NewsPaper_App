import { Link, useLoaderData } from 'react-router-dom';
import Card from "../components/card/Card";
import SideBar from '../components/sideBar/SideBar';
import React from 'react';



const Home = () => {
 const news = useLoaderData();
 

  return (
    <>
    <h2 style={{ display:"flex", justifyContent:"center", color:"white", fontWeight:"lighter", margin:"2rem" }}>Bienvenido a la página de noticias más interesantes del mundo tech</h2>

    <Link to="NewPost" style= {{display:"flex", justifyContent:"center", textDecoration:"none"}}>
      <button className="button" style={
        { display:"flex", justifyContent:"center", backgroundColor: "rgba(7, 26, 33, 0.5)", margin:"1rem", color: "#f0f0f0", border: "1px solid", borderRadius: "25px" ,padding: "0.75rem",marginTop:"1rem", color:"white" }}>
          Agregar Noticia
      </button>
    </Link>
    <div className="container-sidebar-cards"style={{ display: "flex" }}>
      <SideBar />
      <div className="card-container" style={{ display: "flex", flexWrap: "wrap", flexDirection:"row", flexGrow: 2 }}>
     
     {news && news.map((news) => (
        <Card key={news.id} news={news} />
      ))}
    </div>
    </div>
  </>
  );
}

export default Home;
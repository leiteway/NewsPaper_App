import { Link, useLoaderData } from 'react-router-dom';
import Card from "../components/card/Card";


const Home = () => {
 const news = useLoaderData();
// console.log(news)

  return (
    <>
    <h1>NEWS</h1>

    <Link to="NewPost"><button className="button" style={{ backgroundColor: "#43766C", margin: '10px' }}>Agregar Noticia</button></Link>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    {news && news.map((news) => (
        <Card key={news.id} news={news} />
      ))}
    </div>
  </>
  );
}

export default Home;
import { useLoaderData } from 'react-router-dom';
import CardArticle from "../components/cardArticle/CardArticle";


const Article = () => {
 const news = useLoaderData();
// console.log(news)

  return (
    <>
    <h1>Leer noticia</h1>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    {news && news.map((news) => (
        <CardArticle key={news.id} news={news} />
      ))}
    </div>
  </>
  );
}

export default Article;

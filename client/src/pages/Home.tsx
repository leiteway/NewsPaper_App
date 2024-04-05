import CardSmall from "../components/card/CardSmall";
import SideBar from "../components/sideBar/SideBar";

const Home = () => {
  return (
    <div>
      <div className="side-bar-container">
        <SideBar/>
      </div>

      <div className="card-container">
        <CardSmall/>
      </div>

      
    </div>
  )
}

export default Home

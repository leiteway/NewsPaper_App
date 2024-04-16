import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import NavBar from './navBar/NavBar';
import Footer from './footer/Footer';

const LayoutPrivate = () => {
  const { isAuthenticated } = useUserContext();
return (
<>
<NavBar/>
{isAuthenticated ? <Outlet/> : <Navigate to="/"/>}
<Footer/>
</>
)
};

export default LayoutPrivate;
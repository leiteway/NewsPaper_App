import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const LayoutPrivate = () => {
  const { isAuthenticated } = useUserContext();
  console.log(isAuthenticated);
return 
<>
{!isAuthenticated ? <Outlet/> : <Navigate to="/login"/>}
</>
};

export default LayoutPrivate;
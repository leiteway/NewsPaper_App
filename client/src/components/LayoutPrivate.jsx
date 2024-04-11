import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const LayoutPrivate = () => {
  const { isAuthenticated } = useUserContext();
return (
<>
{isAuthenticated ? <Outlet/> : <Navigate to="/"/>}
</>
)
};

export default LayoutPrivate;
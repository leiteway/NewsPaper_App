import React from 'react'
import { useUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const LogOutButton = () => {
  const { setIsAuthenticated } = useUserContext();
  const navigate = useNavigate();
  const logOut = () => { 
    localStorage.removeItem('token') 
    setIsAuthenticated(false);
    navigate('/');
  }
  return (
    <button onClick={() => logOut()}>LogOut</button>
  )
}

export default LogOutButton
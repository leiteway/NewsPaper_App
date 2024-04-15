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
    <button style={{width: "6rem", backgroundColor:"#478FB4", color: "#000000", padding:"6px", borderRadius:"10px", fontFamily: 'system-ui', fontSize: "1rem", border: "none", marginRight:"2rem" }} onClick={() => logOut()}>LogOut</button>
  )
}

export default LogOutButton
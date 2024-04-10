import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './RegisterForm.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
// import { loginUser } from '../../services/login-services';

export const LoginForm = () => {
  const { register } = useForm();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); //lógica para enviar credenciales al back-end
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if(!response.ok) {
        throw new Error('Error en el inicio de sesión');
      }

      const data = await response.json();
      // Aquí manejamos la respuesta exitosa del backend, recibimos token en el almacenamiento local del navegador para que el usuario esté autenticado mientras navega
      localStorage.setItem('verifyToken',data.token);
      //Ahora redirigimos al usuario a la Home, después de un login exitoso
      navigate('/dashboard');
    } catch (error){
      console.error('Error:', error);
      // Aquí podemos manejar errores, ejem. mostrar un mensaje al usuario
     }
  };
  
  return (
    <>
    <div className="container-form">
      <div className="image-container">
        <div className="logo"></div>
        <div className='title-container'>
          <p>Las noticias más interesantes del mundo Tech</p>
          <h1>TECHTODAY</h1>
        </div>
        <div className="image-side"></div>
      </div>

      <form className='form' onSubmit={handleSubmit}>
        <h5>Iniciar sesión con</h5>
        <div className="social-login">
          <a href=""><GitHubIcon className='github-icon'/></a>
          <a href=""><AppleIcon className='apple-icon'/></a>
          <a href=""><GoogleIcon className='google-icon'/></a>
        </div>

        <h5 className='or-subtitle'></h5>

        <label>
          Email
          <input {...register('email')} required type="email" />
        </label>

        <label>
          Contraseña
          <input {...register('password')} required type="password" />
        </label>
        
        <button type="submit">Log In</button>

        <div className='login-button'>
          ¿No tienes una cuenta? <a href="/register">Entra aquí</a>
        </div>
      </form>
    </div>
    </>
  );
};

export default LoginForm;
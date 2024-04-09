import React from 'react';
import { useForm } from 'react-hook-form';
import './RegisterForm.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { loginUser } from './login-services';

export const Login = () => {
  // ... código para manejar el inicio de sesión ...

  const handleLogin = async (data) => {
    try {
      const response = await loginUser(data);
      if (response.success) {
        console.log('Usuario logeado exitosamente');
        const token = localStorage.getItem('token'); // Obtiene el token del almacenamiento local
        console.log('Token:', token);
        // Ahora puedes usar el token para hacer solicitudes autenticadas a tu servidor
      }
    } catch (error) {
      console.error('Error al logear usuario:', error);
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

      <form className='form' onSubmit={handleLogin(onSubmit)}>
        <h5>Inicia con</h5>
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
          ¿No tienes una cuenta? <a href="/register"> Entra aquí</a>
        </div>
      </form>
    </div>
    </>
  );
};

export default LoginForm;
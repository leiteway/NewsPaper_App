import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './RegisterForm.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { loginUser } from '../../services/login-services';
import { useUserContext } from '../../context/UserContext';
import Swal from 'sweetalert2'

export const LoginForm = () => {
  const { register, handleSubmit } = useForm(); // toda la dataForm viene del useForm que dentro tiene el register que lo tenemos en el campo del formulario
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser } = useUserContext();

  const HandleLoginForm = async (dataForm) => {

    try {
      const responseLogin = await loginUser(dataForm);
      localStorage.setItem('token',responseLogin.token);
      Swal.fire(`Te has Loggeado correctamente!, bienvenid@, ${responseLogin.user_name}!`);
     
      const user = {
        role : responseLogin.user_role,
        name : responseLogin.user_name
      }
      setUser(user)
      setIsAuthenticated(true);
      navigate('home');
    } catch (error){
      console.error('Error:', error);
      if (error.response && error.response.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Error de autenticación',
          text: 'El correo electrónico o la contraseña son incorrectos.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error inesperado.',
        });
      }
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

      <form className='form' onSubmit={handleSubmit(HandleLoginForm)}>
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
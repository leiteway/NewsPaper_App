import React from 'react';
import { useForm } from 'react-hook-form';
import './RegisterForm.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import createUser from '../../services/register-services';
// import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  //formState: { errors } 

  const onSubmit = async (data) => {
    try {
      const response = await createUser(data);
      if (response.success) {
        console.log('Usuario registrado exitosamente');
        localStorage.setItem('token', response.data.token);
        // Redirige al usuario o realiza alguna otra acción después del registro exitoso
      } 
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      // Maneja errores de conexión u otros errores del lado del cliente
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

      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <h5>Registrate con</h5>
        <div className="social-login">
          <a href=""><GitHubIcon className='github-icon'/></a>
          <a href=""><AppleIcon className='apple-icon'/></a>
          <a href=""><GoogleIcon className='google-icon'/></a>
        </div>

        <h5 className='or-subtitle'></h5>

        <label>
          Nombre
          <input {...register('name')} required type="name" />
        </label>

        <label>
          Email
          <input {...register('email')} required type="email" />
        </label>

        <label>
          Contraseña
          <input {...register('password')} required type="password" />
        </label>
        
        <button type="submit">Registrarse</button>

        <div className='login-button'>
          ¿Tienes una cuenta? <a href="/"> Entra aquí</a>
        </div>
      </form>
    </div>
    </>
  );
};

export default RegisterForm;
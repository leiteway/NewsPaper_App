import React from 'react';
import { useForm } from 'react-hook-form';
import './RegisterForm.css';
import GitHubIcon from '@material/ui-icons/GitHub';
import AppleIcon from '@material-ui/icons/Apple';


type FormData = {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
};

export const RegisterForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div className="container">
       <div className="image-container">
  <div className="logo"></div>
  <div className='title-container'>
  <p>Las noticias más interesantes del mundo Tech</p>
  <h1>TECHTODAY</h1></div>
  <div className="image-side"></div>
</div>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <h5>Registrate con</h5>
        <div className="social-login">
          <a href=""><GitHubIcon/></a>
          <a href=""><AppleIcon/></a>
          <a href=""></a>
        </div>
        <h5 className='or-subtitle'></h5>
        <label>
          Nombre:
          <input {...register('name')} required />
        </label>
        <label>
          Email:
          <input {...register('email')} required type="email" />
        </label>
        <label>
          Contraseña:
          <input {...register('password')} required type="password" />
        </label>
        <label>
          Recuérdame:
          <input {...register('rememberMe')} type="checkbox" />
        </label>
        <div>
          ¿Tienes una cuenta? <a href="/login">Inicia sesión aquí</a>.
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;
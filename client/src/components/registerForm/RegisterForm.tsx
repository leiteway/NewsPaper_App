import { useForm } from 'react-hook-form';
import './RegisterForm.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { GoogleOAuthProvider } from '@react-oauth/google';


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

        <GoogleOAuthProvider clientId="<your_client_id>">

        <GoogleIcon className='google-icon'/>

        </GoogleOAuthProvider>


          <a href=""><GitHubIcon className='github-icon'/></a>
          <a href=""><AppleIcon className='apple-icon'/></a>
          <a href=""><GoogleIcon className='google-icon'/></a>
        </div>

        <h5 className='or-subtitle'></h5>

        <label>
          Nombre
          <input {...register('name')} required />
        </label>

        <label>
          Email
          <input {...register('email')} required type="email" />
        </label>

        <label>
          Contraseña
          <input {...register('password')} required type="password" />
        </label>
        
        <label className="rememberme-container">
          
          <input className="rememberme-check-box" {...register('rememberMe')} type="checkbox" />
          Recuérdame

        </label>

        <button type="submit">SIGN UP</button>

        <div className='login-button'>
          ¿Tienes una cuenta? <a href="/login"> Entra aquí</a>
        </div>

      </form>
    </div>
  );
};

export default RegisterForm;
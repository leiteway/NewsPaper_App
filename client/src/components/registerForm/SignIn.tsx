import React from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from "../../services/login-services"

type LoginData = {
  email: string;
  password: string;
};

export const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginData>();
  const onSubmit = async (data: LoginData) => {
    try {
      const registrationResult = await loginUser(data);
      if (registrationResult.success) {
        console.log('Usuario conectado exitosamente');
        // Redirige al usuario o realiza alguna otra acción después del registro exitoso
      } else {
        console.error('Error conectar usuario:', registrationResult.message);
        // Maneja errores de registro, por ejemplo, muestra un mensaje al usuario
      }
    } catch (error) {
      console.error('Error al ingresar usuario:', error);
      // Maneja errores de conexión u otros errores del lado del cliente
    }
  };
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input {...register('email')} type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input {...register('password')}type="password" id="password" name="password" />
        <button type="submit">Sign In</button>
      </form>
      
    </div>
  )
}

export default SignIn;
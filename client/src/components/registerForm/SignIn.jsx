import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { loginUser } from "../../services/login-services"


export const SignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const loginResult = await loginUser(data);
      if (loginResult.success) {
        console.log('Usuario conectado exitosamente');
        // Redirige al usuario o realiza alguna otra acción después del registro exitoso
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
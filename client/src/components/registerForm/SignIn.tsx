import { useForm } from 'react-hook-form';

type LoginData = {
  email: string;
  password: string;
};

export const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginData>();
  const onSubmit = (data: LoginData) => console.log(data);


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
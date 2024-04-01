import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../components/layout/";
import Home from "../components/home/Home";
import SignInForm from "../components/signInForm/SignInForm";
import RegisterForm from "../components/registerForm/RegisterForm";
import NewPost from "../components/newPost/NewPost";
import EditPost from "../components/editPost/EditPost";
import Card from "../components/card/Card";


export const router = createBrowserRouter([
  {
      path: "/",
      element: <LayoutPublic />,
      children: [
    
    {
        path: "/SignIn",
        element: <SignInForm/>,
    },
    {
        path: "/Register",
        element: <RegisterForm/>,
    },
    {
        path: "/",
        element: <Home/>,
    },
    {
      path: "/NewPost",
      element: <NewPost/>,
    },
    {
      path: "/EditPost",
      element: <EditPost/>
    },
   
    {
      path: "/card/:id",
      element: <Card/>
    }
  ],
  }
  ]);

export default router;

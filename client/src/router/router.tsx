import { createBrowserRouter } from "react-router-dom";
import SignIn from "../components/registerForm/SignIn";
import LayoutPublic from "../components/LayoutPublic";
// import Home from "../components/home/Home";
import RegisterForm from "../components/registerForm/RegisterForm";
// import NewPost from "../components/newPost/NewPost";
// import EditPost from "../components/editPost/EditPost";
// import Card from "../components/card/Card";


export const router = createBrowserRouter([
  {
      path: "/",
      element: <LayoutPublic />,
      children: [
    
    {
        path: "/SignIn",
        element: <SignIn/>,
    },
    {
        path: "/Register",
        element: <RegisterForm/>,
    },
    {
        path: "/",
        // element: <Home/>,
    },
    {
      path: "/NewPost",
      // element: <NewPost/>,
    },
    {
      path: "/EditPost/:id",
      // element: <EditPost/>
    },
   
    {
      path: "/card/:id",
      // element: <Card/>
    }
  ],
  }
  ]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/registerForm/Login";
import LayoutPublic from "../components/LayoutPublic";
// import Home from "../components/home/Home";
import RegisterForm from "../components/registerForm/RegisterForm";
// import NewPost from "../components/newPost/NewPost";
// import RegisterForm from "../components/registerForm/RegisterForm";
import NewPost from "../pages/NewPost";
// import EditPost from "../components/editPost/EditPost";
// import Card from "../components/card/Card";



export const router = createBrowserRouter([
  {
      path: "/",
      element: <LayoutPublic/>,
      children: [
    {
        path: "/login",
        element: <Login/>,
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
      element: <NewPost/>,
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
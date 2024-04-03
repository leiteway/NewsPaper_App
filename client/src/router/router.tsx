import { createBrowserRouter } from "react-router-dom";
import SignInSide from "../components/registerForm/SingIn";
import LayoutPublic from "../components/LayoutPublic";
import SideBar from "../components/sideBar/SideBar";
// import Home from "../components/home/Home";

// import RegisterForm from "../components/registerForm/RegisterForm";
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
        element: <SignInSide/>,
    },
    {
        path: "/Register",
        // element: <RegisterForm/>,
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
    },

    {
      path: "/SideBar",
      element: <SideBar/>
    }
  ],
  }
  ]);

export default router;
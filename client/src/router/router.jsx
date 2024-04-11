import { createBrowserRouter } from "react-router-dom";
import Login from "../components/registerForm/Login";
import LayoutPublic from "../components/LayoutPublic";
import Home from "../pages/Home";
import RegisterForm from "../components/registerForm/RegisterForm";
import NewPost from "../pages/NewPost";
import LayoutPrivate from "../components/LayoutPrivate";


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
          path: "/register",
          element: <RegisterForm/>,
      },
      {
        path: "NewPost",
        element: <NewPost/>,
      },
      {
        path: "/home",
        element: <LayoutPrivate/>,
        children: [
          {
              index: true,
              element: <Home/>,
          },
        ]

  }
]
}]
  );

export default router;
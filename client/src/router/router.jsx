import { createBrowserRouter } from "react-router-dom";
import Login from "../components/registerForm/Login";
import LayoutPublic from "../components/LayoutPublic";
import Home from "../pages/Home";
import RegisterForm from "../components/registerForm/RegisterForm";
import NewPost from "../pages/NewPost";
import LayoutPrivate from "../components/LayoutPrivate";
import { getAllNews } from "../services/newsServices";
import EditPost from "../pages/EditPost";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPublic/>,
      children: [
        {
          index: true,
          element: <Login/>,
      },
      {
          path: "register",
          element: <RegisterForm/>,
      },
      {
        path: "home",
        element: <LayoutPrivate/>,
        children: [
          {
            index: true,
            element: <Home/>,
            loader: getAllNews,
          },
          {
            path: "NewPost",
            element: <NewPost/>,
          },
          {
            path: "EditPost/:id",
            element: <EditPost/>,
          }
        ]

  }
]
}]
  );

export default router;
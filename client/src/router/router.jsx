import { createBrowserRouter } from "react-router-dom";
import Login from "../components/registerForm/Login";
import LayoutPublic from "../components/LayoutPublic";
// import Home from "../pages/Home";
//import SideBar from "../components/sideBar/SideBar";

import RegisterForm from "../components/registerForm/RegisterForm";
import NewPost from "../pages/NewPost";
//import LayoutPrivate from "../components/LayoutPrivate";
// import CardHome from "../components/card/CardHome";
// import EditPost from "../components/editPost/EditPost";
/* import CardSmall from "../components/card/CardSmall";
 */


export const router = createBrowserRouter([
  {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <RegisterForm/>,
    },
    {
      path: "/",
      element: <LayoutPublic/>,
      children: [
    {
        path: "/dashboard",
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
      /* element: <CardSmall/> */
      // element: <CardHome expand={true} id={"1"} title="Sample Title" description="Sample Description" content={""} image={""} date={""} user_id={""} />
    }
  ],
  }
  ]);

export default router;
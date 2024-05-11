import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
// import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Queries from "../Pages/Queries/Queries";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import RecommendationsForMe from "../Pages/RecommendationsForMe/RecommendationsForMe";
import MyQueries from "../Pages/MyQueries/MyQueries";
import MyRecommendations from "../Pages/MyRecommendations/MyRecommendations";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/queries',
        element: <Queries></Queries>
      },
      {
        path: '/recommendations-for-me',
        element: <PrivateRoutes><RecommendationsForMe></RecommendationsForMe></PrivateRoutes>
      },
      {
        path: '/my-queries',
        element: <PrivateRoutes><MyQueries></MyQueries></PrivateRoutes>
      },
      {
        path: '/my-recommendations',
        element: <PrivateRoutes><MyRecommendations></MyRecommendations></PrivateRoutes>
      },
    ]
  }
])

export default router;

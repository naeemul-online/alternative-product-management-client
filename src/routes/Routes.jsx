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
import AddQueries from "../Pages/MyQueries/AddQueries";
import UpdateQueries from "../Pages/MyQueries/UpdateQueries";
import ViewDetails from "../Pages/MyQueries/ViewDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <Queries></Queries>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/products`)
      },
      {
        path: '/recommendations-for-me',
        element: <PrivateRoutes><RecommendationsForMe></RecommendationsForMe></PrivateRoutes>
      },
      {
        path: '/my-queries',
        element: <PrivateRoutes><MyQueries></MyQueries></PrivateRoutes>,
        // loader: () => fetch(`${import.meta.env.VITE_API_URL}/my-queries/:email`)
      },
      {
        path: '/update/:id',
        element:<UpdateQueries></UpdateQueries>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/update/${params.id}`)
      },
      {
        path: '/view-details/:id',
        element:<ViewDetails></ViewDetails>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/update/${params.id}`)
      },
      {
        path: '/add-queries',
        element:<AddQueries></AddQueries>
      },
      {
        path: '/my-recommendations',
        element: <PrivateRoutes><MyRecommendations></MyRecommendations></PrivateRoutes>
      },
    ]
  }
])

export default router;

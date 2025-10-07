import { createBrowserRouter } from "react-router";
import Installation from "../Components/Installation"
import Home from "../Pages/Home";
import Apps from "../Apps/Apps";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
   errorElement: <Error></Error>,
    
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: '/apps',
        element: <Apps />,
      },
      {
        path: '/installation',
        element: <Installation></Installation>,
      },
    ]
  },
  
])
export default router
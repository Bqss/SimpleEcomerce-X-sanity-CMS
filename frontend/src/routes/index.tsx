import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ProductDetail from "../pages/ProductDetail";
import Home from './../pages/Home'
const route = createBrowserRouter([
  {
    path : "/",
    element  : <MainLayout/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "/product/:slug",
        element: <ProductDetail/>
      }
    ]
  }
])

export default route;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Contact from './Components/Contact and About/Contact.jsx';
import About from './Components/Contact and About/About.jsx';
import Home from './Components/Home/Home.jsx';
import LogIn from './Components/LogIn, SignUp/LogIn.jsx';
import SignUp from './Components/LogIn, SignUp/SignUp.jsx';
import ContextProvider from './ContextProvider/ContextProvider.jsx';
import AddProducts from './Components/AddProducts/AddProducts.jsx';
import SeeAllCars from './Components/SeeAllCars/SeeAllCars.jsx';
import Details from './Components/Details/Details.jsx';
import MyCart from './Components/MyCart/MyCart.jsx';
import Update from './Components/Update Information/Update.jsx';
import PrivateRoute1 from './PrivateRoutes/PrivateRoute1.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contactUs",
        element: <Contact />,
      },
      {
        path: "/aboutUs",
        element: <About />,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addProducts",
        element: <PrivateRoute1><AddProducts></AddProducts></PrivateRoute1>,
      },
      {
        path: "/seeAllCars/:brand_name",
        loader: ({params}) => fetch(`http://localhost:5000/cardetails/${params.brand_name}`),
        element: <SeeAllCars></SeeAllCars>,
      },
      {
        path: "/details/:_id",
        loader: ({params}) => fetch(`http://localhost:5000/details/${params._id}`),
        element: <PrivateRoute1><Details></Details></PrivateRoute1>,
      },
      {
        path: "/myCart",
        loader: () => fetch('http://localhost:5000/cart'),
        element: <PrivateRoute1><MyCart></MyCart></PrivateRoute1>,
      },
      {
        path: "/update/:_id",
        loader: ({params}) => fetch(`http://localhost:5000/details/${params._id}`),
        element: <PrivateRoute1><Update></Update></PrivateRoute1> ,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)

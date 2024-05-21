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
        element: <SignUp></SignUp> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

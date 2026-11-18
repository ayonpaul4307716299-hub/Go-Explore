import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
// import { router } from './router/index.route.js';

import { createBrowserRouter } from "react-router";
import Home from './pages/Home.jsx';
import PublicLayout from './layout/publicLayout.jsx';
import About from './pages/About.jsx';
import Explor from './pages/Explor.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<PublicLayout/>,
    children:[
      {
        path: "/",
        index:true,
        element:<Home/>,

      },
      {
         path: "/about",
        element:<About/>,
      },
      {
         path: "/explor",
        element:<Explor/>,
      },
      {
         path: "/login",
        element:<Login/>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,

  </StrictMode>,
)

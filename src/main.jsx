import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import AddDonation from './Components/AddDontaion/AddDonation.jsx';
import Statastics from './Components/Statistics/Statastics.jsx';
import Home from './Components/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"/donation",
        element:<AddDonation></AddDonation>
      },
      {
        path:"/statistics",
        element:<Statastics></Statastics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

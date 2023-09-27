import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Statastics from './Components/Statistics/Statastics.jsx';
import Home from './Components/Home/Home.jsx';
import DonationsDetails from './Components/DonationsDetails/DonationsDetails.jsx';
import SelectedDonation from './Components/SelectedDonation/SelectedDonation.jsx';


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
        element:<SelectedDonation></SelectedDonation>,
        loader:()=>fetch('../fake.json')
      },
      {
        path:"/statistics",
        element:<Statastics></Statastics>
      },
      {
        path:'/donations/:id',
        element:<DonationsDetails></DonationsDetails>,
        loader:()=>fetch('../fake.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

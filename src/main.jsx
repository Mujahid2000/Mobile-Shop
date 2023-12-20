import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';
import Home from './components/Home';
import Contact from './components/Contact';
import MyCart from './components/MyCart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/cart',
        element: <MyCart></MyCart>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1600px] mx-auto'>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </div>
)

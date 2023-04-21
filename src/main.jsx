import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Layout/Main/Main'
import Home from './components/Pages/Home/Home'
import Services from './components/Pages/Services/Services'
import Detail from './components/Pages/Services/Detail/Detail'
import Pricing from './components/Pages/Services/Pricing/Pricing'
import Photos from './components/Pages/Services/Photos/Photos'
import Reviews from './components/Pages/Services/Reviews/Reviews'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/services',
        element:<Services/>,
        children:[
          {
            path:'/services',
            element:<Detail/>
          },
          {
            path:'/services/detail',
            element:<Detail/>
          },
          {
            path:'/services/pricing',
            element:<Pricing/>
          },
          {
            path:'/services/photos',
            element:<Photos/>
          },
          {
            path:'/services/reviews',
            element:<Reviews/>
          },
        ]
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
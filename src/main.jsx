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
import About from './components/Pages/About/About'
import ContactUs from './components/Pages/ContactUs/ContactUs'
import ErrorPage from './components/Layout/ErrorPage/ErrorPage'
import MyBooking from './components/Pages/MyBooking/MyBooking'
import LoginPage from './components/Pages/LoginPage/LoginPage'
import SignIn from './components/Pages/LoginPage/SignIn'
import SignUp from './components/Pages/LoginPage/SignUp'
import BillInfo from './components/Pages/BillInfo/BillInfo'
import FAQ from './components/Pages/FAQ/FAQ'
import Blog from './components/Pages/Blog/Blog'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    errorElement:<ErrorPage/>,
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
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<ContactUs/>
      },
      {
        path:'/my-booking',
        element:<MyBooking/>
      },
      {
        path:'/billing-info',
        element:<BillInfo/>
      },
      {
        path:'/faq',
        element:<FAQ/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/login',
        element:<LoginPage/>,
        children:[
          {
            path:'/login',
            element:<SignIn/>
          },
          {
            path:'/login/signin',
            element:<SignIn/>
          },
          {
            path:'/login/signup',
            element:<SignUp/>
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
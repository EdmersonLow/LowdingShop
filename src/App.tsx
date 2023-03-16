import { Routes, Route, createBrowserRouter,Outlet, RouterProvider ,ScrollRestoration, Navigate } from 'react-router-dom'
import {Cart } from './pages/Cart'
import {Home}from './pages/Home'
import { Login } from './pages/Login'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { productsData, usersData } from './api/api'
import { Product } from './components/Product'
import { Logina } from './pages/Logina'
import { Sucessful } from './Sucessful'
import { Error } from './Error'
import { Logout } from './pages/Logout'
const Layout=()=>{
  return(
  <div>
    <Navbar/>
    <Outlet/>
    <ScrollRestoration/>
    <Footer/>
  </div>);
}

const router =  createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: productsData,
      },
      // error page
      {
        path: '*',
        element:<Error/>
      },
      {
        path: '/logina',
        element: <Logina/>,
        loader: usersData,
      },
      {
        path: 'product/:id',
        element:<Product />,
        loader: productsData,
      },
      {
        path: '/cart',
        element: <Cart/>,
        loader: productsData,
      },
      {
        path:"/login",
        element:<Login/>,
        loader : usersData,
      },
      {
        path:"/logina",
        element:<Logina/>,
      },
      {
        path: '/sucessful',
        element: <Sucessful/>,
      },
      {
        path: '/logout',
        element: <Logout/>,
      }
    ]
  
  },
],{
  basename : '/lowdingshop',
})
function App() {  
    return  (      
    <div className='font-bodyFont'>
 
      <RouterProvider router={router}/>
     </div>  
    
  )
}

export default App

import { Routes, Route, createBrowserRouter,Outlet, RouterProvider ,ScrollRestoration } from 'react-router-dom'
import {Cart } from './pages/Cart'
import {Home}from './pages/Home'
import { User} from './pages/User'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { productsData } from './api/api'
import { Product } from './components/Product'
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
      {
        path: 'product/:id',
        element:<Product />
      },
      {
        path: '/cart',
        element: <Cart/>
      },
    ]
  },
])
function App() {  
    return  (      
    <div className='font-bodyFont'>
      <RouterProvider router={router}/>
     </div>  
    
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import {Cart } from './pages/Cart'
import {Home}from './pages/Home'
import { User} from './pages/User'
import { Navbar } from './components/Navbar'

function App() {  
    return  (    
    
    <> 
       <Navbar/>
       <div className="container mx-auto  ">
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/User" element={<User/>}/>
        </Routes>
        </div>
    </>
       
    
  )
}

export default App

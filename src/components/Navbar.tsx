import { Link } from "react-router-dom";
import { logo } from "../assets/index";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
export function Navbar() {
    const productData = useSelector((state:any) => state.bazar.productData);
    const userInfo = useSelector((state :any) => state.bazar.userInfo);
    console.log(productData)
    return (
<nav className="bg-[#D6EADF] shadow border-b-[2px] sticky top-0 z-50">
  <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
    <div className="flex justify-between items-center">
      <Link to="/">
      <div>
        <a className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="#">
            <img className="h-34 w-28" src={logo} alt="" />
        </a>
      </div>
      </Link>
      <div className="flex md:hidden">
        <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </div>
    <div className="md:flex items-center">
      <div className="flex flex-col md:flex-row md:mx-6">
        <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/lowdingshop">Home</a>
        <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/lowdingshop">Shop</a>
        <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/lowdingshop">Contact</a>

      </div>
 
    {
      userInfo.fullname === ""?
      <Link to="./login">
      <div className="flex justify-center md:block relative">
          <a className="relative text-gray-700 hover:text-gray-600" href="#">
            <svg className="h-10.5 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <span className="absolute top-1 w-6 left-3 items-center text-xs rounded-full font-bold text-[#809BCE] p-1">{productData.length}</span>
          </a>
        </div>
      </Link>:
      <Link to="./cart">
      <div className="flex justify-center md:block relative">
          <a className="relative text-gray-700 hover:text-gray-600" href="#">
            <svg className="h-10.5 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <span className="absolute top-1 w-6 left-3 items-center text-xs rounded-full font-bold text-[#809BCE] p-1">{productData.length}</span>
          </a>
        </div>
      </Link>
    }
    
    <span className="mx-2"></span>
    {
      userInfo.fullname === ""?
      <Link to ="./login">
         
       <FaUserAlt className="text-2xl text-gray-700 hover:text-gray-600" />
      </Link>:
      <Link to ="./logout">
         
      <FaUserAlt className="text-2xl text-gray-700 hover:text-gray-600" />
      { userInfo.fullname}
     </Link>
    }
      
    </div>
  </div>
</nav>
    );
  
  
  
}
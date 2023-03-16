import axios from 'axios';
import React, { useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';

export function Login()   {
const navigate = useNavigate();
const [fullname , setName] = useState("");
const [user_password , setPassword] = useState("");
const [user_address , setAddress] = useState("");
const [email, setEmail] = useState("");
const usersData:any = useLoaderData();
const handleLogin = async () => {
    const createUserPromise = axios.get(
        "http://localhost:9999/lowdingshop/createuser?fullname=" +
          fullname +
          "&email=" +
          email +
          "&user_password=" +
          user_password +
          "&user_address=" +
          user_address
        // navigate('/sucessful');
      )}
      console.log(email)
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            onChange={evt => setName(evt.target.value)}
                            placeholder="Full Name" />
    
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            onChange={evt => setEmail(evt.target.value)}
                            placeholder="Email" />
                         <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="address"
                            onChange={evt => setAddress(evt.target.value)}
                            placeholder="Address" />
    
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            onChange={evt => setPassword(evt.target.value)}
                            placeholder="Password" />
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />
    
                        <button
                            type="submit"
                            onClick={() =>{ handleLogin()  
                            toast.success("Create Account Successful")
                            navigate('/logina')
                            }}
                            className="w-full text-center py-3 rounded bg-[#D6EADF] text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>
    
                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the &nbsp; 
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> &nbsp; and &nbsp;
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account? 
                        <div className="text-center text-sm text-grey-dark mt-4">
                        <a className="no-underline border-b border-blue text-blue" href="../lowdingshop/logina/">
                            <Link to="/logina">
                            <div>Login</div>
                            </Link>
                        </a>.
                        </div>
                    </div>
                </div>
                <ToastContainer
               position="top-left"
               autoClose={3000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="dark"
             />
            </div>
  )
}

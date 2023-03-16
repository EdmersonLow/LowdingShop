import React, { useEffect , useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { setUser } from '../redux/bazarSlice';


export function Logout()   {
  const [name , setName] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state :any) => state.bazar.userInfo);
  let currentAddress = "", currentEmail = "";
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Are you sure you want to sign out?</h1>
                        <button
                            type="submit"
                            onClick={() => {
                              console.log('logout');
                              dispatch(
                                setUser({
                                  fullname: "",
                                  user_address: "",
                                  email: "",
                                })
                              );
                              navigate('/');
                            }
                          }
                            className="w-full text-center py-3 rounded bg-[#D6EADF] text-black hover:bg-green-dark focus:outline-none my-1"
                        >Logout</button>
    
                        
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

import React, { useEffect , useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { setUser } from '../redux/bazarSlice';


export function Logina()   {
  const data:any = useLoaderData();
  const [name , setName] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let currentAddress = "", currentEmail = "";
  useEffect(()=> {
    console.log(data.data);
}, [data]); 

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign in</h1>
      
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            id="nameinput"
                            onChange={evt => setName(evt.target.value)}
                            placeholder="name" />

                       
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            onChange={evt => setPassword(evt.target.value)}
                            placeholder="Confirm Password" />
    
                        <button
                            type="submit"
                            onClick={() => 
                            { 
                            var berhasil = false;
                            console.log(name);
                            console.log(password);
                            for (var i = 0; i < data.data.length; i++) {
                              console.log(data.data[i].fullname)
                              console.log(
                                "\n"
                              )
                              console.log(data.data[i].user_password)
                              if (data.data[i].fullname === name && data.data[i].user_password === password) {
                                currentAddress = data.data[i].user_address;
                                currentEmail = data.data[i].email;
                                berhasil = true;}
                              }
                            if(berhasil === true)
                              {
                                toast.success("Login Success")
                                navigate("/")
                                dispatch(
                                  setUser({
                                    fullname: name,
                                    user_address: currentAddress,
                                    email: currentEmail,
                                  })
                                );
                              }
                              else{
                                toast.error("Login Failed")
                              }}}
                            className="w-full text-center py-3 rounded bg-[#D6EADF] text-black hover:bg-green-dark focus:outline-none my-1"
                        >Sign in</button>
    
                        
                    </div>

                    <div className="text-grey-dark mt-6">
                        Don't have account?   
                        <a className="no-underline border-b border-blue text-blue" href="../lowdingshop/logina/">
                            <Link to="/login">
                              || Sign Up
                            </Link>
                        </a>.
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

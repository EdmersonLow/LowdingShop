import React from 'react'
import { ImGit, ImGithub} from "react-icons/im"
import { logo } from '../assets/index'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaHome,
} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {BsPersonFill , BsPaypal} from 'react-icons/bs'


export const Footer = () => {
  return (
    <div className='bg-[#D6EADF] text-[$949494] py-10 pl-5 font-titleFont'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
        <div className='flex flex-col gap-7'>
          <img className="w-32" src={logo} alt="" />
        <p className="text-black text-sm tracking-wide">Copyright Lowding Shop </p>
        <p className='text-black text-sm tracking-wide'>All Rights Reserved</p>
          <div className='flex gap-5 text-lg '>
            <ImGithub  className="hover:text-black duration-300 cursor-pointer "/>
            <FaFacebookF className="hover:text-black duration-300 cursor-pointer "/>
            <FaInstagram className="hover:text-black duration-300 cursor-pointer "/>
            <FaTwitter className="hover:text-black duration-300 cursor-pointer "/>
            <FaYoutube className="hover:text-black duration-300 cursor-pointer "/>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-black mb-4">Locate Us </h2>
          <div className="text-base flex flex-col gap-2 ">
            <p>Jalan Chua Hock Chuan</p>
            <p> Mobile : +65 8888 8888</p>
            <p> Email  : ChuaHock@Chua.com </p>
            <p> Phone  : +65 0000 0000 </p>
          </div>
        </div>
      <div>
      <h2 className="text-2xl font-semibold text-black mb-4">Profile </h2>
      <div className="flex flex-col gap-2 text-base">
      <p className='flex items-center gap-3 hover:text-black duration-300 cursor-pointer'>
        <span>
          <BsPersonFill/>
        </span>{""}
        My Account
      </p>
      <p className='flex items-center gap-3 hover:text-black duration-300 cursor-pointer'>
        <span>
          <BsPaypal/>
        </span>{""}
        Payment
      </p>
      <p className='flex items-center gap-3 hover:text-black duration-300 cursor-pointer'>
        <span>
          <FaHome/>
        </span>{""}
        Order Tracking 
      </p>
      <p className='flex items-center gap-3 hover:text-black duration-300 cursor-pointer'>
        <span>
          <MdLocationOn/>
        </span>{""}
        Help & Support 
      </p>
      </div> 
    </div>
    <div className="flex flex-col justify-center pr-20">
      <input 
      type="text"
      className="bg-transparent border px-4 py-2 sm"
      placeholder='e-mail'
       />
      <button className='text-sm border 
       text-black border-t-0 hover:bg-gray-900
        active:bg-white active:text-black'>Subscribe</button>
    </div>
  </div>
    </div>
  )
}

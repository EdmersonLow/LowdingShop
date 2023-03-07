import React, { useState } from 'react'
import { AiOutlineLeft  , AiOutlineRight} from 'react-icons/ai'
import { logo1 } from '../assets/index'
import { logo2 } from '../assets/index'
import { logo3 } from '../assets/index'
import { logo4 } from '../assets/index'
import { logo5 } from '../assets/index'
import { logo6 } from '../assets/index'
export const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide=()=>{
        setCurrentSlide(currentSlide ===0 ? 5 : (prev)=>prev-1)
    }
    const nextSlide=()=>{
        setCurrentSlide(currentSlide ===5 ? 0 : (prev)=>prev+1)
    }
    console.log(currentSlide);
  return (
    <div className="w-full h-auto overflow-x-hidden">
        <div className="w-screen h-[650px] relative">
            <div 
            style={{ transform: `translateX(-${currentSlide * 100}vw)`
            }}
            className="w-[700vw] h-full flex transition-transform duration-1000">
                <img
                 className="w-screen h-full object-cover"
                 src={logo3} 
                 alt=""
                 />
                 <img
                 className="w-screen h-full object-cover"
                 src={logo2} 
                 alt=""
                 />
                 <img
                 className="w-screen h-full object-cover"
                 src={logo3} 
                 alt=""
                 />
                 <img
                 className="w-screen h-full object-cover"
                 src={logo4} 
                 alt=""
                 />
                 <img
                 className="w-screen h-full object-cover"
                 src={logo5} 
                 alt=""
                 />
                 <img
                 className="w-screen h-full object-cover"
                 src={logo6} 
                 alt=""
                 />
            </div>
            <div className="absolute w-fit left-0 right-0 mx-auto flex gap-80 bottom-44">
                <div onClick={prevSlide} className=" w-14 h-12 border-[1px] border-gray-700 flex items-center 
                justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
                 active:bg-gray-900 duration-300">
                   <AiOutlineLeft/>
                </div>
                <div onClick={nextSlide} className=" w-14 h-12 border-[1px] border-gray-700 flex items-center 
                justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
                 active:bg-gray-900 duration-300">
                    <AiOutlineRight/>

                </div>
            </div>
        </div>
    </div>
  )
}

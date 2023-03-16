import React from 'react'
import { useSelector } from 'react-redux';

export function  Sucessful() {
  const userInfo = useSelector((state :any) => state.bazar.userInfo);
  return (
    <div className="bg-[#D6EADF] w-full px-16 md:px-0 h-screen flex items-center justify-center">
        <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
            {/* <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300"></p> */}
            <p className="text-l md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">Thank You {userInfo.fullname} for Your Purchase</p>
            <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">This item will be shipped to {userInfo.user_address}</p>
            <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">The invoice will be sent to {userInfo.email}</p>
            <a href="/lowdingshop" className="flex items-center space-x-2 bg-[#D6EADF] hover:bg-[#B8E0D2] text-black px-4 py-2 mt-6 rounded transition duration-150" title="Return Home">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                </svg>
                <span>Back to Shopping</span>
            </a>
        </div>
    </div>
  )
}

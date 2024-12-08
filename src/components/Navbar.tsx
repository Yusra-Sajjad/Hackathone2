import React from 'react'
import Link from 'next/link'



const Navbar = () => {
  return (
    <div>
        <div className="w-[1440px] h-30px]">
        <div className="flex  items-center jutisfy-center h-[60px] bg-white">
            <div className='w-[78.47px] h-[78.47px] '>
              <img
              src="/Navbar/Frame (4).png"
              alt="logo"
              className="w-58.85 h-20.54"
            />
                </div>
                
          <ul className="flex space-x-8 text-sm font-bold text-[#111111]">
            <li>New & Featured</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sale</li>
            <li>SNKRS</li>
          </ul>
           <div className="absolute right-12 flex items-center space-x-4">
            <div className="relative flex items-center  bg-neutral-100 rounded-full px-4 py-2">
            <img
              src="/Navbar/Vector.png"
              alt="Cart Icon"
              className="w-6 h-6"
            />
              <img
                src="/Navbar/Frame (2).png"
                alt="Search Icon"
                className="w-6 h-6"
              />
              <span className="text-sm text-[#cccccc]">Search</span>
              </div>
            <img
              src="/Navbar/Auto Layout Horizontal (1).png"
              alt="Cart Icon"
              className="w-6 h-6"
            />
              <img
              src="/Navbar/Auto Layout Horizontal (2).png"
              alt="Cart Icon"
              className="w-6 h-6"
            />
             </div>
          
         </div>
        </div>
    </div>
  )
}

export default Navbar


export const Navbar1 = () => {
  return (
    <div>
 <div className="w-full max-w-[1440px] px-4 py-8">
        {/* Section Title */}
        <h1 className="text-center w-105.15 h-17 mt-[-30] text-xl font-bold text-[#111111]">
        Hello Nike App
        </h1>
        {/* Search Input Field */}
        <div className="mt-1 flex justify-center ">
          
          <div className="w-[1440px] rounded-lg">
            <p className="text-center w-301 h-24  font-medium text-[#111111]">
            Download the app to access everything Nike. Get Your Great
          </p>
          </div>
          </div>
        </div>
    </div>
  )
}


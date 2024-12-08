import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div>
<div className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img
      className="w-1344 h-700 mb-10 mt-[-190] object-cover object-center rounded"
      alt="hero"
      src="/hero/Image.png"
    />
    <div className="text-center lg:w-2/3 w-full">
    <p className='text-bold'>First Look</p>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
      Nike Air Max Pulse
      </h1>
      <p className="mb-8 leading-relaxed">
      Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
      —designed to push you past your limits and help you go to the max.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-[#FFFFFF] bg-[#111111] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-[30px]">
        Notify Me
        </button>
        <button className="ml-4 inline-flex text-[#FFFFFF] bg-[#111111] border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-[30px]">
        Shop Air Max
        </button>
      </div>
    </div>
  </div>
  </div>

  <div className="text-gray-600 body-font">
      <h1 className='ml-20' font-bold>
        Featured
      </h1>
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img
      className="w-1344 h-700 mb-10 mt-[-90] object-cover object-center rounded"
      alt="hero"
      src="/hero/Image4.png"
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
      STEP INTO WHAT FEELS GOODNike Air Max Pulse
      </h1>
      <p className="mb-8 leading-relaxed">
      Cause everyone should know the feeling of running in that perfect pair.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-[#FFFFFF] bg-[#111111] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-[30px]">
        Find Your Shoe
        </button>
        
      </div>
    </div>
  </div>
  </div>

  <div className="text-gray-600 body-font">
      <h1 className='ml-20' font-bold>
      Don't Miss
      </h1>
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img
      className="w-1344 h-700 mb-10 mt-[-90] object-cover object-center rounded"
      alt="hero"
      src="/hero/Image5.png"
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
      FLIGHT ESSENTIALS
      </h1>
      <p className="mb-8 leading-relaxed">
      Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex w-80.38 h-39 text-[#FFFFFF] bg-[#111111] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-[30px]">
        Shop
        </button>
        
      </div>
    </div>
  </div>
  </div>
  
  </div>
  )
}

export default Hero

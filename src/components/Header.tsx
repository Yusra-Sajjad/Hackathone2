import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-10 bg-light-gray">
        {/* Top Logo */}
          <Image src="/header/Frame.png" alt="Top Logo"  width={24} height={24}/>

        {/* Top Navigation */}
        <ul className="flex space-x-6 py-3">
          <li className="flex items-center border-r border-black pr-6">
            <Link href="/product-details" className="leading-[14px]">
              Find a Store
            </Link>
          </li>
          <li className="flex items-center border-r border-black pr-6">
            <Link href="/contact-us" className="leading-[14px]">
              Help
            </Link>
          </li>
          <li className="flex items-center border-r border-black pr-6">
            <Link href="/join-us" className="leading-[14px]">
              Join Us
            </Link>
          </li>
          <li className="flex items-center pr-6">
            <Link href="/login" className="leading-[14px]">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
      </div>
  )
}

export default Header


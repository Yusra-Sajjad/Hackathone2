import React from 'react'

const Footer = () => {
  return (
    <div>
      
      {/* Footer Section */}
      <div className="w-full bg-[#111111] text-white py-8">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Find a Store Links */}
            <div>
              <h4 className="text-sm font-medium">FIND A STORE</h4>
              <ul className="mt-2 space-y-2 text-xs">
                <li>Become a Member</li>
                <li>Sign Up for Email</li>
                <li>Send Us Feedback</li>
                <li>Student Discounts</li>
              </ul>
            </div>

            {/* Get Help Links */}
            <div>
              <h4 className="text-sm font-medium">GET HELP</h4>
              <ul className="mt-2 space-y-2 text-xs">
                <li>Order Status</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Payment Options</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* About Nike Links */}
            <div>
              <h4 className="text-sm font-medium">ABOUT NIKE</h4>
              <ul className="mt-2 space-y-2 text-xs">
                <li>News</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Sustainability</li>
              </ul>
            </div>
            <div>
             
            </div>
            <div>
            <img
                src="/footer/Frame (6).png"
                alt="Icon"
                className="w-680 h-46"
              />
            </div>
          </div>
          </div>
    
        {/* Footer Copyright Notice */}
        <div className='flex w-[1372px] h-[62px]'>
          <div className="mt-12 ml-8 w-[672px] h-[32px] ">
            <p className='text-[11px] w-[200.48px] h-[14px] font-normal'>©️ 2023 Nike, Inc. All Rights Reserved</p>
          </div>

          <div className='flex w-[680px] h-[46px] mt-8 ml-400 '>
          <img
                src="/footer/Frame (5).png"
                alt="icons"
                className="w-680 h-46"
              />
          </div>
        </div>
        </div>
        </div>
  )
}

export default Footer

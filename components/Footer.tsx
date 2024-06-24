import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
      <div className='bg-[#001308] pt-12'>
          <div className='max-w-5xl mx-auto pb-12 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0'>
              <div className='pt-4 text-center lg:text-left'>
                  <Image src="/images/FooterLogo.png" className='w-24 h-12 mx-auto lg:mx-0' alt="footer logo" width={400} height={400} />
                  <p className='text-[#5E6282] mt-4 lg:mt-0'>Help keep Deel running smoothly. <br /> Make an offer</p>
              </div>
              <div className='text-center lg:text-left'>
                  <Image src="/images/Advertise With Us.png" className='w-80 mx-auto lg:mx-0' alt="advertise with us" width={400} height={400} />
              </div>
              <div className='flex flex-col justify-center items-center'>
                  <div className='flex justify-center items-center space-x-4'>
                      <Image src="/images/Social1.png" className='w-10 h-10' alt="social icon 1" width={400} height={400} />
                      <Image src="/images/Social2.png" className='w-10 h-10' alt="social icon 2" width={400} height={400} />
                      <Image src="/images/Social3.png" className='w-10 h-10' alt="social icon 3" width={400} height={400} />
                  </div>
                  <span className='text-[#5E6282] mt-4'>Discover Our app</span>
                  <div className='flex justify-center items-center space-x-4 pt-3'>
                      <Image src="/images/Google play.png" className='w-24 h-10' alt="google play" width={400} height={400} />
                      <Image src="/images/Play Store.png" className='w-24 h-10' alt="play store" width={400} height={400} />
                  </div>
              </div>
          </div>
          <div className='flex justify-center items-center py-4'>
              <span className='text-[#5E6282] text-sm'>All rights reserved deel.com</span>
          </div>
          <div className='flex flex-col lg:flex-row justify-between items-center bg-[#2E3447] px-4 py-6 text-center lg:text-left space-y-4 lg:space-y-0'>
              <div>
                  <span className='text-[#5E6282] text-sm'>Deel - Classified Listing © 2024. Design by <strong className='text-white'>Digitifysolutions.com</strong> </span>
              </div>
              <div className='space-x-4 text-sm text-[#5E6282]'>
                  <span>Privacy Policy</span>
                  <span>|</span>
                  <span>Terms & Conditions</span>
              </div>
          </div>
      </div>
  )
}
export default Footer

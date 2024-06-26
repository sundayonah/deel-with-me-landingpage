// import Image from 'next/image'
// import React from 'react'

// const HeroPage = () => {
//   return (
//       <>
//         <div className='flex justify-center items-center'>
//               <div>
//                   <h1 className='text-sm text-[#e58673] font-serif pb-2'>INSPIRING PEOPLE TO LOVE AND SHARE</h1>
//                   <span className='font-extrabold text-5xl text-[#14183E]'>Over 10,000+ <br /> <span className='text-green-400'>Dealers </span> <span>ready to <br /> recieve what you have got</span></span>
//                   <p className='text-xs pt-4 text-[#5E6282]'>Welcome to Deel™! We are a grassroots & entirely <br /> nonprofit movement of people who are giving and <br /> getting stuff for free in their own Towns.</p>
//                   <div className=''>
//                   <button className='text-white text-xs my-2 px-4 py-2 rounded-md bg-[#f1a501]'>
//                       Sign Up
//             </button>
//                   </div>
                  
//                   <div className='w-[51%] mt-4 border rounded-md flex items-center'>
//             <input
//             type="text"
//             className='rounded-md p-1 flex-grow'
//             placeholder='Search for any Deels'
//             aria-label='Search input'
//             />
//             <button
//             className='text-white text-xs px-6 py-2.5 rounded-md bg-[#57c293]'
//             aria-label='Search button'
//             >
//             Search
//             </button>
//             </div>
//               </div>
//               {/* //////////////////////////////////////////////////////////////////////// */}
//               <div>
//                <Image src="/images/Hero-Image.png" alt="logo-image" className="w-full h-full" width={400} height={100} />
//                {/* <Image src="/images/Decore.png" alt="decore-image" className="w-full h-full" width={400} height={100} /> */}
//           </div>
//         </div>
//     </>
//   )
// }

// export default HeroPage


import Image from 'next/image';
import React from 'react';

const HeroPage = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='md:w-1/2'>
          <h1 className='text-base md:text-sm text-[#e58673] font-serif pb-2'>INSPIRING PEOPLE TO LOVE AND SHARE</h1>
          <span className='font-extrabold text-2xl md:text-5xl text-[#14183E]'>Over 10,000+ <br /> <span className='text-green-400'>Dealers </span> <span>ready to <br /> receive what you have got</span></span>
          <p className='text-xs pt-4 text-[#5E6282]'> We are a social enterprise, poised to make profit by giving true  <br />value to our altruistic users , therefore we make profit optimally  <br /> with a clear vision towards a greener and circle economy.</p>
          <div className='mt-4'>
            <button className='text-white text-xs my-2 px-4 py-2 rounded-md bg-[#f1a501]'>
              Sign Up
            </button>
          </div>
          <div className='mt-4 border rounded-md flex items-center'>
            <input
              type="text"
              className='rounded-md p-1 flex-grow'
              placeholder='Search for any Deels'
              aria-label='Search input'
            />
            <button
              className='text-white text-xs px-6 py-2.5 rounded-md bg-[#57c293]'
              aria-label='Search button'
            >
              Search
            </button>
          </div>
        </div>
        {/* <div className='hidden md:block'> */}
        <div className=''>
          <Image src="/images/Hero-Image.png" alt="logo-image" className="w-full h-auto" width={400} height={400} />
        </div>
      </div>
    </>
  )
}

export default HeroPage;

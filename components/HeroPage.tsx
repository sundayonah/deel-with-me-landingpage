import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
      <div>
        <div className='flex justify-center items-center'>
              <div>
                  <h1 className='text-sm text-[#e58673] font-serif pb-2'>INSPIRING PEOPLE TO LOVE AND SHARE</h1>
                  <span className='font-extrabold text-5xl text-[#14183E]'>Over 10,000+ <br /> <span className='text-green-400'>Dealers </span> <span>ready to <br /> recieve what you have got</span></span>
                  <p className='text-xs pt-4 text-[#5E6282]'>Welcome to Deel™! We are a grassroots & entirely <br /> nonprofit movement of people who are giving and <br /> getting stuff for free in their own Towns.</p>
                  <div className=''>
                  <button className='text-white text-xs my-2 px-4 py-2 rounded-md bg-[#f1a501]'>
                      Sign Up
            </button>
                  </div>
                  
                  <div className='w-[51%] mt-4 border rounded-md flex items-center'>
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
              {/* //////////////////////////////////////////////////////////////////////// */}
              <div>
               <Image src="/images/Hero-Image.png" alt="logo-image" className="w-full h-full" width={400} height={100} />
               {/* <Image src="/images/Decore.png" alt="decore-image" className="w-full h-full" width={400} height={100} /> */}
          </div>
        </div>
    </div>
  )
}

export default HeroPage

// import Image from 'next/image';
// import React from 'react';

// const HeroPage = () => {
//   return (
//       <div className='flex justify-center items-center relative min-h-screen'> {/* Add relative positioning here */}
//     <div className='max-w-5xl mx-auto flex  justify-between items-center gap-32'>
//         <div className='w-1/2 flex flex-col items-center justify-center z-10'> {/* Content goes here */}
//           <h1 className='text-sm text-[#e58673] font-serif pb-2'>INSPIRING PEOPLE TO LOVE AND SHARE</h1>
//           <span className='font-extrabold text-5xl text-[#14183E]'>Over 10,000+ <br /> <span className='text-green-400'>Dealers </span> <span>ready to <br /> receive what you have got</span></span>
//           <p className='text-xs pt-4 text-[#5E6282]'>Welcome to Deel™ We are a grassroots & entirely <br /> nonprofit movement of people who are giving and <br /> getting stuff for free in their own Towns.</p>
//           <div className=''> 
//             <button className='text-white text-xs my-2 px-4 py-2 rounded-md bg-[#f1a501]'>
//               Sign Up
//             </button>
//           </div>

//           <div className='w-[51%] mt-4 border rounded-md flex items-center'>
//             <input 
//               type="text" 
//               className='rounded-md p-1 flex-grow' 
//               placeholder='Search for any Deels'
//               aria-label='Search input'
//             />
//             <button 
//               className='text-white text-xs px-6 py-2.5 rounded-md bg-[#57c293]' 
//               aria-label='Search button'
//             >
//               Search
//             </button>
//           </div>
//         </div>
//          <Image src="/images/Hero-Image.png" alt="logo-image" className="w-full h-full z-40" width={400} height={100} />
//         {/* Background image */}
//       </div>
//         <div className='absolute top-0 right-0 w-1/2 h-full bg-no-repeat bg-cover' style={{backgroundImage: "url('/images/Decore.png')"}}>
//         </div>
//     </div>
//   )
// }

// export default HeroPage;

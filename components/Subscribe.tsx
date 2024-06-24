


// import Image from 'next/image';
// import React from 'react';
// import { MdOutlineMailOutline } from "react-icons/md";

// const Subscribe = () => {
//     return (
//         <>
//             <div className='relative bg-[#DFD7F9] mb-16 p-4 rounded-e-xl rounded-tl-3xl rounded-bl-xl'>
//                 <Image src="/images/MaskGroup2.png" alt="Top Right Image" className='absolute filter grayscale  w-40 top-0 right-0' width={300} height={300}/>
//                 <Image src="/images/MaskGroup1.png"  alt="Bottom Left Image" className='absolute filter grayscale w-80 bottom-0 left-0' width={300} height={300}/>
 
//                 <div className='text-center p-4 mt-8 z-40'>
//                     <span className='text-[#14183E] text-2xl font-bold z-40'>
//                         Subscribe to get information, latest deels and other <br /> interesting offers about Deel
//                     </span>
                    
//                     <div className='my-12 justify-center flex items-center space-x-4'>
//                         <div className='flex justify-center items-center px-2 bg-white rounded-md z-40'>
//                             <MdOutlineMailOutline className='text-[#39425D]' />
//                             <input
//                                 type="text"
//                                 className='rounded-md p-1.5 flex-grow'
//                                 placeholder='Your email'
//                                 aria-label='Search input'
//                             />
//                         </div>
//                         <button
//                             className='text-white text-xs px-6 py-2.5 rounded-md bg-[#FF946D]'
//                             aria-label='Search button'
//                         >
//                             Sunscribe
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Subscribe;



import Image from 'next/image';
import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md";

const Subscribe = () => {
    return (
        <>
            <div className='relative bg-[#DFD7F9] mb-16 p-4 rounded-e-xl rounded-tl-3xl rounded-bl-xl'>
                <Image src="/images/MaskGroup2.png" alt="Top Right Image" className='absolute filter grayscale w-40 top-0 right-0' width={300} height={300} />
                <Image src="/images/MaskGroup1.png" alt="Bottom Left Image" className='absolute filter grayscale w-80 bottom-0 left-0' width={300} height={300} />

                <div className='text-center p-4 mt-8 z-40'>
                    <span className='text-[#14183E] text-xl md:text-2xl font-bold z-40'>
                        Subscribe to get information, latest deels and other <br /> interesting offers about Deel
                    </span>

                    <div className='my-8 md:my-12 justify-center flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4'>
                        <div className='flex justify-center items-center px-2 bg-white rounded-md z-40 w-full md:w-auto'>
                            <MdOutlineMailOutline className='text-[#39425D]' />
                            <input 
                                type="text" 
                                className='rounded-md p-1.5 flex-grow text-xs md:text-base' 
                                placeholder='Your email'
                                aria-label='Search input'
                            />
                        </div>
                        <button 
                            className='text-white text-xs md:text-base px-4 md:px-6 py-1.5 md:py-2.5 rounded-md bg-[#FF946D]' 
                            aria-label='Subscribe button'
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subscribe;

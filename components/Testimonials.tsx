// import Image from 'next/image'
// import React from 'react'
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


// const Testimonials = () => {

//     const testimonials = [
//             {
//             id: 1,
//             img: "/images/test1.png",
//             name: "Emeka Okeke",
//             desc: `What I like best is that Deel is so convenient. I Don’t have to put stuff in the car and haul to a nonprofit. People are very respectful.`,
//           from: "Idemili Anambra"
//         },
//         {
//             id: 2,
//             img: "/images/test1.png",
//             name: "Olaolu Fowowe",
//             desc: `What I like best is that Deel is so convenient. I Don’t have to put stuff in the car and haul to a nonprofit. People are very respectful.`,
//            from: "Ibadan Oyo"
//         },
// ]

//   return (
//       <>
//           <div className='flex justify-between mb-44'>
//               {/* ///////////////////////////////////// left /////////////////////////////////// */}
              
//               <div className='w-1/2 '>
//                   <span className='text-[#5E6282]'>Testimonials</span>
//                   <h1 className='font-extrabold text-5xl pt-4 text-[#14183E]'>What People Say <br />About Us.</h1>

//                   <div className='mt-12 flex space-x-5'>
                    
//                       <div className="w-3 h-3 bg-[#39425D] rounded-full"></div>
//                       <div className="w-3 h-3 bg-[#E5E5E5] rounded-full"></div>
//                       <div className="w-3 h-3 bg-[#E5E5E5] rounded-full"></div>

                      
//                   </div>
//               </div>
//         {/* ///////////////////////////////////// right /////////////////////////////////// */}
//         <>
//                  <div className='w-1/2 flex flex-col items-center justify-start space-y-4 relative'>
//                     {testimonials.map((test, index) => (
//                       <div key={test.id} className={` p-4 flex  ${index === 1? 'absolute top-0' : 'absolute top-20 ml-12 '} w-full`}>
//                             <Image src={test.img} alt="logo-image" className='w-8 h-8 rounded-full object-cover absolute top-0 left-2 ' width={400} height={100} />
            
//                             <div className='shadow-md  bg-white rounded-md p-6'>
                                
//                             <p className='text-[#5E6282] mt-6 text-xs'>{test.desc}</p>
//                             <p className='mt-4 text-sm text-[#5E6282] font-bold'>{test.name}</p>
//                             <p className='text-xs text-[#5E6282]' >{test.from}</p>
//                                 </div>
//                         </div>
//                     ))}
//               </div>
//               <div className='flex flex-col justify-center items-center ml-16 mt-12 space-y-9'>
//                 <IoIosArrowUp className='text-gray-400' />
//                 <IoIosArrowDown />
//               </div>
//             </>
//         </div>
//     </>
//   )
// }

// export default Testimonials


import Image from 'next/image'
import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            img: "/images/test1.png",
            name: "Emeka Okeke",
            desc: `What I like best is that Deel is so convenient. I Don’t have to put stuff in the car and haul to a nonprofit. People are very respectful.`,
            from: "Idemili Anambra"
        },
        {
            id: 2,
            img: "/images/test1.png",
            name: "Olaolu Fowowe",
            desc: `What I like best is that Deel is so convenient. I Don’t have to put stuff in the car and haul to a nonprofit. People are very respectful.`,
            from: "Ibadan Oyo"
        },
    ]

    return (
        <>
            <div className='flex flex-col lg:flex-row justify-between mb-44 md:mb-80'>
                {/* Left Section */}
                <div className='lg:w-1/2 p-4 lg:p-0'>
                    <span className='text-[#5E6282]'>Testimonials</span>
                    <h1 className='font-extrabold text-2xl lg:text-5xl pt-4 text-[#14183E]'>
                        What People Say <br /> About Us.
                    </h1>
                    <div className='mt-6 lg:mt-12 flex space-x-2 lg:space-x-5'>
                        <div className="w-3 h-3 bg-[#39425D] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#E5E5E5] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#E5E5E5] rounded-full"></div>
                    </div>
                </div>
                {/* Right Section */}
                <div className='lg:w-1/2 flex flex-col items-center justify-start space-y-4 relative'>
                    {testimonials.map((test, index) => (
                        <div key={test.id} className={`p-4 flex ${index === 1 ? 'absolute top-0' : 'absolute top-20 ml-12'} w-full`}>
                            <Image src={test.img} alt="testimonial" className='w-8 h-8 rounded-full object-cover absolute top-0 left-2' width={400} height={100} />
                            <div className='shadow-md bg-white rounded-md p-6'>
                                <p className='text-[#5E6282] mt-6 text-xs'>{test.desc}</p>
                                <p className='mt-4 text-sm text-[#5E6282] font-bold'>{test.name}</p>
                                <p className='text-xs text-[#5E6282]'>{test.from}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col justify-center items-center lg:ml-16 lg:mt-12 space-y-9'>
                    <IoIosArrowUp className='text-gray-400' />
                    <IoIosArrowDown />
                </div>
            </div>
        </>
    )
}

export default Testimonials

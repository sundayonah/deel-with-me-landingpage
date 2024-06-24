// import Image from 'next/image';
// import React from 'react';
// import { BsSendFill } from "react-icons/bs";

// const TopOffers = () => {
//     const topOffers = [
//         {
//             id: 1,
//             img: "/images/offer1.png",
//             category: "Female Clothes",
//             location: "Surulere, Lagos.",
//             posted: "09/2/24"
//         },
//         {
//             id: 2,
//             img: "/images/offer1.png",
//             category: "Baby Accessories",
//             location: "Uselu, Benin City.",
//             posted: "09/2/24"
//         },
//         {
//             id: 3,
//             img: "/images/offer1.png",
//             category: "Food Items",
//             location: "Wuse, Abuja.",
//             posted: "09/2/24"
//         }
//     ];

//     return (
//         <>
//             <div className='my-24'>
//                 <div className='text-center mb-12'>
//                     <p className='text-[#5E6282] text-xs'>Top Offers</p>
//                     <h1 className='text-2xl font-extrabold text-[#14183E]'>Popular Choices</h1>
//                 </div>
//                     <div className='flex gap-6'>
//                     {topOffers.map((deel) => (
//                         <div key={deel.id} className='flex flex-col w-full shadow-xl rounded-xl'>
//                             <Image src={deel.img} alt={deel.location} className=' h-48 object-fit' width={400} height={400} />
                            
//                             <div className='pl-4'>
//                             <p className='text-gray-400 font-bold text-xs my-3'>{deel.category}</p>
//                             <div className='flex items-center'>
//                                 <BsSendFill className='mr-2' />
//                                 <span className='text-gray-400'>{deel.location}</span>
//                             </div>
//                             <p className='text-gray-400 font-bold text-xs my-3'>Posted: {deel.posted}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default TopOffers;


import Image from 'next/image';
import React from 'react';
import { BsSendFill } from "react-icons/bs";

const TopOffers = () => {
    const topOffers = [
        {
            id: 1,
            img: "/images/offer1.png",
            category: "Female Clothes",
            location: "Surulere, Lagos.",
            posted: "09/2/24"
        },
        {
            id: 2,
            img: "/images/offer1.png",
            category: "Baby Accessories",
            location: "Uselu, Benin City.",
            posted: "09/2/24"
        },
        {
            id: 3,
            img: "/images/offer1.png",
            category: "Food Items",
            location: "Wuse, Abuja.",
            posted: "09/2/24"
        }
    ];

    return (
        <>
            <div className='my-24'>
                <div className='text-center mb-12'>
                    <p className='text-[#5E6282] text-xs'>Top Offers</p>
                    <h1 className='text-2xl font-extrabold text-[#14183E]'>Popular Choices</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {topOffers.map((deel) => (
                        <div key={deel.id} className='flex flex-col w-full shadow-xl rounded-xl'>
                            <Image src={deel.img} alt={deel.location} className='h-48 object-fit' width={400} height={400} />
                            <div className='pl-4'>
                                <p className='text-gray-400 font-bold text-xs my-3'>{deel.category}</p>
                                <div className='flex items-center'>
                                    <BsSendFill className='mr-2' />
                                    <span className='text-gray-400'>{deel.location}</span>
                                </div>
                                <p className='text-gray-400 font-bold text-xs my-3'>Posted: {deel.posted}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
        </>
    );
};

export default TopOffers;

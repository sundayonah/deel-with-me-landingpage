import Image from 'next/image'
import React from 'react'

const Companies = () => {

    const companies = [
        {
            id: 1, 
        img: "/images/comp1.png"
        },
               {
            id: 2, 
        img: "/images/comp2.png"
        },
                      {
            id: 3, 
        img: "/images/comp3.png"
        },
                             {
            id: 4, 
        img: "/images/comp4.png"
        },
                                    {
            id: 5, 
        img: "/images/comp5.png"
    }
]


  return (
      <div className='flex justify-between items-center space-x-4 mb-24 mt-56'>
          {companies.map((comp) => (
                // <div key={comp.id} className={`flex justify-center items-center ${comp.id === 3? 'shadow-lg' : ''}`}>
                <div key={comp.id} className={`flex flex-grow justify-center items-center`}>
                 <Image src={comp.img} alt="logo-image" className=' object-contain ' width={150} height={50} />
              </div>
          ))}
    </div>
  )
}

export default Companies
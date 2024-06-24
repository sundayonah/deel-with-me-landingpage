import Image from 'next/image'
import React from 'react'

const RecentDeels = () => {

    const recentDeels = [
        {
            id:1,
            img: "/images/px-1.png",
            name: "Gucci Leather Sneakers",
            desc: "MENS Gucci Ace Leater Sneakers, Size 45, Gently Used."
        },
               {
                id:2,
            img: "/images/px-2.png",
            name: "Sony Playstation 3",
            desc: "Sony PS3 Original Console & 19 Games Bundle."
        },
                      {
                        id:3,
            img: "/images/px-3.png",
            name: "Pressing Iron",
            desc: "Used Russell Hobbs Supreme Steam Traditional iron."
        },
                             {
                                id:4,
            img: "/images/px-4.png",
            name: "Unripe Plantains",
            desc: "Fresh big unripe plantains to give you immediately."
        }
    ]


  return (
      <>
          <div className='my-8'>
          {/* <div className="bg-black/5 -z-1 end-0  bottom-0 h-24 w-24 animate-ping rounded-full"></div> */}

              
          <div className='text-center mb-12'>
              <p className='text-[#5E6282] text-xs'>CATEGORY</p>
              <h1 className='text-2xl font-extrabold text-[#14183E]'>Recent Deels</h1>
              </div>   
              {/* <div className='flex justify-end z-40'>
                <Image src="/images/plus.png" alt="plus" className='w-40 h-40 object-contain' width={400} height={400} />
              </div> */}
              <div  className='flex justify-center items-center'>
                  {recentDeels.map((deel) => (
                        <div key={deel.id} className={`flex flex-col items-center ${deel.id === 2? 'shadow-lg rounded-3xl p-4' : ''}`}>
                          <Image src={deel.img} alt={deel.name} className='w-40 h-40 object-contain' width={400} height={400}
                          />
                          <p className='font-bold text-center text-xs my-3'>{deel.name}</p>
                          <p className='text-gray-400 text-center text-xs'>{deel.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
    </>
  )
}

export default RecentDeels
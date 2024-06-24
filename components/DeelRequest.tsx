import Image from 'next/image'
import React from 'react'

const DeelRequest = () => {

    const recentDeel = [
        {
            id: 1,
            img: "/images/recent1.png",
            name: "Cooking Pots",
            desc: `Please, I am newly wed and I would
                appreciate a set of cooking pots and
                cutleries, I live in Enugu. Thanks`,
        },
        {
            id: 2,
            img: "/images/recent2.png",
            name: "Laptop",
            desc: `Hello wonderful people, I am a final year
                    student in Unilag and I am in need a laptop to
                    work on my project please. God bless you`,
        },
        {
            id: 3,
            img: "/images/recent3.png",
            name: "GoTV",
            desc: `Please, is there anyone who has GoTV decoder
                    to give out. I am really desperate for one to put
                    in my shop.`,
        }
    ];


  return (
      <>
          <div className='flex justify-between items-center'>
              {/* ///////////////////////////////////// left /////////////////////////////////// */}
              
              <div className='w-1/2'>
                  <span className='text-[#5E6282]'>Recent Deel Requests</span>
                  <h1 className='font-extrabold text-5xl pt-4 text-[#14183E]'>Changing The World <br /> One Deel At A Time!</h1>

                  <div className='mt-4'>
                      {recentDeel.map((recent) => (
                       <div key={recent.id} className='flex items-center space-x-4'>
                          <div>
                          <Image src={recent.img} alt='recent' className='w-12 h-16 object-contain flex' width={400} height={400} />
                        </div>
                              <div className='flex  flex-col'>
                              <span className='font-bold text-sm text-[#5E6282]'>{ recent.name}</span>
                              <span className='text-[#84829A] text-xs'>{ recent.desc}</span>
                            </div>
                       </div>
                    ))}
                  </div>
              </div>
              {/* ///////////////////////////////////// right /////////////////////////////////// */}
                 <div className='w-1/2 flex items-center justify-end'>
                    <Image src="/images/recentRequest.png" alt="logo-image" className='w-full h-full object-cover' width={400} height={100} />
                </div>
        </div>
    </>
  )
}

export default DeelRequest
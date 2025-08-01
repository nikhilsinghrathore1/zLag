import React from 'react'
// Images referenced directly from public folder
const img1 = "/m1.jpg"
const img2 = "/marqueimg1.jpg"
const img3 = "/marqueimg2.jpg"
const img4 = "/marqueimg3.jpg"

type marqueprop ={
               text:String[]
               dist:Number
}

const Marquee = ({text , dist}:marqueprop) => {
               // console.log(dist)
  return (
    <div className={`w-full flex gap-6 items-center f3 text-[78px] leading-none`}
    style={{ transform: `translateX(-${dist}%)` }}
    >
               <div className='flex  gap-6  px-2 items-center'>
                              <h1>{text[0]}</h1>
                              <div className='w-12 mt-[0px] overflow-hidden h-12 rounded-full'>
                                <img className='w-full  h-full object-cover' src={img1} alt="not showing" />
                              </div>
               </div>
               <div className='flex  gap-6  px-2 items-center'>
                              <h1>{text[1]}</h1>
                              <div className='w-12 overflow-hidden  mt-[0px] h-12 rounded-full'>
                                <img className='w-full  h-full object-cover' src={img2} alt="not showing" />
                              </div>
               </div>
               <div className='flex  gap-6  px-2 items-center'>
                              <h1>{text[2]}</h1>
                              <div className='w-12  overflow-hidden mt-[0px] h-12 rounded-full'>
                                <img className='w-full  h-full object-cover' src={img3} alt="not showing" />
                              </div>
               </div>
               <div className='flex  gap-6  px-2 items-center'>
                              <h1>{text[3]}</h1>
                              <div className='w-12 overflow-hidden mt-[0px] h-12 rounded-full'>
                                <img className='w-full  h-full object-cover' src={img4} alt="not showing" />
                              </div>
               </div>
               <div className='flex  gap-6  px-2 items-center'>
                              <h1>{text[0]}</h1>
                              <div className='w-12 overflow-hidden  mt-[0px] h-12 rounded-full'>
                                    <img className='w-full  h-full object-cover' src={img1} alt="not showing" />
                              </div>
               </div>
               <div className='flex  gap-6  px-2 items-center'>
                              <h1>{text[1]}</h1>
                              <div className='w-12 overflow-hidden  mt-[12px] h-12 rounded-full'>
                                <img className='w-full  h-full object-cover' src={img2} alt="not showing" />
                              </div>
               </div>
              
    </div>
  )
}

export default Marquee
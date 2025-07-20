import React from 'react'
import Marquee from '../components/Marquee'

const SecondTest = () => {
  return (
               <>
               
               <div className='w-full  h-screen bg-[#AEDEE0] relative   '>

               <div className='w-full text-center f2 font-semibold text-[23.5px] leading-none pt-[0px] tracking-wide'>
                 <h1 className='mb-4'>We foster growth through success</h1>
                 <h1>that is more than just a club:</h1>
               </div>                                    

<div className='absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap overflow-hidden '>
               <Marquee text={["emphatatic" ,"useful","intuitive" , "nikoChan"]} dist={20}/>
               <Marquee text={["emphatatic" ,"useful","intuitive" , "nikoChan"]} dist={40}/>
               <Marquee text={["emphatatic" ,"useful","intuitive" , "nikoChan"]} dist={30}/>
               <Marquee text={["emphatatic" ,"useful","intuitive" , "nikoChan"]} dist={80}/>
              
</div>                                                               
</div>
</>
  )
}

export default SecondTest
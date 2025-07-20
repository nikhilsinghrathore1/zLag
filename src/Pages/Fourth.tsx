import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
// import { infoContext } from '../context/InfoContext';
import dashboardimg from "/slider4img.png"

const Fourth = () => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    if (document.readyState === 'complete') {
      // Already loaded
      setLoaded(true);
    } else {
      // Wait for the load event
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);


const MainDivRef = useRef(null)
const SlidingWindow = useRef(null)
const firstcircle = useRef(null)

// const {setState} = useContext(infoContext)


useEffect(() => {
  if(loaded){

    
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:MainDivRef.current,
        start:"top top",
    end:"bottom bottom",
    pin:true,
    scrub:10,
  }
})

tl.to(SlidingWindow.current,{
  x:"-300%",
  duration:5
},"a")

tl.to(SlidingWindow.current,{
  delay:1,
})
}
}, [loaded])


  return (
 
    <div ref={MainDivRef} className='w-full  h-[400vh]  relative overflow-hidden  '>
               <div ref={SlidingWindow} className='w-full flex  flex-nowrap h-[100vh] sticky top-0 '>
                              <div  className='w-full flex items-center relative justify-center h-full flex-shrink-0'>

                              <div className='text-[100px] leading-[105px] tracking-tight f5'>
                                             <h1>skip the task,</h1>
                                             <h1>lose the stake</h1>
                              </div>

                              <div ref={firstcircle} className='w-[15rem] absolute top-[50%] -translate-y-1/2 translate-x-1/2 right-0 h-[15rem] bg-red-700 rounded-full'></div>


                              <div className='w-[20%] h-14 border border-black absolute p-5 bottom-20 left-10'>
                                             <div className='w-full h-full flex items-center justify-center'>
                                                            <p className='uppercase f4 font-semibold flex items-center gap-3 tracking-wide'>Partner with us <GoArrowUpRight className='text-[20px] '/></p>
                                             </div>
                              </div>

                              </div>
                              <div className='w-full h-full relative  flex-shrink-0 p-10'>
                                             <div className='w-full flex justify-start b h-[30%]  pl-10'>
                                                            <p className='w-[20%] text-[17px] leading-[30px]  '>We’re on a mission to impact as many lives as possible and build a better company while we do it. Here’s our reward system.</p>
                                             </div>
                                             <div className='w-full h-[70%] text-center pl-44'>
                                                            <div className='text-[10rem] text-center w-[70%] leading-none font-semibold f5'>7 levels</div>
                                                            <div className=' text-center text-[3rem] w-[80%]  f3 leading-[3.5rem]'> <p>3 Days-Common — 7 Days-Uncommon 14 Days-Rare 30 Days-Epic.</p></div>
                                             </div>

                                             <div className='w-[10rem] h-[10rem] bg-red-800 rounded-full absolute top-[69%] left-[20%]'></div>
                                             <div className='w-[13rem] h-[13rem] bg-yellow-800 rounded-full absolute top-[-17%] left-[29%]'></div>
                                             <div className='w-[17rem] h-[17rem] bg-blue-800 rounded-full absolute bottom-[-17%] left-[40%]'></div>
                                             <div className='w-[15rem] h-[15rem] bg-black rounded-full absolute bottom-[50%] z-10 translate-y-1/2 left-[85%]'></div>

                              </div>
                              <div className='w-full h-full bg-yellow-300  relative flex-shrink-0 p-10'>
                              <div className='w-full flex justify-start b h-[30%] pl-10'>
                                                            <p className='w-[19%] font-semibold text-[17px] tracking-tight leading-[30px]'>ZeroLag offers an intuitive and straightforward interface to manage your tasks and track progress</p>
                                             </div>
                                             <div className='w-[45%] h-[70%] absolute top-[25%] left-[25%] text-center '>
                                                            <div className='text-[10rem] text-center w-full rounded-xl overflow-hidden h-[40vh] leading-none font-semibold f5 mb-5 '>
                                                              <img className='w-full h-full object-cover items-start' src={dashboardimg} alt="" />
                                                            </div>
                                                            <div className=' text-center text-[2.5rem] w-full  f3 leading-[3.5rem]'> <p>Expert in tech.</p></div>
                                             </div>

                                             <div className='w-[25rem] h-[25rem] absolute top-[55%] left-[10%] '>
                                                                           <img className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1b841fcd9f50115dbe9c_RocketLaunch.webp" alt="not showing" />
                                             </div>


                                             <div className='w-[17rem] h-[17rem] absolute  -top-[15%] left-[50%] '>
                                                                           <img className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1b924ee31caf14d64b2a_TreeStructure.webp" alt="not showing" />
                                             </div>
                                             <div className='w-[22rem] h-[22rem] absolute top-[20%] left-[70%] '>
                                                                           <img className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1ba6eb9637155282b42f_Lightning.webp" alt="not showing" />
                                             </div>
                              </div>
                              <div className='w-full h-full overflow-hidden flex items-center justify-center bg-blue-300 flex-shrink-0 relative'>
                                <div className=' w-full h-[60%] pt-32 text-center flex flex-col items-center'>
                                  <h1 className='text-[9rem] leading-none  f3'>$ZLAG</h1>
                                  <p className='text-[2rem] w-[50%] f3 leading-[2rem]' >Consistency = liquidity. Empower to earn $ZLAG.</p>
                                </div>

                                  <div className='w-[10rem] h-[10rem] rounded-full absolute -top-20 left-[30%] bg-red-600'> </div>
                                  <div className='w-[20rem] h-[20rem] rounded-full absolute -bottom-[22%] left-[10%] bg-red-600'> </div>
                                  <div className='w-[5rem] h-[5rem] rounded-full absolute top-[58%] left-[76.5%] bg-red-600'> </div>
                                  <div className='w-[18rem] h-[18rem] rounded-full absolute -top-[16%] -right-[6%] bg-red-600'> </div>

                              </div>         
               </div>
    </div>
  )
}
 
export default Fourth

// iterative development with systematic and controlled aspect ofwith the water fall it allows incremental releases of product refinement through each iteration around the spiral  
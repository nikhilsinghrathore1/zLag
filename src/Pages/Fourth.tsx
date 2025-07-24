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
                                             {/* Background Image */}
                                             <div 
                                               className='absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0'
                                               style={{
                                                 backgroundImage: 'url("/cosmic-nebula.jpg")',
                                               }}
                                             ></div>
                                             
                                             {/* Dark overlay for better text readability */}
                                             <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10'></div>

                              <div className='text-[100px] leading-[105px] tracking-tight f5 relative z-20 text-white font-bold'>
                                             <h1>skip the task,</h1>
                                             <h1>lose the stake</h1>
                              </div>

                              <div ref={firstcircle} className='w-[18rem] absolute top-[50%] -translate-y-1/2 translate-x-1/2 right-0 h-[18rem] z-20 flex items-center justify-center' style={{
                                backgroundImage: 'url("/arcade-machine.png")',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                filter: 'drop-shadow(0 0 20px rgba(20, 184, 166, 0.4)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.3))',
                                transform: 'translateX(50%) translateY(-50%) scale(1.1)'
                              }}>
                                {/* Cosmic glow effect overlay */}
                                <div className='absolute inset-0 rounded-lg' style={{
                                  background: 'radial-gradient(circle at center, rgba(20, 184, 166, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 70%)',
                                  animation: 'pulse 3s ease-in-out infinite'
                                }}></div>
                              </div>

                              <div className='w-[20%] h-14 border border-white absolute p-5 bottom-20 left-10 relative z-20 bg-black bg-opacity-20 hover:bg-opacity-40 transition-all duration-300'>
                                             <div className='w-full h-full flex items-center justify-center'>
                                                            <p className='uppercase f4 font-bold flex items-center gap-3 tracking-wide text-white'>Partner with us <GoArrowUpRight className='text-[20px] '/></p>
                                             </div>
                              </div>

                              </div>
                              <div className='w-full h-full relative  flex-shrink-0 p-10'>
                                             {/* Background Image */}
                                             <div 
                                               className='absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0'
                                               style={{
                                                 backgroundImage: 'url("/cosmic-nebula.jpg")',
                                               }}
                                             ></div>
                                             
                                             {/* Dark overlay for better text readability */}
                                             <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10'></div>
                                             <div className='w-full flex justify-start b h-[30%]  pl-10 relative z-20'>
                                                            <p className='w-[20%] text-[17px] leading-[30px] text-white font-bold'>We’re on a mission to impact as many lives as possible and build a better company while we do it. Here’s our reward system.</p>
                                             </div>
                                             <div className='w-full h-[70%] text-center pl-44 relative z-20'>
                                             {/* Background Image */}
                                             <div 
                                               className='absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0'
                                               style={{
                                                 backgroundImage: 'url("/cosmic-nebula.jpg")',
                                               }}
                                             ></div>
                                             <div className='text-center w-[70%] leading-none font-bold f5 mb-8 relative z-30'>
                               <h1 className='text-white text-[10rem] leading-none font-bold text-shadow-lg'>7 levels</h1>
                             </div>
                             <div className='text-center w-[80%] f3 leading-[3.5rem] font-bold relative z-30'>
                               <p className='text-white text-[3rem] leading-[3.5rem] font-bold text-shadow-lg'>3 Days-Common — 7 Days-Uncommon 14 Days-Rare 30 Days-Epic.</p>
                             </div>
                                             </div>

                                             <div className='w-[10rem] h-[10rem] bg-cover bg-center bg-no-repeat absolute top-[69%] left-[20%] z-20' style={{
                                               backgroundImage: 'url("/zerolag.png")',
                                             }}></div>
                                             <div className='w-[13rem] h-[13rem] bg-cover bg-center bg-no-repeat absolute top-[-17%] left-[29%] z-20' style={{
                                               backgroundImage: 'url("/zerolag.png")',
                                             }}></div>
                                             <div className='w-[17rem] h-[17rem] bg-cover bg-center bg-no-repeat absolute bottom-[-17%] left-[40%] z-20' style={{
                                               backgroundImage: 'url("/zerolag.png")',
                                             }}></div>
                                             <div className='w-[15rem] h-[15rem] bg-cover bg-center bg-no-repeat absolute bottom-[50%] z-20 translate-y-1/2 left-[85%]' style={{
                                               backgroundImage: 'url("/zerolag.png")',
                                             }}></div>

                              </div>
                              <div className='w-full h-full relative flex-shrink-0 p-10' style={{backgroundColor: 'rgb(14, 23, 28)'}}>
                              <div className='w-full flex justify-start b h-[30%] pl-10'>
                                                            <p className='w-[19%] font-semibold text-[17px] tracking-tight leading-[30px]' style={{color: 'rgb(238, 241, 242)'}}>ZeroLag offers an intuitive and straightforward interface to manage your tasks and track progress</p>
                                             </div>
                                             <div className='w-[45%] h-[70%] absolute top-[25%] left-[25%] text-center '>
                                                            <div className='text-[10rem] text-center w-full rounded-xl overflow-hidden h-[40vh] leading-none font-semibold f5 mb-5 '>
                                                              <img className='w-full h-full object-cover items-start' src={dashboardimg} alt="" />
                                                            </div>
                                                            <div className=' text-center text-[2.5rem] w-full  f3 leading-[3.5rem]'> <p style={{color: 'rgb(194, 206, 214)'}}>Expert in tech.</p></div>
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
                              <div className='w-full h-full overflow-hidden flex items-center justify-center flex-shrink-0 relative' style={{
                                 background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%)'
                               }}>
                                {/* Flowing wave background effects */}
                                <div className="absolute inset-0 overflow-hidden">
                                  <style>{`
                                    @keyframes flowWave {
                                      0% { transform: translateX(-100%) translateY(0px) scaleY(1); }
                                      50% { transform: translateX(50%) translateY(-30px) scaleY(1.2); }
                                      100% { transform: translateX(200%) translateY(0px) scaleY(1); }
                                    }
                                    @keyframes flowWave2 {
                                      0% { transform: translateX(200%) translateY(20px) scaleY(0.8); }
                                      50% { transform: translateX(-50%) translateY(-10px) scaleY(1.5); }
                                      100% { transform: translateX(-200%) translateY(20px) scaleY(0.8); }
                                    }
                                    @keyframes pulseGlow {
                                      0%, 100% { opacity: 0.1; filter: blur(30px); }
                                      50% { opacity: 0.4; filter: blur(15px); }
                                    }
                                  `}</style>
                                  
                                  {/* Main flowing waves */}
                                  <div 
                                    className="absolute w-[300%] h-40 bg-gradient-to-r from-transparent via-teal-400/30 to-transparent"
                                    style={{
                                      top: '25%',
                                      left: '-100%',
                                      animation: 'flowWave 18s ease-in-out infinite',
                                      borderRadius: '50%',
                                      filter: 'blur(20px)'
                                    }}
                                  />
                                  <div 
                                    className="absolute w-[250%] h-32 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent"
                                    style={{
                                      top: '45%',
                                      left: '-75%',
                                      animation: 'flowWave2 22s ease-in-out infinite',
                                      borderRadius: '50%',
                                      filter: 'blur(25px)'
                                    }}
                                  />
                                  <div 
                                    className="absolute w-[280%] h-36 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"
                                    style={{
                                      top: '65%',
                                      left: '-90%',
                                      animation: 'flowWave 28s ease-in-out infinite reverse',
                                      borderRadius: '50%',
                                      filter: 'blur(30px)'
                                    }}
                                  />
                                  
                                  {/* Additional glow orbs */}
                                  <div 
                                    className="absolute w-96 h-96 bg-teal-400/8 rounded-full"
                                    style={{
                                      top: '15%',
                                      left: '15%',
                                      animation: 'pulseGlow 10s ease-in-out infinite',
                                    }}
                                  />
                                  <div 
                                    className="absolute w-80 h-80 bg-cyan-300/6 rounded-full"
                                    style={{
                                      top: '60%',
                                      right: '20%',
                                      animation: 'pulseGlow 14s ease-in-out infinite reverse',
                                    }}
                                  />
                                </div>
                                <div className=' w-full h-[60%] pt-32 text-center flex flex-col items-center relative z-30'>
                                  <h1 className='text-[9rem] leading-none f3 text-white'>$ZLAG</h1>
                                  <p className='text-[2rem] w-[50%] f3 leading-[2rem] text-white' >Consistency = liquidity. Empower to earn $ZLAG.</p>
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
import gsap from "gsap"
import React, { useEffect, useRef } from 'react'
import InsideImage from '../components/InsideImage'
// Images are referenced directly from public folder
// const marqueImg = "/marqueimg1.jpg"
// const sparkImg = "/Spark.jpg"
// const flameImg = "/Flamee.jpg"
// const infernoImg = "/inferno.jpg"
// const blazeImg = "/blazee.jpg"

import marqueImg from '/marqueimg1.jpg';
import sparkImg from '/Spark.jpg';
import flameImg from '/Flamee.jpg';
import infernoImg from '/inferno.jpg';
import blazeImg from '/blazee.jpg';



// const ascendantImg = "/Ascendant.jpg"

const Fifth = () => {

   const mainRef = useRef(null)

   const firstcir = useRef(null)
   const firstdiv = useRef(null)
   const secondcir = useRef(null)
   const seconddiv = useRef(null)
   const thirdcir = useRef(null)
   const thirddiv = useRef(null)
   const fourthcir = useRef(null)
   const fourthdiv = useRef(null)
   const fifthcir = useRef(null)
   const fifthdiv = useRef(null)
   // const sixthdiv = useRef(null)


   // const {setState} = useContext(infoContext);


   useEffect(() => {
      gsap.to( mainRef.current,{
         scrollTrigger:{
            trigger:mainRef.current,
            start:"top top",
         },
         // onStart:()=>setState("team")
         
      })
   },[])
   

   const show1 = (el: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      gsap.to(firstcir.current, {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, el.clientX),
      });
    };
    
   const hide1 = ()=>{
      gsap.to(firstcir.current,{
         opacity:0
      })
   }
   const show2 = (e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{

         gsap.to(secondcir.current,{
            opacity:1,
            x:gsap.utils.mapRange(0,window.innerWidth, -200 , 200 , e.clientX),
         })
   }
   const hide2 = ()=>{
      gsap.to(secondcir.current,{
         opacity:0
      })
   }
   const show3 = (e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{

         gsap.to(thirdcir.current,{
            opacity:1,
            x:gsap.utils.mapRange(0,window.innerWidth, -200 , 200 , e.clientX),
   
       
         })
   }
   const hide3 = ()=>{
      gsap.to(thirdcir.current,{
         opacity:0
      })
   }
   const show4 = (e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{

         gsap.to(fourthcir.current,{
            opacity:1,
            x:gsap.utils.mapRange(0,window.innerWidth, -200 , 200 , e.clientX),
   
       
         })
   }
   const hide4 = ()=>{
      gsap.to(fourthcir.current,{
         opacity:0
      })
   }
   const show5 = (e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{

         gsap.to(fifthcir.current,{
            opacity:1,
            x:gsap.utils.mapRange(0,window.innerWidth, -200 , 200 , e.clientX),
   
       
         })
   }
   const hide5 = ()=>{
      gsap.to(fifthcir.current,{
         opacity:0
      })
   }

useEffect(() => {
  
   
}, [])


  return (
    <div ref={mainRef} className='w-full px-14 -mt-[300vh] h-[180vh] relative pt-40 overflow-hidden' style={{
      background: 'linear-gradient(135deg, #0A0624 0%, #16213e 25%, #0f3460 50%, #1a1a2e 75%, #0A0624 100%)'
    }}>
      {/* Cosmic background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <style>{`
          @keyframes cosmicFlow {
            0% { transform: translateX(-100%) translateY(0px) rotate(0deg); }
            50% { transform: translateX(50%) translateY(-30px) rotate(180deg); }
            100% { transform: translateX(200%) translateY(0px) rotate(360deg); }
          }
          @keyframes cosmicGlow {
            0%, 100% { opacity: 0.1; filter: blur(40px); }
            50% { opacity: 0.3; filter: blur(20px); }
          }
        `}</style>
        
        {/* Flowing cosmic waves */}
        <div 
          className="absolute w-[400%] h-32 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent"
          style={{
            top: '20%',
            left: '-150%',
            animation: 'cosmicFlow 25s ease-in-out infinite',
            borderRadius: '50%'
          }}
        />
        <div 
          className="absolute w-[300%] h-40 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent"
          style={{
            top: '60%',
            left: '-100%',
            animation: 'cosmicFlow 30s ease-in-out infinite reverse',
            borderRadius: '50%'
          }}
        />
        
        {/* Cosmic glow orbs */}
        <div 
          className="absolute w-96 h-96 bg-teal-400/10 rounded-full"
          style={{
            top: '10%',
            left: '10%',
            animation: 'cosmicGlow 12s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-cyan-300/8 rounded-full"
          style={{
            top: '70%',
            right: '15%',
            animation: 'cosmicGlow 16s ease-in-out infinite reverse',
          }}
        />
      </div>
      
      <div className='w-full text-center relative z-10'>
        <h1 className='text-[3.4rem] font-light f5 text-white cosmic-heading' style={{
          textShadow: '0 0 20px rgba(108, 61, 211, 0.5), 0 0 40px rgba(108, 61, 211, 0.3)'
        }}>Unlock Your Earnings</h1>
      </div>

      {/* Arcade Machine - Right Side */}
      <div className='absolute top-[20%] right-[5%] w-[300px] h-[400px] z-20'>
        <div className='relative w-full h-full' style={{
          backgroundImage: 'url("../arcade-machine.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'drop-shadow(0 0 25px rgba(20, 184, 166, 0.6)) drop-shadow(0 0 50px rgba(168, 85, 247, 0.4))',
          animation: 'cosmicGlow 4s ease-in-out infinite'
        }}>
          {/* Cosmic glow effect overlay */}
          <div className='absolute inset-0 rounded-lg' style={{
            background: 'radial-gradient(circle at center, rgba(20, 184, 166, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)',
            animation: 'pulse 3s ease-in-out infinite'
          }}></div>
          
          {/* Additional glow particles */}
          <div className='absolute top-[20%] left-[50%] w-2 h-2 bg-teal-400 rounded-full opacity-80' style={{
            animation: 'twinkle 2s ease-in-out infinite',
            transform: 'translateX(-50%)'
          }}></div>
          <div className='absolute top-[60%] right-[20%] w-1 h-1 bg-purple-400 rounded-full opacity-60' style={{
            animation: 'twinkle 3s ease-in-out infinite reverse'
          }}></div>
        </div>
      </div>

      {/* Additional CSS for arcade machine animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>

               <div ref={firstdiv} 
                    onMouseMove={show1} 
                    onMouseLeave={hide1} 
               className='border-b-[1px] listelm border-white h-[11%] px-5  flex w-full relative  mt-[85px]'>
                                             <InsideImage ind={"3 days"} text={"Spark NFT"} post={"common"}/>
                  <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={firstcir} className='w-[14rem] opacity-0  picture h-[14rem] rounded-full overflow-hidden  absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                     <img className="w-full h-full object-cover" src={sparkImg} alt="not showing" />
                  </div>

               </div>

               <div ref={seconddiv} 
                    onMouseMove={show2} 
                    onMouseLeave={hide2} 
                className='border-b-[1px] listelm border-white/30 relative h-[11%] px-5  flex w-full '>
                                             <InsideImage ind={"7 days"} text={"Ember NFT"} post={"uncommon"}/>
                                             <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={secondcir} className='w-[14rem] picture opacity-0  h-[14rem] rounded-full  overflow-hidden absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                     <img className="w-full h-full object-cover" src={marqueImg} alt="not showing" />
                  </div>

               </div>

               <div ref={thirddiv} 
                    onMouseMove={show3} 
                    onMouseLeave={hide3} 
                className='border-b-[1px] listelm border-white/30 peer h-[11%] px-5 relative  flex w-full '>
                                             <InsideImage ind={"14 days"} text={"Flame NFT"} post={"rare"} />
                                             <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={thirdcir} className='w-[14rem] h-[14rem] picture opacity-0  peer-hover:hidden rounded-full overflow-hidden absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                     <img className="w-full h-full object-cover" src={flameImg} alt="not showing" />
                  </div>

               </div>

               <div ref={fourthdiv} 
                    onMouseMove={show4} 
                    onMouseLeave={hide4}
               className='border-b-[1px] listelm border-white/30 h-[11%] px-5 relative  flex w-full '>
                                             <InsideImage ind={"30 days"} text={"Blaze NFT"} post={"Epic"} />
                                             <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={fourthcir} className='w-[14rem] picture h-[14rem] opacity-0  rounded-full overflow-hidden absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                     <img className="w-full h-full object-cover" src={blazeImg} alt="not showing" />
                  </div>

               </div>

               <div ref={fifthdiv} 
                    onMouseMove={show5} 
                    onMouseLeave={hide5} 
               className='border-b-[1px] listelm border-white/30 h-[11%] px-5 relative  flex w-full '>
                                             <InsideImage ind={"60+days"} text={"inferno NFT"} post={"Legendary"} />
                                             <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={fifthcir} className='w-[14rem] picture h-[14rem] opacity-0  rounded-full overflow-hidden absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                     <img className="w-full h-full object-cover" src={infernoImg} alt="not showing" />
                  </div>

               </div>

               {/* <div  ref={sixthdiv} 
                    onMouseMove={show6} 
                    onMouseLeave={hide6} 
                className='border-b-[1px] listelm border-black h-[11%] px-5 relative  flex w-full '>
                                             <InsideImage ind={"06"} text={"Adrian Rubio"} post={""} />
                                             <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={sixthcir} className='w-[14rem] picture h-[14rem] opacity-0   rounded-full bg-red-500 absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'></div>

               </div> */}
    </div>
  )
}

export default Fifth
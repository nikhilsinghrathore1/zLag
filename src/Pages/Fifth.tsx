import gsap from "gsap"
import React, { useEffect, useRef } from 'react'
import InsideImage from '../components/InsideImage'
import img1 from "/marqueimg1.png"
import img2 from "/Spark.jpg"
import img3 from "/Flame.jpg"
import img4 from "/Inferno.jpg"
import img5 from "/Ascendant.jpg"

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
    <div ref={mainRef} className='w-full px-14 -mt-[300vh] h-[180vh] bg-white pt-40 '>
               <div className='w-full text-center'>
                              <h1 className='text-[3.4rem]  font-light f5'>Pricing models</h1>
               </div>

               <div ref={firstdiv} 
                    onMouseMove={show1} 
                    onMouseLeave={hide1} 
               className='border-b-[1px] listelm border-black h-[11%] px-5  flex w-full relative  mt-[85px]'>
                                             <InsideImage ind={"3 days"} text={"Spark NFT"} post={"common"}/>
                  <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={firstcir} className='w-[14rem] opacity-0  picture h-[14rem] rounded-full overflow-hidden  absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                     <img className="w-full h-full object-cover" src={img2} alt="not showing" />
                  </div>

               </div>

               <div ref={seconddiv} 
                    onMouseMove={show2} 
                    onMouseLeave={hide2} 
                className='border-b-[1px] listelm border-black relative h-[11%] px-5  flex w-full '>
                                             <InsideImage ind={"7 days"} text={"Ember NFT"} post={"uncommon"}/>
                                             <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={secondcir} className='w-[14rem] picture opacity-0  h-[14rem] rounded-full  overflow-hidden absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                     <img className="w-full h-full object-cover" src={img1} alt="not showing" />
                  </div>

               </div>

               <div ref={thirddiv} 
                    onMouseMove={show3} 
                    onMouseLeave={hide3} 
                className='border-b-[1px] listelm border-black peer h-[11%] px-5 relative  flex w-full '>
                                             <InsideImage ind={"14 days"} text={"Flame NFT"} post={"rare"} />
                                             <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={thirdcir} className='w-[14rem] h-[14rem] picture opacity-0  peer-hover:hidden rounded-full overflow-hidden absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                     <img className="w-full h-full object-cover" src={img3} alt="not showing" />
                  </div>

               </div>

               <div ref={fourthdiv} 
                    onMouseMove={show4} 
                    onMouseLeave={hide4}
               className='border-b-[1px] listelm border-black h-[11%] px-5 relative  flex w-full '>
                                             <InsideImage ind={"30 days"} text={"Blaze NFT"} post={"Epic"} />
                                             <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={fourthcir} className='w-[14rem] picture h-[14rem] opacity-0  rounded-full overflow-hidden absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                     <img className="w-full h-full object-cover" src={img5} alt="not showing" />
                  </div>

               </div>

               <div ref={fifthdiv} 
                    onMouseMove={show5} 
                    onMouseLeave={hide5} 
               className='border-b-[1px] listelm border-black h-[11%] px-5 relative  flex w-full '>
                                             <InsideImage ind={"60+days"} text={"inferno NFT"} post={"Legendary"} />
                                             <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={fifthcir} className='w-[14rem] picture h-[14rem] opacity-0  rounded-full overflow-hidden absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                     <img className="w-full h-full object-cover" src={img4} alt="not showing" />
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
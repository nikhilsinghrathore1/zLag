import gsap from 'gsap/all'
import React, { useEffect, useRef, useState } from 'react'
import img from "/zlag_token.png"

const Sixth = () => {
  const MaintextDiv = useRef(null)

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    if (document.readyState === 'complete') {
      setLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // const {setState} = useContext(infoContext)

  useEffect(() => {
    if (loaded) {
      gsap.to(document.querySelectorAll(".textani"), {
        scrollTrigger: {
          trigger: MaintextDiv.current,
          start: "0 600px",
          end: "bottom bottom",
          scrub: 2,
        },
        opacity: 1,
        // onComplete:()=>setState("final"),
        stagger: 0.6
      })
    }
  }, [loaded])


  return (
    <>
      <div ref={MaintextDiv} className='w-full flex flex-col mb-[200px] items-center relative  justify-start h-[50vh]'>

        <p className=' w-[78%] text-center text-[1.3rem] leading-[2.1rem] f4'>{"ZeroLag is more than just a platform — it’s a movement, a revolution where discipline meets the power of Web3. We empower you to transform your daily habits into valuable assets, turning consistency and commitment into crypto rewards and personal growth. Through engaging gamified challenges, mental resilience training, and futuristic incentives, ZeroLag is designed to help you unlock your highest potential and stay ahead of the curve. Join us, stake your goals, and prove that discipline isn’t just a mindset — it’s the new currency of success. The future belongs to those who dare to build it, and with ZeroLag by your side, that future is yours to claim, shape, and own.".split("").map((e) => {
          if (e == " ") {
            return <span className='inline-block'> &nbsp;</span>
          }
          else {
            return <span className='inline-block opacity-15 textani'>{e}</span>
          }
        })}</p>

        <div className=' flex flex-col items-center mt-10 gap-1 justify-center'>
          <div className='w-[6rem] overflow-hidden h-[6rem] rounded-full'>
            <img src={img} alt="not showing " />
          </div>
          <p className='text-[1.2rem] f4 mt-2'>Zero_lag</p>
          <p className='text-[14px] font-semibold -mt-[7px] f2'>World’s first AI Disciplinary Dapp</p>
        </div>

      </div>

      {/* Neat Footer */}
     
    </>
  )
}

// things are not over yet have to make a loading screen then have to make a footer and a mobile view landing
export default Sixth

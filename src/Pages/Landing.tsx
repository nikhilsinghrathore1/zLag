// import { useGSAP } from '@gsap/react';
// import {  motion } from 'framer-motion'
import gsap, { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef, useState } from 'react'
import Marquee from '../components/Marquee';
// import { infoContext } from '../context/InfoContext';
// import Loader from './Loader';
// import img from "../../public/t3.jpg"
// import img2 from "../../public/t4.png"
// import Nav from './Nav';
// import SecondTest from './SecondTest';

// const image = [
//   {
//     img: img,
//     first: "50% 50%",
//     second: "50% 250%",
//     third: "50% 450%",
//     fourth: "50% 662%"
//   },
//   {
//     img: img2,
//     first: "50% 50%",
//     second: "50% 250%",
//     third: "50% 462%",
//     fourth: "50% 672%"
//   },
// ]

const Landing = () => {
  // const {setState} = useContext(infoContext)

  let clip = 100

  const clipRef = useRef(null)
  const topRef = useRef(null)
  const behindRef = useRef(null)
  const firstRef = useRef(null)
  const secondRef = useRef(null)
  const thirdRef = useRef(null)
  const fourthRef = useRef(null)
  const opacTextRef = useRef(null)

  // New refs for the elements that need to move left
  const blurredDivRef = useRef(null)
  const mainTextRef = useRef(null)

  // New refs for the main text elements that should move with scroll
  const unlockTextRef = useRef(null)
  const productivityTextRef = useRef(null)
  const aiToolsTextRef = useRef(null)

  // Ref for the game changer text animation
  const gameChangerTextRef = useRef(null)

  // Refs for blur background paragraph animation
  const blurParagraphRef1 = useRef(null)
  const blurParagraphRef2 = useRef(null)
  const blurParagraphRef3 = useRef(null)

  const overlayRefs = useRef([]);

  // const [imgState, setImgState] = useState(image[1])
  const [showSymbols, setShowSymbols] = useState(false)
  const [blurText1, setBlurText1] = useState("")
  const [blurText2, setBlurText2] = useState("")
  const [blurText3, setBlurText3] = useState("")

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()

    // Combined timeline for both animations with overlap
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: topRef.current,
        start: "top top",
        end: "+=200%", // Increased end point to accommodate longer animation
        scrub: 3,
        pin: true,
        // markers: true,
      },
    })

    // Set initial scale for behind element
    gsap.set(behindRef.current, { scale: 3 })

    // Combined animation: Left movement first, then overlap with circle animation
    tl2.to(blurredDivRef.current, {
      x: "-100%",
      duration: 2,
    }, "leftMove")
    // Add subtle movement for individual text elements
    .to(unlockTextRef.current, {
      x: "-3%",
      duration: 2,
    }, "leftMove")
    .to(productivityTextRef.current, {
      x: "-2%",
      duration: 2,
    }, "leftMove")
    .to(aiToolsTextRef.current, {
      x: "-7%",
      duration: 2,
    }, "leftMove")
    // Start circle animation with 1 second delay after left movement starts
    .to(clipRef.current, {
      clipPath: "circle(0% at 50% 50%)",
      duration: 5,
    }, "leftMove+=2") // 1 second delay
    .to(behindRef.current, {
      scale: 1,
      duration: 5,
    }, "leftMove+=2")
    .to(firstRef.current, {
      x: 10,
      onStart: () => console.log("started"),
      duration: 4
    }, "leftMove+=2")
    .to(secondRef.current, {
      x: 10,
      duration: 4
    }, "leftMove+=2")
    .to(thirdRef.current, {
      x: 10,
      duration: 4
    }, "leftMove+=2")
    .to(fourthRef.current, {
      x: 10,
      duration: 4
    }, "leftMove+=2")
    .to(opacTextRef.current, {
      opacity: 1,
      duration: 2
    }, "leftMove+=6") // Start after circle animation
    .to(behindRef.current, {
      delay: 2
    }, "leftMove+=4")

    const overlayEffect = () => {
      tl.to(overlayRefs.current, {
        stagger: 0.15,
        top: "0%",
     
      });

      tl.to(overlayRefs.current, {
        delay: 1,
        stagger: 0.25,
        top: "-100%",
      });
    }

    // Game changer random letter reveal animation
    const gameChangerAnimation = () => {
      const originalText = "trust us, it's a game changer!"
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

      // Create array to track which characters are revealed
      let revealedChars = Array(originalText.length).fill(false)
              // @ts-ignore
      let currentDisplay = Array(originalText.length).fill().map((_, i) => {
        if (originalText[i] === ' ' || originalText[i] === ',' || originalText[i] === '!' || originalText[i] === "'") {
          revealedChars[i] = true
          return originalText[i]
        }
        return letters[Math.floor(Math.random() * letters.length)]
      })

      // Function to update display with random letters
      const scrambleLetters = () => {
        for (let i = 0; i < originalText.length; i++) {
          if (!revealedChars[i] && originalText[i] !== ' ' && originalText[i] !== ',' && originalText[i] !== '!' && originalText[i] !== "'") {
            currentDisplay[i] = letters[Math.floor(Math.random() * letters.length)]
          }
        }

        // @ts-ignore
        setShowSymbols(currentDisplay.join(''))
      }

      // Start scrambling animation
      const scrambleInterval = setInterval(scrambleLetters, 50)

      // Reveal characters one by one in random order
      const unrevealed = []
      for (let i = 0; i < originalText.length; i++) {
        if (originalText[i] !== ' ' && originalText[i] !== ',' && originalText[i] !== '!' && originalText[i] !== "'") {
          unrevealed.push(i)
        }
      }

      // Shuffle the unrevealed positions
      for (let i = unrevealed.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [unrevealed[i], unrevealed[j]] = [unrevealed[j], unrevealed[i]]
      }

      // Reveal letters one by one
      unrevealed.forEach((index, revealStep) => {
        setTimeout(() => {
          revealedChars[index] = true
          currentDisplay[index] = originalText[index]
                  // @ts-ignore
          setShowSymbols(currentDisplay.join(''))

          // If this is the last character, stop scrambling and reset after delay
          if (revealStep === unrevealed.length - 1) {
            setTimeout(() => {
              clearInterval(scrambleInterval)
              setTimeout(() => {
                setShowSymbols(false)
              }, 1000)
            }, 100)
          }
        }, revealStep * 80 + 500) // Start revealing after 500ms
      })
    }

    // Blur background paragraph animation function
    const createBlurTextAnimation = (originalText:string, setterFunction:string) => {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijk©ª«¬®¯°±²³µ¶·¸¹º»¼½'
      
      // Create array to track which characters are revealed
      let revealedChars = Array(originalText.length).fill(false)
      // @ts-ignore
      let currentDisplay = Array(originalText.length).fill().map((_, i) => {
        if (originalText[i] === ' ' || originalText[i] === ',' || originalText[i] === '!' || originalText[i] === "'" || originalText[i] === '.' || originalText[i] === ':' || originalText[i] === '=' || originalText[i] === '+' || originalText[i] === '-') {
          revealedChars[i] = true
          return originalText[i]
        }
        return letters[Math.floor(Math.random() * letters.length)]
      })

      // Function to update display with random letters
      const scrambleLetters = () => {
        for (let i = 0; i < originalText.length; i++) {
          if (!revealedChars[i] && originalText[i] !== ' ' && originalText[i] !== ',' && originalText[i] !== '!' && originalText[i] !== "'" && originalText[i] !== '.' && originalText[i] !== ':' && originalText[i] !== '=' && originalText[i] !== '+' && originalText[i] !== '-') {
            currentDisplay[i] = letters[Math.floor(Math.random() * letters.length)]
          }
        }
        // @ts-ignore
        setterFunction(currentDisplay.join(''))
      }

      // Start scrambling animation
      const scrambleInterval = setInterval(scrambleLetters, 30)

      // Reveal characters one by one in random order
      const unrevealed = []
      for (let i = 0; i < originalText.length; i++) {
        if (originalText[i] !== ' ' && originalText[i] !== ',' && originalText[i] !== '!' && originalText[i] !== "'" && originalText[i] !== '.' && originalText[i] !== ':' && originalText[i] !== '=' && originalText[i] !== '+' && originalText[i] !== '-') {
          unrevealed.push(i)
        }
      }

      // Shuffle the unrevealed positions
      for (let i = unrevealed.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [unrevealed[i], unrevealed[j]] = [unrevealed[j], unrevealed[i]]
      }

      // Reveal letters one by one
      unrevealed.forEach((index, revealStep) => {
        setTimeout(() => {
          revealedChars[index] = true
          currentDisplay[index] = originalText[index]
                  // @ts-ignore
          setterFunction(currentDisplay.join(''))

          // If this is the last character, stop scrambling
          if (revealStep === unrevealed.length - 1) {
            setTimeout(() => {
              clearInterval(scrambleInterval)
            }, 100)
          }
        }, revealStep * 60 + 300) // Start revealing after 300ms
      })
    }

    // Initialize blur text animations (run only once)
    const text1 = "ZeroLag, the world's first AI-powered Discipline dApp, ends missed deadlines with real financial consequences and built-in accountability."
    const text2 = "WHY USERS STICK TO ZEROLAG: DAILY COMMITMENT LOOP. LOSS AVERSION = MOTIVATION, FAILURE BURNS STAKE + BREAKS NFT STREAK."
    const text3 = "ZeroLag is a decentralized Discipline-as-a-Service platform where users lock crypto to commit to daily tasks. Complete them to earn back your stake, dynamic NFTs, and $ZLAG rewards. Fail, and your stake is burned. Powered by AI, ZeroLag gamifies habit-building with real financial accountability."

    // Start animations with delays
            // @ts-ignore
            setTimeout(() => createBlurTextAnimation(text1, setBlurText1), 1000)
            // @ts-ignore
            setTimeout(() => createBlurTextAnimation(text2, setBlurText2), 1000)
            // @ts-ignore
    setTimeout(() => createBlurTextAnimation(text3, setBlurText3), 1000)

    // Start the game changer animation after a delay and repeat every 6 seconds
    setTimeout(gameChangerAnimation, 2000)
    const gameChangerInterval = setInterval(gameChangerAnimation, 6000)

    const overlayInterval = setInterval(overlayEffect, 5000)

    // Cleanup function
    return () => {
      clearInterval(gameChangerInterval)
      clearInterval(overlayInterval)
    }
  }, [])

  return (
    <div ref={topRef} className='w-full relative text-[#EEE9CC] h-[110vh] bg-[#1E1915]'>
      {/* <Nav/> */}
      {/* <Loader/> */}
      {/* main div to be clipped  */}
      <div ref={clipRef} style={{ clipPath: `circle(${clip + "%"} at 50% 50%)` }} className={`w-full ${"--clip:0%"} h-full overflow-hidden bg-black z-10 clipped absolute top-0`}>

        {/* this is the new unlock your motivation wala landing page  jai shree ghanesh*/}
        <div className='relative w-full h-full bg-[#FFFAF9] px-12 py-[14px] text-[#4D5AD6]'>

          {/* nav bar  */}
          <div className='w-full tracking-wide f8 text-[9.5px] uppercase h-[58px] rounded-xl bg-[#F9F5F4] flex'>
            {[1, 2, 3, 4, 5, 6].map((e, i) =>
              <div key={i} className={`w-[16.71%] pl-[14px] h-full flex items-center ${e === 6 ? "" : "border-r-[1px] border-[#4D5AD6]"} `}>
                {e === 6 ? 'Final' : `Chapter 0${e}`}
              </div>
            )}
          </div>

          {/* floating blue box */}
          <div className='absolute flex flex-col justify-between uppercase f8 text-[11px] px-2 pt-[9px] pb-[6px] top-[10.4%] right-[3%] w-[12.7%] h-[83px] bg-[#4D5AD6] text-white rounded-md'>
            <div className='w-[58%] leading-[0.75rem]'>
              <h1 ref={gameChangerTextRef}>
                {typeof showSymbols === 'string' ? showSymbols : (showSymbols === false ? 'trust us, it\'s a game changer!' : '')}
              </h1>
            </div>

            <div>
              <svg width="9" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M11.602 0L13.002 1.4L3.40195 11L12.002 11V13L0.00195312 13L0.00195313 1H2.00195L2.00195 9.6L11.602 0Z" fill="#FFFAF9"></path>
              </svg>
            </div>
          </div>

          {/* this is the moving behind main text */}
          <div ref={mainTextRef} className='w-full uppercase pb-4 h-[84%] flex flex-col justify-end'>
            <div ref={unlockTextRef} className='w-full f6 text-[8rem] leading-none text-right '>
              <h1>unlock your</h1>
            </div>
            <div ref={productivityTextRef} className='w-full pr-[57px] f6 text-[8rem] leading-[9rem] text-right '>
              <h1>productivity</h1>
            </div>
            <div ref={aiToolsTextRef} className='w-full pr-[85px] f6 text-[8rem] leading-[9.5rem] text-right '>
              <h1>with<span className='f7 border-[5px] pt-1 rounded-full px-[45px] border-[#4D5AD6]'>zerolag..</span></h1>
            </div>
          </div>

          {/* this is the floating opaque screen */}
          <div ref={blurredDivRef} className='absolute uppercase text-[13px] w-[46.5%] f8 text-[#4D5AD6] h-[84%] shadow-2xl shadow-black/10 py-4 pl-3 pr-14 rounded-xl top-[10.4%] bg-[#F9F5F4]/10 backdrop-blur-md'>
            <div className='w-full flex justify-between'>
              <div className='w-[43%] leading-none'>
                <p ref={blurParagraphRef1}>{blurText1 || "ZeroLag, the world's first AI-powered Discipline dApp, ends missed deadlines with real financial consequences and built-in accountability."}</p>
              </div>
              <div className='w-[45%] leading-none '>
                <p ref={blurParagraphRef2}>
                  {blurText2 || "WHY USERS STICK TO ZEROLAG: DAILY COMMITMENT LOOP. LOSS AVERSION = MOTIVATION, FAILURE BURNS STAKE + BREAKS NFT STREAK."}
                </p>
              </div>
            </div>

            <div className='leading-none mt-9'>
              <p ref={blurParagraphRef3}>{blurText3 || "ZeroLag is a decentralized Discipline-as-a-Service platform where users lock crypto to commit to daily tasks. Complete them to earn back your stake, dynamic NFTs, and $ZLAG rewards. Fail, and your stake is burned. Powered by AI, ZeroLag gamifies habit-building with real financial accountability."}</p>
            </div>
          </div>

        </div>

      </div>

      <div className='w-full h-screen overflow-hidden bg-[#000] relative'>

        <div ref={opacTextRef} className='w-full capitalize opacity-0 text-center f2 font-semibold text-[20.5px] leading-[10px] pt-[90px] tracking-wide'>
          <h1 className='mb-4'>Worlds First Ai Powered Disciplinary Dapp</h1>
          <h1>fuel you flame earn your chain</h1>
        </div>

        <div ref={behindRef} className='absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap overflow-hidden '>
          <div ref={firstRef} className="translate-x-[40%]">
            <Marquee text={["ZLAG", "task to earn", "AI verification", "rewards"]} dist={20} />
          </div>
          <div ref={secondRef} className="translate-x-[-40%] mt-1">
            <Marquee text={["ZLAG", "task to earn", "AI verification", "rewards"]} dist={40} />
          </div>

          <div ref={thirdRef} className='translate-x-[40%] mt-1'>
            <Marquee text={["ZLAG", "task to earn", "AI verification", "rewards"]} dist={30} />
          </div>

          <div ref={fourthRef} className="translate-x-[-40%] mt-1">
            <Marquee text={["ZLAG", "task to earn", "AI verification", "rewards"]} dist={80} />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Landing
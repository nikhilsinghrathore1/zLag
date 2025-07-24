// import { useGSAP } from '@gsap/react';
// import {  motion } from 'framer-motion'
import gsap, { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef, useState } from 'react'
import Marquee from '../components/Marquee';


// const generateStars = () => Array.from({ length: 150 }, (_, i) => ({
//   id: i,
//   left: Math.random() * 100,
//   top: Math.random() * 100,
//   size: Math.random() * 2 + 1,
//   animationDelay: Math.random() * 4,
//   animationDuration: Math.random() * 2 + 2
// }));

const Landing = () => {

  const [loaded, setloaded] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setloaded(true);
    };

    if (document.readyState === 'complete') {
      // Already loaded
      setloaded(true);
    } else {
      // Wait for the load event
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

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
    if(loaded){

    
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
    // Add subtle movehttp://localhost:5173/ment for individual text elements
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
    const text2 = "WHY ZEROLAG? Break free from procrastination. Our daily commitment loop, powered by real crypto stakes and loss aversion, guarantees motivation. Missed tasks burn crypto; completed ones earn rewards and NFTs, turning discipline into powerful, lasting habits."
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
  }
  }, [loaded])

  // const stars = useMemo(() => generateStars(), []);

  return (
    <div ref={topRef} className='w-full relative text-[#EEE9CC] h-[110vh] bg-gradient-to-br from-gray-900 via-black to-gray-800'>

<div className={`${loaded ? 'hidden' : 'flex'} fixed inset-0 z-[100] bg-black bg-opacity-90 items-center justify-center`}>
  <div className="flex flex-col items-center space-y-4">
    <h1 className="text-white text-xl font-semibold tracking-wide animate-pulse">Loading...</h1>
    <div className="w-10 h-10 border-[4px] border-t-transparent border-white rounded-full animate-spin"></div>
  </div>
</div>
      {/* <Nav/> */}
      {/* <Loader/> */}
      {/* main div to be clipped  */}
      <div ref={clipRef} className={`w-full ${"--clip:0%"} h-full overflow-hidden z-20 clipped absolute top-0`} 
        style={{
          clipPath: `circle(${clip + "%"} at 50% 50%)`,
          background: `
            radial-gradient(circle at center, 
              rgba(45, 27, 105, 0.9) 0%, 
              rgba(26, 14, 61, 0.8) 30%, 
              rgba(15, 6, 36, 0.7) 60%, 
              rgba(10, 6, 36, 0.9) 100%
            ),
            conic-gradient(from 0deg at 50% 50%, 
              rgba(108, 61, 211, 0.8) 0deg, 
              rgba(20, 184, 166, 0.8) 72deg, 
              rgba(255, 79, 216, 0.8) 144deg, 
              rgba(20, 184, 166, 0.8) 216deg, 
              rgba(108, 61, 211, 0.8) 288deg, 
              rgba(20, 184, 166, 0.8) 360deg
            )
          `,
          backgroundSize: '100% 100%, 200% 200%',
          backgroundPosition: 'center, center',
          animation: 'arcadeGlow 4s ease-in-out infinite',
          filter: 'drop-shadow(0 0 30px rgba(20, 184, 166, 0.5)) drop-shadow(0 0 60px rgba(168, 85, 247, 0.4))'
        }}>
        
        {/* ZeroLag Images Overlay - positioned to replace red circle sections */}
        <div className="absolute inset-0">
          {/* ZLAG Token - Top Right */}
          <img 
            src="/zlag_token.png"
            alt="ZLAG Token"
            className="absolute w-32 h-32 object-contain opacity-90"
            style={{
              top: '10%',
              right: '15%',
              filter: 'drop-shadow(0 0 15px rgba(108, 61, 211, 0.8))',
              animation: 'pulseGlow 3s ease-in-out infinite'
            }}
          />
          
          {/* Timer Icon - Left Side */}
          <img 
            src="/timer-icon.png"
            alt="Timer Icon"
            className="absolute w-28 h-28 object-contain opacity-85"
            style={{
              top: '25%',
              left: '10%',
              filter: 'drop-shadow(0 0 15px rgba(20, 184, 166, 0.8))',
              animation: 'pulseGlow 4s ease-in-out infinite reverse'
            }}
          />
          
          {/* Lock Icon - Bottom Right */}
          <img 
            src="/lock-icon.png"
            alt="Lock Icon"
            className="absolute w-30 h-30 object-contain opacity-80"
            style={{
              bottom: '15%',
              right: '20%',
              filter: 'drop-shadow(0 0 15px rgba(255, 79, 216, 0.8))',
              animation: 'pulseGlow 3.5s ease-in-out infinite'
            }}
          />
          
          {/* Additional ZLAG Token - Bottom Left */}
          <img 
            src="/zlag_token.png"
            alt="ZLAG Token"
            className="absolute w-24 h-24 object-contain opacity-75"
            style={{
              bottom: '20%',
              left: '15%',
              filter: 'drop-shadow(0 0 12px rgba(108, 61, 211, 0.6))',
              animation: 'pulseGlow 5s ease-in-out infinite reverse'
            }}
          />
        </div>
        
        {/* Arcade Machine Visual Elements */}
        <div className='absolute inset-0 flex items-center justify-center'>
          {/* Main Arcade Body */}
          <div className='relative' style={{
            width: '200px',
            height: '280px',
            background: 'linear-gradient(145deg, #2d1b69 0%, #1a0e3d 50%, #0f0624 100%)',
            borderRadius: '25px 25px 15px 15px',
            border: '3px solid rgba(20, 184, 166, 0.4)',
            boxShadow: `
              0 0 30px rgba(168, 85, 247, 0.6),
              inset 0 3px 0 rgba(255, 255, 255, 0.1),
              inset 0 -3px 0 rgba(0, 0, 0, 0.3)
            `
          }}>
            {/* Screen */}
            <div className='absolute top-8 left-8 right-8' style={{
              height: '100px',
              background: 'linear-gradient(135deg, #001122 0%, #003344 30%, #004466 70%, #001122 100%)',
              borderRadius: '12px',
              border: '3px solid rgba(20, 184, 166, 0.6)',
              boxShadow: 'inset 0 0 25px rgba(20, 184, 166, 0.4)'
            }}>
              <div className='absolute inset-3 bg-gradient-to-br from-teal-400/30 to-purple-400/30 rounded-lg flex items-center justify-center'>
                <div className='text-center'>
                  <div className='text-teal-200 text-lg font-bold tracking-wider mb-1'>ZERO</div>
                  <div className='text-purple-200 text-lg font-bold tracking-wider'>LAG</div>
                </div>
              </div>
              {/* Screen glow effect */}
              <div className='absolute -inset-1 bg-teal-400/20 rounded-xl blur-sm'></div>
            </div>
            
            {/* Control Panel */}
            <div className='absolute bottom-12 left-8 right-8' style={{
              height: '70px',
              background: 'linear-gradient(to bottom, #374151 0%, #1f2937 100%)',
              borderRadius: '12px',
              border: '2px solid #4b5563'
            }}>
              {/* Arcade Buttons */}
              <div className='flex justify-center items-center h-full gap-4'>
                <div className='w-6 h-6 bg-red-500 rounded-full shadow-xl' style={{
                  boxShadow: '0 0 15px rgba(239, 68, 68, 0.8), inset 0 2px 0 rgba(255, 255, 255, 0.3)'
                }}></div>
                <div className='w-6 h-6 bg-yellow-400 rounded-full shadow-xl' style={{
                  boxShadow: '0 0 15px rgba(251, 191, 36, 0.8), inset 0 2px 0 rgba(255, 255, 255, 0.3)'
                }}></div>
                <div className='w-6 h-6 bg-green-400 rounded-full shadow-xl' style={{
                  boxShadow: '0 0 15px rgba(74, 222, 128, 0.8), inset 0 2px 0 rgba(255, 255, 255, 0.3)'
                }}></div>
                <div className='w-6 h-6 bg-blue-400 rounded-full shadow-xl' style={{
                  boxShadow: '0 0 15px rgba(96, 165, 250, 0.8), inset 0 2px 0 rgba(255, 255, 255, 0.3)'
                }}></div>
              </div>
            </div>
            
            {/* Side Panels */}
            <div className='absolute -left-2 top-16 w-4 h-32 bg-gradient-to-b from-purple-600 to-purple-800 rounded-l-lg border-l-2 border-purple-400/50'></div>
            <div className='absolute -right-2 top-16 w-4 h-32 bg-gradient-to-b from-purple-600 to-purple-800 rounded-r-lg border-r-2 border-purple-400/50'></div>
            
            {/* Outer Glow */}
            <div className='absolute -inset-2 bg-gradient-to-r from-teal-400/30 via-transparent to-purple-400/30 rounded-3xl blur-lg -z-10'></div>
          </div>
        </div>
        
        {/* Animation Styles */}
        <style>{`
          @keyframes arcadeGlow {
            0%, 100% { 
              background-position: center, 0% 0%; 
              filter: drop-shadow(0 0 30px rgba(20, 184, 166, 0.5)) drop-shadow(0 0 60px rgba(168, 85, 247, 0.4));
            }
            50% { 
              background-position: center, 100% 100%; 
              filter: drop-shadow(0 0 40px rgba(20, 184, 166, 0.7)) drop-shadow(0 0 80px rgba(168, 85, 247, 0.6));
            }
          }
        `}</style>

        {/* Dark themed background with flowing waves */}
        <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Dark Wave Background */}
      <div className="absolute inset-0 z-0">
        <style>{`
          @keyframes wave {
            0% { transform: translateX(-100%) translateY(0px) rotate(0deg); }
            50% { transform: translateX(0%) translateY(-20px) rotate(180deg); }
            100% { transform: translateX(100%) translateY(0px) rotate(360deg); }
          }
          @keyframes wave2 {
            0% { transform: translateX(100%) translateY(10px) rotate(180deg); }
            50% { transform: translateX(0%) translateY(-10px) rotate(0deg); }
            100% { transform: translateX(-100%) translateY(10px) rotate(-180deg); }
          }
          @keyframes glow {
            0%, 100% { opacity: 0.3; filter: blur(20px); }
            50% { opacity: 0.8; filter: blur(10px); }
          }
        `}</style>
        
        {/* Flowing wave elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-[200%] h-32 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent"
            style={{
              top: '20%',
              left: '-50%',
              animation: 'wave 15s ease-in-out infinite',
              borderRadius: '50%',
              filter: 'blur(15px)'
            }}
          />
          <div 
            className="absolute w-[180%] h-24 bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent"
            style={{
              top: '40%',
              left: '-40%',
              animation: 'wave2 20s ease-in-out infinite',
              borderRadius: '50%',
              filter: 'blur(20px)'
            }}
          />
          <div 
            className="absolute w-[220%] h-40 bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"
            style={{
              top: '60%',
              left: '-60%',
              animation: 'wave 25s ease-in-out infinite reverse',
              borderRadius: '50%',
              filter: 'blur(25px)'
            }}
          />
        </div>
      </div>
      
      <div className='relative w-full h-full bg-transparent px-12 py-[14px] text-green-400 z-10'>
        {/* nav bar  */}
        <div className='w-full tracking-wide f8 text-[9.5px] uppercase h-[58px] rounded-xl bg-gray-800/50 backdrop-blur-sm flex border border-gray-700'>
          {[1, 2, 3, 4, 5, 6].map((e, i) =>
            <div key={i} className={`w-[16.71%] pl-[14px] h-full flex items-center ${e === 6 ? "" : "border-r-[1px] border-green-400/30"} `}>
              {e === 6 ? 'Final' : `Chapter 0${e}`}
            </div>
          )}
        </div>
        
        {/* floating blue box */}
        <div className='absolute flex flex-col justify-between uppercase f8 text-[11px] px-2 pt-[9px] pb-[6px] top-[10.4%] right-[3%] w-[12.7%] h-[83px] bg-green-600 text-white rounded-md shadow-lg shadow-green-500/20 z-30'>
          <div className='w-[58%] leading-[0.75rem]'>
            <h1 ref={gameChangerTextRef}>
              {typeof showSymbols === 'string' ? showSymbols : (showSymbols === false ? 'trust us, it\'s a game changer!' : '')}
            </h1>
          </div>
          
          <div>
            <svg width="9" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path d="M11.602 0L13.002 1.4L3.40195 11L12.002 11V13L0.00195312 13L0.00195313 1H2.00195L2.00195 9.6L11.602 0Z" fill="#111827"></path>
            </svg>
          </div>
        </div>
        
        {/* this is the moving behind main text */}
        <div ref={mainTextRef} className='w-full uppercase pb-4 h-[84%] flex flex-col justify-end relative z-20'>
          <div ref={unlockTextRef} className='w-full f6 text-[8rem] leading-none text-right text-white'>
            <h1>unlock your</h1>
          </div>
          <div ref={productivityTextRef} className='w-full pr-[57px] f6 text-[8rem] leading-[9rem] text-right text-white'>
            <h1>productivity</h1>
          </div>
          <div ref={aiToolsTextRef} className='w-full pr-[85px] f6 text-[8rem] leading-[9.5rem] text-right text-white'>
            <h1>with<span className='f7 border-[5px] pt-1 rounded-full px-[45px] border-green-400 text-green-400'>zerolag..</span></h1>
          </div>
        </div>
        
        {/* this is the floating opaque screen */}
        <div ref={blurredDivRef} className='absolute uppercase text-[13px] w-[46.5%] f8 text-green-300 h-[84%] shadow-2xl shadow-black/30 py-4 pl-3 pr-14 rounded-xl top-[10.4%] bg-gray-800/20 backdrop-blur-md border border-gray-700/30 z-25'>
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


      </div>

      <div className='w-full h-screen overflow-hidden relative z-10' style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%)'
      }}>
        {/* Flowing wave background effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* @ts-ignore */}
          <style jsx>{`
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
          <img 
            src="/lock-icon.png"
            alt="Lock Icon"
            className="absolute w-96 h-96 object-contain opacity-80"
            style={{
              top: '15%',
              left: '15%',
              animation: 'pulseGlow 10s ease-in-out infinite',
              filter: 'drop-shadow(0 0 20px rgba(255, 79, 216, 0.5))'
            }}
          />
          <img 
            src="/zlag_token.png"
            alt="ZLAG Token"
            className="absolute w-80 h-80 object-contain opacity-70"
            style={{
              top: '60%',
              right: '20%',
              animation: 'pulseGlow 14s ease-in-out infinite reverse',
              filter: 'drop-shadow(0 0 15px rgba(108, 61, 211, 0.4))'
            }}
          />
        </div>

        <div ref={opacTextRef} className='w-full capitalize opacity-0 text-center f2 font-semibold text-[20.5px] leading-[10px] pt-[90px] tracking-wide relative z-20'>
          <h1 className='mb-4'>Worlds First Ai Powered Disciplinary Dapp</h1>
          <h1>fuel you flame earn your chain</h1>
        </div>

        <div ref={behindRef} className='absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap overflow-hidden z-15'>
          <div ref={firstRef} className="translate-x-[40%]">
            <Marquee text={["ZLAG", "task to earn", "AI verification", "rewards"]} dist={20} />
          </div>
          <div ref={secondRef} className="translate-x-[-40%] mt-1">
            <Marquee text={["AI verification", "ZLAG", "task to earn", "rewards"]} dist={40} />
          </div>

          <div ref={thirdRef} className='translate-x-[40%] mt-1'>
            <Marquee text={["ZLAG", "rewards", "AI verification", "task to earn"]} dist={30} />
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
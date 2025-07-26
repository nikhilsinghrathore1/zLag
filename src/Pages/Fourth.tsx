import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
// import { infoContext } from '../context/InfoContext';
// Image referenced directly from public folder
// const dashboardimg = "/slider4img.png"; // Removed as no longer used

const Fourth = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    if (document.readyState === "complete") {
      // Already loaded
      setLoaded(true);
    } else {
      // Wait for the load event
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const MainDivRef = useRef<HTMLDivElement>(null);
  const SlidingWindow = useRef<HTMLDivElement>(null);
  const firstcircle = useRef(null);
  
  // Chapter ref for navigation
  const chapter1Ref = useRef(null);

  // const {setState} = useContext(infoContext)
  
  // Chapter navigation function
  const navigateToChapter = (chapterNumber: number) => {
    if (!loaded || !SlidingWindow.current) return;
    
    // Kill any existing animations on the sliding window
    gsap.killTweensOf(SlidingWindow.current);
    
    // Calculate target position (each screen is 100% width)
    const targetX = -(chapterNumber - 1) * 100;
    
    // Animate to the target chapter
    gsap.to(SlidingWindow.current, {
      x: `${targetX}%`,
      duration: 1.2,
      ease: "power2.inOut",
      overwrite: true
    });
    
    // Also scroll to the Fourth component section if not already there
    const fourthSection = MainDivRef.current;
    if (fourthSection) {
      fourthSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };
  
  // Expose navigation function globally for chapter buttons
  useEffect(() => {
    (window as any).navigateToChapter = navigateToChapter;
    return () => {
      delete (window as any).navigateToChapter;
    };
  }, [loaded]);

  useEffect(() => {
    if (loaded) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: MainDivRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: true,
          scrub: 10,
        },
      });

      tl.to(
        SlidingWindow.current,
        {
          x: "-300%",
          duration: 5,
        },
        "a"
      );

      tl.to(SlidingWindow.current, {
        delay: 1,
      });
    }
  }, [loaded]);

  return (
    <div
      ref={MainDivRef}
      className="w-full  h-[400vh]  relative overflow-hidden  "
    >
      <div
        ref={SlidingWindow}
        className="w-full flex  flex-nowrap h-[100vh] sticky top-0 "
      >
        <div ref={chapter1Ref} className="w-full flex items-center relative justify-center h-full flex-shrink-0">
          {/* Background Image */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: 'url("/cosmic-nebula.jpg")',
            }}
          ></div>

          {/* Dark overlay for better text readability */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

          <div className="text-[100px] leading-[105px] tracking-tight f5 relative z-20 text-white font-bold">
            <h1>skip the task,</h1>
            <h1>lose the stake</h1>
          </div>

          <div
            ref={firstcircle}
            className="w-[18rem] absolute top-[50%] -translate-y-1/2 translate-x-1/2 right-0 h-[18rem] z-20 flex items-center justify-center"
            style={{
              backgroundImage: 'url("/arcade-machine.png")',
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter:
                "drop-shadow(0 0 20px rgba(20, 184, 166, 0.4)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.3))",
              transform: "translateX(50%) translateY(-50%) scale(1.1)",
            }}
          >
            {/* Cosmic glow effect overlay */}
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(20, 184, 166, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 70%)",
                animation: "pulse 3s ease-in-out infinite",
              }}
            ></div>
          </div>

          <div className="w-[20%] h-14 border border-white absolute p-5 bottom-20 left-10 relative z-20 bg-black bg-opacity-20 hover:bg-opacity-40 transition-all duration-300">
            <div className="w-full h-full flex items-center justify-center">
              <p className="uppercase f4 font-bold flex items-center gap-3 tracking-wide text-white">
                Partner with us <GoArrowUpRight className="text-[20px] " />
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative  flex-shrink-0 p-10">
          {/* Background Image */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: 'url("/cosmic-nebula.jpg")',
            }}
          ></div>

          {/* Dark overlay for better text readability */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10"></div>
          {/* Removed corner paragraph to match reference image */}
          <div className="w-full h-[70%] text-center pl-44 relative z-20">
            {/* Background Image */}
            {/* <div 
                                               className='absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0'
                                               style={{
                                                 backgroundImage: 'url("/cosmic-nebula.jpg")',
                                               }}
                                             ></div> */}
            {/* Main Heading */}
            <div className="text-center w-[100%]  leading-none mb-3 relative z-30">
              <h1 className="text-white text-[6rem] text-center leading-[5.5rem] font-black tracking-wide text-shadow-lg f5" >
                Unlock Exclusive Rewards
              </h1>
            </div>
            
            {/* Sub-heading */}
            <div className="text-center w-[90%] mb-8 relative z-30">
              <p className="text-white text-[1.8rem] leading-[2.2rem] font-light italic text-shadow-lg tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>
                Your Path to Digital Mastery
              </p>
            </div>
            
            {/* Section Title */}
       
            
            {/* Description */}
            <div className="text-center w-[85%] mb-8 relative z-30">
              <p className="text-white text-[1rem] leading-[1.4rem] opacity-70 font-normal text-shadow-lg" style={{fontFamily: 'Inter, sans-serif', letterSpacing: '0.5px'}}>
                Each day of consistency unlocks a new level of accomplishment, represented by a unique and evolving NFT. The longer you commit, the greater your reward and the more prestigious your digital legacy becomes.
              </p>
            </div>
            
            {/* NFT Tiers - Horizontal Layout with Images */}
            <div className="flex justify-center mt-10 items-start w-[95%] gap-12 relative z-30">
              {/* 3 Days: Spark NFT */}
              <div className="text-center max-w-[180px]">
                <div className="w-28 h-28 mx-auto mb-4 rounded-xl overflow-hidden shadow-2xl border-2 border-blue-400/30">
                  <img 
                    src="/Spark.jpg" 
                    alt="Spark" 
                    className="w-full h-full object-cover"
                    // style={{
                    //   filter: 'hue-rotate(220deg) saturate(1.5) brightness(1.2)'
                    // }}
                  />
                </div>
                <div className="mb-2">
                  <span className="text-white leading-none text-[1.2rem] font-black text-shadow-lg" style={{fontFamily: 'Montserrat, sans-serif'}}>3 Days</span>
                </div>
                <h3 className="text-white leading-none mb-3 text-[1rem] font-bold text-shadow-lg " style={{fontFamily: 'Inter, sans-serif'}}>
                  Spark NFT
                </h3>
                <div className="mb-2">
                  <span className="text-blue-300 text-[0.95rem] font-semibold text-shadow-lg uppercase tracking-wider" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Common
                  </span>
                </div>
                <p className="text-white/90 text-[0.85rem] font-normal text-shadow-lg leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
                  The ignition of your discipline.
                </p>
              </div>
              
              {/* 7 Days: Ember NFT */}
              <div className="text-center max-w-[180px]">
                <div className="w-28 h-28 mx-auto mb-4 rounded-xl overflow-hidden shadow-2xl border-2 border-cyan-400/30">
                  <img 
                    src="/marqueimg1.jpg" 
                    alt="Ember" 
                    className="w-full h-full object-cover"
                    // style={{
                    //   filter: 'hue-rotate(180deg) saturate(1.4) brightness(1.3)'
                    // }}
                  />
                </div>
                <div className="mb-2">
                  <span className="text-white text-[1.2rem] leading-none font-black text-shadow-lg" style={{fontFamily: 'Montserrat, sans-serif'}}>7 Days</span>
                </div>
                <h3 className="text-white text-[1rem] leading-none font-bold text-shadow-lg mb-3" style={{fontFamily: 'Inter, sans-serif'}}>
                  EmFT
                </h3>
                <div className="mb-2">
                  <span className="text-cyan-300 text-[0.95rem] font-semibold text-shadow-lg uppercase tracking-wider" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Uncommon
                  </span>
                </div>
                <p className="text-white/90 text-[0.85rem] font-normal text-shadow-lg leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
                  Your commitment begins to glow.
                </p>
              </div>
              
              {/* 14 Days: Flame NFT */}
              <div className="text-center max-w-[180px]">
                <div className="w-28 h-28 mx-auto mb-4 rounded-xl overflow-hidden shadow-2xl border-2 border-purple-400/30">
                  <img 
                    src="/Flamee.jpg" 
                    alt="Flame NFT" 
                    className="w-full h-full object-cover"
                    // style={{
                    //   filter: 'hue-rotate(280deg) saturate(1.6) brightness(1.4)'
                    // }}
                  />
                </div>
                <div className="mb-2">
                  <span className="text-white text-[1.2rem] leading-none  font-black text-shadow-lg" style={{fontFamily: 'Montserrat, sans-serif'}}>14 Days</span>
                </div>
                <h3 className="text-white text-[1rem] leading-none font-bold text-shadow-lg mb-3" style={{fontFamily: 'Inter, sans-serif'}}>
                  Flame NFT
                </h3>
                <div className="mb-2">
                  <span className="text-purple-300 text-[0.95rem] font-semibold text-shadow-lg uppercase tracking-wider" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Rare
                  </span>
                </div>
                <p className="text-white/90 text-[0.85rem] font-normal text-shadow-lg leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
                  Ignite your potential, consistently.
                </p>
              </div>
              
              {/* 30 Days: Blaze NFT */}
              <div className="text-center max-w-[180px]">
                <div className="w-28 h-28 mx-auto mb-4 rounded-xl overflow-hidden shadow-2xl border-2 border-green-400/30">
                  <img 
                    src="/blazee.jpg" 
                    alt="Blaze NFT" 
                    className="w-full h-full object-cover"
                    // style={{
                    //   filter: 'hue-rotate(120deg) saturate(1.7) brightness(1.5)'
                    // }}
                  />
                </div>
                <div className="mb-2">
                  <span className="text-white text-[1.2rem] leading-none font-black text-shadow-lg" style={{fontFamily: 'Montserrat, sans-serif'}}>30 Days</span>
                </div>
                <h3 className="text-white text-[1rem] leading-none font-bold text-shadow-lg mb-3" style={{fontFamily: 'Inter, sans-serif'}}>
                  Blaze NFT
                </h3>
                <div className="mb-2">
                  <span className="text-green-300 text-[0.95rem] font-semibold text-shadow-lg uppercase tracking-wider" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Epic
                  </span>
                </div>
                <p className="text-white/90 text-[0.85rem] font-normal text-shadow-lg leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
                  A beacon of unstoppable discipline.
                </p>
              </div>
              
              {/* 60+ Days: Inferno NFT */}
              <div className="text-center max-w-[180px]">
                <div className="w-28 h-28 mx-auto mb-4 rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-400/30">
                  <img 
                    src="/inferno.jpg" 
                    alt="Inferno NFT" 
                    className="w-full h-full object-cover"
                    // style={{
                    //   filter: 'hue-rotate(60deg) saturate(2) brightness(1.6) contrast(1.3)'
                    // }}
                  />
                </div>
                <div className="mb-2">
                  <span className="text-white text-[1.2rem] leading-none font-black text-shadow-lg" style={{fontFamily: 'Montserrat, sans-serif'}}>60+ Days</span>
                </div>
                <h3 className="text-white text-[1rem] font-bold leading-none text-shadow-lg mb-3" style={{fontFamily: 'Inter, sans-serif'}}>
                  Inferno NFT
                </h3>
                <div className="mb-2">
                  <span className="text-yellow-300 text-[0.95rem] font-semibold text-shadow-lg uppercase tracking-wider" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Legendary
                  </span>
                </div>
                <p className="text-white/90 text-[0.85rem] font-normal text-shadow-lg leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
                  Achieve legendary discipline.
                </p>
              </div>
            </div>
            {/* CENTER IMAGE REMOVED */}
          </div>

          <div
            className="w-[10rem] h-[10rem] bg-cover bg-center bg-no-repeat absolute top-[69%] left-[20%] z-20"
            style={{
              backgroundImage: 'url("/zerolag.png")',
            }}
          ></div>
          <div
            className="w-[13rem] h-[13rem] bg-cover bg-center bg-no-repeat absolute top-[-17%] left-[29%] z-20"
            style={{
              backgroundImage: 'url("/zerolag.png")',
            }}
          ></div>
          <div
            className="w-[17rem] h-[17rem] bg-cover bg-center bg-no-repeat absolute bottom-[-17%] left-[40%] z-20"
            style={{
              backgroundImage: 'url("/zerolag.png")',
            }}
          ></div>
          <div
            className="w-[15rem] h-[15rem] bg-cover bg-center bg-no-repeat absolute bottom-[50%] z-20 translate-y-1/2 left-[85%]"
            style={{
              backgroundImage: 'url("/zerolag.png")',
            }}
          ></div>
        </div>
        <div className="w-full h-full flex-shrink-0 relative bg-gradient-to-br from-[#0c0c1e] via-[#151530] to-[#0c0c1e] overflow-hidden font-['Poppins',sans-serif]">
          {/* Animated Background Particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }, (_, i) => {
              const x = Math.random() * 100;
              const y = Math.random() * 100;
              return (
                <div key={i} className="absolute">
                  <div
                    className="w-1 h-1 bg-cyan-400 rounded-full opacity-60"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      boxShadow: "0 0 6px #00ffff",
                    }}
                  />
                  {i < 20 && (
                    <svg
                      className="absolute -translate-x-1/2 -translate-y-1/2 opacity-30"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                      }}
                      width="100"
                      height="100"
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2={Math.cos(i) * 50 + 50}
                        y2={Math.sin(i) * 50 + 50}
                        stroke="url(#gradient)"
                        strokeWidth="1"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00ff88" />
                          <stop offset="100%" stopColor="#00ffff" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-6 py-8">
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)]">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Effortless Discipline.
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                      Intuitive Control.
                    </span>
                  </h2>

                  <h3 className="text-2xl lg:text-3xl font-semibold text-gray-300">
                    Manage Your Goals. Master Your Progress.
                  </h3>

                  <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                    ZeroLag provides a sleek, user-friendly interface designed for your success. Seamlessly manage tasks,
                    track progress in real time, and gain insights into your accountability journey. We've engineered
                    simplicity, so you can focus purely on achieving your goals.
                  </p>
                </div>

                {/* CTA Button */}
                <button className="group relative px-8 py-4 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg font-semibold text-black text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] focus:outline-none focus:ring-2 focus:ring-cyan-400">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>

              {/* Right Content - PC Screen Mockup */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Floating Animation Container */}
                  <div className="animate-[float_6s_ease-in-out_infinite]">
                    {/* Monitor Frame */}
                    <div className="relative">
                      {/* Monitor Screen */}
                      <div className="w-[600px] h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-2xl p-4 shadow-[0_0_50px_rgba(0,255,255,0.3)] border-2 border-cyan-400/30">
                        {/* Screen Content - Dashboard Image */}
                        <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-19%20194632-pmSDt0iSUeMYGav3l6dNjADABTEcp7.png"
                            alt="ZeroLag Dashboard Interface"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>

                      {/* Monitor Stand */}
                      <div className="relative">
                        {/* Monitor Base */}
                        <div className="w-32 h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg mx-auto shadow-lg" />
                        {/* Monitor Neck */}
                        <div className="w-4 h-12 bg-gradient-to-b from-gray-600 to-gray-700 mx-auto -mt-2 rounded-b-lg" />
                      </div>
                    </div>

                    {/* Glow Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-green-400/20 rounded-t-2xl blur-xl -z-10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Tagline */}
            <footer className="text-center mt-16">
              <p className="text-xl text-gray-300 font-semibold">
                Built with Precision.{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Powered by Experts.
                </span>
              </p>
            </footer>
          </div>

          {/* Custom Animations */}
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(12deg); }
              50% { transform: translateY(-20px) rotate(12deg); }
            }
          `}</style>
        </div>
        <div
          className="w-full h-full overflow-hidden flex items-center justify-center flex-shrink-0 relative"
          style={{
            background:
              "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%)",
          }}
        >
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
                top: "25%",
                left: "-100%",
                animation: "flowWave 18s ease-in-out infinite",
                borderRadius: "50%",
                filter: "blur(20px)",
              }}
            />
            <div
              className="absolute w-[250%] h-32 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent"
              style={{
                top: "45%",
                left: "-75%",
                animation: "flowWave2 22s ease-in-out infinite",
                borderRadius: "50%",
                filter: "blur(25px)",
              }}
            />
            <div
              className="absolute w-[280%] h-36 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"
              style={{
                top: "65%",
                left: "-90%",
                animation: "flowWave 28s ease-in-out infinite reverse",
                borderRadius: "50%",
                filter: "blur(30px)",
              }}
            />

            {/* Additional glow orbs */}
            <div
              className="absolute w-96 h-96 bg-teal-400/8 rounded-full"
              style={{
                top: "15%",
                left: "15%",
                animation: "pulseGlow 10s ease-in-out infinite",
              }}
            />
            <div
              className="absolute w-80 h-80 bg-cyan-300/6 rounded-full"
              style={{
                top: "60%",
                right: "20%",
                animation: "pulseGlow 14s ease-in-out infinite reverse",
              }}
            />
          </div>
          <div className=" w-full h-[60%] pt-32 text-center flex flex-col items-center relative z-30">
            <h1 className="text-[9rem] leading-none f3 text-white">$ZLAG</h1>
            <p className="text-[2rem] w-[50%] f3 leading-[2rem] text-white">
              Consistency = liquidity. Empower to earn $ZLAG.
            </p>
          </div>

          {/* Circular decorative images */}
          <div className="w-[10rem] h-[10rem] rounded-full absolute -top-20 left-[30%] overflow-hidden border-2 border-teal-400/30 shadow-lg shadow-teal-400/20">
            <img
              src="/nftt.jpg"
              alt="Rocket Launch"
              className="w-full h-full object-cover rounded-full"
              style={{
                filter: "brightness(1.2) contrast(1.1) hue-rotate(180deg)",
              }}
            />
          </div>

          {/* <div className='w-[20rem] h-[20rem] rounded-full absolute -bottom-[22%] left-[10%] overflow-hidden border-2 border-purple-400/30 shadow-lg shadow-purple-400/20'>
                                    <img 
                                      src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1b924ee31caf14d64b2a_TreeStructure.webp" 
                                      alt="Network Structure" 
                                      className="w-full h-full object-cover rounded-full"
                                      style={{
                                        filter: 'brightness(1.3) contrast(1.2) hue-rotate(270deg)'
                                      }}
                                    />
                                  </div> */}

          <div className="w-[20rem] h-[20rem] rounded-full absolute -bottom-[22%] left-[10%] overflow-hidden border-2 border-purple-400/30 shadow-lg shadow-purple-400/20">
            <img
              src="/nftt.jpg"
              alt="Network Structure"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="w-[5rem] h-[5rem] rounded-full absolute top-[58%] left-[76.5%] overflow-hidden border-2 border-cyan-400/30 shadow-lg shadow-cyan-400/20">
            <img
              src="/time.png"
              alt="Lightning"
              className="w-full h-full object-cover rounded-full"
              style={{
                filter: "brightness(1.4) contrast(1.3) hue-rotate(90deg)",
              }}
            />
          </div>

          <div className="w-[18rem] h-[18rem] rounded-full absolute -top-[16%] -right-[6%] overflow-hidden border-2 border-teal-300/30 shadow-lg shadow-teal-300/20">
            <img
              src="/zlag_token.png"
              alt="ZLAG Token"
              className="w-full h-full object-cover rounded-full"
              style={{
                filter:
                  "brightness(1.1) contrast(1.2) drop-shadow(0 0 10px rgba(20, 184, 166, 0.5))",
              }}
            />
          </div>

          {/* NEW: Custom image placeholder - Replace src with your uploaded image */}
          <div className="w-[12rem] h-[12rem] rounded-full absolute top-[20%] right-[25%] overflow-hidden border-2 border-yellow-400/30 shadow-lg shadow-yellow-400/20">
            <img
              src="/rewardssss.png"
              alt="Custom Image"
              className="w-full h-full object-cover rounded-full"
              style={{
                filter:
                  "brightness(1.2) contrast(1.1) hue-rotate(45deg) drop-shadow(0 0 15px rgba(255, 193, 7, 0.4))",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;


// iterative development with systematic and controlled aspect ofwith the water fall it allows incremental releases of product refinement through each iteration around the spiral
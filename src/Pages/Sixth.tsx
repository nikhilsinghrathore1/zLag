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
      <div ref={MaintextDiv} className='w-full flex flex-col items-center relative justify-start min-h-[100vh] overflow-hidden' style={{
        backgroundImage: 'url("/cosmic-nebula.jpg"), linear-gradient(180deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.8) 5%, rgba(15, 52, 96, 0.7) 10%, rgba(10, 6, 36, 0.8) 15%, rgba(22, 33, 62, 0.7) 25%, rgba(15, 52, 96, 0.6) 35%, rgba(26, 26, 46, 0.7) 45%, rgba(42, 42, 78, 0.8) 55%, rgba(26, 26, 46, 0.7) 65%, rgba(15, 52, 96, 0.6) 75%, rgba(22, 33, 62, 0.7) 85%, rgba(26, 26, 46, 0.6) 92%, rgba(26, 26, 46, 0.3) 96%, rgba(5, 1, 10, 0) 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
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

        <p className=' w-[78%] text-center text-[1.3rem] leading-[2.1rem] f4 text-white relative z-10 pt-20'>{"ZeroLag is more than just a platform — it’s a movement, a revolution where discipline meets the power of Web3. We empower you to transform your daily habits into valuable assets, turning consistency and commitment into crypto rewards and personal growth. Through engaging gamified challenges, mental resilience training, and futuristic incentives, ZeroLag is designed to help you unlock your highest potential and stay ahead of the curve. Join us, stake your goals, and prove that discipline isn’t just a mindset — it’s the new currency of success. The future belongs to those who dare to build it, and with ZeroLag by your side, that future is yours to claim, shape, and own.".split("").map((e) => {
          if (e == " ") {
            return <span className='inline-block'> &nbsp;</span>
          }
          else {
            return <span className='inline-block opacity-15 textani text-white'>{e}</span>
          }
        })}</p>

        <div className=' flex flex-col items-center mt-16 gap-1 justify-center relative z-10 pb-20'>
          <div className='w-[6rem] overflow-hidden h-[6rem] rounded-full'>
            <img src={img} alt="not showing " />
          </div>
          <p className='text-[1.2rem] f4 mt-2 text-white' style={{
            textShadow: '0 0 10px rgba(108, 61, 211, 0.5)'
          }}>Zero_lag</p>
          <p className='text-[14px] font-semibold -mt-[7px] f2 text-white/80'>World's first AI Disciplinary Dapp</p>
        </div>

      </div>

      {/* Cosmic Footer */}
      <footer className='w-full relative overflow-hidden' style={{
        backgroundImage: 'url("/cosmic-nebula.jpg"), linear-gradient(180deg, rgba(5, 1, 10, 0) 0%, rgba(10, 6, 36, 0.8) 15%, #0A0624 30%, #16213e 50%, #0f3460 70%, #1a1a2e 85%, #2a2a4e 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Footer cosmic background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-[300%] h-20 bg-gradient-to-r from-transparent via-teal-400/10 to-transparent"
            style={{
              top: '40%',
              left: '-100%',
              animation: 'cosmicFlow 40s ease-in-out infinite',
              borderRadius: '50%'
            }}
          />
          <div 
            className="absolute w-80 h-80 bg-cyan-300/5 rounded-full"
            style={{
              top: '20%',
              right: '15%',
              animation: 'cosmicGlow 20s ease-in-out infinite',
            }}
          />
        </div>
        
        <div className='relative z-10 py-12 px-14 backdrop-blur-lg' style={{
          background: 'rgba(10, 6, 36, 0.3)',
          borderRadius: '20px 20px 0 0',
          boxShadow: '0 -20px 40px rgba(20, 184, 166, 0.1), 0 -10px 20px rgba(108, 61, 211, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(20, 184, 166, 0.2)',
          borderBottom: 'none',
          transform: 'translateY(-10px)'
        }}>
          {/* Main Footer Content */}
          <div className='flex justify-between items-start mb-8'>
            {/* Left Side - Logo and Branding */}
            <div className='flex flex-col max-w-md backdrop-blur-sm p-4 rounded-lg' style={{
              background: 'rgba(22, 33, 62, 0.3)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(20, 184, 166, 0.2)'
            }}>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-10 h-10 overflow-hidden rounded-full'>
                  <img src={img} alt="ZeroLag Logo" className='w-full h-full object-cover' />
                </div>
                <h2 className='text-xl font-bold text-teal-200 f5' style={{
                  textShadow: '0 0 15px rgba(108, 61, 211, 0.8), 0 0 25px rgba(20, 184, 166, 0.4)'
                }}>ZeroLag</h2>
              </div>
              <p className='text-sm text-cyan-200 f2 mb-2'>World's first AI Disciplinary Dapp</p>
              <p className='text-xs text-purple-200/80 f2 leading-relaxed'>Discipline is the new currency of success. Transform your habits into valuable assets with real crypto stakes.</p>
            </div>
            
            {/* Right Side - Navigation Links */}
            <div className='grid grid-cols-4 gap-8 text-cyan-200/80 backdrop-blur-sm p-6 rounded-lg' style={{
              background: 'rgba(15, 52, 96, 0.2)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(34, 211, 238, 0.2)'
            }}>
              <div>
                <h3 className='text-teal-200 font-semibold mb-3 text-sm f4'>Platform</h3>
                <ul className='space-y-2 text-xs f2'>
                  <li><a href='#' className='hover:text-teal-400 transition-colors'>How it Works</a></li>
                  <li><a href='#' className='hover:text-teal-400 transition-colors'>NFT Rewards</a></li>
                  <li><a href='#' className='hover:text-teal-400 transition-colors'>$ZLAG Token</a></li>
                  <li><a href='#' className='hover:text-teal-400 transition-colors'>Staking</a></li>
                </ul>
              </div>
              <div>
                <h3 className='text-teal-200 font-semibold mb-3 text-sm f4'>Community</h3>
                <ul className='space-y-2 text-xs f2'>
                  <li><a href='#' className='hover:text-teal-400 transition-colors'>Discord</a></li>
                  <li><a href='#' className='hover:text-teal-400 transition-colors'>Twitter</a></li>
                  <li><a href='#' className='hover:text-teal-400 transition-colors'>Telegram</a></li>
                  <li><a href='#' className='hover:text-teal-400 transition-colors'>Reddit</a></li>
                </ul>
              </div>
              <div>
                <h3 className='text-teal-200 font-semibold mb-3 text-sm f4'>Resources</h3>
                <ul className='space-y-2 text-xs f2'>
                  <li><a href='#' className='hover:text-teal-400 transition-colors'>Whitepaper</a></li>
                  <li><a href='#' className='hover:text-teal-400 transition-colors'>Documentation</a></li>
                  <li><a href='#' className='hover:text-teal-400 transition-colors'>API</a></li>
                  <li><a href='#' className='hover:text-teal-400 transition-colors'>Support</a></li>
                </ul>
              </div>
              <div>
                <h3 className='text-teal-200 font-semibold mb-3 text-sm f4'>Legal</h3>
                <ul className='space-y-2 text-xs f2'>
                  <li><a href='#' className='hover:text-teal-400 transition-colors'>Privacy Policy</a></li>
                  <li><a href='#' className='hover:text-teal-400 transition-colors'>Terms of Use</a></li>
                  <li><a href='#' className='hover:text-teal-400 transition-colors'>Cookie Policy</a></li>
                  <li><a href='#' className='hover:text-teal-400 transition-colors'>Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className='border-t border-teal-400/30 pt-6 flex justify-between items-center backdrop-blur-md p-4 rounded-lg mt-4' style={{
            background: 'rgba(26, 26, 46, 0.4)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 8px rgba(20, 184, 166, 0.1)',
            border: '1px solid rgba(108, 61, 211, 0.3)'
          }}>
            <div className='flex flex-col'>
              <p className='text-cyan-200/70 text-xs f2'>© 2024 ZeroLag. All rights reserved.</p>
              <p className='text-purple-200/60 text-xs f2 mt-1' style={{
                textShadow: '0 0 8px rgba(255, 79, 216, 0.3)'
              }}>"Destiny build destiny" - Fuel your flame, earn your chain</p>
            </div>
            <div className='flex gap-3'>
              <div className='w-10 h-10 rounded-full bg-teal-400/30 backdrop-blur-md flex items-center justify-center hover:bg-teal-400/50 transition-all cursor-pointer border border-teal-400/40 hover:scale-110' style={{
                boxShadow: '0 6px 20px rgba(20, 184, 166, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2)',
                transform: 'translateZ(10px)'
              }}>
                <span className='text-teal-100 text-base font-semibold' style={{
                  textShadow: '0 0 8px rgba(20, 184, 166, 0.8)'
                }}>𝕏</span>
              </div>
              <div className='w-10 h-10 rounded-full bg-purple-400/30 backdrop-blur-md flex items-center justify-center hover:bg-purple-400/50 transition-all cursor-pointer border border-purple-400/40 hover:scale-110' style={{
                boxShadow: '0 6px 20px rgba(168, 85, 247, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2)',
                transform: 'translateZ(10px)'
              }}>
                <span className='text-purple-100 text-base' style={{
                  textShadow: '0 0 8px rgba(168, 85, 247, 0.8)'
                }}>💬</span>
              </div>
              <div className='w-10 h-10 rounded-full bg-cyan-400/30 backdrop-blur-md flex items-center justify-center hover:bg-cyan-400/50 transition-all cursor-pointer border border-cyan-400/40 hover:scale-110' style={{
                boxShadow: '0 6px 20px rgba(34, 211, 238, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2)',
                transform: 'translateZ(10px)'
              }}>
                <span className='text-cyan-100 text-base' style={{
                  textShadow: '0 0 8px rgba(34, 211, 238, 0.8)'
                }}>📱</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
     
    </>
  )
}

// things are not over yet have to make a loading screen then have to make a footer and a mobile view landing
export default Sixth

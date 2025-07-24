import gsap from 'gsap/all'
import React, { useEffect, useRef, useState } from 'react'
// Image referenced directly from public folder

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
        backgroundImage: 'url("/hell.jpg"), linear-gradient(180deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.8) 5%, rgba(15, 52, 96, 0.7) 10%, rgba(10, 6, 36, 0.8) 15%, rgba(22, 33, 62, 0.7) 25%, rgba(15, 52, 96, 0.6) 35%, rgba(26, 26, 46, 0.7) 45%, rgba(42, 42, 78, 0.8) 55%, rgba(26, 26, 46, 0.7) 65%, rgba(15, 52, 96, 0.6) 75%, rgba(22, 33, 62, 0.7) 85%, rgba(26, 26, 46, 0.6) 92%, rgba(26, 26, 46, 0.3) 96%, rgba(5, 1, 10, 0) 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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

      </div>

      {/* Enhanced Cosmic Footer */}
      <footer className='w-full relative overflow-hidden py-20' style={{
        backgroundImage: 'url("/cosmic-nebula.jpg"), linear-gradient(180deg, rgba(5, 1, 10, 0) 0%, rgba(10, 6, 36, 0.9) 10%, #0A0624 25%, #16213e 45%, #0f3460 65%, #1a1a2e 80%, #2a2a4e 95%, #000000 100%)',
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
            className="absolute w-[250%] h-16 bg-gradient-to-r from-transparent via-purple-400/8 to-transparent"
            style={{
              top: '70%',
              right: '-80%',
              animation: 'cosmicFlow 35s ease-in-out infinite reverse',
              borderRadius: '50%'
            }}
          />
        </div>

        <div className='max-w-7xl mx-auto px-8 relative z-10'>
          {/* Main Footer Content */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-16'>
            {/* Brand Section */}
            <div className='md:col-span-1'>
              <h2 className='text-2xl font-bold text-white mb-4 f4' style={{
                textShadow: '0 0 20px rgba(108, 61, 211, 0.6)'
              }}>ZeroLag</h2>
              <p className='text-cyan-200/80 text-sm f2 leading-relaxed mb-6'>
                Discipline is the new currency of success. Transform your daily habits into valuable assets with Web3-powered accountability.
              </p>
              {/* Social Links */}
              <div className='flex space-x-4'>
                <a href='#' className='w-10 h-10 bg-gradient-to-r from-teal-400/20 to-purple-400/20 rounded-full flex items-center justify-center border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:scale-110'>
                  <span className='text-teal-400 text-sm'>𝕏</span>
                </a>
                <a href='#' className='w-10 h-10 bg-gradient-to-r from-teal-400/20 to-purple-400/20 rounded-full flex items-center justify-center border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:scale-110'>
                  <span className='text-teal-400 text-sm'>📱</span>
                </a>
                <a href='#' className='w-10 h-10 bg-gradient-to-r from-teal-400/20 to-purple-400/20 rounded-full flex items-center justify-center border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:scale-110'>
                  <span className='text-teal-400 text-sm'>💬</span>
                </a>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className='text-teal-200 font-semibold mb-6 text-lg f4' style={{
                textShadow: '0 0 10px rgba(20, 184, 166, 0.4)'
              }}>Platform</h3>
              <ul className='space-y-3 text-sm f2'>
                <li><a href='#' className='text-cyan-200/70 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block'>How it Works</a></li>
                <li><a href='#' className='text-cyan-200/70 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block'>NFT Rewards</a></li>
                <li><a href='#' className='text-cyan-200/70 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block'>$ZLAG Token</a></li>
                <li><a href='#' className='text-cyan-200/70 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block'>Staking System</a></li>
                <li><a href='#' className='text-cyan-200/70 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block'>AI Verification</a></li>
              </ul>
            </div>

            {/* Community Links */}
            <div>
              <h3 className='text-teal-200 font-semibold mb-6 text-lg f4' style={{
                textShadow: '0 0 10px rgba(20, 184, 166, 0.4)'
              }}>Community</h3>
              <ul className='space-y-3 text-sm f2'>
                <li><a href='#' className='text-cyan-200/70 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block'>Discord</a></li>
                <li><a href='#' className='text-cyan-200/70 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block'>Telegram</a></li>
                <li><a href='#' className='text-cyan-200/70 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block'>Twitter</a></li>
                <li><a href='#' className='text-cyan-200/70 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block'>Medium</a></li>
                <li><a href='#' className='text-cyan-200/70 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block'>GitHub</a></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className='text-teal-200 font-semibold mb-6 text-lg f4' style={{
                textShadow: '0 0 10px rgba(20, 184, 166, 0.4)'
              }}>Resources</h3>
              <ul className='space-y-3 text-sm f2'>
                <li><a href='#' className='text-cyan-200/70 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block'>Documentation</a></li>
                <li><a href='#' className='text-cyan-200/70 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block'>Whitepaper</a></li>
                <li><a href='#' className='text-cyan-200/70 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block'>Roadmap</a></li>
                <li><a href='#' className='text-cyan-200/70 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block'>Privacy Policy</a></li>
                <li><a href='#' className='text-cyan-200/70 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block'>Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className='w-full h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent mb-8'></div>

          {/* Bottom Footer */}
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8'>
              <p className='text-cyan-200/70 text-sm f2'>© 2024 ZeroLag. All rights reserved.</p>
              <p className='text-purple-200/60 text-sm f2' style={{
                textShadow: '0 0 8px rgba(255, 79, 216, 0.3)'
              }}>"Fuel your flame, earn your chain"</p>
            </div>
            <div className='text-cyan-200/60 text-sm f2'>
              <span>Built on </span>
              <span className='text-teal-400 font-semibold'>Web3</span>
              <span> • Powered by </span>
              <span className='text-purple-400 font-semibold'>AI</span>
            </div>
          </div>
        </div>

        {/* Cosmic glow effects */}
        <div className='absolute bottom-0 left-1/4 w-32 h-32 bg-teal-400/5 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 right-1/4 w-24 h-24 bg-purple-400/5 rounded-full blur-2xl'></div>
      </footer>
    </>
  )
}

// things are not over yet have to make a loading screen then have to make a footer and a mobile view landing
export default Sixth

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
      <div ref={MaintextDiv} className='main-container' style={{
        backgroundImage: 'url("/hell.jpg"), linear-gradient(180deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.8) 5%, rgba(15, 52, 96, 0.7) 10%, rgba(10, 6, 36, 0.8) 15%, rgba(22, 33, 62, 0.7) 25%, rgba(15, 52, 96, 0.6) 35%, rgba(26, 26, 46, 0.7) 45%, rgba(42, 42, 78, 0.8) 55%, rgba(26, 26, 46, 0.7) 65%, rgba(15, 52, 96, 0.6) 75%, rgba(22, 33, 62, 0.7) 85%, rgba(26, 26, 46, 0.6) 92%, rgba(26, 26, 46, 0.3) 96%, rgba(5, 1, 10, 0) 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        {/* Cosmic background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <style>{`
            /* GUARANTEED RESPONSIVE SOLUTION */
            
            /* Base animations */
            @keyframes cosmicFlow {
              0% { transform: translateX(-100%) translateY(0px) rotate(0deg); }
              50% { transform: translateX(50%) translateY(-30px) rotate(180deg); }
              100% { transform: translateX(200%) translateY(0px) rotate(360deg); }
            }
            @keyframes cosmicGlow {
              0%, 100% { opacity: 0.1; filter: blur(40px); }
              50% { opacity: 0.3; filter: blur(20px); }
            }
            
            /* MOBILE FIRST - Base styles (320px+) */
            .main-container {
              width: 100% !important;
              min-height: 100vh !important;
              padding: 2rem 0.75rem !important;
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              justify-content: flex-start !important;
              position: relative !important;
              overflow: hidden !important;
            }
            
            .main-text {
              width: 100% !important;
              max-width: none !important;
              font-size: 0.75rem !important;
              line-height: 1.3 !important;
              text-align: center !important;
              padding: 0 0.5rem !important;
              margin: 0 !important;
              color: white !important;
              position: relative !important;
              z-index: 10 !important;
            }
            
            .footer-container {
              width: 100% !important;
              padding: 2rem 0.75rem !important;
              position: relative !important;
              overflow: hidden !important;
            }
            
            .footer-content {
              max-width: 100% !important;
              margin: 0 auto !important;
              padding: 0 !important;
            }
            
            .footer-grid {
              display: grid !important;
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
              margin-bottom: 2rem !important;
            }
            
            .footer-brand {
              grid-column: 1 !important;
            }
            
            .footer-brand h2 {
              font-size: 1.25rem !important;
              margin-bottom: 0.75rem !important;
            }
            
            .footer-brand p {
              font-size: 0.75rem !important;
              line-height: 1.4 !important;
              margin-bottom: 1rem !important;
            }
            
            .footer-section h3 {
              font-size: 0.875rem !important;
              margin-bottom: 0.75rem !important;
            }
            
            .footer-section ul {
              list-style: none !important;
              padding: 0 !important;
              margin: 0 !important;
            }
            
            .footer-section li {
              margin-bottom: 0.5rem !important;
            }
            
            .footer-section a {
              font-size: 0.75rem !important;
              text-decoration: none !important;
              display: inline-block !important;
            }
            
            .social-links {
              display: flex !important;
              gap: 0.75rem !important;
            }
            
            .social-link {
              width: 2rem !important;
              height: 2rem !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              border-radius: 50% !important;
            }
            
            .footer-bottom {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              gap: 1rem !important;
              text-align: center !important;
            }
            
            .footer-bottom p,
            .footer-bottom div {
              font-size: 0.625rem !important;
              margin: 0 !important;
            }
            
            /* SMALL SCREENS (480px+) */
            @media (min-width: 480px) {
              .main-container {
                padding: 2.5rem 1rem !important;
              }
              
              .main-text {
                font-size: 0.875rem !important;
                line-height: 1.4 !important;
                padding: 0 0.75rem !important;
              }
              
              .footer-container {
                padding: 2.5rem 1rem !important;
              }
              
              .footer-brand h2 {
                font-size: 1.375rem !important;
              }
              
              .footer-brand p {
                font-size: 0.8125rem !important;
              }
              
              .footer-section h3 {
                font-size: 0.9375rem !important;
              }
              
              .footer-section a {
                font-size: 0.8125rem !important;
              }
              
              .social-link {
                width: 2.25rem !important;
                height: 2.25rem !important;
              }
              
              .footer-bottom p,
              .footer-bottom div {
                font-size: 0.6875rem !important;
              }
            }
            
            /* TABLETS (640px+) */
            @media (min-width: 640px) {
              .main-container {
                padding: 3rem 1.5rem !important;
              }
              
              .main-text {
                font-size: 1rem !important;
                line-height: 1.5 !important;
                max-width: 90% !important;
                padding: 0 !important;
              }
              
              .footer-container {
                padding: 3rem 1.5rem !important;
              }
              
              .footer-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 2rem !important;
              }
              
              .footer-brand {
                grid-column: span 2 !important;
              }
              
              .footer-brand h2 {
                font-size: 1.5rem !important;
                margin-bottom: 1rem !important;
              }
              
              .footer-brand p {
                font-size: 0.875rem !important;
                line-height: 1.5 !important;
                margin-bottom: 1.25rem !important;
              }
              
              .footer-section h3 {
                font-size: 1rem !important;
                margin-bottom: 1rem !important;
              }
              
              .footer-section a {
                font-size: 0.875rem !important;
              }
              
              .social-link {
                width: 2.5rem !important;
                height: 2.5rem !important;
              }
              
              .footer-bottom {
                flex-direction: row !important;
                justify-content: space-between !important;
                text-align: left !important;
              }
              
              .footer-bottom p,
              .footer-bottom div {
                font-size: 0.75rem !important;
              }
            }
            
            /* DESKTOP (768px+) */
            @media (min-width: 768px) {
              .main-container {
                padding: 4rem 2rem !important;
              }
              
              .main-text {
                font-size: 1.125rem !important;
                line-height: 1.6 !important;
                max-width: 80% !important;
              }
              
              .footer-container {
                padding: 4rem 2rem !important;
              }
              
              .footer-content {
                max-width: 1200px !important;
              }
              
              .footer-brand h2 {
                font-size: 1.75rem !important;
              }
              
              .footer-brand p {
                font-size: 0.9375rem !important;
              }
              
              .footer-section h3 {
                font-size: 1.0625rem !important;
              }
              
              .footer-section a {
                font-size: 0.9375rem !important;
              }
              
              .footer-bottom p,
              .footer-bottom div {
                font-size: 0.8125rem !important;
              }
            }
            
            /* LARGE DESKTOP (1024px+) */
            @media (min-width: 1024px) {
              .main-container {
                padding: 5rem 2.5rem !important;
              }
              
              .main-text {
                font-size: 1.25rem !important;
                line-height: 1.7 !important;
                max-width: 70% !important;
              }
              
              .footer-container {
                padding: 5rem 2.5rem !important;
              }
              
              .footer-grid {
                grid-template-columns: repeat(4, 1fr) !important;
                gap: 2.5rem !important;
              }
              
              .footer-brand {
                grid-column: span 1 !important;
              }
              
              .footer-brand h2 {
                font-size: 2rem !important;
              }
              
              .footer-brand p {
                font-size: 1rem !important;
              }
              
              .footer-section h3 {
                font-size: 1.125rem !important;
              }
              
              .footer-section a {
                font-size: 1rem !important;
              }
              
              .footer-bottom p,
              .footer-bottom div {
                font-size: 0.875rem !important;
              }
            }
            
            /* EXTRA LARGE (1280px+) */
            @media (min-width: 1280px) {
              .main-text {
                font-size: 1.375rem !important;
                line-height: 1.8 !important;
                max-width: 60% !important;
              }
            }
            
            /* Mobile cosmic effects */
            @media (max-width: 768px) {
              @keyframes cosmicFlow {
                0% { transform: translateX(-50%) translateY(0px) rotate(0deg); }
                50% { transform: translateX(25%) translateY(-15px) rotate(180deg); }
                100% { transform: translateX(150%) translateY(0px) rotate(360deg); }
              }
              
              .cosmic-wave {
                width: 200% !important;
                height: 1rem !important;
              }
              
              .cosmic-orb {
                width: 3rem !important;
                height: 3rem !important;
              }
            }
          `}</style>
          
          {/* Flowing cosmic waves - responsive sizing */}
          <div 
            className="absolute w-[400%] sm:w-[300%] md:w-[400%] h-20 sm:h-24 md:h-32 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent"
            style={{
              top: '20%',
              left: '-150%',
              animation: 'cosmicFlow 25s ease-in-out infinite',
              borderRadius: '50%'
            }}
          />
          <div 
            className="absolute w-[300%] sm:w-[250%] md:w-[300%] h-24 sm:h-32 md:h-40 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent"
            style={{
              top: '60%',
              left: '-100%',
              animation: 'cosmicFlow 30s ease-in-out infinite reverse',
              borderRadius: '50%'
            }}
          />
          
          {/* Cosmic glow orbs - responsive sizing */}
          <div 
            className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-teal-400/10 rounded-full"
            style={{
              top: '10%',
              left: '5%',
              animation: 'cosmicGlow 12s ease-in-out infinite',
            }}
          />
          <div 
            className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-cyan-300/8 rounded-full"
            style={{
              top: '70%',
              right: '10%',
              animation: 'cosmicGlow 16s ease-in-out infinite reverse',
            }}
          />
        </div>

        <p className='main-text f4'>{
          "ZeroLag is more than just a platform — it's a movement, a revolution where discipline meets the power of Web3. We empower you to transform your daily habits into valuable assets, turning consistency and commitment into crypto rewards and personal growth. Through engaging gamified challenges, mental resilience training, and futuristic incentives, ZeroLag is designed to help you unlock your highest potential and stay ahead of the curve. Join us, stake your goals, and prove that discipline isn't just a mindset — it's the new currency of success. The future belongs to those who dare to build it, and with ZeroLag by your side, that future is yours to claim, shape, and own.".split("").map((e, index) => {
          if (e == " ") {
            return <span key={index} className='inline-block'> &nbsp;</span>
          }
          else {
            return <span key={index} className='inline-block opacity-15 textani text-white'>{e}</span>
          }
        })}</p>

      </div>

      {/* Enhanced Cosmic Footer */}
      <footer className='footer-container backdrop-blur-md relative overflow-hidden' style={{
        backgroundImage: 'url("/cosmic-nebula.jpg"), linear-gradient(180deg, rgba(5, 1, 10, 0) 0%, rgba(10, 6, 36, 0.9) 10%, #0A0624 25%, #16213e 45%, #0f3460 65%, #1a1a2e 80%, #2a2a4e 95%, #000000 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Background blur overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>
        
        {/* Additional blur layer for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50"></div>

        {/* Footer cosmic background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-[300%] sm:w-[250%] md:w-[300%] h-12 sm:h-16 md:h-20 bg-gradient-to-r from-transparent via-teal-400/10 to-transparent backdrop-blur-sm"
            style={{
              top: '40%',
              left: '-100%',
              animation: 'cosmicFlow 40s ease-in-out infinite',
              borderRadius: '50%'
            }}
          />
          <div 
            className="absolute w-[250%] sm:w-[200%] md:w-[250%] h-10 sm:h-12 md:h-16 bg-gradient-to-r from-transparent via-purple-400/8 to-transparent backdrop-blur-sm"
            style={{
              top: '70%',
              right: '-80%',
              animation: 'cosmicFlow 35s ease-in-out infinite reverse',
              borderRadius: '50%'
            }}
          />
        </div>

        <div className='footer-content relative z-20'>
          {/* Main Footer Content */}
          <div className='footer-grid'>
            {/* Brand Section */}
            <div className='footer-brand'>
              <h2 className='text-white f4' style={{
                textShadow: '0 0 20px rgba(108, 61, 211, 0.6), 0 2px 4px rgba(0,0,0,0.8)'
              }}>ZeroLag</h2>
              <p className='text-cyan-200/90 f2 leading-relaxed' style={{
                textShadow: '0 1px 3px rgba(0,0,0,0.7)'
              }}>
                Discipline is the new currency of success. Transform your daily habits into valuable assets with Web3-powered accountability.
              </p>
              {/* Social Links */}
              <div className='social-links'>
                <a href='#' className='social-link bg-gradient-to-r from-teal-400/30 to-purple-400/30 border border-teal-400/40 hover:border-teal-400/70 transition-all duration-300 hover:scale-110 backdrop-blur-sm'>
                  <span className='text-teal-400 text-sm'>𝕏</span>
                </a>
                <a href='#' className='social-link bg-gradient-to-r from-teal-400/30 to-purple-400/30 border border-teal-400/40 hover:border-teal-400/70 transition-all duration-300 hover:scale-110 backdrop-blur-sm'>
                  <span className='text-teal-400 text-sm'>📱</span>
                </a>
                <a href='#' className='social-link bg-gradient-to-r from-teal-400/30 to-purple-400/30 border border-teal-400/40 hover:border-teal-400/70 transition-all duration-300 hover:scale-110 backdrop-blur-sm'>
                  <span className='text-teal-400 text-sm'>💬</span>
                </a>
              </div>
            </div>

            {/* Platform Links */}
            <div className='footer-section'>
              <h3 className='text-teal-200 font-semibold f4' style={{
                textShadow: '0 0 10px rgba(20, 184, 166, 0.4), 0 1px 3px rgba(0,0,0,0.8)'
              }}>Platform</h3>
              <ul>
                <li><a href='#' className='text-cyan-200/80 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}>How it Works</a></li>
                <li><a href='#' className='text-cyan-200/80 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}>NFT Rewards</a></li>
                <li><a href='#' className='text-cyan-200/80 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}>$ZLAG Token</a></li>
                <li><a href='#' className='text-cyan-200/80 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}>Staking System</a></li>
                <li><a href='#' className='text-cyan-200/80 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}>AI Verification</a></li>
              </ul>
            </div>

            {/* Community Links */}
            <div className='footer-section'>
              <h3 className='text-teal-200 font-semibold f4' style={{
                textShadow: '0 0 10px rgba(20, 184, 166, 0.4), 0 1px 3px rgba(0,0,0,0.8)'
              }}>Community</h3>
              <ul>
                <li><a href='#' className='text-cyan-200/80 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}>Discord</a></li>
                <li><a href='#' className='text-cyan-200/80 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}>Telegram</a></li>
                <li><a href='#' className='text-cyan-200/80 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}>Twitter</a></li>
                <li><a href='#' className='text-cyan-200/80 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}>Medium</a></li>
                <li><a href='#' className='text-cyan-200/80 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}>GitHub</a></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className='footer-section'>
              <h3 className='text-teal-200 font-semibold f4' style={{
                textShadow: '0 0 10px rgba(20, 184, 166, 0.4), 0 1px 3px rgba(0,0,0,0.8)'
              }}>Resources</h3>
              <ul>
                <li><a href='#' className='text-cyan-200/80 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}>Documentation</a></li>
                <li><a href='#' className='text-cyan-200/80 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}>Whitepaper</a></li>
                <li><a href='#' className='text-cyan-200/80 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}>Roadmap</a></li>
                <li><a href='#' className='text-cyan-200/80 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}>Privacy Policy</a></li>
                <li><a href='#' className='text-cyan-200/80 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}>Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className='w-full h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent mb-6 sm:mb-8'></div>

          {/* Bottom Footer */}
          <div className='footer-bottom'>
            <div>
              <p className='text-cyan-200/80 f2' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}> 2024 ZeroLag. All rights reserved.</p>
              <p className='text-purple-200/70 f2' style={{
                textShadow: '0 0 8px rgba(255, 79, 216, 0.3), 0 1px 3px rgba(0,0,0,0.7)'
              }}>"Fuel your flame, earn your chain"</p>
            </div>
            <div className='text-cyan-200/70 f2' style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}}>
              <span>Built on </span>
              <span className='text-teal-400 font-semibold'>Web3</span>
              <span> Powered by </span>
              <span className='text-purple-400 font-semibold'>AI</span>
            </div>
          </div>
        </div>

        {/* Enhanced cosmic glow effects with blur */}
        <div className='absolute bottom-0 left-1/4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-teal-400/8 rounded-full blur-3xl backdrop-blur-sm'></div>
        <div className='absolute top-1/2 right-1/4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-purple-400/8 rounded-full blur-2xl backdrop-blur-sm'></div>
      </footer>
    </>
  )
}

// things are not over yet have to make a loading screen then have to make a footer and a mobile view landing
export default Sixth

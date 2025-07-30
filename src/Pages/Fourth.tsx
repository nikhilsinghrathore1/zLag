// ✅ Updated Fourth.tsx with full responsive fixes for mobile/tablet

import gsap from "gsap";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import img1 from "/slider4img.jpg"
// Extend the Window interface to include navigateToChapter
declare global {
  interface Window {
    navigateToChapter?: (chapterNumber: number) => void;
  }
}
import { GoArrowUpRight } from "react-icons/go";

const Fourth = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoaded(true);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const MainDivRef = useRef<HTMLDivElement>(null);
  const SlidingWindow = useRef(null);
  const firstcircle = useRef(null);
  const chapter1Ref = useRef(null);

  const navigateToChapter = (chapterNumber: number) => {
    if (!loaded || !SlidingWindow.current) return;
    gsap.killTweensOf(SlidingWindow.current);
    const targetX = -(chapterNumber - 1) * 100;
    gsap.to(SlidingWindow.current, {
      x: `${targetX}%`,
      duration: 1.2,
      ease: "power2.inOut",
      overwrite: true,
    });
    if (MainDivRef.current) MainDivRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    window.navigateToChapter = navigateToChapter;
    return () => {
      delete window.navigateToChapter;
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
      tl.to(SlidingWindow.current, { x: "-300%", duration: 5 }, "a");
      tl.to(SlidingWindow.current, { delay: 1 });
    }
  }, [loaded]);

  return (
    <div ref={MainDivRef} className="w-full h-[400vh] relative overflow-hidden max-w-full overflow-x-hidden">
      <div ref={SlidingWindow} className="w-full flex flex-nowrap h-[100vh] sticky top-0">
        {/* CHAPTER 1 (Text & Arcade Image) */}
        <div ref={chapter1Ref} className="w-full flex items-center justify-center h-full flex-shrink-0 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: 'url("/cosmic-nebula.jpg")' }} />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10" />

          <div className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[100px] leading-[105px] tracking-tight relative z-20 text-white font-bold text-center px-4">
            <h1>Skip the Task,</h1>
            <h1>your crytp commit</h1>
          </div>

          <div
            ref={firstcircle}
            className="w-40 sm:w-60 h-40 sm:h-60 absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-20"
            style={{
              backgroundImage: 'url("/arcade-machine.jpg")',
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "drop-shadow(0 0 20px rgba(20, 184, 166, 0.4)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.3))",
              transform: "translateX(50%) translateY(-50%) scale(1.1)",
            }}>
            <div className="absolute inset-0 rounded-lg" style={{ background: "radial-gradient(circle at center, rgba(20, 184, 166, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 70%)", animation: "pulse 3s ease-in-out infinite" }} />
          </div>

          <div className="w-[90%] sm:w-[20%] h-14 border border-white absolute bottom-20 left-4 sm:left-10 z-20 bg-black bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 p-4">
            <div className="w-full h-full flex items-center justify-center">
              <p className="uppercase font-bold flex items-center gap-3 tracking-wide text-white text-sm sm:text-base">
                Partner with us <GoArrowUpRight className="text-[20px]" />
              </p>
            </div>
          </div>
        </div>

        {/* NFT Rewards Section Wrapper (Fix text cut + cards) */}
        <div className="w-full h-full relative flex-shrink-0 px-4 sm:px-10 md:px-20 lg:px-32 py-12">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: 'url("/cosmic-nebula.jpg")' }} />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10" />

          <div className="relative z-20 text-center">
            <h1 className="text-white text-xl sm:text-2xl mt-20 md:text-[4rem] font-black mb-4">Unlock Exclusive Rewards</h1>
            <p className="text-white text-lg italic mb-6">Your Path to Digital Mastery</p>
            <p className="text-white/80 text-sm sm:text-base max-w-3xl mx-auto mb-10">
              Each day of consistency unlocks a new level of accomplishment, represented by a unique and evolving NFT. The longer you commit, the greater your reward and the more prestigious your digital legacy becomes.
            </p>

            {/* NFT Cards */}
            <div className="flex flex-wrap mt-14 justify-center gap-6 sm:gap-8">
              {[
                { day: "3 Days", title: "Spark NFT", tag: "Common", img: "/Spark.jpg", desc: "The ignition of your discipline." },
                { day: "7 Days", title: "EmFT", tag: "Uncommon", img: "/marqueimg1.jpg", desc: "Your commitment begins to glow." },
                { day: "14 Days", title: "Flame NFT", tag: "Rare", img: "/Flamee.jpg", desc: "Ignite your potential, consistently." },
                { day: "30 Days", title: "Blaze NFT", tag: "Epic", img: "/blazee.jpg", desc: "A beacon of unstoppable discipline." },
                { day: "60+ Days", title: "Inferno NFT", tag: "Legendary", img: "/Inferno.jpg", desc: "Achieve legendary discipline." },
              ].map((nft, idx) => (
                <div key={idx} className="w-full max-w-[180px] text-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-3 rounded-xl overflow-hidden shadow-xl border-2 border-white/10">
                    <img src={nft.img} alt={nft.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-white text-sm font-bold mb-1">{nft.day}</div>
                  <h3 className="text-white text-base font-semibold mb-1">{nft.title}</h3>
                  <div className="text-sm text-cyan-300 font-medium uppercase mb-2">{nft.tag}</div>
                  <p className="text-white/70 text-sm px-2 leading-snug">{nft.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


         {/* RESPONSIVE ANIMATED SCREEN SECTION */}
        <div className="w-full h-full flex-shrink-0 relative bg-gradient-to-br from-[#0c0c1e] via-[#151530] to-[#0c0c1e] overflow-hidden px-4 sm:px-10 font-['Poppins',sans-serif]">
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
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)]">
              {/* Left */}
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Effortless Discipline.<br />
                  <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                    Intuitive Control.
                  </span>
                </h2>
                <h3 className="text-xl sm:text-2xl text-gray-300">
                  Manage Your Goals. Master Your Progress.
                </h3>
                <p className="text-md sm:text-lg text-gray-400 leading-relaxed max-w-xl">
                  ZeroLag provides a sleek, user-friendly interface designed for your success. Seamlessly manage tasks,
                  track progress in real time, and gain insights into your accountability journey.
                </p>
                <button className="mt-6 group relative px-6 py-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg font-semibold text-black text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] focus:outline-none">
                  <span className="relative z-10">Get Started</span>
                </button>
              </div>

              {/* Right: Animated Screen */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative animate-[float_6s_ease-in-out_infinite]">
                  <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-2xl p-3 shadow-[0_0_50px_rgba(0,255,255,0.3)] border-2 border-cyan-400/30">
                    <div className="w-full h-[180px] sm:h-[240px] md:h-[300px] rounded-xl overflow-hidden bg-white">
                      <img
                        src={img1}
                        alt="ZeroLag Dashboard"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-16 h-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg mx-auto shadow-lg" />
                    <div className="w-2 h-10 bg-gradient-to-b from-gray-600 to-gray-700 mx-auto -mt-2 rounded-b-lg" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-green-400/20 rounded-t-2xl blur-xl -z-10" />
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(12deg); }
              50% { transform: translateY(-20px) rotate(12deg); }
            }
          `}</style>
        </div>

                <div
          className="w-full h-full overflow-hidden flex items-center justify-center flex-shrink-0 relative px-4 sm:px-10"
          style={{
            background:
              "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%)",
          }}>
          <div className="absolute inset-0 overflow-hidden">
            {/* Background Waves & Orbs (unchanged) */}
          </div>

          <div className="w-full pt-32 pb-10 text-center flex flex-col items-center relative z-30">
            <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[11rem] leading-none f5 text-white font-bold">$ZLAG</h1>
            <p className="text-[1rem] sm:text-[1.25rem] md:text-[2.5rem] w-[90%] sm:w-[70%] md:w-[50%] leading-relaxed text-white mt-4">
              Consistency = liquidity. Empower to earn $ZLAG.
            </p>
          </div>

          {/* Decorative Images with Responsive Sizes */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full absolute -top-20 left-[20%] sm:left-[30%] overflow-hidden border-2 border-teal-400/30 shadow-lg shadow-teal-400/20">
            <img
              src="/nftt.jpg"
              alt="Rocket Launch"
              className="w-full h-full object-cover rounded-full"
              style={{ filter: "brightness(1.2) contrast(1.1) hue-rotate(180deg)" }}
            />
          </div>

          <div className="w-48 h-48 rounded-full absolute -bottom-[22%] left-[10%] overflow-hidden border-2 border-purple-400/30 shadow-lg shadow-purple-400/20">
            <img
              src="/nftt.jpg"
              alt="Network Structure"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full absolute top-[58%] left-[76.5%] overflow-hidden border-2 border-cyan-400/30 shadow-lg shadow-cyan-400/20">
            <img
              src="/time.jpg"
              alt="Lightning"
              className="w-full h-full object-cover rounded-full"
              style={{ filter: "brightness(1.4) contrast(1.3) hue-rotate(90deg)" }}
            />
          </div>

          <div className="w-44 h-44 sm:w-60 sm:h-60 rounded-full absolute -top-[16%] -right-[6%] overflow-hidden border-2 border-teal-300/30 shadow-lg shadow-teal-300/20">
            <img
              src="/zlag_token.jpg"
              alt="ZLAG Token"
              className="w-full h-full object-cover rounded-full"
              style={{ filter: "brightness(1.1) contrast(1.2) drop-shadow(0 0 10px rgba(20, 184, 166, 0.5))" }}
            />
          </div>

          <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full absolute top-[20%] right-[25%] overflow-hidden border-2 border-yellow-400/30 shadow-lg shadow-yellow-400/20">
            <img
              src="/rewardssss.jpg"
              alt="Custom Image"
              className="w-full h-full object-cover rounded-full"
              style={{ filter: "brightness(1.2) contrast(1.1) hue-rotate(45deg) drop-shadow(0 0 15px rgba(255, 193, 7, 0.4))" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;

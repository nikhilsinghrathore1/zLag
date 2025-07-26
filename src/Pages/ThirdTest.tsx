import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import InsideAbout from "../components/InsideAbout";
// import { infoContext } from '../context/InfoContext';

const ThirdTest = () => {
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

  // const {setState} = useContext(infoContext)

  const mainCont = useRef(null);
  const firstCont = useRef(null);
  const secondCont = useRef(null);
  const thirdCont = useRef(null);
  const fourthCont = useRef(null);

  useEffect(() => {
    if (loaded) {
      gsap.registerPlugin(ScrollTrigger);

      // Main container color change - starts when component comes into view
      gsap.to(mainCont.current, {
        scrollTrigger: {
          trigger: mainCont.current,
          start: "top bottom", // Start when top of element reaches bottom of viewport
          end: "bottom top", // End when bottom of element reaches top of viewport
          scrub: 5,
        },
        backgroundColor: "#AEDEE0",
        color: "#000",
        duration: 1,
        // onStart:()=>setState("achievements")
      });

      // First container animation - starts after component is in view
      gsap.to(firstCont.current, {
        scrollTrigger: {
          trigger: firstCont.current,
          start: "top 80%", // Start when top of element reaches 80% from top of viewport
          end: "top 60%", // Quick transition
          scrub: 1,
        },
        width: "500px",
        backgroundColor: "black",
        color: "white",
        duration: 0.1,
      });

      // Second container animation
      gsap.to(secondCont.current, {
        scrollTrigger: {
          trigger: secondCont.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
        width: "500px",
        backgroundColor: "black",
        color: "white",
        duration: 0.1,
      });

      // Third container animation
      gsap.to(thirdCont.current, {
        scrollTrigger: {
          trigger: thirdCont.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
        width: "500px",
        backgroundColor: "black",
        color: "white",
        duration: 0.1,
      });

      // Fourth container animation
      gsap.to(fourthCont.current, {
        scrollTrigger: {
          trigger: fourthCont.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
        width: "500px",
        backgroundColor: "black",
        color: "white",
        duration: 0.1,
      });
    }
  }, [loaded]);

  return (
    <div className="w-[100vw] ">
      <div
        ref={mainCont}
        className="w-full  h-[270vh] justify-between bg-[#000] relative flex items-start px-12"
      >
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="../web.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

        <div className="w-[41.9%] h-[45%] pt-20 sticky top-0 relative z-20 mb-10"> 
          <p className="f4 text-[1.1rem]   leading-[1.8rem] text-white">
          ZeroLag is a decentralized Discipline-as-a-Service platform that turns goals into results. Set your targets, stake tokens for accountability, and earn $ZLAG rewards and dynamic NFTs for completing tasks. Miss a goal? Your stake fuels the ecosystem, boosting collective commitment.
          </p>

          <h1 className="f5 text-[3.8rem] mt-10 leading-[4.3rem] font-bold text-white">
            Web3-Discipline AI Driven Growth
          </h1>

          <div className="w-[38%] h-[60px] mt-5 border border-white font-bold uppercase flex items-center gap-2 text-[16px] f4 justify-center text-white bg-black bg-opacity-20 hover:bg-opacity-40 transition-all duration-300">
            <h1 className="flex items-center gap-2">
              Our Solutions <GoArrowUpRight className="text-[1.3rem]" />
            </h1>
          </div>
        </div>

        <div className="w-[50%]   h-full pt-[85vh] pl-12 relative z-20">
          {/* Add CSS animations for sequential glow */}
          <style>{`
                                 @keyframes sequentialGlow {
                                   0%, 80%, 100% { 
                                     box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
                                     border-color: rgba(255, 255, 255, 0.3);
                                   }
                                   20% { 
                                     box-shadow: 0 0 20px rgba(20, 184, 166, 0.8), 0 0 40px rgba(20, 184, 166, 0.6);
                                     border-color: rgba(20, 184, 166, 0.8);
                                     transform: scale(1.02);
                                   }
                                 }
                                 
                                 @keyframes arrowGlow {
                                   0%, 80%, 100% { opacity: 0; transform: translateY(0px); }
                                   20%, 60% { opacity: 1; transform: translateY(-5px); }
                                 }
                                 
                                 .step-1 { animation: sequentialGlow 8s ease-in-out infinite; }
                                 .step-2 { animation: sequentialGlow 8s ease-in-out infinite 2s; }
                                 .step-3 { animation: sequentialGlow 8s ease-in-out infinite 4s; }
                                 .step-4 { animation: sequentialGlow 8s ease-in-out infinite 6s; }
                                 
                                 .arrow-1 { animation: arrowGlow 8s ease-in-out infinite 1.5s; }
                                 .arrow-2 { animation: arrowGlow 8s ease-in-out infinite 3.5s; }
                                 .arrow-3 { animation: arrowGlow 8s ease-in-out infinite 5.5s; }
                               `}</style>

          <div
            ref={firstCont}
            className="step-1 w-[460px] origin-center ml-3 transition-all pt-4 flex justify-between gap-4 px-10 border border-white/30 h-[15.5%] relative"
          >
            <InsideAbout
              mainText={"Define & Secure Your Ambition"}
              para={
                "You choose your task and lock a self-set amount of $ZLAG as an accountability reserve — a smart contract-backed pledge to your own success."
              }
              svg={
                <img
                  src="/goal.png"
                  alt="Goal Icon"
                  className="w-full h-[38%] object-contain"
                />
              }
            />

            {/* Pointing Arrow to next step */}
            <div className="arrow-1 absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-teal-400">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            ref={secondCont}
            className="step-2 w-[460px] mt-8 origin-center ml-3  transition-all  pt-4  flex justify-between gap-4 px-10 border border-white/30 h-[15.5%] relative"
          >
            <InsideAbout
              mainText={"Act & Prove Your Progress"}
              para={
                "Stay consistent, finish your task on time, and submit proof—text, files, images, or links—through our simple interface."
              }
              svg={
                <img
                  src="/proof.png"
                  alt="Goal Icon"
                  className="w-full h-[38%] object-contain"
                />
              }
            />

            {/* Pointing Arrow to next step */}
            <div className="arrow-2 absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-teal-400">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            ref={thirdCont}
            className="step-3 w-[460px] mt-8 origin-center ml-3  transition-all  pt-4  flex justify-between gap-4 px-10 border border-white/30 h-[15.5%] relative"
          >
            <InsideAbout
              mainText={"Smart AI Verification"}
              para={
                "AI validates the submitted proof against task requirements.Success: Locked $ZLAG is unlocked. Failure: Tokens are burned as a penalty."
              }
              svg={
                <img
                  src="/ai.png"
                  alt="Goal Icon"
                  className="w-full h-[38%] object-contain"
                />
              }
            />
            {/* Pointing Arrow to next step */}
            <div className="arrow-3 absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-teal-400">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            ref={fourthCont}
            className="step-4 w-[460px] mt-8 origin-center ml-3  transition-all  pt-4  flex justify-between gap-4 px-10 border border-white/30 h-[15.5%] relative"
          >
            <InsideAbout
              mainText={"Earn Rewards & Forge Your Legacy "}
              para={
                "Upon AI verification, you reclaim your $ZLAG and earn a dynamic NFT—your symbol of success and consistency in the Chain of Accomplishment"
              }
              svg={
                <img
                  src="/aii.png"
                  alt="Goal Icon"
                  className="w-full h-[38%] object-contain"
                />
              }
            />
            {/* Pointing Arrow to next step */}
            <div className="arrow-4 absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-teal-400">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdTest;

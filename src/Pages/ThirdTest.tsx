import gsap, { ScrollTrigger } from "gsap/all";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

import { GoArrowUpRight } from "react-icons/go";
import InsideAbout from "../components/InsideAbout";

const ThirdTest = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoaded(true);
    if (document.readyState === "complete") {
      setLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  const mainCont = useRef(null);
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (loaded) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(mainCont.current, {
        scrollTrigger: {
          trigger: mainCont.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 5,
        },
        backgroundColor: "#AEDEE0",
        color: "#000",
        duration: 1,
      });

      refs.forEach((ref) => {
        if (window.innerWidth >= 768) {
          gsap.to(ref.current, {
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "top 60%",
              scrub: 1,
            },
            backgroundColor: "black",
            color: "white",
            duration: 0.1,
          });
        } else {
          gsap.fromTo(
            ref.current,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }
  }, [loaded]);

  const content = [
    {
      title: "Define & Secure Your Ambition",
      para: "You choose your task and lock a self-set amount of $ZLAG as an accountability reserve — a smart contract-backed pledge to your own success.",
      icon: "/goal.jpg",
    },
    {
      title: "Act & Prove Your Progress",
      para: "Stay consistent, finish your task on time, and submit proof—text, files, images, or links—through our simple interface.",
      icon: "/proof.jpg",
    },
    {
      title: "Smart AI Verification",
      para: "AI validates the submitted proof against task requirements.Success: Locked $ZLAG is unlocked. Failure: Tokens are burned as a penalty.",
      icon: "/ai.jpg",
    },
    {
      title: "Earn Rewards & Forge Your Legacy ",
      para: "Upon AI verification, you reclaim your $ZLAG and earn a dynamic NFT—your symbol of success and consistency in the Chain of Accomplishment",
      icon: "/aii.jpg",
    },
  ];

  return (
    <div className="w-[100vw]">
      <div
        ref={mainCont}
        className="w-full min-h-screen md:h-[270vh] bg-[#000] relative px-6 md:px-12 flex flex-col md:flex-row md:items-start"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/webk.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        {/* desing online code editor  */}

        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

        <div className="w-full md:w-[41.9%] pt-20 sticky md:top-0 z-20 mb-10">
          <p className="f4 text-[1.1rem] leading-[1.8rem] text-white">
            ZeroLag is a decentralized Discipline-as-a-Service platform that turns goals into results. Set your targets, stake tokens for accountability, and earn $ZLAG rewards and dynamic NFTs for completing tasks. Miss a goal? Your stake fuels the ecosystem, boosting collective commitment.
          </p>

          <h1 className="f5 text-[3.8rem] mt-10 leading-[4.3rem] font-bold text-white">
            Web3-Discipline AI Driven Growth
          </h1>

          <div className="w-fit h-[60px] mt-5 border border-white font-bold uppercase flex items-center gap-2 text-[16px] f4 justify-center text-white bg-black bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 px-6">
            <h1 className="flex items-center gap-2">
              Our Solutions <GoArrowUpRight className="text-[1.3rem]" />
            </h1>
          </div>
        </div>

        <div className="w-full md:w-[50%] pt-10 md:pt-[85vh] md:pl-12 relative z-20 flex flex-col gap-12 mt-10 md:mt-0">
          {content.map((item, index) => (
            <div
              key={index}
              ref={refs[index]}
              className={`w-full md:w-[460px] mx-auto md:ml-3 pt-4 px-6 border border-white/30 min-h-[200px] flex justify-between gap-4 relative bg-black bg-opacity-30 backdrop-blur-md text-white`}
            >
              <InsideAbout
                mainText={item.title}
                para={item.para}
                svg={
                  <img
                    src={item.icon}
                    alt="Icon"
                    className="w-full h-[38%] object-contain"
                  />
                }
              />
              <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-teal-400`}>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdTest;

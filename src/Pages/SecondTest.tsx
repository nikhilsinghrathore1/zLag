import * as React from "react";
import Marquee from '../components/Marquee'

const SecondTest = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#AEDEE0] relative">
        
        {/* Responsive heading text */}
        <div className="w-full text-center f2 font-semibold text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.3rem] leading-tight pt-4 px-2 tracking-wide">
          <h1 className="mb-2 sm:mb-4">We foster growth through success</h1>
          <h1>that is more than just a club:</h1>
        </div>

        {/* Responsive Marquee Container */}
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden px-2">
          <Marquee text={["emphatatic", "useful", "intuitive", "nikoChan"]} dist={20} />
          <Marquee text={["emphatatic", "useful", "intuitive", "nikoChan"]} dist={40} />
          <Marquee text={["emphatatic", "useful", "intuitive", "nikoChan"]} dist={30} />
          <Marquee text={["emphatatic", "useful", "intuitive", "nikoChan"]} dist={80} />
        </div>

      </div>
    </>
  );
};

export default SecondTest;

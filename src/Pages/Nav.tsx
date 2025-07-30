import * as React from "react";
// import { infoContext } from '../context/InfoContext'

const Nav = () => {
  // const { State } = useContext(infoContext)

  return (
    <div className="w-full h-screen fixed py-2 px-2 sm:px-4 flex justify-end items-start top-0 z-[140] pointer-events-none">
      <div className="w-[60%] sm:w-[40%] md:w-[25%] lg:w-[15%] h-[6%] sm:h-[8%] md:h-[10%] flex items-center justify-center rounded-lg bg-white shadow-md">
        <p className="text-[10px] sm:text-sm md:text-base lg:text-lg font-semibold text-black text-center">
          Zero la
        </p>
      </div>
    </div>
  );
};

export default Nav;
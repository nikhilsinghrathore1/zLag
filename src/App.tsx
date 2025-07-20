
import './App.css'
import React from 'react';
import Fifth from './Pages/Fifth'
import Fourth from './Pages/Fourth'
import Landing from './Pages/Landing'
// import Nav from './Pages/Nav'
// import SecondTest from './Pages/SecondTest'
import Sixth from './Pages/Sixth'
import ThirdTest from './Pages/ThirdTest'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  //@ts-ignore
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        // smoothTouch: false,
        wheelMultiplier: 0.5,
        touchMultiplier: 2,
        // normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    },
});
  return (
    <>
    <div className=' w-full h-fit relative   '>

     

      <Landing/>
  
      <ThirdTest/>
      <div className='overflow-hidden h-fit w-full'>

      <Fourth/>
      <Fifth/>
      <Sixth/>
      </div>
      <footer className="w-full mt-24 px-6 md:px-20 py-10 bg-gradient-to-b from-[#0f0f0f] to-black text-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="text-center md:text-left">
      <h1 className="text-lg font-semibold tracking-wide">ZeroLag</h1>
      <p className="text-sm text-gray-400 mt-1">Discipline is the new currency of success.</p>
    </div>

    <div className="flex gap-6 text-sm">
      <a href="#" className="text-gray-300 hover:text-white transition duration-200">Privacy Policy</a>
      <a href="#" className="text-gray-300 hover:text-white transition duration-200">Terms of Use</a>
      <a href="#" className="text-gray-300 hover:text-white transition duration-200">Contact</a>
    </div>
  </div>

  <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} ZeroLag. All rights reserved.
  </div>
</footer>

 
    </div>
    </>
  )
}

export default App

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
    </div>
    </>
  )
}

export default App

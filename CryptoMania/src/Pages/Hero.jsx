
import React from 'react'
import  Slider  from './Slider';
const Hero = () => {
  return (
      <div className=' w-full h-3/4  overflow-hidden'>
          <div className="relative">
          <img src="/crypto.avif" className='-z-20 opacity-25 w-full h-[500px] object-cover shadow-slate-500 shadow-2xl' alt="" />
          </div>
    
          <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3">
              <h2 className="font-mono font-bold text-6xl text-center lg:text-8xl ">Crypto <span className='text-yellow-500'>Mania</span></h2>
              <p className='text-xl font-bold text-center text-cyan-500'>Real Time Market Information</p>
              <p className='text-sm  text-white italic text-center'>*Terms and Conditions Applied. Read all the documentations before starting trading.</p>

              <div className= "flex items-center justify-center mt-5 ">
                  <Slider/>
                
              </div>
      </div>
    </div>
  )
}

export default Hero

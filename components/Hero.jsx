/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Hero() {
  return (
    <section className="w-full duration-700 h-screen font-sans">
      <div className="w-full h-full relative bg-back-1 duration-700 bg-cover bg-top-center">
        <div className="w-full grid h-full items-center px-14">
          <div className="text-white md:w-[56.25rem] space-y-5 md:space-y-10">
            <h1 className="text-3xl md:text-[4.063rem] md:leading-[4.375rem] lg:text-[4.375rem] lg:leading-[86px] font-bold">
              Your Safety Is Our Responsibility
            </h1>
            <p className="font-normal text-xs sm:text-sm md:text-base lg:text-lg">
              Phaneretic Services (Phanserv) is a specialist Geotechnical/ Engineering Geological company with a team of qualified and 
              competent Engineering Geologists and Professional Civil Technician (led by an Engineering Geologists who is registered with 
              SACNASP and SAIEG), which work closely together to provide a services which far exceed the industry standards
            </p>
            <div className="flex items-center space-x-10">
                <button className="btn flex items-center justify-center px-2 h-9 sm:px-4 sm:h-11 hover:animate-bounce rounded-md space-x-2 bg-[#0E2B5C] border-none outline-none">
                    <i className='bx bxs-right-arrow text-white'></i>
                    <a href="http://" className="text-white text-sm md:text-base">Services</a>
                </button>
                <button className="btn flex items-center justify-center px-2 h-9 sm:px-4 sm:h-11 hover:animate-bounce rounded-md space-x-2 bg-white border-none outline-none">
                    
                    <a href="http://" className="text-black text-sm md:text-base">About Us</a>
                </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero

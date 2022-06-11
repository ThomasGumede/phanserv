/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Hero() {
  return (
    <section className="w-full duration-700 h-full md:h-screen font-sans overflow-hidden">
      <div className="w-full h-full relative bg-black bg-top-center overflow-hidden">
        <img src="/images/img3.jpg" alt="geotechnical service in practice" className="w-full h-full object-cover opacity-30" />
        <div className="w-full grid h-full absolute text-center justify-center top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] items-center py-16 px-6 mdpx-14">
          <div className="text-white md:w-[56.25rem] space-y-5 md:space-y-10">
            <h1 className="text-3xl md:text-[4.063rem] md:leading-[75px] font-bold">
              Your Safety Is Our Responsibility
            </h1>
            <p className="font-normal text-xs sm:text-sm md:text-base">
              Phaneretic Services (Phanserv) is a specialist Geotechnical/ Engineering Geological company with a team of qualified and 
              competent Engineering Geologists and Professional Civil Technician (led by an Engineering Geologists who is registered with 
              SACNASP and SAIEG), which work closely together to provide a services which far exceed the industry standards
            </p>
            <div className="flex items-center justify-center space-x-10">
                <button className="btn flex items-center justify-center px-2 h-9 sm:px-4 sm:h-11 hover:animate-bounce rounded-md space-x-2 bg-[#0E2B5C] border-none outline-none">
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

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

function Hero() {


  return (
    <section className="w-full duration-700 h-screen mt-11 font-sans group overflow-hidden">
      <div className="w-full h-full relative bg-black bg-top-center overflow-hidden">
        <img src="/images/img4.jpg" alt="geotechnical service in practice" className="w-full h-full duration-500 delay-300 group-hover:scale-125 object-cover opacity-30" />
        <div className="w-full grid h-full absolute text-center justify-center top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] items-center py-16 px-6 mdpx-14">
          <div className="text-white grid md:w-[56.25rem] space-y-3 md:space-y-5">
            <p className="text-xl relative text-white font-normal uppercase">
                Welcome To Phaneretic Services
            </p>
            <div className="w-16 h-1 self-center justify-self-center bg-color-other"></div>
            {/* <h1 className="text-3xl md:text-[4.063rem] uppercase md:leading-[75px] font-bold">
              Your Safety Is Our Responsibility
            </h1> */}
            <p className="font-normal text-xs sm:text-sm md:text-base">
              Phaneretic Services is a specialist Geotechnical/ Engineering Geological company with a team of qualified and 
              competent Engineering Geologists and Professional Civil Technician (led by an Engineering Geologists who is registered with 
              SACNASP and SAIEG), which work closely together to provide a services which far exceed the industry standards
            </p>
            <div className="flex items-center justify-center space-x-16">
                <button className="flex items-center justify-center duration-500 w-24 h-9 uppercase sm:w-40 sm:h-12 hover:scale-125 space-x-2 bg-color-h border-none outline-none">
                  <Link href="/services">  
                    <a className="text-white text-sm  duration-500 md:text-lg">Services</a>
                  </Link>
                </button>
                <button className="flex items-center justify-center w-24 h-9 uppercase sm:w-40 sm:h-12 hover:scale-125 duration-500 space-x-2 bg-white border-none outline-none">
                    <Link href="/company">
                      <a className="text-color-h text-sm md:text-lg">About Us</a>
                    </Link>
                </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero

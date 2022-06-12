import React from 'react'
import Link from 'next/link'
import Card from './SharedComponents/ServiceCard'

function HomeServices() {
  return (
    <section className="w-full h-full font-sans bg-[hsl(0,0%,97%)] p-3 md:px-7 grid items-center justify-center">
      <div className="py-16 grid justify-center gap-y-10">
        <div className="md:w-[848px] space-y-7 justify-self-center text-center">
          <h4 className="font-semibold text-xl md:text-2xl text-color-other uppercase">Our Services</h4>
          <h1 className="font-semibold text-2xl md:text-5xl text-color-h md:leading-[60px]">High Quality Geotechnical Solutions Since 2017</h1>
        </div>

        <div className="flex flex-wrap items-centern text-start gap-7 w-full">
          <Card font="bxs-home" title="Foundation Investigations" description="Investigations for the NHBRC Enrolment of a single stand or site within a development in order to assist with foundation design"/>
          <Card font="bxs-hard-hat" title="Geotechnical Investigation" description="Geo-environmental and hydrological investigations for environmentally sensitive developments such as Sludge dams, Filling Stations, Landfill Sites, Cemeteries, Effluent Dams, Golf courses, Wastewater treatment, and Wetlands." />
          <Card font="bxs-analyse" title="Reporting & Analysis" description="Detailed borrow pit exploration exercises conducted in order to located possible sources of material which are suitable for the use in construction, such as material used as bedding for p,ipelines, layer works in roads and rock and clay for the use in earth fill dam walls." />
        </div>
        <div className="justify-self-center self-center">
            <button className="btn flex items-center justify-center w-24 h-9 uppercase sm:w-40 sm:h-12 hover:scale-125 duration-500 space-x-2 bg-[#0E2B5C] border-none outline-none">
              <Link href="/services"><a className="text-white text-sm md:text-lg">Our Services</a></Link>
              <i className='bx bxs-right-arrow text-white md:text-lg'></i>
            </button>
        </div>
      </div>
    </section>
  )
}

export default HomeServices
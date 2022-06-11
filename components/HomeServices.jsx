import React from 'react'
import Link from 'next/link'
import Card from './SharedComponents/ServiceCard'

function HomeServices() {
  return (
    <section className="w-full h-full font-sans bg-[hsl(0,0%,97%)] p-3 md:px-7 grid items-center justify-center">
      <div className="py-16 grid justify-center gap-y-10">
        <div className="md:w-[848px] space-y-7 justify-self-center text-center">
          <h4 className="heading">Our Services</h4>
          <h1 className="section_title md:leading-[60px]">High Quality Geotechnical Solutions Since 2017</h1>
        </div>

        <div className="flex flex-wrap items-centern text-start gap-7 w-full">
          <Card font="bxs-home" title="Foundation Investigations" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
          <Card font="bxs-hard-hat" title="Geotechnical Investigation" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" />
          <Card font="bxs-analyse" title="Reporting & Analysis" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" />
        </div>
        <div className="justify-self-center self-center">
            <button className="btn flex items-center justify-center px-2 h-9 sm:px-4 sm:h-11 hover:animate-bounce rounded-md space-x-2 bg-[#0E2B5C] border-none outline-none">
              <Link href="/services"><a className="text-white text-sm">Our Services</a></Link>
              <i className='bx bxs-right-arrow text-white'></i>
            </button>
        </div>
      </div>
    </section>
  )
}

export default HomeServices
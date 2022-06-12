import React from 'react'
import Link from 'next/link'
// import OwlCarousel from 'react-owl-carousel';
import ProjectCard from './SharedComponents/ProjectCard'


function HomeProjects() {

  return (
    <section className="w-full p-5 py-20 bg-color-bg h-full md:px-16 lg:px-24 grid">
        <div className="space-y-7 w-full h-full grid font-sans">
            <div className="flex items-center justify-between w-full">
                <div className="space-y-5">
                    <h4 className="font-semibold text-xl md:text-2xl text-color-other uppercase">Featured Projects</h4>
					<h1 className="font-semibold text-2xl md:text-3xl xl:text-5xl xl:leading-[50px] leading-10 text-[#0E2B5C]">
						Our Recent Works
					</h1>
                </div>
            </div>
            <div className=" w-full grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

                <ProjectCard img="/images/img/img4.jpg" id="1" img_alt="DYNAMIC CONE PENETROMETER"/>
                <ProjectCard img="/images/img/img-2.jpg" id="2" img_alt="SOIL AND ROCK LOGGING"/>
                <ProjectCard img="/images/img/im.jpg" id="3" img_alt="ROAD MATERIAL INVESTIGATION"/>
                <div className="hidden xl:block">
                    <ProjectCard img="/images/img/im1.jpg" id="4" img_alt="Ablution Block Foundation Investigation"/>
                </div>
            </div>
		<div className="justify-self-center self-center">
                    <button className="btn flex items-center justify-center w-24 h-9 uppercase sm:w-40 sm:h-12 hover:scale-125 duration-500 space-x-2 bg-white border-2 border-color-h border-solid outline-none">
                        <Link href="/projects"><a className="text-color-h font-semibold text-sm md:text-lg">View More</a></Link>
                        <i className='bx bxs-right-arrow-circle text-color-h md:text-lg'></i>
                    </button>
                </div>
            
        </div>
    </section>
  )
}

export default HomeProjects

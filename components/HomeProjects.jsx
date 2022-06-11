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
                    <h4 className="heading">Featured Projects</h4>
					<h1 className="font-semibold text-2xl md:text-3xl xl:text-5xl xl:leading-[50px] leading-10 text-[#0E2B5C]">
						Our Recent Works
					</h1>
                </div>
                
                {/* <div className="space-x-4 owl-nav hidden md:flex items-center">
					<div className="owl-prev cursor-pointer text-color-h text-5xl owl-prev">
						<i className='bx bxs-left-arrow-circle'></i>	
					</div>
					<div className="owl-next cursor-pointer text-color-h text-5xl owl-next">
						<i className='bx bxs-right-arrow-circle'></i>
					</div>
				</div> */}
            </div>
            <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <ProjectCard title="Coming Soon" location="Waiting..." img="/images/img1.jpg" />
                <ProjectCard title="Coming Soon" location="Waiting..." img="/images/img6.jpg"  />
                <ProjectCard title="Coming Soon" location="Waiting..." img="/images/img4.jpg"  />
            </div>
		<div className="justify-self-center self-center">
                    <button className="btn flex items-center justify-center px-2 h-9 sm:px-4 sm:h-11 hover:animate-bounce rounded-md space-x-2 bg-white border-2 border-color-h border-solid outline-none">
                        <Link href="/projects"><a className="text-color-h font-semibold text-sm md:text-base">View More</a></Link>
                        <i className='bx bxs-right-arrow-circle text-color-h'></i>
                    </button>
                </div>
            
        </div>
    </section>
  )
}

export default HomeProjects

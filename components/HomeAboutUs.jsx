import React from 'react'
import Link from 'next/link'
/* eslint-disable @next/next/no-img-element */

function HomeAboutUs() {
  return (
    <section className="w-full p-5 font-sans py-20 md:px-16 lg:px-24 grid items-center justify-center">
        <div className="gap-10 flex items-center flex-col md:flex-row w-full justify-between">
            <div className="space-y-7 md:w-2/4">
                <div className="space-y-5">
                    <h4 className="font-semibold text-xl md:text-2xl text-color-other uppercase">Why Choose Us?</h4>
					<h1 className="font-semibold text-2xl md:text-3xl xl:text-5xl xl:leading-[50px] leading-10 text-color-h">
						We provide the ideal combination of competent technical expertise
						and professional integrity
					</h1>
                </div>
                <div className="text">
                    <p className="text-color-p">
						Our team enjoys a diversity of work, with a wide range of clients. Phanservs values include
						quality, professionalism,
						integrity, sustainability, passion and cost effectiveness. In addition, we have an obligation
						to our clients to ensure
						that our data and interpretation
						thereof is accurate and ethical.
					</p>
					<br />
					<p className="text-color-p">
						Have peace of mind in the fact that our experience ensures quality.
						We are committed to our client&apos;s best interests providing economical &
						practical solutions for building and civil construction.
					</p>
					<br />
                    <div className="grid items-center md:grid-cols-2 gap-3">
						<div className="flex items-center space-x-4">
							<i className="bx text-color-other text-lg bxs-right-arrow-circle"></i>
							<p className="text-color-p">Quality Services</p>
						</div>
						<div className="flex items-center space-x-4">
							<i className="bx text-color-other text-lg bxs-right-arrow-circle"></i>
							<p className="text-color-p">Good Customer Services</p>
						</div>
						<div className="flex items-center space-x-4">
							<i className="bx text-color-other text-lg bxs-right-arrow-circle"></i>
							<p className="text-color-p">Affordable rates</p>
						</div>
						<div className="flex items-center space-x-4">
							<i className="bx text-color-other text-lg bxs-right-arrow-circle"></i>
							<p className="text-color-p">Highly Professional Team</p>
						</div>
					</div>
                    <br />
                    <div className="">
                       <button className="btn flex items-center justify-center w-24 h-9 uppercase sm:w-40 sm:h-12 hover:scale-125 duration-500 space-x-2 bg-white border-2 border-color-h border-solid outline-none">
                        <Link href="/company"><a className="text-color-h font-semibold text-sm md:text-lg">Read More</a></Link>
                        <i className='bx bxs-right-arrow text-color-h'></i>
                        </button>
                    </div>
                </div>

            </div>
            <div className="space-y-8">
                <div className="flex w-full items-center space-x-10">
                    <div className="space-y-2">
						<h4 className="text-5xl text-color-other font-semibold">67</h4>
						<p className="text-base text-color-h font-normal">Completed Projects</p>
					</div>
					<div className="space-y-2">
						<h4 className="text-5xl text-color-other font-semibold">5</h4>
						<p className="text-base text-color-h font-normal">Qualified Employees</p>
					</div>
					<div className="space-y-2">
						<h4 className="text-5xl text-color-other font-semibold">7</h4>
						<p className="text-base text-color-h font-normal">Of Experience</p>
					</div>
                </div>
                <div className="md:w-[30.25rem] md:h-[27.75rem] relative">
					<img src="/images/img6.jpg" alt="Pavement material Investigations" className="w-full h-full" />
					<img src="/images/img3.jpg" alt="" className="absolute w-[60%] h-[60%] hidden md:block top-60 -left-28 border-t-8 border-r-8 border-white" />
				</div>
            </div>

        </div>
    </section>
  )
}

export default HomeAboutUs

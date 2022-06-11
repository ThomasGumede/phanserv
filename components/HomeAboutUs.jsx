import React from 'react'
import Link from 'next/link'
/* eslint-disable @next/next/no-img-element */

function HomeAboutUs() {
  return (
    <section className="w-full p-5 font-sans py-20 md:px-16 lg:px-24 grid items-center justify-center">
        <div className="gap-10 flex items-center flex-col md:flex-row w-full justify-between">
            <div className="space-y-7 md:w-2/4">
                <div className="space-y-5">
                    <h4 className="heading">Why Choose Us?</h4>
					<h1 className="font-semibold text-2xl md:text-3xl xl:text-5xl xl:leading-[50px] leading-10 text-[#0E2B5C]">
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
							<p className="text-color-p">Highly Professional Team</p>
						</div>
						<div className="flex items-center space-x-4">
							<i className="bx text-color-other text-lg bxs-right-arrow-circle"></i>
							<p className="text-color-p">Highly Professional Team</p>
						</div>
						<div className="flex items-center space-x-4">
							<i className="bx text-color-other text-lg bxs-right-arrow-circle"></i>
							<p className="text-color-p">Highly Professional Team</p>
						</div>
						<div className="flex items-center space-x-4">
							<i className="bx text-color-other text-lg bxs-right-arrow-circle"></i>
							<p className="text-color-p">Highly Professional Team</p>
						</div>
					</div>
                    <br />
                    <div className="">
                       <button className="btn flex items-center justify-center px-2 h-9 sm:px-4 sm:h-11 hover:animate-bounce rounded-md space-x-2 bg-white border-2 border-color-h border-solid outline-none">
                        <Link href="/company"><a className="text-color-h font-semibold text-sm md:text-base">Read More</a></Link>
                        <i className='bx bxs-right-arrow text-color-h'></i>
                        </button>
                    </div>
                </div>

            </div>
            <div className="space-y-8">
                <div className="flex w-full items-center space-x-10">
                    <div className="space-y-2">
						<h4 className="text-5xl text-color-other font-semibold">64</h4>
						<p className="text-base text-color-h font-normal">Completed Projects</p>
					</div>
					<div className="space-y-2">
						<h4 className="text-5xl text-color-other font-semibold">5</h4>
						<p className="text-base text-color-h font-normal">Qualified Employees</p>
					</div>
                </div>
                <div className="content_img_container">
					<img src="/images/img6.jpg" alt="" className="md:w-[31.25rem] md:h-[28.75rem]" />
				</div>
            </div>

        </div>
    </section>
  )
}

export default HomeAboutUs

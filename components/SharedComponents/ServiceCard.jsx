import React from 'react'
import Link from 'next/link'

function ServiceCard({ id, title, description, font}) {
  return (
    <div className="grid  bg-white p-10  transition duration-500 group hover:shadow-2xl">
		<div className="space-y-8 sm:w-[300px] h-[400px]">
			<div className="">
				{/* <i className="bx bxs-home "></i> */}
				<i className={`bx text-color-other text-6xl ${font}`}></i>
			</div>
			<div className="space-y-8">
				<h1 className="text-3xl font-semibold text-color-h">
					{title}
				</h1>
				<p className="text-color-p text-base">
					{description}
				</p>
			</div>
			<div className="space-y-5">
				<div className="bg-color-h h-1 w-full group-hover:bg-color-other duration-500">
				</div>
				<div className="flex items-center space-x-3">
					<Link href={`/services/${encodeURIComponent(id)}`}><a className="text-base font-semibold text-color-h duration-500 group-hover:text-color-other">Read more</a></Link>
					<i className='bx bxs-right-arrow-circle text-lg text-color-h duration-500 group-hover:text-color-other'></i>
				</div>	
			</div>
			
		</div>
	</div>
  )
}

export default ServiceCard
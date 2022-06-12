import React from 'react'
import Link from 'next/link'

function ServiceCard({ title, description, font}) {
  return (
    <div className="grid relative bg-white p-10  transition duration-500 group hover:shadow-2xl">
		<div className="space-y-8 z-50 sm:w-[300px] h-[400px]">
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
		</div>
	</div>
  )
}

export default ServiceCard
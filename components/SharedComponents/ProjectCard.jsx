/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

function ProjectCard({ img, id, img_alt }) {
  return (
    <div className="relative w-[330px] h-[450px] bg-color-h cursor-pointer overflow-hidden group duration-500">
      <div className="w-full h-full overflow-hidden">
        <img src={img} alt={img_alt} className="w-full h-full duration-500 group-hover:scale-110 object-cover group-hover:opacity-50" />
        <Link href={`/projects/${encodeURIComponent(id)}`}>
          <a className="absolute -bottom-full duration-700 group-hover:bottom-2/4 right-2/4 translate-x-[50%] group-hover:translate-y-[50%] text-6xl text-white"><i className='bx bx-plus'></i></a>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

function Head({link, title, title_link, img, img_title}) {
  return (
    <section className="w-full font-sans mt-16 h-[350px] text-center relative group">
        <div className="w-full h-full relative bg-black overflow-hidden">
            <img src={img} alt={img_title} className="w-full h-full block duration-1000 opacity-50 object-cover group-hover:scale-150" />
        </div>
        <div className="absolute top-2/4 left-2/4 grid items-center justify-center space-y-5 translate-x-[-50%] translate-y-[-50%]">
          <h1 className="head text-white font-bold text-2xl md:text-6xl">{title}</h1>

          <div className="flex items-center self-center justify-self-center space-x-4">
            <Link href="/">
              <a className="text-white text-lg md:text-2xl font-semibold">Home</a>
            </Link>
            <p className="text-white text-lg md:text-2xl">/</p>
            <Link href={link}>
              <a className="text-white text-lg md:text-2xl font-semibold">{title_link}</a>
            </Link>
          </div>
        </div>
    </section>
  )
}

export default Head
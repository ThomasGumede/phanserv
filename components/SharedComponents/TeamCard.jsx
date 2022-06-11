/* eslint-disable @next/next/no-img-element */
import React from 'react'

function TeamCard() {
  return (
    <div className="grid transition bg-white duration-500 group hover:shadow-2xl group rounded-2xl">
        <div className="sm:w-[350px] h-[500px]">
            <div className="w-full h-[400px] relative bg-color-h overflow-hidden rounded-2xl">
                <img src="/images/img3.jpg" alt="" className="w-full h-full block duration-1000 object-cover group-hover:opacity-30 group-hover:scale-125" />
                <div className="absolute -bottom-full duration-700 group-hover:bottom-2/4 right-2/4 translate-x-[50%] group-hover:translate-y-[50%]">
                    <div className="flex items-center space-x-4">
                        <div className="text-6xl duration-500 delay-200 opacity-0 group-hover:opacity-100 text-white">
                            <i className='bx bxs-envelope'></i>
                        </div>
                        <div className="text-6xl duration-500 delay-500 opacity-0 group-hover:opacity-100 text-white">
                            <i className='bx bxl-facebook-circle' ></i>
                        </div>
                        <div className="text-6xl duration-500 delay-1000 opacity-0 group-hover:opacity-100 text-white">
                            <i className='bx bxl-whatsapp-square' ></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-2 p-7 text-center w-full">
                <div className="text-2xl text-color-h font-sans font-bold">
                    <h4>Full Name</h4>
                </div>
                <div className="text-lg text-color-p font-semibold font-sans">
                    <p>Hey Me</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamCard
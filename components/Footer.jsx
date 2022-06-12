/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full bg-color-h font-sans  grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 p-5 py-20 md:px-16 lg:px-24 gap-6 md:grid-cols-4">
            <div className="space-y-6">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:h-14 sm:w-14">
                        <img src="/images/logo.png" alt="phanserv logo" className="w-full h-full" />
                    </div>
                    <div className="block">
                        <h5 className="text-white font-bold text-lg">Phaneretic Services</h5>
                    </div>
                </div>
                <div className="text-sm text-white">
                    <p>
                        A specialist Geotechnical services company with a team of qualified and 
                        competent Engineering Geologists and Professional Civil Technician, 
                        which work closely together to provide a services which far exceed the industry standards.
                    </p>
                </div>
                <div className="font-sans w-36 h-36 overflow-hidden">
                    <Link href="/projects">
                       <a className="text-sm text-white block p-2">
                            <img src="/images/img6.jpg" alt="" className="w-full h-full object-cover" />
                        </a>  
                    </Link>
                </div>
            </div>
            <div className="space-y-4 font-sans">
                <h4
                    className="font-semibold text-white p-2 text-lg"
                >
                    Services
                </h4>
                <div className="space-y-2">
                    <Link href="/services">
                      <a className="text-sm text-white block p-2">
                        Foundation investigation
                    </a>  
                    </Link>
                    <Link href="/services">
                       <a className="text-sm text-white block p-2">
                            Centerline Geotechnical Investigation
                        </a>  
                    </Link>
                    <Link href="/services">
                        <a href="" className="text-sm text-white block p-2">
                            Reporting & Analysis
                        </a>  
                    </Link>
                    <Link href="/services">
                        <a href="" className="text-sm text-white block p-2">
                            Rural , Township & Urban Development
                        </a>
                    </Link>
                    <Link href="/services">
                       <a href="" className="text-sm text-white block p-2">
                            Percolation Tests
                        </a> 
                    </Link>   
                </div>
            </div>
            <div className="space-y-4 font-sans">
                <h4
                    className="font-semibold text-white p-2 text-lg"
                >
                    Quick Links
                </h4>
                <div className="space-y-2">
                    <Link href="/">
                       <a className="text-sm text-white block p-2">
                            Home
                        </a> 
                    </Link>
                    <Link href="/services">
                       <a className="text-sm text-white block p-2">
                            Services
                        </a> 
                    </Link>
                    <Link href="/projects">
                       <a className="text-sm text-white block p-2">
                            Projects
                        </a> 
                    </Link>
                    <Link href="/company">
                        <a className="text-sm text-white block p-2">
                            About Us
                        </a>
                    </Link>
                    <Link href="/contacts">
                        <a className="text-sm text-white block p-2">
                            Contact Us
                        </a>
                    </Link>
                    
                    
                </div>
            </div>
            <div className="space-y-4 font-sans">
                <h4
                    className="font-semibold text-white p-2 text-lg"
                >
                    Projects
                </h4>
                <div className="space-y-2">
                    <Link href='/projects'>
                      <a className="text-sm text-white block p-2">
                        Mbatha Rural Housing Development Phase 1
                    </a>  
                    </Link>
                    <Link href="/projects">
                       <a className="text-sm text-white block p-2">
                            Nkonjeni Hospital Student and Staff Residence
                        </a>  
                    </Link>
                    <Link href="/projects">
                        <a href="" className="text-sm text-white block p-2">
                            DBSA Schools ,Water and Sanitation
                        </a>  
                    </Link>
                    <Link href="/projects">
                        <a href="" className="text-sm text-white block p-2">
                            Mvuzane Access Road and Culvert
                        </a>
                    </Link>
                    <Link href="/projects">
                       <a href="" className="text-sm text-white block p-2">
                            Ntonjambini Pipeline Project
                        </a> 
                    </Link>   
                </div>
            </div>
        </div>
        <div className="bg-white w-full p-5 py-10 md:px-16 lg:px-24 gap-10 md:gap-0 flex flex-col md:flex-row justify-between md:items-center">
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:items-center md:space-x-6">
                <div className="w-10 h-10 sm:h-14 sm:w-14">
                    <img src="/images/logo.png" alt="phanserv logo" className="w-full h-full" />
                </div>
                <div className="space-y-2">
                    <div className="flex md:items-center space-x-10">
                        <Link href='/privacy/conditions'>
                        <a className="text-lg md:text-xl font-semibold text-color-h block p-2">
                            Terms & Conditions
                        </a>
                        </Link>
                        <Link href="/privacy/policy">
                        <a className="text-lg md:text-xl font-semibold text-color-h block p-2">
                            Private Policy
                        </a>
                        </Link>
                    </div>
                    <div className="md:text-lg text-color-p">
                        <p>Copyright © 2022 Phaneretic Services | All Rights Reserved</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-7">
                <div className="duration-500 hover:animate-bounce">
                    <a href="https://web.facebook.com/Phanserv/?_rdc=1&_rdr" target="_blank" className=" text-color-h" rel="noopener noreferrer"><i className='bx text-5xl bxl-facebook-circle'></i></a>
                </div>
                <div className="duration-500 hover:animate-bounce">
                    <a href="mailto:info@phanserve.co.za" target="_blank" className="text-color-h" rel="noopener noreferrer"><i className='bx text-5xl bxs-envelope' ></i></a>
                </div>
                <div className="duration-500 hover:animate-bounce">
                    <a href="http://" target="_blank" className="text-color-h" rel="noopener noreferrer"><i className='bx text-5xl bxl-whatsapp'></i></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer

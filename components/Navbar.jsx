/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItem from "./SharedComponents/NavItem";



function Navbar() {

    const [show, setShow] = useState(false)

    const onclick = () => {
        show === false ? setShow(true) : setShow(false)
    }
    if (typeof window === 'undefined'){

    }else {
        window.onscroll = () => {
            setShow(false)
        } 
    }

    
  return (
    <header className="w-full top-0 left-0 bg-[#F9F9F9] grid  font-sans">
        <div className="hidden sm:flex items-center self-center justify-self-center space-x-10 py-2">
            <div className="flex items-center space-x-3 text-sm font-normal">
                <i className='bx bxs-phone text-lg text-color-other'></i>
                <p className="text-color-h">Phone: +27835132008 / +27762802591</p>
            </div>
            <div className="flex items-center space-x-3 text-sm font-normal">
                <i className='bx bxs-envelope text-lg text-color-other'></i>
                <p className="text-color-h">Email: phanereticservices@gmail.com</p>
            </div>
        </div>
        <nav className="w-full bg-white flex items-center justify-between p-3 sm:px-14 ">
            <div className="logo_container">
                <div className="flex items-center space-x-1">
                    <div className="w-10 h-10 sm:h-14 sm:w-14">
                        <img src="/images/logo.png" alt="phanserv logo" className="w-full h-full" />
                    </div>
                    <div className="hidden md:block">
                        <h5 className="text-color-other font-bold text-lg">PHANSERV</h5>
                        <p className="text-color-h text-[8px] font-normal">Your Safety Is Our Responsibility</p>
                    </div>
                </div>
            </div>
            <ul className={`z-50 md:tablet flex phone ${show === true ? 'left-0': '-left-full'}`}>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/company">Company</NavItem>
                <NavItem href="/services">Services</NavItem>
                <NavItem href="/projects">Projects</NavItem>
                <li className='mx-5 my-6 md:my-0 sm:hidden'>
                    <Link href='/contacts'>
                        <a className='relative text-xl text-white md:text-lg md:py-2 before:hov hover:before:hov2'>
                            Contacts
                        </a>
                    </Link>
                </li>
                <li onClick={onclick} className='absolute top-5 right-8 md:hidden'>
                    <div className="block w-8 h-8 sm:w-14 sm:h-14">
                        <i className='bx bx-menu-alt-left text-4xl text-white sm:text-5xl md:text-color-h'></i>
                    </div>
                </li>
            </ul>

            <div className='hidden md:block'>
                <button className="btn flex items-center justify-center px-4 h-11 hover:animate-bounce rounded-md space-x-2 bg-[#0E2B5C] border-none outline-none">
                    <i className='bx bxs-right-arrow text-white'></i>
                    <Link href="/contacts">
                        <a className="text-white">Contact Us</a>
                    </Link>
                </button>
            </div>

            <div onClick={onclick} className="navbar_toggler block md:hidden">
                <div className="block w-8 h-8 sm:w-14 sm:h-14">
                    <i className='bx bx-menu-alt-right text-4xl sm:text-5xl text-color-h'></i>
                </div>
            </div>

        </nav>

    </header>
  )
}

export default Navbar
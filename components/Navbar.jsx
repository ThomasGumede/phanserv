/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItem from "./SharedComponents/NavItem";



function Navbar() {

    const [show, setShow] = useState(false)
    const [shadow, setShadow] = useState("")
    const [hideNav1, setHideNav1] = useState("flex")

    const onclick = () => {
        show === false ? setShow(true) : setShow(false)
    }
    if (typeof window === 'undefined'){

    }else {
        window.onscroll = () => {
            setShow(false)
            if (window.scrollY >= 200){
                setShadow("shadow-xl")
                setHideNav1("hidden")
            }else {
                setShadow("")
                setHideNav1("flex")
            }
        }
         
    }

    
  return (
    <header className="w-full fixed z-[1000] top-0 left-0  font-sans">
        <div className={`hidden bg-color-bg min-w-full sm:${hideNav1} items-center justify-between space-x-10 py-3 px-4`}>
            <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center space-x-3 text-sm font-normal">
                    <i className='bx bxs-phone text-lg text-color-other'></i>
                    <p className="text-color-h">+27835132008 / +27762802591</p>
                </div>
                <div className="w-[1px] h-6 bg-color-h"></div>
                <div className="flex items-center justify-center space-x-3 text-sm font-normal">
                    <i className='bx bxs-envelope text-lg text-color-other'></i>
                    <p className="text-color-h">phanereticservices@gmail.com</p>
                </div>
                <div className="w-[1px] h-6 bg-color-h"></div>
                <div className="flex items-center justify-center space-x-3 text-sm font-normal">
                    <i className='bx bx-current-location text-lg text-color-other'></i>
                    <p className="text-color-h">22 Gerald Spilkin Street, Ikhwezi Township, Umtata, 5099</p>
                </div>
            </div>
            <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-3 text-sm font-normal">
                    <i className='bx bxs-time text-lg text-color-other'></i>
                    <p className="text-color-h uppercase">mon-friday, 08h00 - 17h00</p>
                </div>
                <div className="w-[1px] h-6 bg-color-h"></div>
                <div className="">
                    <a href="https://web.facebook.com/Phanserv/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"><i className='bx text-lg text-color-other bxl-facebook-circle'></i></a>
                </div>
                <div className="w-[1px] h-6 bg-color-h"></div>
                <div className="text-sm font-normal">
                    <a href="mailto:info@phanserve.co.za" target="_blank" rel="noopener noreferrer"><i className='bx text-lg text-color-other bxs-envelope' ></i></a>
                </div>
                <div className="w-[1px] h-6 bg-color-h"></div>
                <div className="text-sm font-normal">
                    <a href="mailto:info@phanserve.co.za" target="_blank" rel="noopener noreferrer"><i className='bx text-lg text-color-other bxl-whatsapp' ></i></a>
                </div>
            </div>
            
        </div>
        <nav className={`w-full bg-white flex items-center justify-between p-3 sm:px-14 ${shadow}`}>
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
            <ul className={`z-50 md:tablet flex phone uppercase ${show === true ? 'left-0': '-left-full'}`}>
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
                <button className="btn flex items-center justify-center duration-500 w-24 h-9 sm:w-40 sm:h-12 hover:scale-125 space-x-4 bg-[#0E2B5C] border-none outline-none">
                    <i className='bx bxs-phone text-white text-lg'></i>
                    <Link href="/contacts">
                        <a className="text-white text-lg uppercase">Contact Us</a>
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
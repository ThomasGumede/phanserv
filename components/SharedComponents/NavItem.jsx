import React from 'react'
import Link from 'next/link'


function NavItem({href, children}) {
  return (
    <li className='mx-5 my-6 md:my-0'>
        <Link href={href}>
          <a className='relative text-xl text-white md:text-[#0E2B5C] md:text-lg md:py-2 before:hov hover:before:hov2'>{children}</a>
        </Link>
    </li>
  )
}

export default NavItem
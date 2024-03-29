import React from 'react'
import Link from 'next/link'

const NavLink = ({href,title,active}) => {
  return (
    <Link
        href={href}
        className={`${active===title ? "text-white" : "text-[#ADB7BE]"} block py-2 pl-3 pr-4  sm:text-xl rounded md:p-0 hover:text-white`}
    >
        {title}
    
    </Link>
  )
}

export default NavLink
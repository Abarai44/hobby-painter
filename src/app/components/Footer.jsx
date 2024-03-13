import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer  w-full border border-top-[#33353F] border-l-transparent border-r-transparent mx-auto '>
        <div className='p-4 flex justify-between items-center'>
        <Link href={"/"} >
                <Image
                src="/images/abarai-logo2.png"
                alt="logo site"
                height={30}
                width={50}/>
                </Link>
            <p className=' text-slate-600  '>All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
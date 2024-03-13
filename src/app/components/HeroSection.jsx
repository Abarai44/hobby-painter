'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'


    
 
const HeroSection = () => {
  return (
    <section className='lg:py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} 
                className='col-span-8 place-self-center text-center lg:text-left lg:justify-self-start'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl  lg:leading-normal  font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-800'>Bienvenue,{""}</span>
                    <br />
                    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' chez Painter Studio.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Peintre',
        1000,
        'et Wargamer.',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    /></h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 w-auto'>
                    Bienvenue chez Painter Studio, service de peinture sur figurines! </p>
                <div>
                    <Link href='#contact' className='px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4  bg-gradient-to-br hover:bg-slate-400br from-primary-600 to-secondary-800 text-white'>Demander un devis</Link>
                    <Link href='#galerie' className='px-1 inline-block py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br from-primary-600 to-secondary-800 text-white  mt-3  '>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Galerie</span>
                    </Link>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='col-span-4 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[300px] lg:h[300px] relative'>
                    <Image
                        src="/images/abarai-logo2.png"
                        alt="logo image"
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  '
                        width={200}
                        height={200}
                    />
                </div>
            </motion.div>
        </div> 
    </section>
  )
}

export default HeroSection
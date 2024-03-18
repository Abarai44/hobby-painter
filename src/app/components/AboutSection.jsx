'use client'
import React from 'react'
import Image from 'next/image'



const AboutSection = () => {

  return (
    <section className='text-white' id='about'>
        <div className='flex flex-col-reverse md:grid md:grid-cols-2  items-center py-8 px-4 xl:gap-16 sm:py-4 xl:px16'>
            <Image
                src="/images/land-raider.png"
                alt="dread comp de la mort"
                width={500}
                height={500}
                className='w-auto h-auto '
            />
            <div>
                <h2 className='pt-28  text-4xl font-bold text-white mb-4'>Le studio</h2>
                <p className='text-base lg:text-xl'>
                    Laissez-moi vous montrer une part de ma passion : la peinture sur figurine. Painter Studio est le pseudo sous lequel j&apos;ai décidé de devenir peintre sur figurines. Une occupation qui est rapidement devenue, avec une maîtrise acquise au fur et à mesure, un véritable métier. C&apos;est ainsi, qu&apos;aujourd&apos;hui, je vous propose mes services et mes conseils en peinture sur figurine.
                </p>
                
            </div>
        </div>
    </section>
  )
}

export default AboutSection
"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import { achivements } from '../constants';

const AnimatedNumbers = dynamic(()=>{return import("react-animated-numbers")},{ssr:false});



const AchievementsSection = () => {
  return (
    
        <div className='py-4 px-4 xl:gap-16 md:py-12 xl:px-12'>
            <div className='sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col md:flex-row items-center justify-between'>
            {achivements.map((achievement,index)=>(
                <div key={index} className=' flex flex-col items-center justify-center mx-4 my-4 md:my-0 '>
                    <h2 className='text-white text-4xl  font-bold '>
                        <AnimatedNumbers
                            includeComma
                            animateToNumber={parseInt(achievement.value)}
                            locale='en-US'
                            className='text-white text-4xl font-bold'
                            configs={(_,index)=>{
                                return{
                                    mass:1,
                                    friction: 100,
                                    tensions: 140*(index+1)
                                }
                            }}
                        />
                    </h2>
                    <p className='text-[#ADB7BE] text-base text-center  '>{achievement.metrics}</p>
                </div>

            ))}
            </div>
        </div>
    
  )
}

export default AchievementsSection
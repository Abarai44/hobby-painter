'use client'
import React,{useState,useTransition} from 'react'
import TabButton from './TabButton'
import {TAB_DATA} from '../constants'
import { etapes } from '../constants'
import Image from 'next/image'

const ServicePeinture = () => {

    const [tab,setTab]= useState("bronze");
    const [isPending,startTransition]= useTransition();

    const handleTabChange=(id)=> {
        startTransition(()=>{
            setTab(id);
        })
    }
  return (
    <>
       
    <section id='service' className='pt-28  text-white'>
        <h2 className='text-4xl font-bold  mb-4 text-center'>Mes services</h2>
        <div className='flex flex-row m-8 justify-center text-xl '>
            <TabButton selectTab={()=>handleTabChange("bronze")} active={tab==="bronze"}>
                {""}
                Bronze {""}
            </TabButton>
            <TabButton selectTab={()=>handleTabChange("silver")} active={tab==="silver"}>
                Silver
            </TabButton>
            <TabButton selectTab={()=>handleTabChange("gold")} active={tab==="gold"}>
                Gold 
            </TabButton> 
        </div>
        <div className='flex flex-col md:flex-row w-full m-auto'>
            <div className='md:w-2/4 content-center m-auto'>
                <p className='text-justify md:text-xl'>{TAB_DATA.find((t)=>t.id===tab).texte}</p>
            </div>
            <div className='md:w-2/4'>
                <Image
                    src={TAB_DATA.find((t)=>t.id===tab).img}
                    alt="image miniature"
                    width={400}
                    height={400}
                    className='justify-items-center m-auto w-80 '
                />
            </div>
        </div>
 </section>
 <section className='text-white text-center mt-24'>
        <h2 className='text-4xl font-bold text-white mb-4 text-center'>Les étapes de la peinture sur figurines</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 h-auto '>
            {etapes.map((etape)=>(
                <div key={etape.id} className='mt-4 justify-items-center'>
                    <div className='inline-block rounded-full px-2 py-2 w-24 h-24 lg:w-36 lg:h-36 justify-items-center m-auto  bg-gradient-to-br from-primary-600 to-secondary-800'>
                    <p className='block bg-[#121212] text-5xl lg:text-8xl justify-center m-auto rounded-full px-4 py-4  '>{etape.id}</p>
                    </div>
                    <div>
                    <h3 className='text-2xl mt-6'>{etape.title} </h3> 
                    <p className='text-justify p-4'>{etape.texte} </p>   
                    </div>
                </div>
            ))}

        </div>
    </section>
 </>
  )
}

export default ServicePeinture
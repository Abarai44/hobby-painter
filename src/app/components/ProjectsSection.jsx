"use client"
import React, {useState,useRef} from 'react'
import ProjectCard from './ProjectCard'
import {projectsData} from '../constants'
import ProjectTag from './ProjectTag'
import {motion,useInView} from 'framer-motion'


const ProjectsSection = ({showModal,setShowModal,setValue}) => {
    const[tag,setTag] = useState("all");
    const ref= useRef(null);
    const isInView = useInView(ref,{once:true});

    const handleTabChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProject = projectsData.filter((project)=>
        project.tag.includes(tag)
    )

    const cardVariants = {
        initial:{y:50, opacity:0},
        animate:{y:0, opacity:1}
    }
  return (
    
    /*{showModal && <ModalContents onClose={()=> setShowModal(false)}/>}*/
    <section ref={ref} id='galerie' className='pt-28'>
        <h2 className='text-center text-4xl font-bold text-white mt-4'>Mes projets</h2> 
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag onClick={handleTabChange} name="all" isSelected={tag==="all"}/>
            <ProjectTag onClick={handleTabChange} name="perso" isSelected={tag==="perso"}/>
            <ProjectTag onClick={handleTabChange} name="commande" isSelected={tag==="commande"}/>
        </div>
        <ul className='mt-3 grid md:grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4 md:gap-12'>
            {filteredProject.map((project,index)=>(
                <motion.li 
                    variants={cardVariants} 
                    initial="initial" 
                    animate= {isInView ? 'animate':'initial'} 
                    key={project.id}
                    transition={{duration: 0.3, delay:index*0.3}} >
                < ProjectCard 
                    title={project.title} 
                    description={project.level} 
                    imgUrl={project.image} 
                    showModal={showModal}
                    setShowModal={setShowModal}
                    setValue={setValue}
                />
                </motion.li>))}
        
        </ul>
    </section>
  )
}

export default ProjectsSection
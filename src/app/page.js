
'use client'
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from './components/AboutSection'
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ServicePeinture from "./components/ServicePeinture";
import ModalContents from "./components/ModalContents";
import StarsCanvas from "./components/canvas/Stars";
import { useState } from "react";


export default function Home() {
  const[showModal,setShowModal]= useState(false);
  const[value,setValue]= useState("");
  return (
    <main className="flex min-h-screen flex-col bg-neutral-800">
      {showModal &&
        <ModalContents onClose={()=> setShowModal(false)} value={value}/>}
      <Navbar/>
      <div className="container mx-auto px-12 py-4 mt-24">
        <HeroSection/>
        <AchievementsSection/>
        <AboutSection/>
        <ServicePeinture/>
        <ProjectsSection showModal={showModal} setShowModal={setShowModal} setValue={setValue}/>
        </div>
        <div className="relative z-0">
        
        <Contact/>
        </div>
      
      <Footer/>
    </main>
  );
}

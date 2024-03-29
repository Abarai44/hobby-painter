import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected
    ? "text- border-white bg-gradient-to-br from-primary-600 to-secondary-800"
    : "text-[#ADB7BE] border-slate-600 hover:border-white"

  return (
    <button 
        className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer `}
        onClick={()=>onClick(name)}
    >
        {name}
    </button>
  )
}

export default ProjectTag
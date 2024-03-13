import React from 'react'
import { CodeBracketIcon,EyeIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'




const ProjectCard = ({imgUrl,title, description,setShowModal,setValue}) => {

    function doubleClick(){
        setShowModal(true);
        setValue(imgUrl)
    }

  return (
    <div>
         
        <div className='h-80 w-80 md:w-auto rounded-t-xl relative group bg-[#181818] justify-center m-auto'>
            <Image
            src={imgUrl}
            alt={title}
            width={500}
            height={500}
            className='absolute bg-cover h-80 w-96 rounded-t-xl'
            />
            <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-allduration-500'>
                <Link href="/" className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                    <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white '/>
                </Link>
                <button onClick={()=>doubleClick()}  className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                    <EyeIcon className='h-10 w-10 text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white '/>
                </button> 
                    
            </div>

        </div>
        <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4 w-80 md:w-auto justify-items-center m-auto'>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>
    
    </div>
  )
}

export default ProjectCard
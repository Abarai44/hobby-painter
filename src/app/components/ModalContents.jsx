import React from 'react'
import Image from 'next/image'
import { XCircleIcon } from '@heroicons/react/24/outline'

const ModalContents = ({onClose,value}) => {
  return (
    
    <div onClick={onClose} className='fixed flex w-full h-full bg-slate-500/75 z-10'>  
      <div className='relative  m-auto lg:mt-24 xl:mt-30'>
        <Image
          src={value}
          alt='image'
          width={400}
          height={400}
          className='lg:w-[650px] lg:h-[800px]'
          

        />
        <div className='absolute top-0 mt-2 right-2 justify-end m-auto'>
        <button onClick={onClose} ><XCircleIcon className=' w-12 bg-gradient-to-br from-primary-600 to-secondary-800 rounded-full hover:text-white hover:shadow-md hover:shadow-black '/></button> 
        </div>
       </div> 
    </div>

  )
}

export default ModalContents
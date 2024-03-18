
'use client'
require('dotenv').config()
import React, {useState,useRef} from 'react';
import emailjs from'@emailjs/browser';
import SlullCanvas from './canvas/skull';
import {motion} from 'framer-motion'




const Contact = () => {
    const formRef=useRef();

    const[form,setForm]= useState({
        name:'',
        email:'',
        message:'',

    });

const[loading, setLoading] = useState(false);

const handleChange=(e) =>{
    const{target}= e;
    const{name,value}= target;

    setForm({...form, [name]:value,})
};

const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);

    emailjs.send(
       process.env.MY_APP_SERVICE,
       process.env.MY_APP_TEMPLATE,
        {
            from_name:form.name,
            to_name:'Abarai Studio',
            from_email: form.email,
            to_email:'abaraistudio@outlook.fr',
            message: form.message
        },
        process.env.MY_APP_KEY
        )
        .then(()=> {
            setLoading(false);
            alert('Merci pour votre message, je reviens vers vous le plus rapidement possible.');

            setForm({
                name:'',
                email:'',
                message:'',
            })
            },
            (error)=>{
                setLoading(false)
                console.log(error);
                alert('Something went wrong.')
            });

}

  return (
    <div className="pt-32 bg-[url('/images/wall-sista.jpg')] bg-cover" id='contact' >
    <div className='lg:flex lg:gap-10 justify-center' >
        <motion.div 
            initial={{ opacity: 0, x:-100 }}
            animate={{ opacity: 1, x:0 }}
            transition={{ duration: 0.4}}
            className='lg:w-1/3 bg-neutral-900/50 rounded-md my-4 '
        >
         <h2 className='text-4xl text-white font-bold m-8 '>Contact</h2>
    <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='m-8 flex flex-col gap-8'
    >
        <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre Pseudo</span>
            <input 
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Quel est votre pseudo?"
                className='py-4 px-6  rounded-lg outline-none border-none font-medium'
            />
        </label>
        <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>E-mail</span>
            <input 
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Quel est votre mail?"
                className='py-4 px-6  rounded-lg outline-none border-none font-medium'
            />
        </label>
        <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Description de votre projet</span>
            <textarea 
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Quel est votre projet?"
                className='py-4 px-6  rounded-lg outline-none border-none font-medium resize-none'
                
            />
        </label>
        <button
            type='submit'
            className=' text-white py-3 px-8 m-4 outline-none shadow-md shadow-black rounded-xl bg-gradient-to-r from-primary-600 to-secondary-800  '
        >
            {loading ? 'Sending...' : 'Send'}
        </button>
    </form>
    </motion.div>
    <motion.div 
            initial={{ opacity: 0, x:100 }}
            animate={{ opacity: 1, x:0 }}
            transition={{ duration: 0.4}}
            className='lg:w-2/4 '
        >
        <SlullCanvas/>
    </motion.div>

    </div>
    </div>
  )
}

export default Contact

